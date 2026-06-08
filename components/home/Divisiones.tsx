"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Division {
  num: string;
  tag: string;
  title: string;
  image: string;
  desc: string;
}


const divisions: Division[] = [
  {
    num: "01",
    tag: "Def",
    title: "Defensa",
    image: "/images/defensa2.jpg",
    desc: "Contamos con un equipo de ingenieros altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector de defensa. Más de dos décadas avalan nuestra capacidad.",
  },
  {
    num: "02",
    tag: "Aeron",
    title: "Aeronáutica",
    image: "/images/aeronautica.jpg",
    desc: "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, ópticos y mecánicos destinados al sector aeronáutico, integrando tecnología avanzada en colaboración con empresas de reconocido prestigio.",
  },
  {
    num: "03",
    tag: "Electr",
    title: "Electrónica",
    image: "/images/electronica.webp",
    desc: "Expertos en diseño de sistemas embebidos, ingeniería de hardware y desarrollo de software crítico. Creamos soluciones robustas para el tratamiento de señal y control de sistemas.",
  },
  {
    num: "04",
    tag: "img. y vid",
    title: "Imagen y Vídeo",
    image: "/images/imagevideo.png",
    desc: "Desarrollamos tecnología integrada avanzada en captación y visualización, incluyendo cámaras especializadas, monitores de alta definición y sistemas de gestión de vídeo en tiempo real.",
  },
];

// ─── Touch Device Hook ────────────────────────────────────────────────────────

function useIsTouchDevice() {
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  });
  return isTouch;
}

// ─── Corner Brackets ──────────────────────────────────────────────────────────

function Corners({ active }: { active: boolean }) {
  return (
    <>
      <span
        className={`pointer-events-none absolute top-0 left-0 w-4 h-4 border-t border-l transition-colors duration-300 ${
          active ? "border-white" : "border-blue-300/50 group-hover:border-white"
        }`}
      />
      <span
        className={`pointer-events-none absolute bottom-0 right-0 w-4 h-4 border-b border-r transition-colors duration-300 ${
          active ? "border-white" : "border-blue-300/50 group-hover:border-white"
        }`}
      />
    </>
  );
}

// ─── Single Card ──────────────────────────────────────────────────────────────

function DivisionCard({ item }: { item: Division }) {
  const isTouch = useIsTouchDevice();
  const [isActive, setIsActive] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!isTouch) return;
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    },
    [isTouch]
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!isTouch || !touchStartRef.current) return;
      const dx = Math.abs(e.changedTouches[0].clientX - touchStartRef.current.x);
      const dy = Math.abs(e.changedTouches[0].clientY - touchStartRef.current.y);
      if (dx < 10 && dy < 10) {
        setIsActive((prev) => !prev);
      }
      touchStartRef.current = null;
    },
    [isTouch]
  );

  const a = isTouch && isActive;

  return (
    <div
      className="experience-card group relative overflow-hidden bg-black cursor-pointer select-none w-full"
      style={{
        height: "clamp(340px, 38vw, 460px)",
        clipPath:
          "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ${
          a ? "scale-105" : "group-hover:scale-105"
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Texture overlay */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          a ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          backgroundImage: "url('/textura5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Base gradient */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background:
            "linear-gradient(175deg, rgba(6,13,24,0.6) 60%, rgba(6,13,24,0.92) 100%)",
        }}
      />

      {/* Hover tint */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          a ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{ background: "rgba(14,165,233,0.08)" }}
      />

      {/* Corners */}
      <div className="relative w-full h-full">
        <Corners active={a} />
      </div>

      {/* Ghost number */}
      <span
        className={`pointer-events-none absolute top-2 right-4 font-mono font-black select-none
                   transition-colors duration-500 ${
                     a
                       ? "text-blue-300/30"
                       : "text-white/[0.04] group-hover:text-blue-300/30"
                   }`}
        style={{ fontSize: "clamp(4rem, 6vw, 6rem)", lineHeight: 1 }}
      >
        {item.num}
      </span>

      {/* Tag pill */}
      <div className="absolute top-5 left-5 z-10">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.3em] text-blue-300/50 border border-blue-300/50 px-2 py-[3px] uppercase">
          <span className="w-1 h-1 rounded-full bg-blue-300/50" />
          {item.tag}
        </span>
      </div>

      {/* Tap indicator — solo visible en touch cuando NO está activo */}
      {isTouch && (
        <div
          className={`absolute bottom-4 right-4 z-10 transition-opacity duration-300 ${
            isActive ? "opacity-0" : "opacity-70"
          }`}
        >
          <span className="text-[9px] font-mono tracking-[0.2em] text-blue-300/70 border border-blue-300/20 px-2 py-1 uppercase">
            TAP
          </span>
        </div>
      )}

      {/* Content */}
      <div
        className={`absolute inset-0 p-6 flex flex-col z-10
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${a ? "justify-center" : "justify-end group-hover:justify-center"}`}
      >
        {/* Title */}
        <h3
          className={`text-white text-center
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${a ? "translate-y-0 scale-110" : "translate-y-3 group-hover:translate-y-0 group-hover:scale-110"}`}
          style={{
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </h3>

        {/* Expanding divider */}
        <div className="my-4 sm:my-5 h-px relative overflow-hidden">
          <div className="h-full w-full bg-white/10" />
          <div
            className={`absolute left-0 top-0 h-full bg-blue-300/50 ${
              a ? "w-full" : "w-8 group-hover:w-full"
            }`}
            style={{
              transition: "width 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s",
            }}
          />
        </div>

        {/* Description */}
        <p
          className={`leading-snug text-center
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75
            ${
              a
                ? "opacity-100 translate-y-0 text-white/90"
                : "opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white/90"
            }`}
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Divisiones() {
  return (
    <section className="relative py-16 px-4 sm:px-6 bg-[#060d18] overflow-hidden dark:bg-black/40">
      <div className="tech-grid absolute inset-0 opacity-60 pointer-events-none" />

      <div className="max-w relative">
        {/* ── Header ── */}
        <div className="my-8 text-center pb-8 px-4">
          <p className="text-[14px] font-mono tracking-[0.30em] text-slate-400 uppercase mb-3">
          Aeronáutica · Defensa · Electrónica · IMG & VID
          </p>
          <h2
            className="leading-[0.9] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              textTransform: "uppercase",
            }}
          >
            <span className="font-bold text-gray-100">Sectores </span>
            <em className="text-white/50  " style={{ fontWeight: 200 }}>
              que Manejamos
            </em>
          </h2>
        </div>

        {/* ── Grid — 1 col mobile / 2 col tablet / 4 col desktop ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {divisions.map((item) => (
            <DivisionCard key={item.num} item={item} />
          ))}
        </div>

        {/* ── Bottom meta ── */}
        <div className="mt-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/5" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            Defensya · Ingeniería de Defensa
          </span>
          <div className="h-px w-12 bg-blue-300/50" />
        </div>
      </div>
    </section>
  );
}
