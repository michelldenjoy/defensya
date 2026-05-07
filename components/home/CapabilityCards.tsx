"use client";

import React, { useState } from "react";

/*
  Sección LIGHT por defecto — bg-white / dark:bg-defensya-navy
  Sin blink dots · Paleta: defensya-blue, defensya-navy, white, black
*/

const capabilities = [
  {
    id: 1,
    label: "CAP_01",
    title: "Ingeniería de Sistemas de Misión",
    description:
      "Diseñamos y optimizamos arquitecturas complejas para plataformas aéreas y espaciales, garantizando que cada componente opere en perfecta armonía bajo las condiciones más extremas.",
  },
  {
    id: 2,
    label: "CAP_02",
    title: "Inteligencia y Percepción Avanzada",
    description:
      "Somos especialistas en visión artificial aplicada, permitiendo que los sistemas autónomos e instrumentales interpreten su entorno con precisión quirúrgica y en tiempo real.",
  },
  {
    id: 3,
    label: "CAP_03",
    title: "Desarrollo de Software Crítico",
    description:
      "Creamos el sistema nervioso de la tecnología moderna. Nuestro software está diseñado bajo estándares de seguridad donde el margen de error es inexistente.",
  },
  {
    id: 4,
    label: "CAP_04",
    title: "Consultoría e Integración Tecnológica",
    description:
      "Acompañamos a nuestros clientes en la modernización de sus flotas, integrando tecnologías disruptivas en estructuras existentes para elevar sus capacidades tácticas.",
  },
];


const capacidades = [
    "Diseño Electrónico",
    "Sistemas Embebidos",
    "Procesamiento de Señal",
    "Sistemas de Visión",
    "IA y Aprendizaje Automático",
    "Sistemas de Datos Seguros",
  ];

// ─── Corner Brackets ──────────────────────────────────────────────────────────

function Corners({
  size = 14,
  onDark = false,
}: {
  size?: number;
  onDark?: boolean;
}) {
  const muted = onDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  return (
    <>
      <span
        className="pointer-events-none absolute z-10"
        style={{
          top: 10,
          left: 10,
          width: size,
          height: size,
          borderTop: "1.5px solid #0ea5e9",
          borderLeft: "1.5px solid #0ea5e9",
        }}
      />

      <span
        className="pointer-events-none absolute z-10"
        style={{
          bottom: 10,
          right: 10,
          width: size,
          height: size,
          borderBottom: "1.5px solid rgba(14,165,233,0.45)",
          borderRight: "1.5px solid rgba(14,165,233,0.45)",
        }}
      />
    </>
  );
}

// ─── Capability Card ──────────────────────────────────────────────────────────

function CapabilityCard({ cap }: { cap: (typeof capabilities)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Tooltip popup ── */}
      <div
        className={`
          absolute bottom-[calc(100%+10px)] left-0 right-0 z-30
          bg-white dark:bg-defensya-navy
          border border-defensya-blue/30
          px-6 py-5
          shadow-xl dark:shadow-none
          transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
          origin-bottom
          ${
            hovered
              ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
              : "opacity-0 translate-y-3 scale-y-95 pointer-events-none"
          }
        `}
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
        }}
      >
        {/* TL bracket */}
        <span
          className="absolute top-0 left-0 w-4 h-4"
          style={{
            borderTop: "1.5px solid #0ea5e9",
            borderLeft: "1.5px solid #0ea5e9",
          }}
        />
        {/* BR bracket */}
        <span
          className="absolute bottom-0 right-0 w-4 h-4"
          style={{
            borderBottom: "1.5px solid rgba(14,165,233,0.4)",
            borderRight: "1.5px solid rgba(14,165,233,0.4)",
          }}
        />

        {/* Label */}
        <p className="font-mono text-[9px] tracking-[0.3em] text-defensya-blue uppercase mb-3">
          {cap.label}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {cap.description}
        </p>

        {/* Arrow pointing down */}
        <span
          className={`absolute -bottom-[7px] left-1/2 -translate-x-1/2
                      w-3 h-3 rotate-45
                      bg-white dark:bg-defensya-navy
                      border-r border-b border-defensya-blue/30
                      transition-opacity duration-300
                      ${hovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* ── Main card ── */}
      <div
        className={`relative overflow-hidden cursor-default
                    bg-gray-50 dark:bg-white/[0.02]
                    border transition-all duration-300
                    px-6 py-7
                    ${
                      hovered
                        ? "border-defensya-blue/50 bg-white dark:bg-defensya-blue/[0.05]"
                        : "border-gray-100 dark:border-white/[0.07]"
                    }`}
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
        }}
      >
        {/* Top accent line */}
        <span
          className={`absolute top-0 inset-x-0 h-[2px] bg-defensya-blue
                      transition-transform duration-400 origin-left
                      ${hovered ? "scale-x-100" : "scale-x-0"}`}
        />

        {/* Scan line */}
        <span
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300
                      ${hovered ? "opacity-100" : "opacity-0"}`}
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(14,165,233,0.04) 100%)",
          }}
        />

        {/* Ghost number */}
        <span
          className={`pointer-events-none absolute top-2 right-3 font-mono font-black
                      select-none transition-colors duration-500
                      ${
                        hovered
                          ? "text-defensya-blue/[0.10]"
                          : "text-black/[0.04] dark:text-white/[0.04]"
                      }`}
          style={{ fontSize: "3.5rem", lineHeight: 1 }}
        >
          {cap.id.toString().padStart(2, "0")}
        </span>

        {/* Label pill */}
        <span
          className={`inline-flex mb-5 font-mono text-[10px] tracking-[0.25em]
                      border px-2 py-[3px] uppercase transition-colors duration-300
                      ${
                        hovered
                          ? "text-defensya-blue border-defensya-blue/40"
                          : "text-gray-400 dark:text-gray-600 border-gray-200 dark:border-white/[0.10]"
                      }`}
        >
          {cap.label}
        </span>

        {/* Title */}
        <h3
          className={`text-base font-bold uppercase leading-snug tracking-wide
                      transition-colors duration-300
                      ${
                        hovered
                          ? "text-defensya-blue"
                          : "text-gray-900 dark:text-gray-200"
                      }`}
          style={{
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            fontSize: "1.1rem",
          }}
        >
          {cap.title}
        </h3>

        {/* Expanding bottom bar */}
        <div className="mt-5 h-px bg-gray-100 dark:bg-white/[0.06] overflow-hidden">
          <div
            className={`h-full bg-defensya-blue transition-all duration-500
                        ${hovered ? "w-full" : "w-0"}`}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function CapabilityCards() {
  return (
    <section
      className="relative w-full overflow-hidden py-28 px-6 lg:px-16
                 bg-white dark:bg-defensya-navy
                 border-b border-gray-100 dark:border-white/[0.07]"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      {/* Tech grid — visible only in dark */}
      <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-defensya-blue" />
              <span className="font-mono text-[11px] tracking-[0.35em] text-defensya-blue uppercase">
                Defensya · Ecosistema de Servicios
              </span>
            </div>
            <h2
              className="font-bold uppercase leading-[0.9] tracking-tight
                         text-gray-900 dark:text-white"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
              }}
            >
              Soluciones de
              <br />
              <span className="text-defensya-blue">alta fiabilidad</span>
            </h2>
          </div>

          <p
            className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                       max-w-sm border-l-2 border-defensya-blue/30 pl-5 self-end mb-1"
          >
            Transformamos desafíos complejos en soluciones tecnológicas fiables.
            Un centro de innovación dedicado a fortalecer la infraestructura
            técnica de la industria aeroespacial y de defensa.
          </p>
        </div>

        {/* ── Capabilities label row ── */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="font-mono text-[9px] tracking-[0.35em]
                          text-gray-400 dark:text-gray-600 uppercase whitespace-nowrap"
          >
            Capacidades Operativas
          </span>
          <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.06]" />
          <span className="font-mono text-[10px] text-defensya-blue">
            {String(capabilities.length).padStart(2, "0")} servicios
          </span>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.id} cap={cap} />
          ))}
        </div>
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3
                        border-t border-l
                        border-gray-100 dark:border-white/[0.07]"
        >
          {capacidades.map((cap, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-between
                         border-b border-r
                         border-gray-100 dark:border-white/[0.07]
                         px-6 py-5
                         hover:bg-gray-50 dark:hover:bg-white/[0.03]
                         transition-colors duration-200"
            >
              {/* Left accent bar */}
              <span
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px]
                              bg-defensya-blue scale-y-0 group-hover:scale-y-100
                              transition-transform duration-300 origin-top"
              />

              <span
                className="text-sm font-medium text-gray-700 dark:text-gray-300
                             group-hover:text-gray-900 dark:group-hover:text-white
                             transition-colors duration-200"
              >
                {cap}
              </span>

              <span
                className="font-mono text-[10px] text-gray-300 dark:text-white/20
                             group-hover:text-defensya-blue transition-colors duration-200"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gray-200 dark:bg-white/[0.06]" />
          <span
            className="font-mono text-[9px] tracking-[0.35em]
                          text-gray-400 dark:text-gray-600 uppercase"
          >
            Commitment
          </span>
          <div className="h-px w-12 bg-defensya-blue/30" />
        </div>

        {/* ── Commitment block ── */}
        <div
          className="relative p-8 sm:p-10 lg:p-14
                     bg-slate-200/70 dark:bg-white/[0.02]
                     border border-gray-100 dark:border-white/[0.07]"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
          }}
        >
          <Corners size={18} />

          {/* Diagonal accent */}
          <svg
            className="absolute top-0 right-0 pointer-events-none"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <line
              x1="0"
              y1="30"
              x2="30"
              y2="0"
              stroke="#0ea5e9"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
          </svg>

          {/* Ghost label */}
          <span
            className="pointer-events-none absolute bottom-3 right-6 font-mono
                          font-black select-none text-black/[0.03] dark:text-white/[0.03]"
            style={{ fontSize: "6rem", lineHeight: 1 }}
          >
            DSY
          </span>

          <p className="font-mono text-[14px] md:text-[20px] tracking-[0.3em] text-defensya-navy font-semibold uppercase mb-5">
            Nuestro Compromiso
          </p>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light max-w-3xl">
            No solo fabricamos tecnología;{" "}
            <span className="text-gray-900 dark:text-gray-200 font-medium">
              entregamos la confianza necesaria para que organizaciones globales
              operen en la vanguardia del sector.
            </span>{" "}
            En{" "}
            <span className="text-defensya-blue font-semibold">Defensya</span>,
            la innovación no es un objetivo,{" "}
            <span className="text-gray-900 dark:text-gray-200 font-medium">
              es el motor con el que impulsamos el futuro de la exploración y la
              seguridad internacional.
            </span>
          </p>

          {/* Bottom meta */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-defensya-blue/30" />
            <span
              className="font-mono text-[10px] tracking-[0.3em]
                            text-gray-400 dark:text-gray-600 uppercase"
            >
              Defensya · Ingeniería Internacional
            </span>
            <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </section>
  );
}
