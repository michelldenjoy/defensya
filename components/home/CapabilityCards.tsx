"use client";
import Link from "next/link";

import React, { useState } from "react";

const capabilities = [
  {
    id: 1,
    label: " 01",
    title: "Ingeniería de Sistemas de Misión",
    description:
      "Diseñamos arquitecturas críticas para plataformas aéreas, espaciales y autónomas, integrando subsistemas electrónicos, software y comunicaciones de alta confiabilidad.",
  },
  {
    id: 2,
    label: " 02",
    title: "Electrónica y Sistemas Embebidos",
    description:
      "Desarrollamos hardware especializado, firmware y sistemas en tiempo real optimizados para operar bajo condiciones exigentes y entornos de misión crítica.",
  },
  {
    id: 3,
    label: " 03",
    title: "Percepción Inteligente y Visión Computacional",
    description:
      "Implementamos sistemas de visión artificial y fusión sensorial capaces de interpretar entornos complejos en tiempo real con alta precisión operativa.",
  },
  {
    id: 4,
    label: " 04",
    title: "Inteligencia Artificial Aplicada",
    description:
      "Aplicamos modelos avanzados de inteligencia artificial y aprendizaje automático para automatización, análisis predictivo y autonomía operativa.",
  },
  {
    id: 5,
    label: " 05",
    title: "Procesamiento de Señal y Datos Seguros",
    description:
      "Desarrollamos pipelines robustos para adquisición, procesamiento y protección de datos sensibles en sistemas distribuidos y plataformas críticas.",
  },
  {
    id: 6,
    label: "06",
    title: "Integración y Modernización Tecnológica",
    description:
      "Integramos tecnologías avanzadas en infraestructuras existentes, acelerando capacidades operacionales y procesos de transformación tecnológica.",
  },
];

function Corners({
  size = 14,
  onDark = false,
}: {
  size?: number;
  onDark?: boolean;
}) {
  return (
    <>
      <span
        className="pointer-events-none absolute z-10"
        style={{
          top: 10,
          left: 10,
          width: size,
          height: size,
          borderTop: "2.5px solid rgba(36, 38, 184, 1)",
          borderLeft: "2.5px solid rgba(36, 38, 184, 1)",
        }}
      />
      <span
        className="pointer-events-none absolute z-10"
        style={{
          bottom: 10,
          right: 10,
          width: size,
          height: size,
          borderBottom: "2.5px solid rgba(36, 38, 184, 1)",
          borderRight: "2.5px solid rgba(36, 38, 184, 1)",
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
      {/* ── Tooltip (ahora con fondo azul sólido) ── */}
      <div
        className={`
          absolute bottom-[calc(100%+10px)] left-0 right-0 z-30
          bg-defensya-blue
          border border-white/10
          px-6 py-5
          shadow-xl
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
            borderTop: "2px solid rgba(255,255,255,0.40)",
            borderLeft: "2px solid rgba(255,255,255,0.40)",
          }}
        />
        {/* BR bracket */}
        <span
          className="absolute bottom-0 right-0 w-4 h-4"
          style={{
            borderBottom: "2px solid rgba(255,255,255,0.40)",
            borderRight: "2px solid rgba(255,255,255,0.40)",
          }}
        />

        {/* Label tipo HUD */}
        <p
          className="font-mono text-[10px] tracking-[0.28em] uppercase font-semibold mb-2"
          style={{ color: "rgba(255,255,255,0.50)" }}
        >
          {cap.label} · 
        </p>

        <p
          className="text-lg leading-relaxed font-light"
          style={{ color: "rgba(255,255,255,0.88)" }}
        >
          {cap.description}
        </p>

        {/* Arrow pointing down */}
        <span
          className={`absolute -bottom-[7px] left-1/2 -translate-x-1/2
                      w-3 h-3 rotate-45
                      bg-defensya-blue
                      border-r border-b border-white/10
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

// ─── Main Section  ─────────────────────────────────────────────────────────────

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
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5"></div>
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
            className="text-md md:text-md text-gray-500 dark:text-gray-400 leading-relaxed
                       max-w-md border-l-2 border-defensya-blue/30 pl-5 self-end"
          >
            Transformamos desafíos complejos en soluciones tecnológicas fiables.
            Un centro de innovación dedicado a fortalecer la infraestructura
            técnica de la industria aeroespacial y de defensa.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.id} cap={cap} />
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-px flex-1 bg-gray-200 dark:bg-white/[0.06]" />
          <span
            className="font-mono text-[9px] tracking-[0.35em]
                          text-gray-400 dark:text-gray-500 uppercase"
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

          {/* Ghost label */}
          <span
            className="pointer-events-none absolute bottom-3 right-6 font-mono
                          font-black select-none text-black/[0.03] dark:text-white/[0.03]"
            style={{ fontSize: "6rem", lineHeight: 1 }}
          >
            DSY
          </span>

          <p className="font-mono text-[14px] md:text-[16px] tracking-[0.3em] text-defensya-navy dark:text-white font-semibold uppercase mb-5">
            Nuestro Compromiso
          </p>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light max-w-6xl">
            No solo fabricamos tecnología;{" "}
            <span className="text-gray-900 dark:text-gray-200 font-medium">
              entregamos la fiabilidad operativa necesaria para que
              organizaciones globales operen en entornos críticos.
            </span>{" "}
            En{" "}
            <span className="text-defensya-blue font-semibold">Defensya</span>,
            la excelencia técnica se rige por{" "}
            <Link
              href="/empresa/calidad-certificacion"
              className="text-defensya-blue font-medium underline underline-offset-4 hover:text-blue-400 transition-colors"
            >
              estándares de calidad internacionales
            </Link>
            , garantizando la seguridad en el futuro de la exploración y la
            defensa global.
          </p>

          {/* Bottom meta */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-defensya-blue/30" />
            <span
              className="font-mono text-[10px] tracking-[0.3em]
                            text-gray-500 dark:text-gray-600 uppercase"
            >
              Defensya · Ingeniería Internacional
            </span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </section>
  );
}