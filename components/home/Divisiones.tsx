"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";

interface Division {
  code: string;
  title: string;
  image: string;
  role: string;
  desc: string;
}

const divisions: Division[] = [
  {
    code: "DFS-DEF",
    title: "Defensa",
    image: "/images/defensa2.jpg",
    role: "Proyectos complejos del sector defensa",
    desc: "Contamos con un equipo de ingenieros altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector de defensa.",
  },
  {
    code: "DFS-AER",
    title: "Aeronáutica",
    image: "/images/aeronautic.jpg",
    role: "Sistemas electrónicos y optoelectrónicos",
    desc: "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, optoelectrónicos y mecánicos destinados al sector aeronáutico, integrando tecnología avanzada.",
  },
  {
    code: "DFS-ELE",
    title: "Electrónica",
    image: "/images/electronica.webp",
    role: "Hardware crítico y sistemas embebidos",
    desc: "Expertos en diseño de sistemas embebidos, ingeniería de hardware y desarrollo de software crítico. Creamos soluciones robustas para el tratamiento de señal y control de sistemas.",
  },
  {
    code: "DFS-IMG",
    title: "Imagen y Vídeo",
    image: "/images/imagevideo.png",
    role: "Captación y visualización en tiempo real",
    desc: "Desarrollamos tecnología integrada avanzada en captación y visualización, incluyendo cámaras especializadas, monitores de alta definición y sistemas de gestión de vídeo en tiempo real.",
  },
];

function useIsTouchDevice() {
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  });
  return isTouch;
}

const CLIP =
  "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))";

function DivisionCard({ item, index }: { item: Division; index: number }) {
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
      if (dx < 10 && dy < 10) setIsActive((p) => !p);
      touchStartRef.current = null;
    },
    [isTouch],
  );

  const a = isTouch && isActive;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group relative"
    >
      <div className="hidden sm:flex justify-center mb-3">
        <span
          className={`w-2 h-2 rotate-45 transition-colors duration-500 ${
            a ? "bg-defensya-blue" : "bg-white/20 group-hover:bg-defensya-blue"
          }`}
        />
      </div>

      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden bg-black cursor-pointer select-none w-full"
        style={{ minHeight: "clamp(340px, 50vw, 420px)", clipPath: CLIP }}
      >
        {/* Image — */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            a
              ? "grayscale-0 scale-[1.03]"
              : "grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
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

        {/* Base gradient  */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,13,24,0.15) 0%, rgba(6,13,24,0.55) 55%, rgba(6,13,24,0.95) 100%)",
          }}
        />

        {/* Blue scan tint on interaction */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 mix-blend-overlay ${
            a ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          style={{ background: "rgba(59,130,246,0.18)" }}
        />

        {/* Content  */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col">
          <h3 className="text-white font-bold uppercase leading-[1.05] tracking-tight text-[1.6rem] lg:text-[1.9rem] mb-2">
            {item.title}
          </h3>

          <p className="text-[13px] text-neutral-400 leading-snug mb-3">
            {item.role}
          </p>

          {/* Expandable description */}
          <div
            className={`grid transition-all duration-500 ease-out ${
              a ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            } sm:group-hover:grid-rows-[1fr] sm:group-hover:opacity-100`}
          >
            <div className="overflow-hidden">
              <div className="pt-3 border-t border-white/10">
                <p className="text-[13px] text-neutral-300 leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {isTouch && (
          <div
            className={`absolute top-5 right-5 transition-opacity duration-300 ${
              a ? "opacity-0" : "opacity-60"
            }`}
          >
            <span className="text-[10px] font-mono tracking-[0.2em] text-defensya-blue border border-defensya-blue/30 px-2 py-1 uppercase">
              Tocar
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Divisiones() {
  return (
    <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-28 px-4 sm:px-6 lg:px-16 bg-black overflow-hidden">
      <div className="tech-grid absolute inset-0 opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-slate-400" />
          <span className="text-slate-500 text-slate-500 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase">
            Áreas de actividad
          </span>
        </div>

        <h2
          className="text-[clamp(2.4rem,5.5vw,4.5rem)] mb-8 font-medium leading-[1.02] tracking-tight text-white"
          style={{
            fontWeight: 600,
          }}
        >
          Cuatro sectores {""}
          <span className="text-defensya-sky">Un mismo estándar</span>
        </h2>

        <div className="hidden sm:block relative h-px mb-0">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {divisions.map((item, i) => (
            <DivisionCard key={item.code} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
