"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ClipButton } from "./HeroHome";

/* ─────────────────────────────────────────────────────────────
   CONTENIDO
   ───────────────────────────────────────────────────────────── */

type Step = {
  num: string;
  label: string;
  title: string;
  text: string;
  cta?: { href: string; label: string };
};

const STEPS: Step[] = [
  {
    num: "01",
    label: "El reto",
    title: "Diseñar un sistema de visión integral desde cero",
    text: "El A330 MRTT requería gestionar múltiples canales de imagen de forma síncrona, con iluminación activa, compresión en tiempo real y transmisión segura al interior del avión.",
  },
  {
    num: "02",
    label: "La solución",
    title: "Sistema GEN·3 — plataforma única integrada",
    text: "Defensya diseñó y fabricó monitores de vídeo, gestión de imagen/audio/datos, iluminación LED y láser de alta potencia, y cámaras de nueva generación en una solución de instalación directa.",
  },
  {
    num: "03",
    label: "El resultado",
    title: "Tecnología operativa en múltiples Fuerzas Aéreas",
    text: "El sistema vuela hoy en flotas del A330 MRTT de varias naciones. La 3ª generación, en desarrollo activo, incorpora visión estereoscópica 3D y preparación para automatización A3R®.",
  },
  {
    num: "04",
    label: "Siguiente frontera",
    title: "Haptix® — del control manual a la asistencia automatizada",
    text: "El dispositivo háptico Haptix® reduce la carga del operador y facilita la transición hacia el reabastecimiento automático A3R®. El primer sistema de su tipo en el mundo.",
    cta: { href: "/innovacion#haptix", label: "Explorar" },
  },
];

/* ─────────────────────────────────────────────────────────────
   CÁMARA — una posición por momento (0 = presentación, 1-4 = pasos)
   El avión mira hacia +X (morro) y la cola está en −X.
   ───────────────────────────────────────────────────────────── */

type Shot = { pos: [number, number, number]; look: [number, number, number] };

const SHOTS: Shot[] = [
  { pos: [15, 6, 23], look: [-1, 0, 0] }, // presentación: vista general
  { pos: [-20, 3, 14], look: [-6, -0.5, 0] }, // 01 reto: cola y cámaras
  { pos: [-24, -6, 13], look: [-10, -2.5, 0] }, // 02 solución: luces encendidas
  { pos: [32, 18, 48], look: [0, 0, 0] }, // 03 resultado: vista lejana con rutas
  { pos: [-16, -1, -13], look: [-12, -2, 0] }, // 04 Haptix: la pértiga
];

/* Qué se enciende en cada momento */
const LOOKS = [
  { tail: 0, boom: 0, cones: 0, trails: 0 },
  { tail: 1, boom: 0, cones: 0.15, trails: 0 },
  { tail: 1, boom: 0.4, cones: 1, trails: 0 },
  { tail: 0, boom: 0, cones: 0, trails: 1 },
  { tail: 0.3, boom: 1, cones: 0.45, trails: 0 },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };

const BOOM_PIVOT = new THREE.Vector3(-8.6, -0.3, 0);
const BOOM_ANGLE = 0.5;
const EMITTERS: [number, number, number][] = [
  [-6.6, -0.95, 0],
  [-7.2, -0.75, 0],
  [-7.8, -0.55, 0.3],
  [-7.8, -0.55, -0.3],
];

/* ─────────────────────────────────────────────────────────────
   GEOMETRÍA DEL AVIÓN CISTERNA (genérico, hecho con puntos)
   zone: 0 = estructura · 1 = zona de cámaras (cola) · 2 = pértiga
   ───────────────────────────────────────────────────────────── */

const rnd = (a: number, b: number) => a + Math.random() * (b - a);

function fuselageAt(t: number) {
  let r = 1.1;
  let y = 0;
  if (t > 7) r = 1.1 * Math.sqrt(Math.max(0, 1 - ((t - 7) / 3) ** 2));
  if (t < -6) {
    const k = (-6 - t) / 4;
    r = 1.1 - k * 0.75;
    y = k * 0.6;
  }
  return { r, y };
}

function buildAirframe(total: number) {
  const pos: number[] = [];
  const zone: number[] = [];
  const push = (x: number, y: number, z: number, zn = 0) => {
    pos.push(x, y, z);
    zone.push(zn);
  };

  const n = (f: number) => Math.round(total * f);

  // Fuselaje
  for (let i = 0; i < n(0.42); i++) {
    const t = rnd(-10, 10);
    const { r, y } = fuselageAt(t);
    const a = Math.random() * Math.PI * 2;
    const cy = y + r * Math.cos(a);
    push(t, cy, r * Math.sin(a), t < -6.3 && Math.cos(a) < 0 ? 1 : 0);
  }

  // Alas (flecha + diedro)
  for (let i = 0; i < n(0.32); ) {
    const u = Math.random();
    const chord = 4 - 2.8 * u;
    if (Math.random() > chord / 4) continue;
    const v = Math.random();
    const side = Math.random() < 0.5 ? 1 : -1;
    const le = 2 - u * 4.5;
    const thick = (Math.random() < 0.5 ? 0.06 : -0.06) * (1 - v);
    push(le - v * chord, -0.55 + u * 0.55 + thick, side * (1.05 + u * 10));
    i++;
  }

  // Estabilizadores horizontales
  for (let i = 0; i < n(0.09); i++) {
    const u = Math.random();
    const v = Math.random();
    const side = Math.random() < 0.5 ? 1 : -1;
    const chord = 2 - 1.1 * u;
    push(-7.6 - u * 1.6 - v * chord, 0.45 + u * 0.2, side * (0.4 + u * 4.2));
  }

  // Deriva
  for (let i = 0; i < n(0.06); ) {
    const u = Math.random();
    const chord = 3 - 1.7 * u;
    if (Math.random() > chord / 3) continue;
    const v = Math.random();
    push(-6.8 - u * 2.4 - v * chord, 0.9 + u * 3.8, rnd(-0.05, 0.05));
    i++;
  }

  // Motores
  for (let i = 0; i < n(0.08); i++) {
    const side = Math.random() < 0.5 ? 1 : -1;
    const a = Math.random() * Math.PI * 2;
    const x = rnd(0.2, 3);
    const r = x > 2.7 ? 0.5 : 0.55;
    push(x, -1.35 + r * Math.cos(a), side * 4.6 + r * Math.sin(a));
  }

  // Góndolas de reabastecimiento bajo las alas
  for (let i = 0; i < n(0.03); i++) {
    const side = Math.random() < 0.5 ? 1 : -1;
    const a = Math.random() * Math.PI * 2;
    push(rnd(-2.6, -1.2), -0.45 + 0.18 * Math.cos(a), side * 8.6 + 0.18 * Math.sin(a));
  }

  return { pos: new Float32Array(pos), zone: new Float32Array(zone) };
}

/* Pértiga en coordenadas locales: sale del punto de giro hacia −X */
function buildBoom(total: number) {
  const pos: number[] = [];
  for (let i = 0; i < total * 0.75; i++) {
    const a = Math.random() * Math.PI * 2;
    const x = -rnd(0, 7.5);
    const r = x < -6.8 ? 0.07 : 0.11;
    pos.push(x, r * Math.cos(a), r * Math.sin(a));
  }
  // Timones en V
  for (let i = 0; i < total * 0.25; i++) {
    const side = Math.random() < 0.5 ? 1 : -1;
    const w = Math.random() * 0.95;
    pos.push(rnd(-6.3, -5.5) + w * 0.2, -0.45 * w, side * 0.85 * w);
  }
  const zone = new Float32Array(pos.length / 3).fill(2);
  return { pos: new Float32Array(pos), zone };
}

function withScatter(geo: THREE.BufferGeometry, count: number) {
  const scatter = new Float32Array(count * 3);
  const rand = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const r = rnd(18, 45);
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(rnd(-1, 1));
    scatter[i * 3] = r * Math.sin(ph) * Math.cos(th);
    scatter[i * 3 + 1] = r * Math.cos(ph) * 0.6;
    scatter[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    rand[i] = Math.random();
  }
  geo.setAttribute("aScatter", new THREE.BufferAttribute(scatter, 3));
  geo.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));
}

/* ─────────────────────────────────────────────────────────────
   SHADERS
   ───────────────────────────────────────────────────────────── */

const PARTICLE_VS = /* glsl */ `
  attribute vec3 aScatter;
  attribute float aRand;
  attribute float aZone;
  uniform float uForm;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uTail;
  uniform float uBoom;
  varying float vAlpha;
  varying float vHl;

  void main() {
    float f = smoothstep(aRand * 0.45, aRand * 0.45 + 0.55, uForm);
    vec3 p = mix(aScatter, position, f);
    p += 0.03 * vec3(sin(uTime * 0.8 + aRand * 40.0), cos(uTime + aRand * 30.0), 0.0) * (1.0 - f * 0.85);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float hl = aZone < 0.5 ? 0.0 : (aZone < 1.5 ? uTail : uBoom);
    float focus = max(uTail, uBoom);

    gl_PointSize = clamp(uSize * uPixelRatio * (1.0 + hl * 0.7) * (20.0 / -mv.z), 1.0, 5.5 * uPixelRatio);
    vAlpha = (0.5 + 0.5 * aRand) * clamp(1.0 - 0.55 * focus + hl * 1.1, 0.0, 1.0);
    vHl = hl;
  }
`;

const PARTICLE_FS = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;
  varying float vHl;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = vAlpha * smoothstep(0.5, 0.0, d);
    vec3 c = mix(uColor, vec3(1.0), 0.25 + vHl * 0.45);
    gl_FragColor = vec4(c, a);
  }
`;

const CONE_VS = /* glsl */ `
  varying float vV;
  void main() {
    vV = uv.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const CONE_FS = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vV;
  void main() {
    float a = pow(1.0 - vV, 1.6) * uOpacity;
    gl_FragColor = vec4(uColor, a);
  }
`;

/* ─────────────────────────────────────────────────────────────
   UTILIDADES
   ───────────────────────────────────────────────────────────── */

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (a: number, b: number, v: number) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function readAccent(el: HTMLElement | null) {
  const fallback = new THREE.Color("#2f7bff");
  if (!el) return fallback;
  const c = getComputedStyle(el).color;
  if (c.startsWith("rgb")) return new THREE.Color().setStyle(c);
  return fallback;
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function TankerJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [active, setActive] = useState(0);

  /* Saltar directamente a un paso */
  const goTo = (k: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY;
    const range = section.offsetHeight - window.innerHeight;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: top + (k / (SHOTS.length - 1)) * range,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const mount = mountRef.current;
    const section = sectionRef.current;
    if (!mount || !section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.innerWidth < 768;
    const COUNT = isSmall ? 12000 : 26000;
    // Tu azul es oscuro: lo aclaramos para que brille sobre el fondo navy
    const accent = readAccent(probeRef.current).lerp(new THREE.Color(0xffffff), 0.4);
    const lightColor = accent.clone().lerp(new THREE.Color(0xffffff), 0.35);

    /* Escena */
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    const pr = Math.min(window.devicePixelRatio, 1.75);
    renderer.setPixelRatio(pr);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 400);

    const plane = new THREE.Group();
    scene.add(plane);

    const material = new THREE.ShaderMaterial({
      vertexShader: PARTICLE_VS,
      fragmentShader: PARTICLE_FS,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uForm: { value: reduced ? 1 : 0 },
        uTime: { value: 0 },
        uSize: { value: isSmall ? 2.6 : 2.4 },
        uPixelRatio: { value: pr },
        uTail: { value: 0 },
        uBoom: { value: 0 },
        uColor: { value: accent },
      },
    });

    // Fuselaje, alas, cola, motores
    const air = buildAirframe(COUNT);
    const airGeo = new THREE.BufferGeometry();
    airGeo.setAttribute("position", new THREE.BufferAttribute(air.pos, 3));
    airGeo.setAttribute("aZone", new THREE.BufferAttribute(air.zone, 1));
    withScatter(airGeo, air.pos.length / 3);
    plane.add(new THREE.Points(airGeo, material));

    // Pértiga (grupo propio para poder moverla)
    const boomGroup = new THREE.Group();
    boomGroup.position.copy(BOOM_PIVOT);
    boomGroup.rotation.z = BOOM_ANGLE;
    plane.add(boomGroup);
    const boom = buildBoom(Math.round(COUNT * 0.06));
    const boomGeo = new THREE.BufferGeometry();
    boomGeo.setAttribute("position", new THREE.BufferAttribute(boom.pos, 3));
    boomGeo.setAttribute("aZone", new THREE.BufferAttribute(boom.zone, 1));
    withScatter(boomGeo, boom.pos.length / 3);
    boomGroup.add(new THREE.Points(boomGeo, material));

    // Cámaras / emisores en la cola
    const emitGeo = new THREE.BufferGeometry();
    emitGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(EMITTERS.flat()), 3));
    const dot = document.createElement("canvas");
    dot.width = dot.height = 64;
    const dctx = dot.getContext("2d");
    if (dctx) {
      const grd = dctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grd.addColorStop(0, "rgba(255,255,255,1)");
      grd.addColorStop(0.25, "rgba(255,255,255,0.85)");
      grd.addColorStop(1, "rgba(255,255,255,0)");
      dctx.fillStyle = grd;
      dctx.fillRect(0, 0, 64, 64);
    }
    const dotTex = new THREE.CanvasTexture(dot);
    const emitMat = new THREE.PointsMaterial({
      color: 0xffffff,
      map: dotTex,
      size: 16 * pr,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    plane.add(new THREE.Points(emitGeo, emitMat));

    // Conos de luz (LED) y haz láser
    const coneMats: THREE.ShaderMaterial[] = [];
    const makeCone = (origin: number[], dir: THREE.Vector3, length: number, radius: number, color: THREE.Color, strength: number) => {
      const g = new THREE.ConeGeometry(radius, length, 40, 1, true);
      g.translate(0, -length / 2, 0);
      const m = new THREE.ShaderMaterial({
        vertexShader: CONE_VS,
        fragmentShader: CONE_FS,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        uniforms: { uColor: { value: color }, uOpacity: { value: 0 } },
      });
      m.userData.strength = strength;
      coneMats.push(m);
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(origin[0], origin[1], origin[2]);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir.normalize());
      plane.add(mesh);
      return g;
    };
    const coneGeos = [
      makeCone(EMITTERS[0], new THREE.Vector3(-1, -0.55, 0), 11, 2.8, lightColor, 0.24),
      makeCone(EMITTERS[1], new THREE.Vector3(-1, -0.42, 0), 10, 2.2, lightColor, 0.2),
      makeCone(EMITTERS[1], new THREE.Vector3(-1, -0.5, 0.04), 9, 0.04, new THREE.Color(0xffffff), 0.5),
    ];

    // Rutas de vuelo de varias flotas (paso 03)
    const trailMat = new THREE.PointsMaterial({
      color: accent,
      size: 2 * pr,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const TRAIL_POINTS = 420;
    const trails = [
      { r: 26, tiltX: 0.35, tiltZ: 0.1, start: 0.2 },
      { r: 31, tiltX: -0.25, tiltZ: 0.4, start: 2.1 },
      { r: 36, tiltX: 0.15, tiltZ: -0.35, start: 4.0 },
    ].map(({ r, tiltX, tiltZ, start }) => {
      const pts = new Float32Array(TRAIL_POINTS * 3);
      for (let i = 0; i < TRAIL_POINTS; i++) {
        const a = start + (i / TRAIL_POINTS) * Math.PI * 1.6;
        pts[i * 3] = Math.cos(a) * r;
        pts[i * 3 + 1] = Math.sin(a * 2) * 1.5;
        pts[i * 3 + 2] = Math.sin(a) * r * 0.7;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pts, 3));
      g.setDrawRange(0, 0);
      const p = new THREE.Points(g, trailMat);
      p.rotation.set(tiltX, 0, tiltZ);
      scene.add(p);
      return g;
    });

    // Polvo de fondo para dar profundidad
    const DUST = isSmall ? 350 : 700;
    const dustPos = new Float32Array(DUST * 3);
    for (let i = 0; i < DUST; i++) {
      const r = rnd(60, 140);
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(rnd(-1, 1));
      dustPos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      dustPos[i * 3 + 1] = r * Math.cos(ph);
      dustPos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.2 * pr, sizeAttenuation: false, transparent: true, opacity: 0.35, depthWrite: false });
    scene.add(new THREE.Points(dustGeo, dustMat));

    /* Tamaño y encuadre */
    let distFactor = 1;
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = w / h;
      distFactor = w / h < 1 ? 1.7 : w / h < 1.3 ? 1.25 : 1;
      if (w >= 1024) camera.setViewOffset(w, h, -w * 0.15, 0, w, h); // avión a la derecha, texto a la izquierda
      else camera.setViewOffset(w, h, 0, h * 0.14, w, h); // avión arriba, texto abajo
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    /* Ratón */
    const mouse = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    if (!reduced) window.addEventListener("pointermove", onMove);

    /* Solo dibujamos cuando la sección está a la vista */
    let visible = false;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { rootMargin: "200px" });
    io.observe(section);

    /* Estado animado (se suaviza cada fotograma) */
    const cur = { tail: 0, boom: 0, cones: 0, trails: 0, form: reduced ? 1 : 0 };
    const camPos = new THREE.Vector3(...SHOTS[0].pos);
    const camLook = new THREE.Vector3(...SHOTS[0].look);
    const tmpPos = new THREE.Vector3();
    const tmpLook = new THREE.Vector3();
    let lastActive = -1;

    const clock = new THREE.Clock();
    let raf = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;

      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;
      const ease = 1 - Math.exp(-dt * 4);

      // Progreso del scroll
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const enter = clamp01(1 - rect.top / vh); // el avión se forma al entrar
      const p = clamp01(-rect.top / (rect.height - vh)); // recorrido fijo
      const kf = p * (SHOTS.length - 1);
      const i = Math.min(Math.floor(kf), SHOTS.length - 2);
      const f = smooth(0.3, 0.7, kf - i);
      const step = Math.round(kf);

      if (step !== lastActive) {
        lastActive = step;
        setActive(step);
      }
      barRefs.current.forEach((bar, n) => {
        if (bar) bar.style.transform = `scaleX(${clamp01(kf - n)})`;
      });

      // Cámara
      const a = SHOTS[i];
      const b = SHOTS[i + 1];
      tmpLook.set(lerp(a.look[0], b.look[0], f), lerp(a.look[1], b.look[1], f), lerp(a.look[2], b.look[2], f));
      tmpPos.set(lerp(a.pos[0], b.pos[0], f), lerp(a.pos[1], b.pos[1], f), lerp(a.pos[2], b.pos[2], f));
      tmpPos.sub(tmpLook).multiplyScalar(distFactor).add(tmpLook);
      if (!reduced) {
        tmpPos.x += mouse.x * 1.2;
        tmpPos.y -= mouse.y * 0.8;
      }
      camPos.lerp(tmpPos, ease);
      camLook.lerp(tmpLook, ease);
      camera.position.copy(camPos);
      camera.lookAt(camLook);

      // Efectos del momento actual (mezcla entre dos momentos)
      const la = LOOKS[i];
      const lb = LOOKS[i + 1];
      cur.tail = lerp(cur.tail, lerp(la.tail, lb.tail, f), ease);
      cur.boom = lerp(cur.boom, lerp(la.boom, lb.boom, f), ease);
      cur.cones = lerp(cur.cones, lerp(la.cones, lb.cones, f), ease);
      cur.trails = lerp(cur.trails, lerp(la.trails, lb.trails, f), ease);
      if (!reduced) cur.form = lerp(cur.form, smooth(0.05, 1, enter), ease * 1.5);

      material.uniforms.uTime.value = t;
      material.uniforms.uForm.value = cur.form;
      material.uniforms.uTail.value = cur.tail;
      material.uniforms.uBoom.value = cur.boom;

      const pulse = reduced ? 1 : 0.75 + 0.25 * Math.sin(t * 3);
      emitMat.opacity = Math.max(cur.tail, cur.cones) * pulse * cur.form;
      coneMats.forEach((m) => (m.uniforms.uOpacity.value = cur.cones * m.userData.strength * cur.form));
      trails.forEach((g, n) => g.setDrawRange(0, Math.floor(TRAIL_POINTS * clamp01(cur.trails * 1.15 - n * 0.05))));

      // Movimiento suave del avión y de la pértiga guiada (Haptix)
      if (!reduced) {
        plane.position.y = Math.sin(t * 0.5) * 0.15;
        plane.rotation.x = Math.sin(t * 0.35) * 0.02;
        boomGroup.rotation.z = BOOM_ANGLE + cur.boom * 0.1 * Math.sin(t * 0.8);
        boomGroup.rotation.y = cur.boom * 0.08 * Math.sin(t * 0.55);
      }

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      [airGeo, boomGeo, emitGeo, dustGeo, ...coneGeos, ...trails].forEach((g) => g.dispose());
      [material, emitMat, trailMat, dustMat, ...coneMats].forEach((m) => m.dispose());
      dotTex.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="mrtt-title"
      className="relative bg-defensya-navy"
      style={{ height: `${SHOTS.length * 100}vh` }}
    >
      <span ref={probeRef} className="hidden text-defensya-blue" aria-hidden />

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Escena 3D */}
        <div ref={mountRef} className="absolute inset-0" aria-hidden />

        {/* Velos para que el texto se lea bien */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block bg-gradient-to-r from-defensya-navy via-defensya-navy/60 to-transparent w-[55%]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] lg:hidden bg-gradient-to-t from-defensya-navy via-defensya-navy/85 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 lg:block bg-gradient-to-t from-defensya-navy/90 to-transparent" />

        {/* Texto */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-36 lg:items-center lg:pb-0">
          <div className="grid w-full max-w-lg">
            {/* Presentación */}
            <div
              aria-hidden={active !== 0}
              className={`[grid-area:1/1] transition-all duration-700 ease-out ${
                active === 0 ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-3"
              }`}
            >
              <h2
                id="mrtt-title"
                className="text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight text-white"
              >
                Suministramos en el A330&nbsp;MRTT
              </h2>
              <p className="mt-6 text-white/45 text-[12px] tracking-[0.2em]" style={MONO}>
                Desliza o elige un paso abajo
              </p>
            </div>

            {/* Pasos */}
            {STEPS.map((s, idx) => {
              const on = active === idx + 1;
              return (
                <article
                  key={s.num}
                  aria-hidden={!on}
                  className={`[grid-area:1/1] transition-all duration-700 ease-out ${
                    on ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
                  }`}
                >
                  {/* Dónde estás: grande y limpio */}
                  <p className="flex items-baseline gap-4 text-white">
                    <span className="text-[13px] text-white/40" style={MONO}>
                      {s.num}
                    </span>
                    <span className="text-[clamp(2.6rem,5.2vw,4.75rem)] font-light leading-[0.95] tracking-tight">
                      {s.label}
                    </span>
                  </p>
                  <span className="mt-7 block h-px w-12 bg-white/25" />

                  {/* Qué estás leyendo */}
                  <h3 className="mt-7 text-[clamp(1.15rem,1.7vw,1.5rem)] font-semibold uppercase leading-tight tracking-tight text-white/90">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">{s.text}</p>
                  {s.cta && (
                    <div className="mt-8">
                      <ClipButton href={s.cta.href} variant="primary">
                        {s.cta.label}
                      </ClipButton>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Navegación por pasos: se puede pulsar para saltar */}
        <nav aria-label="Pasos del caso A330 MRTT" className="absolute inset-x-0 bottom-0 z-20">
          <ol className="mx-auto grid max-w-7xl grid-cols-4 gap-3 px-6 pb-6 lg:gap-8 lg:pb-8">
            {STEPS.map((s, idx) => {
              const on = active === idx + 1;
              return (
                <li key={s.num}>
                  <button
                    type="button"
                    onClick={() => goTo(idx + 1)}
                    aria-current={on ? "step" : undefined}
                    className="group block w-full py-3 text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white/60"
                  >
                    <span className="relative block h-px w-full overflow-hidden bg-white/15">
                      <span
                        ref={(el) => {
                          barRefs.current[idx] = el;
                        }}
                        className="absolute inset-0 origin-left bg-white/80"
                        style={{ transform: "scaleX(0)" }}
                      />
                    </span>
                    <span className="mt-3 flex items-baseline gap-2">
                      <span
                        className={`text-[11px] transition-colors duration-500 ${on ? "text-white/70" : "text-white/30"}`}
                        style={MONO}
                      >
                        {s.num}
                      </span>
                      <span
                        className={`text-[13px] lg:text-[15px] leading-tight transition-colors duration-500 ${
                          on ? "text-white" : "hidden sm:inline text-white/40 group-hover:text-white/80"
                        }`}
                      >
                        {s.label}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}