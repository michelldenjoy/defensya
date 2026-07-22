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
      const canvasW = isMobile ? 380 : 640;
      const canvasH = Math.round(
        canvasW * (img.naturalHeight / img.naturalWidth),
      );

      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = canvasW;
      sampleCanvas.height = canvasH;
      const ctx = sampleCanvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvasW, canvasH);
      const imageData = ctx.getImageData(0, 0, canvasW, canvasH).data;

      const planeW = 6;
      const planeH = planeW * (canvasH / canvasW);

      const targets: number[] = [];
      const colors: number[] = [];

      for (let y = 0; y < canvasH; y++) {
        for (let x = 0; x < canvasW; x++) {
          const idx = (y * canvasW + x) * 4;
          const a = imageData[idx + 3];
          if (a < 40) continue; // píxel transparente, se descarta

          const wx = (x / canvasW - 0.5) * planeW;
          const wy = -(y / canvasH - 0.5) * planeH;
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
      camera.position.z = 7;

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
      const material = new THREE.PointsMaterial({
        size: isMobile ? 0.03 : 0.026,
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
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic

            const idx = i * 3;
            posArray[idx] = starts[idx] + (targets[idx] - starts[idx]) * eased;
            posArray[idx + 1] =
              starts[idx + 1] + (targets[idx + 1] - starts[idx + 1]) * eased;
            posArray[idx + 2] =
              starts[idx + 2] + (targets[idx + 2] - starts[idx + 2]) * eased;

            if (t >= 1) {
              // Jitter de reposo, sutil
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
          // No hace falta volver a marcar sessionStorage si ya estaba marcado,
          // pero si veníamos de "prefersReducedMotion" sin haberse formado antes,
          // lo dejamos igualmente registrado para consistencia.
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
        camera.aspect = mount.clientWidth / mount.clientHeight;
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
