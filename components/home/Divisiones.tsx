"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, } from "framer-motion";
import Image from "next/image";

interface Division {
  title: string;
  image: string;
  description: string;
  tag: string;
}

const divisions: Division[] = [
  {
    title: "Defensa",
    tag: "SEC-01",
    image: "/images/defensa.jpg",
    description:
      "En Defensya contamos con un equipo de especialistas altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector defensa. Más de veinte años de experiencia avalan nuestra capacidad para desarrollar soluciones tecnológicas fiables, innovadoras y adaptadas a los requisitos más exigentes del sector.",
  },
  {
    title: "Aeronáutica",
    tag: "SEC-02",
    image: "/images/aeronautic.jpg",
    description:
      "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, ópticos y mecánicos destinados al sector aeronáutico. Nuestras soluciones integran tecnología avanzada para resolver necesidades específicas del sector, trabajando en colaboración con empresas de reconocido prestigio.",
  },
  {
    title: "Óptica",
    tag: "SEC-03",
    image: "/images/optica.jpeg",
    description:
      "Desarrollamos y fabricamos componentes ópticos para aplicaciones militares, aeronáuticas, científicas y optoelectrónicas. Somos especialistas en análisis de materiales, diseño óptico, mecanizado de precisión y pulido de materiales como cristal, lentes, cerámicas y metales técnicos.",
  },
  {
    title: "Fabricación 3D",
    tag: "SEC-04",
    image: "/images/fabricacion3d.jpg",
    description:
      "Disponemos de tecnología avanzada de fabricación aditiva para la producción de piezas mediante sinterización láser en aluminio, acero, titanio o cromo-cobalto. También contamos con sistemas de prototipado rápido y maquinaria de control numérico de alta precisión.",
  },
  {
    title: "Sanidad",
    tag: "SEC-05",
    image: "/images/sanidad.jpg",
    description:
      "Nuestra división sanitaria combina ingeniería, diseño y fabricación avanzada para el desarrollo de soluciones técnicas aplicadas al sector médico, desde el diseño conceptual hasta la producción final, garantizando los más altos estándares de calidad.",
  },
];

// ─── Utility ─────────────────────────────────────────────────────────────────

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

// ─── Mobile Card ──────────────────────────────────────────────────────────────

interface MobileCardProps {
  division: Division;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  direction: number;
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "60%" : "-60%",
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? "60%" : "-60%",
    opacity: 0,
    scale: 0.96,
  }),
};

function MobileCard({ division, index, total, onPrev, onNext, direction }: MobileCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Reset expanded state when division changes
  useEffect(() => {
    setExpanded(false);
  }, [division.title]);

  // Touch swipe handling
  const touchStart = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    touchDelta.current = e.touches[0].clientX - touchStart.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDelta.current) > 48) {
      touchDelta.current > 0 ? onPrev() : onNext();
    }
    touchStart.current = null;
    touchDelta.current = 0;
  };

  return (
    <div
      className="relative flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Image Panel ── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={division.title}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.32, 0, 0.18, 1] }}
          className="relative w-full overflow-hidden"
          style={{ height: "62vw", maxHeight: "340px", minHeight: "220px" }}
        >
          {/* Scan line effect */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-linear(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
            }}
          />

          <Image
            src={division.image}
            alt={division.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          {/* linear overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />

          {/* Tag badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.25em] text-white/60 bg-black/40 backdrop-blur-sm border border-white/10 px-2.5 py-1">
              <span className="w-1 h-1 rounded-full bg-defensya-blue animate-pulse" />
              {division.tag}
            </span>
          </div>

          {/* Corner accent — top right */}
          <div className="absolute top-0 right-0 z-20 border-t border-r border-defensya-blue/60 w-10 h-10" />

          {/* Nav arrows on image */}
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            <button
              onClick={onPrev}
              disabled={index === 0}
              aria-label="Anterior sector"
              className="w-9 h-9 flex items-center justify-center border border-white/20 bg-black/50 backdrop-blur-sm text-white/70 disabled:opacity-20 active:bg-white/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={onNext}
              disabled={index === total - 1}
              aria-label="Siguiente sector"
              className="w-9 h-9 flex items-center justify-center border border-white/20 bg-black/50 backdrop-blur-sm text-white/70 disabled:opacity-20 active:bg-white/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
            <motion.div
              className="h-full bg-defensya-blue"
              initial={false}
              animate={{ width: `${((index + 1) / total) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Content Panel ── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`content-${division.title}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.32, 0, 0.18, 1], delay: 0.04 }}
          className="bg-white dark:bg-[#0a0f1a] border border-t-0 border-gray-200 dark:border-white/[0.07] px-5 pt-5 pb-4"
        >
          {/* AJUSTE TITULO PARA MOVIL */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3
              className="text-[1.6rem] font-bold uppercase leading-none text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              {division.title}
            </h3>
            <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500 mt-1 shrink-0">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-defensya-blue" />
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/6" />
          </div>

          {/* Description with expand toggle */}
          <div className="relative">
            <p
              className={`text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-all duration-300 ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {division.description}
            </p>

            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-white dark:from-[#0a0f1a] to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-defensya-blue active:opacity-70 transition-opacity"
          >
            {expanded ? "Cerrar" : "Leer más"}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </motion.div>
      </AnimatePresence>

      {/* ── Dot Pagination ── */}
      <div className="flex items-center justify-center gap-2 mt-4 pb-2">
        {divisions.map((d, i) => (
          <button
            key={d.title}
            aria-label={`Ir a ${d.title}`}
            onClick={() => {
              // parent handles via index change
              const diff = i - index;
              if (diff > 0) for (let j = 0; j < diff; j++) onNext();
              else for (let j = 0; j < Math.abs(diff); j++) onPrev();
            }}
            className="group relative flex items-center justify-center"
          >
            <span
              className={`block transition-all duration-300 rounded-none ${
                i === index
                  ? "w-6 h-0.75 bg-defensya-blue"
                  : "w-1.5 h-0.75 bg-gray-300 dark:bg-white/20 group-active:bg-gray-400"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Desktop Row ──────────────────────────────────────────────────────────────

interface DesktopRowProps {
  division: Division;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}

function DesktopRow({ division, index, isActive, onActivate }: DesktopRowProps) {
  return (
    <button
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={`
        group relative w-full text-left flex items-center gap-6 px-6 py-5
        border-l-[3px] transition-all duration-300
        ${
          isActive
            ? "border-defensya-blue bg-white dark:bg-white/4 shadow-[4px_0_24px_rgba(0,0,0,0.06)] dark:shadow-none translate-x-1"
            : "border-transparent hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/2 opacity-60 hover:opacity-90"
        }
      `}
    >
      {/* Index number */}
      <span
        className={`font-mono text-[11px] shrink-0 transition-colors duration-300 ${
          isActive ? "text-defensya-blue" : "text-gray-400 dark:text-gray-600"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* AJUSTE TITULO DESKTOP */}
      <h4
        className={`flex-1 text-lg lg:text-3xl font-bold uppercase tracking-tight leading-none transition-colors duration-300 ${
          isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
        }`}
        style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
      >
        {division.title}
      </h4>

      {/* Arrow indicator */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={`shrink-0 transition-all duration-300 ${
          isActive ? "opacity-100 translate-x-0 text-defensya-blue" : "opacity-0 -translate-x-2"
        }`}
      >
        <path
          d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Active glow line */}
      {isActive && (
        <motion.div
          layoutId="active-glow"
          className="absolute left-0 top-0 bottom-0 w-0.75 bg-defensya-blue"
          style={{ boxShadow: "2px 0 12px rgba(var(--color-defensya-blue-rgb, 0,120,255), 0.5)" }}
          transition={{ duration: 0.25 }}
        />
      )}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Divisiones() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = divisions[activeIndex];

  const goTo = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex) return;
      setDirection(nextIndex > activeIndex ? 1 : -1);
      setActiveIndex(clamp(nextIndex, 0, divisions.length - 1));
    },
    [activeIndex]
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50 dark:bg-defensya-navy border-t border-gray-200 dark:border-white/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-8 md:mb-16 lg:mb-20">
          <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-3">
            Áreas Tecnológicas
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none tracking-tight"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                SECTORES QUE 
                <br />
                MANEJAMOS
              </h2>

            {/* Mobile: compact count indicator */}
            <div className="flex items-center gap-2 md:hidden">
              <span className="font-mono text-[11px] text-gray-400 dark:text-gray-500">
                {String(activeIndex + 1).padStart(2, "0")}{" "}
                <span className="text-gray-300 dark:text-gray-600">/</span>{" "}
                {String(divisions.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* ══ MOBILE LAYOUT ══════════════════════════════════════════════════ */}
        <div className="lg:hidden">
          {/* Quick-access pill navigation */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide snap-x snap-mandatory">
            {divisions.map((d, i) => (
              <button
                key={d.title}
                onClick={() => goTo(i)}
                className={`shrink-0 snap-start px-4 py-2 font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-200 border whitespace-nowrap ${
                  i === activeIndex
                    ? "bg-defensya-blue border-defensya-blue text-white"
                    : "border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 active:border-gray-300"
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>

          {/* Card experience */}
          <MobileCard
            division={active}
            index={activeIndex}
            total={divisions.length}
            onPrev={goPrev}
            onNext={goNext}
            direction={direction}
          />
        </div>

        {/* ══ DESKTOP LAYOUT ═════════════════════════════════════════════════ */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">

          {/* Left: list */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Decorative top border */}
            <div className="flex items-center gap-3 mb-4 px-6">
              <div className="h-px flex-1 bg-gray-200 dark:bg-white/8" />
              <span className="font-mono text-[9px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase">
                Sectores
              </span>
              <div className="h-px w-4 bg-gray-200 dark:bg-white/8" />
            </div>

            {divisions.map((division, idx) => (
              <DesktopRow
                key={division.title}
                division={division}
                index={idx}
                isActive={active.title === division.title}
                onActivate={() => goTo(idx)}
              />
            ))}

          </div>

          {/* LADO DERECHO IMAGEN Y DESCRIPCION */}
          <div className="lg:col-span-8 relative overflow-hidden bg-gray-200 dark:bg-[#080d18] shadow-2xl" style={{ height: "580px" }}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 z-30 w-10 h-10 border-t-2 border-l-2 border-defensya-blue pointer-events-none" />
            <div className="absolute top-0 right-0 z-30 w-10 h-10 border-t-2 border-r-2 border-white/10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 z-30 w-10 h-10 border-b-2 border-r-2 border-defensya-blue/60 pointer-events-none" />


            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.32, 0, 0.18, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 60vw, 800px"
                  priority
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />


                {/* Content */}
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18, duration: 0.4 }}
                  className="absolute bottom-0 left-0 w-full p-10 xl:p-12 text-white z-20"
                >

                  <h3
                    className="text-4xl xl:text-5xl font-bold uppercase mb-5 leading-none "
                    style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                  >
                    {active.title}
                  </h3>

                  <p className="text-gray-300 text-sm xl:text-base leading-relaxed max-w-lg font-light">
                    {active.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Desktop nav arrows */}
            <div className="absolute bottom-10 right-10 z-30 flex gap-2">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-label="Anterior"
                className="w-10 h-10 flex items-center justify-center border border-white/15 bg-black/40 backdrop-blur-sm text-white/60 hover:text-white hover:border-white/30 hover:bg-black/60 disabled:opacity-20 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={goNext}
                disabled={activeIndex === divisions.length - 1}
                aria-label="Siguiente"
                className="w-10 h-10 flex items-center justify-center border border-white/15 bg-black/40 backdrop-blur-sm text-white/60 hover:text-white hover:border-white/30 hover:bg-black/60 disabled:opacity-20 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Progress bar bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 z-30">
              <motion.div
                className="h-full bg-defensya-blue"
                initial={false}
                animate={{ width: `${((activeIndex + 1) / divisions.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}