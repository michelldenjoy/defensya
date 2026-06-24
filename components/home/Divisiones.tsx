"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

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
    desc: "Contamos con un equipo de ingenieros altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector de defensa.",
  },
  {
    num: "02",
    tag: "Aeron",
    title: "Aeronáutica",
    image: "/images/aeronautic.jpg",
    desc: "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, ópticos y mecánicos destinados al sector aeronáutico, integrando tecnología avanzada.",
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

// ─── Variants ────────────────────────────────────────────────────────────────

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const eyebrowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, clipPath: "inset(0 0 100% 0)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

// ─── Touch hook ──────────────────────────────────────────────────────────────

function useIsTouchDevice() {
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  });
  return isTouch;
}

// ─── Corners ─────────────────────────────────────────────────────────────────

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

// ─── Card ─────────────────────────────────────────────────────────────────────

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
    <motion.div
      custom={index}
      variants={cardVariants}
      className="experience-card group relative overflow-hidden bg-black cursor-pointer select-none w-full"
      style={{
        height: "clamp(340px, 38vw, 460px)",
        clipPath:
          "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      // Subtle lift on hover (desktop only — touch handled separately)
      whileHover={!isTouch ? { y: -4 } : undefined}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background image */}
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

      {/* Blue tint on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          a ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{ background: "rgba(14,165,233,0.08)" }}
      />

      {/* Scan-line sweep on hover — thin horizontal light that travels top→bottom */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-blue-300/30"
        initial={{ top: "0%", opacity: 0 }}
        whileHover={
          !isTouch
            ? {
                top: ["0%", "100%"],
                opacity: [0, 0.6, 0],
                transition: { duration: 1.1, ease: "linear", repeat: Infinity, repeatDelay: 1.4 },
              }
            : undefined
        }
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

      {/* Tag badge */}
      <div className="absolute top-5 left-5 z-10">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.3em] text-blue-300/50 border border-blue-300/50 px-2 py-[3px] uppercase">
          <span className="w-1 h-1 rounded-full bg-blue-300/50" />
          {item.tag}
        </span>
      </div>

      {/* Tap indicator */}
      {isTouch && (
        <div
          className={`absolute bottom-4 right-4 z-10 transition-opacity duration-300 ${
            isActive ? "opacity-0" : "opacity-70"
          }`}
        >
          <span className="text-[11px] font-mono tracking-[0.2em] text-blue-300/70 border border-blue-300/20 px-2 py-1 uppercase">
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
        <h3
          className={`text-white text-center
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${a ? "translate-y-0 scale-110" : "translate-y-3 group-hover:translate-y-0 group-hover:scale-110"}`}
          style={{
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
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Divisiones() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 sm:pt-20 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-16 bg-[#060d18] overflow-hidden"
    >
      <div className="tech-grid absolute inset-0 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Header ── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <motion.div
            variants={eyebrowVariants}
            className="flex items-center gap-3 mb-7 sm:mb-8"
          >
            <span
              className="text-slate-400 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              Dfsya · Áreas de Actividad
            </span>
            <motion.div
              variants={lineVariants}
              className="flex-1 h-px bg-gradient-to-r from-defensya-blue/40 to-transparent"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            variants={titleVariants}
            className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-end mb-10 sm:mb-12"
          >
            <h2
              className="font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Sectores que{" "}
              <span className="text-white/40 font-light">manejamos</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {divisions.map((item, i) => (
            <DivisionCard key={item.num} item={item} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}