"use client";

import { useEffect, useRef, type MutableRefObject } from "react";
import * as THREE from "three";

interface LogoPlate3DProps {
  imageSrc?: string;
  onFormed?: () => void;
  /** 0 = logo formado · 1 = partículas dispersas por el espacio */
  disperseRef?: MutableRefObject<number>;
}

/* Si el logo ya se formó en esta visita, no se repite la animación */
let hasFormedThisPageLoad = false;

/* Máximo de partículas: suficiente para que el logo se vea nítido sin sobrecargar */
const MAX_PARTICLES_DESKTOP = 45000;
const MAX_PARTICLES_MOBILE = 18000;

/* >1 = animación de formación más lenta */
const SPEED_FACTOR = 2.2;

/* Cuánto se aclaran los colores del logo para que brillen sobre el navy (0 = color original, 1 = blanco) */
const LIGHTEN = 0.55;

/* ─────────────────────────────────────────────────────────────
   SHADERS: todo el movimiento lo calcula la tarjeta gráfica
   ───────────────────────────────────────────────────────────── */

const VS = /* glsl */ `
  attribute vec3 aStart;
  attribute vec3 aColor;
  attribute float aDelay;
  attribute float aDur;
  attribute float aRand;
  uniform float uTime;
  uniform float uSkip;
  uniform float uDisperse;
  uniform float uSize;
  uniform float uScale;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Formación: de la nube dispersa a su sitio en el logo
    float t = uSkip > 0.5 ? 1.0 : clamp((uTime - aDelay) / aDur, 0.0, 1.0);
    float e = 1.0 - pow(1.0 - t, 3.0);
    vec3 p = mix(aStart, position, e);

    // Respiración suave cuando ya está formado
    p.z += step(1.0, t) * sin(uTime * 0.6 + aRand * 40.0) * 0.015;

    // Dispersión con el scroll: cada partícula sale hacia fuera y hacia la cámara
    float d = uDisperse * uDisperse;
    vec2 dir = normalize(position.xy + vec2(0.0001, 0.0001));
    p.xy += dir * d * (1.5 + aRand * 5.0);
    p.z += d * (aRand - 0.3) * 8.0;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (uScale / -mv.z);

    vColor = aColor;
    vAlpha = 1.0 - d * 0.85;
  }
`;

const FS = /* glsl */ `
  uniform float uLighten;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.15, d) * vAlpha;
    gl_FragColor = vec4(mix(vColor, vec3(1.0), uLighten), a);
  }
`;

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function LogoPlate3D({ imageSrc = "/logodefensyanew.png", onFormed, disperseRef }: LogoPlate3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  // Guardamos el aviso en una referencia: así un cambio en el padre no reinicia la escena
  const onFormedRef = useRef(onFormed);
  onFormedRef.current = onFormed;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = mount.clientWidth < 640;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skip = reduced || hasFormedThisPageLoad;

    let disposed = false;
    const cleanups: Array<() => void> = [];

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      if (disposed) return;

      /* ── 1. Leer el PNG ── */
      const canvasW = isMobile ? 420 : 640;
      const canvasH = Math.round(canvasW * (img.naturalHeight / img.naturalWidth));
      const c = document.createElement("canvas");
      c.width = canvasW;
      c.height = canvasH;
      const ctx = c.getContext("2d");
      if (!ctx) return;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, canvasW, canvasH);
      const data = ctx.getImageData(0, 0, canvasW, canvasH).data;

      // Cuántos píxeles tienen color, para elegir el salto de muestreo
      let opaque = 0;
      for (let i = 3; i < data.length; i += 4) if (data[i] >= 20) opaque++;
      const maxP = isMobile ? MAX_PARTICLES_MOBILE : MAX_PARTICLES_DESKTOP;
      const stepPx = Math.max(1, Math.ceil(Math.sqrt(opaque / maxP)));

      const planeW = 6;
      const planeH = planeW * (canvasH / canvasW);
      const spacing = (planeW / canvasW) * stepPx;

      const target: number[] = [];
      const colors: number[] = [];
      for (let y = 0; y < canvasH; y += stepPx) {
        for (let x = 0; x < canvasW; x += stepPx) {
          const idx = (y * canvasW + x) * 4;
          if (data[idx + 3] < 20) continue;
          target.push(
            (x / canvasW - 0.5) * planeW + (Math.random() - 0.5) * spacing * 0.5,
            -(y / canvasH - 0.5) * planeH + (Math.random() - 0.5) * spacing * 0.5,
            0
          );
          colors.push(data[idx] / 255, data[idx + 1] / 255, data[idx + 2] / 255);
        }
      }
      const count = target.length / 3;

      /* ── 2. Punto de partida, retraso y duración de cada partícula ── */
      const start = new Float32Array(count * 3);
      const delay = new Float32Array(count);
      const dur = new Float32Array(count);
      const rand = new Float32Array(count);
      let maxFinish = 0;
      for (let i = 0; i < count; i++) {
        const tx = target[i * 3];
        const ty = target[i * 3 + 1];
        const a = Math.random() * Math.PI * 2;
        const dist = 3.5 + Math.random() * 6;
        start[i * 3] = tx + Math.cos(a) * dist;
        start[i * 3 + 1] = ty + Math.sin(a) * dist * 0.6;
        start[i * 3 + 2] = (Math.random() - 0.5) * 6;
        delay[i] = ((tx / planeW + 0.5) * 1.1 + Math.random() * 0.5) * SPEED_FACTOR;
        dur[i] = (0.9 + Math.random() * 0.5) * SPEED_FACTOR;
        rand[i] = Math.random();
        maxFinish = Math.max(maxFinish, delay[i] + dur[i]);
      }

      /* ── 3. Escena ── */
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.1, 100);
      const BASE_Z = 7;
      const FIT = 1.15;
      const fitZ = (aspect: number) => {
        const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
        return Math.max(BASE_Z, (planeH * FIT) / (2 * tan), (planeW * FIT) / (2 * tan * aspect));
      };
      camera.position.z = fitZ(mount.clientWidth / mount.clientHeight);

      const pr = Math.min(window.devicePixelRatio, 2);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(pr);
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(target, 3));
      geometry.setAttribute("aStart", new THREE.BufferAttribute(start, 3));
      geometry.setAttribute("aColor", new THREE.Float32BufferAttribute(colors, 3));
      geometry.setAttribute("aDelay", new THREE.BufferAttribute(delay, 1));
      geometry.setAttribute("aDur", new THREE.BufferAttribute(dur, 1));
      geometry.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));

      const material = new THREE.ShaderMaterial({
        vertexShader: VS,
        fragmentShader: FS,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uSkip: { value: skip ? 1 : 0 },
          uDisperse: { value: 0 },
          uSize: { value: spacing * 1.5 },
          uScale: { value: mount.clientHeight * pr * 0.5 },
          uLighten: { value: LIGHTEN },
        },
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      /* ── 4. Inclinación con el ratón ── */
      let tiltX = 0;
      let tiltY = 0;
      const onMove = (e: PointerEvent) => {
        const r = mount.getBoundingClientRect();
        tiltY = ((e.clientX - r.left) / r.width - 0.5) * 0.12;
        tiltX = -((e.clientY - r.top) / r.height - 0.5) * 0.08;
      };
      if (!reduced) window.addEventListener("pointermove", onMove);

      /* ── 5. Solo se dibuja cuando se ve ── */
      let visible = true;
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
      io.observe(mount);

      /* ── 6. Animación ── */
      const clock = new THREE.Clock();
      let formed = false;
      let raf = 0;
      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;
        const t = clock.getElapsedTime();
        material.uniforms.uTime.value = t;
        material.uniforms.uDisperse.value = disperseRef?.current ?? 0;

        if (!formed && (skip || t > maxFinish)) {
          formed = true;
          hasFormedThisPageLoad = true;
          onFormedRef.current?.();
        }

        points.rotation.x += (tiltX - points.rotation.x) * 0.05;
        points.rotation.y += (tiltY - points.rotation.y) * 0.05;
        renderer.render(scene, camera);
      };
      tick();

      const onResize = () => {
        const aspect = mount.clientWidth / mount.clientHeight;
        camera.aspect = aspect;
        camera.position.z = fitZ(aspect);
        camera.updateProjectionMatrix();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        material.uniforms.uScale.value = mount.clientHeight * pr * 0.5;
      };
      window.addEventListener("resize", onResize);

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("resize", onResize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      });
    };

    return () => {
      disposed = true;
      cleanups.forEach((fn) => fn());
    };
  }, [imageSrc, disperseRef]);

  return <div ref={mountRef} className="h-full w-full" />;
}