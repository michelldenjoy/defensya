"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface LogoParticles3DProps {
  imageSrc?: string;
  onFormed?: () => void;
}

const BRAND_HEX = 0x3f409b;

let hasFormedThisPageLoad = false;

function hasAlreadyFormed(): boolean {
  return hasFormedThisPageLoad;
}

function markAsFormed(): void {
  hasFormedThisPageLoad = true;
}

function createDotTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.9)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

export default function LogoPlate3D({
  imageSrc = "/logodefensyanew.png",
  onFormed,
}: LogoParticles3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = mount.clientWidth < 640;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Si ya se formó una vez en esta sesión, tratamos el caso igual
    // que "reduced motion": se muestra directamente el resultado final,
    // sin repetir la animación de dispersión.
    const skipAnimation = prefersReducedMotion || hasAlreadyFormed();

    let cleanupFns: Array<() => void> = [];
    let raf: number | null = null;
    let disposed = false;

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      if (disposed) return;

      // ── 1. Samplear el PNG en un canvas offscreen ──
      // Resolución de muestreo mucho más alta (escalada por DPR) para que
      // los trazos finos del logo no se pierdan y no aparezcan "rayas"
      // o líneas discontinuas al formarse la nube de puntos.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const baseW = isMobile ? 480 : 800;
      const canvasW = Math.round(baseW * dpr);
      const canvasH = Math.round(
        canvasW * (img.naturalHeight / img.naturalWidth),
      );

      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = canvasW;
      sampleCanvas.height = canvasH;
      const ctx = sampleCanvas.getContext("2d")!;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, canvasW, canvasH);
      const imageData = ctx.getImageData(0, 0, canvasW, canvasH).data;

      const planeW = 6;
      const planeH = planeW * (canvasH / canvasW);

      // Espaciado real entre partículas en unidades de mundo: sirve para
      // calcular el tamaño de punto necesario para que se solapen sin huecos,
      // sea cual sea la resolución de muestreo elegida arriba.
      const spacingX = planeW / canvasW;
      const spacingY = planeH / canvasH;
      const spacing = (spacingX + spacingY) / 2;

      const targets: number[] = [];
      const colors: number[] = [];

      for (let y = 0; y < canvasH; y++) {
        for (let x = 0; x < canvasW; x++) {
          const idx = (y * canvasW + x) * 4;
          const a = imageData[idx + 3];
          if (a < 20) continue; // píxel transparente, se descarta

          // Jitter sub-píxel sutil: evita que la rejilla de muestreo quede
          // perfectamente alineada, lo que bajo perspectiva/cámara puede
          // generar un patrón de moiré ("rayas") en zonas de trazo fino.
          const jitterX = (Math.random() - 0.5) * spacingX * 0.5;
          const jitterY = (Math.random() - 0.5) * spacingY * 0.5;

          const wx = (x / canvasW - 0.5) * planeW + jitterX;
          const wy = -(y / canvasH - 0.5) * planeH + jitterY;
          targets.push(wx, wy, 0);

          colors.push(
            imageData[idx] / 255,
            imageData[idx + 1] / 255,
            imageData[idx + 2] / 255,
          );
        }
      }

      const count = targets.length / 3;

      // ── 2. Posiciones de partida: dispersas alrededor ──
      const starts = new Float32Array(count * 3);
      const delays = new Float32Array(count);
      const durations = new Float32Array(count);

      // Factor de ralentización global de la animación.
      // >1 = más lento. Ajusta este único número si quieres afinar el ritmo.
      const SPEED_FACTOR = 2.2;

      for (let i = 0; i < count; i++) {
        const tx = targets[i * 3];
        const ty = targets[i * 3 + 1];

        const angle = Math.random() * Math.PI * 2;
        const dist = 3.5 + Math.random() * 6;
        starts[i * 3] = tx + Math.cos(angle) * dist;
        starts[i * 3 + 1] = ty + Math.sin(angle) * dist * 0.6;
        starts[i * 3 + 2] = (Math.random() - 0.5) * 6;

        // Barrido izquierda→derecha + ruido individual (más lento)
        const normX = tx / planeW + 0.5;
        delays[i] = (normX * 1.1 + Math.random() * 0.5) * SPEED_FACTOR;
        durations[i] = (0.9 + Math.random() * 0.5) * SPEED_FACTOR;
      }

      // ── 3. Escena Three.js ──
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        40,
        mount.clientWidth / mount.clientHeight,
        0.1,
        100,
      );

      // ── Distancia de cámara responsive ──
      // En pantallas anchas (desktop) el frustum horizontal a z = 7 es
      // generoso y el plano de 6 unidades cabe sin problema — comportamiento
      // original, sin cambios. En dispositivos medianos/pequeños el aspect
      // ratio se vuelve más estrecho (más alto que ancho), lo que reduce el
      // ancho visible del frustum a esa misma distancia y provoca que las
      // letras del logo se salgan de los bordes del hero.
      //
      // Para evitarlo, calculamos la distancia mínima necesaria para que el
      // plano completo (con un margen de aire) quepa dentro del frustum,
      // tanto en ancho como en alto, y solo alejamos la cámara si esa
      // distancia es mayor que la distancia base. Nunca la acercamos más de
      // lo original, así en desktop el resultado visual es idéntico al actual.
      const BASE_CAMERA_Z = 7;
      const FIT_MARGIN = 1.15; // aire extra para que no quede pegado a los bordes

      const getFitCameraZ = (aspect: number): number => {
        const vFovRad = THREE.MathUtils.degToRad(camera.fov);
        const halfVFovTan = Math.tan(vFovRad / 2);
        const distForHeight = (planeH * FIT_MARGIN) / (2 * halfVFovTan);
        const distForWidth =
          (planeW * FIT_MARGIN) / (2 * halfVFovTan * aspect);
        return Math.max(BASE_CAMERA_Z, distForHeight, distForWidth);
      };

      camera.position.z = getFitCameraZ(mount.clientWidth / mount.clientHeight);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);

      const geometry = new THREE.BufferGeometry();
      const positionAttr = new THREE.BufferAttribute(
        skipAnimation ? new Float32Array(targets) : starts.slice(),
        3,
      );
      positionAttr.setUsage(THREE.DynamicDrawUsage);
      geometry.setAttribute("position", positionAttr);
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3),
      );

      const dotTexture = createDotTexture();
      // Tamaño de punto calculado a partir del espaciado real de la rejilla
      // de muestreo, con un factor de solape (~1.6x) que garantiza que no
      // queden huecos visibles entre partículas contiguas, sin pasarse de
      // tamaño y perder nitidez.
      const pointSize = spacing * 1.6;
      const material = new THREE.PointsMaterial({
        size: pointSize,
        map: dotTexture,
        vertexColors: true,
        transparent: true,
        alphaTest: 0.05,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // ── 4. Animación ──
      const clock = new THREE.Clock();
      let formedFired = false;
      const maxFinish = skipAnimation
        ? 0
        : Math.max(...Array.from(delays)) + 1.4 * SPEED_FACTOR;

      let targetTiltX = 0,
        targetTiltY = 0;
      const handlePointerMove = (e: PointerEvent) => {
        const rect = mount.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        targetTiltY = nx * 0.12;
        targetTiltX = -ny * 0.08;
      };
      mount.addEventListener("pointermove", handlePointerMove);
      cleanupFns.push(() =>
        mount.removeEventListener("pointermove", handlePointerMove),
      );

      const posArray = positionAttr.array as Float32Array;

      const animate = () => {
        raf = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        if (!skipAnimation) {
          for (let i = 0; i < count; i++) {
            const t = Math.min(
              Math.max((elapsed - delays[i]) / durations[i], 0),
              1,
            );
            const eased = 1 - Math.pow(1 - t, 3); 

            const idx = i * 3;
            posArray[idx] = starts[idx] + (targets[idx] - starts[idx]) * eased;
            posArray[idx + 1] =
              starts[idx + 1] + (targets[idx + 1] - starts[idx + 1]) * eased;
            posArray[idx + 2] =
              starts[idx + 2] + (targets[idx + 2] - starts[idx + 2]) * eased;

            if (t >= 1) {
              
              const phase = i * 0.618;
              posArray[idx + 2] = Math.sin(elapsed * 0.6 + phase) * 0.015;
            }
          }
          positionAttr.needsUpdate = true;

          if (!formedFired && elapsed > maxFinish) {
            formedFired = true;
            markAsFormed();
            onFormed?.();
          }
        } else if (!formedFired) {
          formedFired = true;
          markAsFormed();
          onFormed?.();
        }

        points.rotation.x += (targetTiltX - points.rotation.x) * 0.05;
        points.rotation.y += (targetTiltY - points.rotation.y) * 0.05;

        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!mount) return;
        const aspect = mount.clientWidth / mount.clientHeight;
        camera.aspect = aspect;
        camera.position.z = getFitCameraZ(aspect);
        camera.updateProjectionMatrix();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
      };
      window.addEventListener("resize", handleResize);
      cleanupFns.push(() => window.removeEventListener("resize", handleResize));

      cleanupFns.push(() => {
        if (raf) cancelAnimationFrame(raf);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        dotTexture.dispose();
        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      });
    };

    return () => {
      disposed = true;
      cleanupFns.forEach((fn) => fn());
    };
  }, [imageSrc, onFormed]);

  return <div ref={mountRef} className="w-full h-full" />;
}