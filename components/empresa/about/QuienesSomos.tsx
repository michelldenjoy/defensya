"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import MisionVision from "./MisionVision";
import TimelineSection from "@/components/home/TimelineSection";

const experienceItems = [
  {
    num: "01",
    title: "Sistemas de Visión",
    tag: "OPTICS / DISPLAY",
    desc: "Fabricación de monitores de vídeo, gestión de audio y datos con encriptación síncrona, sistemas de iluminación LED/Láser y cámaras de precisión.",
    image: "/images/sistemavision.png",
  },
  {
    num: "02",
    title: "Software y Electrónica",
    tag: "EMBEDDED / SCADA",
    desc: "Desarrollo en aeronáutica, defensa, SCADAs, adquisición de señal y sistemas embebidos llevando el control de procesos industriales al siguiente nivel.",
    image: "/images/software.jpg",
  },
  {
    num: "03",
    title: "Tecnologías Emergentes",
    tag: "AI / DATA",
    desc: "Expertos en redes neuronales, sistemas de aprendizaje, Inteligencia Artificial, seguridad y análisis de datos avanzado.",
    image: "/images/ai.jpg",
  },
];

// Hook para detectar dispositivo touch
function useIsTouchDevice() {
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  });
  return isTouch;
}

interface ExperienceCardProps {
  item: (typeof experienceItems)[0];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => {
  const isTouch = useIsTouchDevice();
  const [isActive, setIsActive] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // En touch: toggle al tap (sin arrastre)
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!isTouch) return;
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    },
    [isTouch],
  );

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!isTouch || !touchStartRef.current) return;
      const dx = Math.abs(
        e.changedTouches[0].clientX - touchStartRef.current.x,
      );
      const dy = Math.abs(
        e.changedTouches[0].clientY - touchStartRef.current.y,
      );
      // Solo toggle si no hubo scroll (desplazamiento < 10px)
      if (dx < 10 && dy < 10) {
        setIsActive((prev) => !prev);
      }
      touchStartRef.current = null;
    },
    [isTouch],
  );

  // En desktop se usa group-hover via CSS; en touch usamos clase condicional
  const activeClass = isTouch && isActive ? "touch-active" : "";

  return (
    <div
      key={item.num}
      className={`experience-card group relative overflow-hidden bg-black cursor-pointer select-none ${activeClass}`}
      style={{
        height: "clamp(340px, 50vw, 500px)",
        clipPath:
          "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
        animationDelay: `${index * 0.12}s`,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <div className="card-img-wrap absolute inset-0 group-hover:scale-105 touch-active-scale transition-transform duration-700">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Texture overlay on hover/active */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 touch-active-opacity transition-all duration-700"
        style={{
          backgroundImage: "url('/textura5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background:
            "linear-gradient(175deg, rgba(6,13,24,0.6) 60%, rgba(6,13,24,0.92) 100%)",
        }}
      />

      {/* Hover tint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 touch-active-opacity transition-opacity duration-500"
        style={{ background: "rgba(14,165,233,0.08)" }}
      />

      {/* Corner brackets */}
      <div className="corner-tl" />
      <div className="corner-tr" />
      <div className="corner-bl" />
      <div className="corner-br" />

      {/* Ghost number */}
      <span
        className="absolute top-4 right-5 font-mono font-black text-white/5 group-hover:text-[#0ea5e9]/10 touch-active-num transition-colors duration-500"
        style={{ fontSize: "clamp(4rem, 12vw, 7rem)", lineHeight: 1 }}
      >
        {item.num}
      </span>

      {/* Tag pill */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] text-blue-300 border border-blue-300/40 px-2 py-1 uppercase">
          {item.tag}
        </span>
      </div>

      {/* Tap indicator — solo visible en touch cuando NO está activo */}
      {isTouch && (
        <div
          className={`absolute bottom-4 right-4 transition-opacity duration-300 ${
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
        className={`
          absolute inset-0 p-5 sm:p-7 flex flex-col justify-end
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:justify-center
          ${isTouch && isActive ? "!justify-center" : ""}
        `}
      >
        {/* Title */}
        <h3
          className={`
            text-white mb-0 text-center
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            translate-y-2 group-hover:translate-y-0 group-hover:scale-110
            ${isTouch && isActive ? "!translate-y-0 !scale-110" : ""}
          `}
          style={{
            fontSize: "clamp(1.6rem, 4.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </h3>

        {/* Divider */}
        <div className="my-4 sm:my-5 h-px relative overflow-hidden">
          <div
            className={`
              absolute left-0 top-0 h-full bg-[#0ea5e9]/50
              w-[140px] group-hover:w-full
              ${isTouch && isActive ? "!w-full" : ""}
            `}
            style={{
              transition: "width 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s",
            }}
          />
          <div className="h-full w-full bg-white/10" />
        </div>

        {/* Description */}
        <p
          className={`
            leading-snug text-center
            opacity-0 translate-y-5
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white/90
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75
            ${
              isTouch && isActive
                ? "!opacity-100 !translate-y-0 !text-white/90"
                : ""
            }
          `}
          style={{
            fontSize: "clamp(1rem, 2.8vw, 1.25rem)",
            maxHeight: isTouch && isActive ? "200px" : undefined,
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
};

const QuienesSomos = () => {
  return (
    <main
      className="w-full bg-white dark:bg-[#060d18] text-gray-900 dark:text-white overflow-x-hidden"
      style={{ fontFamily: "'Share Tech Mono', monospace" }}
    >
      <MisionVision />

      {/* ─────────── EXPERIENCIA ─────────── */}
      <section className="relative sm:pt-24 pb-16 sm:pb-28 px-4 sm:px-6 lg:px-16 bg-[#060d18] dark:bg-[#070e1a] overflow-hidden">
        <div className="tech-grid absolute inset-0 opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <div>
              <p className="text-[14px] font-mono tracking-[0.30em] text-slate-400 uppercase mb-3"></p>

              <h2
                className="font-bold uppercase leading-[1.0] tracking-[-0.02em] text-white mb-16 sm:mb-20"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                Nuestra <br />
                <span className="text-white/40 font-light">Experiencia.</span>
              </h2>
            </div>

            {/* Doc ref */}
            {/* <div
              className="text-right  text-white/25 leading-loose shrink-0 hidden sm:block"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Aeronáutica · Defensa · Industria
            </div> */}
          </div>

          {/* Cards grid — 1 col mobile, 2 col tablet, 3 col desktop */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            {experienceItems.map((item, i) => (
              <ExperienceCard key={item.num} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />
    </main>
  );
};

export default QuienesSomos;
