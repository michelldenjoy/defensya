"use client";

import { useEffect, useRef, useState } from "react";

const HITOS = [
  {
    year: "2006",
    tag: "Fundación",
    title: "El Origen de una Visión",
    description:
      "Nace Defensya Ingeniería de Sistemas en Madrid. Establecimos nuestro propósito: resolver los desafíos de visualización y monitorización más críticos donde las soluciones convencionales no alcanzan los estándares de misión.",
    metric: "19",
    metricSuffix: "años",
    metricLabel: "De innovación continua",
    extra:
      "Fundada por ingenieros con experiencia en defensa y aeronáutica, Defensya nació con la misión de cubrir los vacíos tecnológicos donde los proveedores estándar no llegan.",
  },
  {
    year: "2011",
    tag: "Eficiencia Operativa",
    title: "Optimización FAL C295",
    description:
      "Desarrollamos nuestro Detector de Deflexión láser para Airbus. Logramos un hito en la línea de montaje: reducir los tiempos de testeo de superficies móviles de 10 horas a tan solo 15 minutos con precisión micrométrica.",
    metric: "96",
    metricSuffix: "%",
    metricLabel: "Reducción de tiempo de testeo",
    extra:
      "El sistema de detección láser integrado en la FAL de Airbus marcó el inicio de nuestra colaboración estratégica con el fabricante europeo, posicionando a Defensya como socio tecnológico de primer nivel.",
  },
  {
    year: "2015",
    tag: "Elite Aeronáutica",
    title: "Consolidación en el A330 MRTT",
    description:
      "Nos convertimos en pieza clave del avión cisterna de referencia mundial. Diseñamos el sistema de Espejos Dicróicos 3D, eliminando el ghosting visual y garantizando la seguridad absoluta en operaciones de reabastecimiento en vuelo.",
    metric: "0",
    metricSuffix: "",
    metricLabel: "Incidentes de ghosting visual",
    extra:
      "El sistema óptico desarrollado por Defensya es hoy estándar operativo en flotas MRTT de múltiples fuerzas aéreas de la OTAN, garantizando visión perfecta incluso en condiciones nocturnas y de baja visibilidad.",
  },
  {
    year: "2019",
    tag: "Innovación RFID",
    title: "Nacimiento de Boom Tag®",
    description:
      "Revolucionamos la trazabilidad con tecnología RFID sin batería. Creamos una base de datos digital integrada en cada componente de la pértiga de reabastecimiento, resistiendo las condiciones ambientales más extremas de la atmósfera.",
    metric: "∞",
    metricSuffix: "",
    metricLabel: "Vida útil sin batería",
    extra:
      "Boom Tag® opera desde nivel del mar hasta más de 12.000 metros de altitud, soportando ciclos de presurización, vibración severa y rangos térmicos extremos sin necesidad de mantenimiento.",
  },
  {
    year: "2024",
    tag: "Nueva Generación",
    title: "A3R® & Optrónica Avanzada",
    description:
      "Lanzamos nuestra plataforma integral de visión y designación láser. Con capacidades de Auto-Tracking y cumplimiento NATO STANAG 3733, lideramos el camino hacia la autonomía total en misiones de repostaje y vigilancia.",
    metric: "3733",
    metricSuffix: "",
    metricLabel: "NATO STANAG Compliant",
    extra:
      "La plataforma A3R® integra visión diurna, nocturna y térmica en un único sistema, con seguimiento automático de objetivos y designación láser certificada para operaciones de repostaje autónomo.",
  },
];

/* ─────────────────────────────────────────────────────────────────
   HOOK — scroll-triggered visibility
───────────────────────────────────────────────────────────────── */
function useVisible(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────────────────────────────────────────────
   CARD 
───────────────────────────────────────────────────────────────── */
function HitoCard({
  hito,
  visible,
  active,
  onToggle,
  isLeft,
}: {
  hito: (typeof HITOS)[0];
  visible: boolean;
  active: boolean;
  onToggle: () => void;
  isLeft: boolean;
}) {
  return (
    <div
      className={`
        relative group
        border border-gray-200 dark:border-white/[0.08]
        hover:border-defensya-blue/30 dark:hover:border-defensya-blue/20
        ${active ? "border-defensya-blue/25 dark:border-defensya-blue/15" : ""}
        transition-colors duration-300
      `}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : isLeft
          ? "translateX(-2rem)"
          : "translateX(2rem)",
        transition:
          "opacity 0.65s ease 100ms, transform 0.65s ease 100ms, border-color 0.3s",
      }}
    >
      {/* Top accent line — slides in on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-defensya-blue
          origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />

      {/* Active bottom indicator */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-defensya-blue/35
          origin-left transition-transform duration-500
          ${active ? "scale-x-100" : "scale-x-0"}`}
      />

      <div className="p-8 lg:p-10">

        {/* Tag */}
        <span className="text-[10px] font-mono tracking-[0.28em] text-gray-400 dark:text-gray-500 uppercase block mb-5">
          {hito.tag}
        </span>

        {/* Title */}
        <h3
          className="text-[clamp(1.7rem,3vw,2.5rem)] font-bold uppercase leading-none tracking-tight
            text-gray-900 dark:text-white mb-6"
          style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
        >
          {hito.title}
        </h3>

        {/* Separator */}
        <div className="h-px bg-defensya-blue/20 mb-6 transition-all duration-700 group-hover:bg-defensya-blue/40" />

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-[1.8]">
          {hito.description}
        </p>

        {/* Bottom row */}
        <div className="flex items-end justify-between mt-8 pt-6 border-t border-gray-100 dark:border-white/[0.06]">

          {/* Metric */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span
                className="font-bold leading-none text-gray-900 dark:text-white"
                style={{
                  fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                  fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                  letterSpacing: "-0.02em",
                }}
              >
                {hito.metric}
              </span>
              {hito.metricSuffix && (
                <span
                  className="text-defensya-blue font-bold"
                  style={{
                    fontSize: "clamp(0.9rem,1.5vw,1.2rem)",
                    fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                  }}
                >
                  {hito.metricSuffix}
                </span>
              )}
            </div>
            <p className="text-[10px] font-mono tracking-[0.18em] text-gray-400 dark:text-gray-500 uppercase mt-1.5">
              {hito.metricLabel}
            </p>
          </div>

          {/* Toggle */}
          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em]
              text-defensya-blue hover:text-defensya-blue/60 uppercase transition-colors duration-200
              focus-visible:outline-none"
            aria-expanded={active}
          >
            <span
              className="w-4 h-4 border border-current flex items-center justify-center
                text-[11px] leading-none transition-transform duration-300"
              style={{ transform: active ? "rotate(45deg)" : "rotate(0deg)" }}
              aria-hidden
            >
              +
            </span>
            {active ? "Cerrar" : "Leer más"}
          </button>
        </div>

        {/* Expandable detail */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: active ? "220px" : "0px" }}
        >
          <div className="pt-5 mt-5 border-t border-gray-100 dark:border-white/[0.06]">
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-[1.9]">
              {hito.extra}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
    espacio en blanco con año 
───────────────────────────────────────────────────────────────── */
function DecorativeSide({
  year,
  visible,
  isLeft,
}: {
  year: string;
  visible: boolean;
  isLeft: boolean;
}) {
  return (
    <div
      className="relative flex items-center justify-center h-full min-h-[14rem] select-none pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Ghost year */}
      <span
        className="absolute font-bold text-gray-900 dark:text-white leading-none"
        style={{
          fontSize: "clamp(7rem,16vw,12rem)",
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          letterSpacing: "-0.05em",
          opacity: visible ? 0.055 : 0,
          transition: "opacity 1.2s ease 350ms",
          // Nudge toward center line
          [isLeft ? "right" : "left"]: "5%",
        }}
      >
        {year}
      </span>

      {/* Minimal crosshair */}
      <div
        className="flex flex-col items-center gap-1.5 relative z-10"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 550ms",
        }}
      >
        <div className="w-px h-7 bg-gray-200 dark:bg-white/[0.09]" />
        <div className="w-2 h-2 rounded-full border border-gray-300 dark:border-white/15" />
        <div className="w-px h-7 bg-gray-200 dark:bg-white/[0.09]" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CENTER NODE
───────────────────────────────────────────────────────────────── */
function CenterNode({
  year,
  visible,
  index,
}: {
  year: string;
  visible: boolean;
  index: number;
}) {
  return (
    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 z-10">
      <div
        className="bg-white dark:bg-defensya-navy border border-gray-200 dark:border-white/10 px-3 py-1"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.6)",
          transition: `opacity 0.5s ease ${index * 80 + 280}ms, transform 0.5s ease ${index * 80 + 280}ms`,
        }}
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-defensya-blue font-bold">
          {year}
        </span>
      </div>
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0)",
          transition: `opacity 0.4s ease ${index * 80 + 400}ms, transform 0.4s ease ${index * 80 + 400}ms`,
        }}
      >
        <div
          className="w-2.5 h-2.5 rounded-full bg-defensya-blue"
          style={{
            animation: visible
              ? `defensya-pulse 2.5s ease-in-out ${index * 350}ms infinite`
              : "none",
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ROW
───────────────────────────────────────────────────────────────── */
function HitoRow({
  hito,
  index,
  isActive,
  onToggle,
}: {
  hito: (typeof HITOS)[0];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const { ref, visible } = useVisible(0.15);
  // Even index → card on LEFT, ghost on RIGHT
  // Odd index  → ghost on LEFT, card on RIGHT
  const cardOnLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid lg:grid-cols-2 lg:gap-0">
      <CenterNode year={hito.year} visible={visible} index={index} />

      {/* LEFT cell */}
      <div
        className={`
          border-b border-gray-200 dark:border-white/[0.07]
          lg:border-b-0 lg:border-r
          ${cardOnLeft
            ? "lg:pr-14 lg:py-14 p-8"
            : "lg:py-8 p-6 order-last lg:order-none"}
        `}
      >
        {cardOnLeft ? (
          <HitoCard hito={hito} visible={visible} active={isActive} onToggle={onToggle} isLeft />
        ) : (
          <DecorativeSide year={hito.year} visible={visible} isLeft />
        )}
      </div>

      {/* RIGHT cell */}
      <div
        className={`
          border-b border-gray-200 dark:border-white/[0.07]
          ${cardOnLeft
            ? "lg:pl-14 lg:py-8 p-6"
            : "lg:pr-14 lg:py-14 p-8"}
        `}
      >
        {cardOnLeft ? (
          <DecorativeSide year={hito.year} visible={visible} isLeft={false} />
        ) : (
          <HitoCard hito={hito} visible={visible} active={isActive} onToggle={onToggle} isLeft={false} />
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────── */
export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggle = (i: number) => setActiveIndex((prev) => (prev === i ? null : i));

  return (
    <>
      <section className="py-28 px-6 lg:px-16 bg-white dark:bg-defensya-navy overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-20 border-b border-gray-200 dark:border-white/[0.07] pb-10">
            <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-3">
              Nuestra Trayectoria
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none
                tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Hitos de Ingeniería
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gray-200 dark:bg-white/[0.07]" />
            <div className="flex flex-col gap-0">
              {HITOS.map((hito, i) => (
                <HitoRow
                  key={i}
                  hito={hito}
                  index={i}
                  isActive={activeIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}