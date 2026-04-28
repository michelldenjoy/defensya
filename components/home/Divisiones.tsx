"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Division {
  num: string;
  tag: string;
  title: string;
  image: string;
  desc: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const divisions: Division[] = [
  {
    num: "01",
    tag: "SEC-01",
    title: "Defensa",
    image: "/images/defensa2.jpg",
    desc: "Contamos con un equipo de ingenieros altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector de defensa. Más de dos décadas avalan nuestra capacidad.",
  },
  {
    num: "02",
    tag: "SEC-02",
    title: "Aeronáutica",
    image: "/images/aeronautica.jpg",
    desc: "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, ópticos y mecánicos destinados al sector aeronáutico, integrando tecnología avanzada en colaboración con empresas de reconocido prestigio.",
  },
  {
    num: "03",
    tag: "SEC-03",
    title: "Óptica",
    image: "/images/optica.jpeg",
    desc: "Desarrollamos y fabricamos componentes ópticos para aplicaciones militares, aeronáuticas, científicas y optoelectrónicas. Especializados en diseño óptico, mecanizado de precisión y pulido de materiales técnicos.",
  },
  {
    num: "04",
    tag: "SEC-04",
    title: "Fabricación 3D",
    image: "/images/fabricacion3d.jpg",
    desc: "Disponemos de tecnología avanzada de fabricación aditiva para producción mediante sinterización láser en aluminio, acero, titanio o cromo-cobalto, además de prototipado rápido y CNC de alta precisión.",
  },
  {
    num: "05",
    tag: "SEC-05",
    title: "Sanidad",
    image: "/images/sanidad.jpg",
    desc: "Nuestra división sanitaria combina ingeniería, diseño y fabricación avanzada para el desarrollo de soluciones técnicas aplicadas al sector médico, desde el diseño conceptual hasta la producción final.",
  },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const CARDS_VISIBLE = 3;
const CARD_GAP = 16; // px — matches gap-4
const MAX_INDEX = divisions.length - CARDS_VISIBLE; // = 2

// ─── Corner Brackets ──────────────────────────────────────────────────────────

function Corners() {
  return (
    <>
      {/* esquina superior izquierda */}
      <span
        className="pointer-events-none absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-300/50 transition-colors duration-300 group-hover:border-white"
      />

      {/* esquina inferior derecha */}
      <span
        className="pointer-events-none absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-300/50 transition-colors duration-300 group-hover:border-white"
      />
    </>
  );
}

// ─── Single Card ──────────────────────────────────────────────────────────────

function DivisionCard({ item }: { item: Division }) {
  return (
    <div
      className="experience-card group relative overflow-hidden bg-black cursor-pointer flex-shrink-0 "
      style={{
        // exact 1/3 of track minus proportional gap share
        width: `calc((100% - ${CARD_GAP * (CARDS_VISIBLE - 1)}px) / ${CARDS_VISIBLE})`,
        height: "500px",
        clipPath:
          "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
      }}
    >
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="33vw"
        />
      </div>

      {/* Hover texture */}
      {/* <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          backgroundImage: "url('/textura5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      /> */}

      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg, rgba(6,13,24,0.55) 0%, rgba(6,13,24,0.88) 100%)",
        }}
      />

      {/* Hover blue tint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "rgba(0, 0, 0, 0.60)" }}
      />

<div className="relative group w-full h-full">
  <Corners />
</div>

      {/* Ghost number */}
      <span
        className="pointer-events-none absolute top-2 right-4 font-mono font-black select-none
                   text-white/[0.04] group-hover:text-blue-300/50 transition-colors duration-500"
        style={{ fontSize: "7rem", lineHeight: 1 }}
      >
        {item.num}
      </span>

      {/* Tag pill */}
      <div className="absolute top-5 left-5 z-10">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.3em] text-blue-300/50 border border-blue-300/50 px-2 py-[3px] uppercase">
          <span
            className="w-1 h-1 rounded-full bg-blue-300/50"
            // style={{ animation: "blink 1.4s step-end infinite" }}
          />
          {item.tag}
        </span>
      </div>

      {/* Content — slides to center on hover */}
      <div className="absolute inset-0 p-7 flex flex-col justify-end group-hover:justify-center transition-all duration-500 z-10">
        {/* <span className="text-[11px] text-center font-mono tracking-[0.3em] text-blue-300/50 mb-3">
          {item.num} <span className="text-gray-400">{item.tag}</span>
        </span> */}

        <h3
          className="text-white text-center translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
          style={{
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </h3>

        {/* Expanding divider */}
        <div className="my-4 h-px relative overflow-hidden">
          <div className="h-full w-full bg-white/10" />
          <div
            className="absolute left-0 top-0 h-full bg-blue-300/50 w-8 group-hover:w-full"
            style={{ transition: "width 0.5s cubic-bezier(0.22,1,0.36,1) 0.08s" }}
          />
        </div>

        <p
          className="
            text-md text-gray-400 leading-relaxed text-center
            opacity-0 translate-y-4
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white
            transition-all duration-500 delay-75
          "
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}
// ─── Arrow Button ─────────────────────────────────────────────────────────────

function ArrowBtn({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const clip =
    direction === "prev"
      ? "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))"
      : "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
      className="
        w-12 h-12 flex items-center justify-center
        border border-white/15 bg-black/40 backdrop-blur-sm
        text-white/50
        hover:text-white hover:border-blue-300/60 hover:bg-black/70
        disabled:opacity-20 disabled:cursor-not-allowed
        transition-all duration-200
      "
      style={{ clipPath: clip }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {direction === "prev" ? (
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

// ─── Desktop Carousel ─────────────────────────────────────────────────────────

function DesktopCarousel() {
  const [current, setCurrent] = useState(0);

  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, MAX_INDEX)), []);

  return (
    <div>
      {/* ── Controls bar ARRIBA ── */}
      <div className="flex items-center justify-between mb-8 ">

        {/* Segment indicators */}
        <div className="flex items-center gap-[6px]">
          {divisions.map((_, i) => {
            const visible = i >= current && i < current + CARDS_VISIBLE;

            return (
              <span
                key={i}
                className="block transition-all duration-400"
                style={{
                  width: visible ? "28px" : "8px",
                  height: "3px",
                  background: visible ? "rgba(147, 197, 253, 0.5)" : "#ffffff",
                }}
              />
            );
          })}
        </div>

        {/* Counter + arrows */}
        <div className="flex items-center gap-5">
          <span className="font-mono text-[11px] tracking-widest select-none">
            <span className="text-white">{String(current + 1).padStart(2, "0")}</span>
            <span className="text-gray-600"> – </span>
            <span className="text-white">
              {String(Math.min(current + CARDS_VISIBLE, divisions.length)).padStart(2, "0")}
            </span>
            <span className="text-gray-600">
              {" "}/ {String(divisions.length).padStart(2, "0")}
            </span>
          </span>

          <div className="flex gap-2">
            <ArrowBtn direction="prev" disabled={current === 0} onClick={goPrev} />
            <ArrowBtn direction="next" disabled={current >= MAX_INDEX} onClick={goNext} />
          </div>
        </div>
      </div>

      {/* Track */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          style={{ gap: `${CARD_GAP}px` }}
          animate={{
            x: `calc(${current} * -1 * (100% + ${CARD_GAP}px) / ${CARDS_VISIBLE})`,
          }}
          transition={{ duration: 0.55, ease: [0.32, 0, 0.18, 1] }}
        >
          {divisions.map((item) => (
            <DivisionCard key={item.num} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── Mobile Slider ────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "55%" : "-55%", opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? "55%" : "-55%", opacity: 0, scale: 0.97 }),
};

function MobileSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);

  const goTo = useCallback(
    (next: number) => {
      if (next === activeIndex) return;
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(Math.min(Math.max(next, 0), divisions.length - 1));
    },
    [activeIndex]
  );

  const item = divisions[activeIndex];

  return (
    <div
      className="relative"
      onTouchStart={(e) => {
        touchStart.current = e.touches[0].clientX;
        touchDelta.current = 0;
      }}
      onTouchMove={(e) => {
        if (touchStart.current === null) return;
        touchDelta.current = e.touches[0].clientX - touchStart.current;
      }}
      onTouchEnd={() => {
        if (Math.abs(touchDelta.current) > 48) {
          touchDelta.current > 0 ? goTo(activeIndex - 1) : goTo(activeIndex + 1);
        }
        touchStart.current = null;
        touchDelta.current = 0;
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={item.title}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.32, 0, 0.18, 1] }}
          className="relative overflow-hidden bg-black"
          style={{
            height: "420px",
            clipPath:
              "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(175deg, rgba(6,13,24,0.5) 0%, rgba(6,13,24,0.93) 100%)",
            }}
          />
          <Corners />
          <span
            className="pointer-events-none absolute top-2 right-3 font-mono font-black select-none"
            style={{ fontSize: "6rem", lineHeight: 1, color: "rgba(255,255,255,0.04)" }}
          >
            {item.num}
          </span>
          <div className="absolute top-5 left-5 z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.3em] text-blue-300/50 border border-blue-300/50 px-2 py-[3px] uppercase">
              <span
                className="w-1 h-1 rounded-full bg-blue-300/50"
                style={{ animation: "blink 1.4s step-end infinite" }}
              />
              {item.tag}
            </span>
          </div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
            <span className="text-[11px] font-mono tracking-[0.3em] text-blue-300/50 mb-2">
              {item.num} <span className="text-gray-400">{item.tag}</span>
            </span>
            <h3
              className="text-white mb-3"
              style={{
                fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "clamp(1.8rem, 6vw, 2.4rem)",
                fontWeight: 600,
                textTransform: "uppercase",
                lineHeight: 1.05,
              }}
            >
              {item.title}
            </h3>
            <div className="h-px w-full bg-white/10 mb-3 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-8 bg-blue-300/50" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
              {item.desc}
            </p>
          </div>
          {/* Nav arrows */}
          <div className="absolute bottom-5 right-5 z-20 flex gap-2">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Anterior"
              className="w-9 h-9 flex items-center justify-center border border-white/20 bg-black/50 text-white/70 disabled:opacity-20 active:bg-white/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === divisions.length - 1}
              aria-label="Siguiente"
              className="w-9 h-9 flex items-center justify-center border border-white/20 bg-black/50 text-white/70 disabled:opacity-20 active:bg-white/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 z-20">
            <motion.div
              className="h-full bg-blue-300/50"
              initial={false}
              animate={{ width: `${((activeIndex + 1) / divisions.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot pagination */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {divisions.map((d, i) => (
          <button key={d.title} aria-label={`Ir a ${d.title}`} onClick={() => goTo(i)}>
            <span
              className="block transition-all duration-300"
              style={{
                width: i === activeIndex ? "24px" : "6px",
                height: "3px",
                background:
                  i === activeIndex ? "#0ea5e9" : "rgba(255,255,255,0.2)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Divisiones() {
  return (
    <section
      className="relative py-22 px-6 lg:px-16 bg-defensya-navy overflow-hidden dark:bg-black/40"
      // style={{ background: "#070e1a" }}
    >
      <div className="tech-grid absolute inset-0 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <p className="text-[12px] font-mono tracking-[0.30em] text-slate-400 uppercase mb-3">
              Áreas Tecnológicas
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white"
              style={{
                fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Sectores que Manejamos
            </h2>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide snap-x snap-mandatory">
            {divisions.map((d) => (
              <span
                key={d.title}
                className="shrink-0 snap-start px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase border border-blue-300/50 text-gray-400 whitespace-nowrap"
              >
                {d.num} {d.title}
              </span>
            ))}
          </div>
          <MobileSlider />
        </div>

        {/* ── Desktop Carousel ── */}
        <div className="hidden lg:block">
          <DesktopCarousel />
        </div>

        {/* ── Bottom meta ── */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/5" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            Defensya · Ingeniería de Defensa
          </span>
          <div className="h-px w-12 bg-blue-300/50" />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}