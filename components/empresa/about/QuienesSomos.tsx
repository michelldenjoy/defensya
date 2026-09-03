"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import MisionVision from "./MisionVision";
import TimelineSection from "@/components/home/TimelineSection";

const experienceItems = [
  {
    code: "DFS-VIS-01",
    title: "Sistemas de Visión",
    tag: "OPTICS / DISPLAY",
    desc: "Fabricación de monitores de vídeo, gestión de audio y datos con encriptación síncrona, sistemas de iluminación LED/Láser y cámaras de precisión.",
    image: "/images/sistemavision.png",
  },
  {
    code: "DFS-SWE-02",
    title: "Software y Electrónica",
    tag: "EMBEDDED / SCADA",
    desc: "Desarrollo en aeronáutica, defensa, SCADAs, adquisición de señal y sistemas embebidos llevando el control de procesos industriales al siguiente nivel.",
    image: "/images/software.jpg",
  },
  {
    code: "DFS-AI-03",
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

interface ExperienceRowProps {
  item: (typeof experienceItems)[0];
  index: number;
}

const ExperienceRow: React.FC<ExperienceRowProps> = ({ item, index }) => {
  const isTouch = useIsTouchDevice();
  const [isActive, setIsActive] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // En touch: activa el estado "hover" al tap (sin arrastre / scroll)
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
      if (dx < 10 && dy < 10) {
        setIsActive((prev) => !prev);
      }
      touchStartRef.current = null;
    },
    [isTouch],
  );

  const imageFirst = index % 2 === 1; 

  return (
    <div
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 border-t border-white/10 first:border-t-0"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Texto */}
      <div
        className={`md:col-span-7 flex flex-col justify-center order-2 ${
          imageFirst ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[10px] tracking-[0.35em] text-white/25 uppercase">
            {item.code}
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-blue-300/80 uppercase">
            {item.tag}
          </span>
        </div>

        <h3
          className="text-white uppercase"
          style={{
            
            fontWeight: 400,
            fontSize: "clamp(2rem, 4.2vw, 2.5rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
          }}
        >
          {item.title}
        </h3>

        <div className="relative h-px w-full max-w-md bg-white/10 my-6 overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full bg-[#0ea5e9] motion-reduce:transition-none transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] w-0 group-hover:w-full ${
              isTouch && isActive ? "!w-full" : ""
            }`}
          />
        </div>

        <p
          className="text-white/55 leading-relaxed max-w-md"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "clamp(0.92rem, 1.5vw, 1.05rem)",
          }}
        >
          {item.desc}
        </p>
      </div>

      {/* Imagen */}
      <div
        className={`md:col-span-5 order-1 ${
          imageFirst ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={`object-cover grayscale-[45%] scale-100 motion-reduce:transition-none transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.04] ${
              isTouch && isActive ? "!grayscale-0 !scale-[1.04]" : ""
            }`}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>
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
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-28 px-4 sm:px-6 lg:px-16 bg-[#060d18] dark:bg-[#070e1a] overflow-hidden">
        <div className="tech-grid absolute inset-0 opacity-60 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div>
            <h2
              className="font-bold uppercase leading-[1.0] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)",
                
               }}
            >
              Nuestra {" "}
              <span className="text-white/40 font-light">Experiencia</span>
            </h2>
          </div>

          {/* Lista editorial — sin clip-path, sin cards, separadas por línea fina */}
          <div>
            {experienceItems.map((item, i) => (
              <ExperienceRow key={item.code} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />
    </main>
  );
};

export default QuienesSomos;