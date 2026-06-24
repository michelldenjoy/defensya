"use client";
import Link from "next/link";
import React, { useState } from "react";

const capabilities = [
  {
    id: 1,
    label: "01",
    title: "Ingeniería de Sistemas de Misión",
    description:
      "Diseñamos arquitecturas críticas para plataformas aéreas, espaciales y autónomas, integrando subsistemas electrónicos, software y comunicaciones de alta confiabilidad.",
  },
  {
    id: 2,
    label: "02",
    title: "Electrónica y Sistemas Embebidos",
    description:
      "Desarrollamos hardware especializado, firmware y sistemas en tiempo real optimizados para operar bajo condiciones exigentes y entornos de misión crítica.",
  },
  {
    id: 3,
    label: "03",
    title: "Percepción y Visión Artificial",
    description:
      "Implementamos sistemas de visión artificial y fusión sensorial capaces de interpretar entornos complejos en tiempo real con alta precisión operativa.",
  },
  {
    id: 4,
    label: "04",
    title: "Inteligencia Artificial Aplicada",
    description:
      "Aplicamos modelos avanzados de inteligencia artificial y aprendizaje automático para automatización, análisis predictivo y autonomía operativa.",
  },
  {
    id: 5,
    label: "05",
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

function CapabilityCard({ cap }: { cap: (typeof capabilities)[0] }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip — desktop only */}
      <div
        className={`
          hidden md:block
          absolute bottom-[calc(100%+10px)] left-0 right-0 z-30
          bg-defensya-blue border border-white/10
          px-5 py-5 shadow-xl
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          origin-bottom
          ${hovered
            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
            : "opacity-0 translate-y-3 scale-y-95 pointer-events-none"
          }
        `}
        style={{
          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
        }}
      >
        <span className="absolute top-0 left-0 w-4 h-4"
          style={{ borderTop: "2px solid rgba(255,255,255,0.4)", borderLeft: "2px solid rgba(255,255,255,0.4)" }} />
        <span className="absolute bottom-0 right-0 w-4 h-4"
          style={{ borderBottom: "2px solid rgba(255,255,255,0.4)", borderRight: "2px solid rgba(255,255,255,0.4)" }} />

        <p className="font-mono text-[10px] tracking-[0.28em] uppercase mb-2"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          {cap.label} ·
        </p>
        <p className="text-base sm:text-lg leading-relaxed font-light"
          style={{ color: "rgba(255,255,255,0.88)" }}>
          {cap.description}
        </p>

        <span
          className={`absolute -bottom-[7px] left-1/2 -translate-x-1/2
                      w-3 h-3 rotate-45 bg-defensya-blue border-r border-b border-white/10
                      transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Card */}
      <div
        className={`relative overflow-hidden cursor-pointer md:cursor-default
                    bg-gray-50 dark:bg-white/[0.02]
                    border-0 transition-all duration-300
                    px-5 sm:px-6 py-6 sm:py-7
                    ${hovered || expanded
                      ? "bg-white dark:bg-defensya-blue/[0.05]"
                      : ""
                    }`}
        style={{
          clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
        }}
        onClick={() => setExpanded((v) => !v)}
      >
        <span
          className={`absolute top-0 inset-x-0 h-[2px] bg-defensya-blue
                      transition-transform duration-400 origin-left
                      ${hovered || expanded ? "scale-x-100" : "scale-x-0"}`}
        />
        <span
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300
                      ${hovered || expanded ? "opacity-100" : "opacity-0"}`}
          style={{ background: "linear-gradient(180deg, transparent 40%, rgba(14,165,233,0.04) 100%)" }}
        />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <span
              className={`font-mono text-[10px] tracking-[0.2em] shrink-0 mt-[3px]
                          transition-colors duration-300
                          ${hovered || expanded ? "text-defensya-blue" : "text-gray-400 dark:text-gray-500"}`}
            >
              {cap.label}
            </span>
            <h3
              className={`font-bold uppercase leading-snug tracking-wide
                          transition-colors duration-300
                          ${hovered || expanded ? "text-defensya-blue" : "text-gray-900 dark:text-gray-200"}`}
              style={{ fontSize: "1.05rem" }}
            >
              {cap.title}
            </h3>
          </div>

          <span
            className={`md:hidden shrink-0 mt-[2px] transition-transform duration-300 text-defensya-blue
                        ${expanded ? "rotate-180" : "rotate-0"}`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${expanded ? "max-h-40 mt-4 opacity-100" : "max-h-0 mt-0 opacity-0"}`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">
            {cap.description}
          </p>
        </div>

        <div className="mt-5 h-px bg-gray-100 dark:bg-white/[0.06] overflow-hidden">
          <div
            className={`h-full bg-defensya-blue transition-all duration-500
                        ${hovered || expanded ? "w-full" : "w-0"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function CapabilityCards() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 px-5 sm:px-8 lg:px-16
                 bg-white dark:bg-defensya-navy
                 border-b border-gray-100 dark:border-white/[0.07]"
    >
      {/* Fondo decorativo — overflow-hidden solo aquí */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="relative mb-10 sm:mb-14">

          {/* Watermark CAP */}
          <span
            className="absolute right-0 top-0 font-mono font-black select-none leading-none
                       text-gray-900/[0.03] dark:text-white/[0.03] hidden lg:block"
            style={{ fontSize: "8rem" }}
          >
            CAP
          </span>

          {/* Eyebrow  */}
          <div className="flex items-center gap-3 mb-6">

            <span
              className="text-slate-500 text-slate-500 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase"
       
            >
             Dfsya · Capacidades  
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-defensya-blue/30 to-transparent" />
          </div>

          {/* Título + descriptor */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-center">
            <h2
              className="font-bold uppercase leading-[0.9] tracking-tighter text-gray-900 dark:text-white"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Soluciones de alta {" "}
              <span className="text-defensya-blue">fiabilidad</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed
                         lg:max-w-md border-l-2 border-defensya-blue/50 pl-4 lg:pl-5 lg:self-end">
              Transformamos desafíos complejos en soluciones tecnológicas
              fiables. Un centro de innovación dedicado a fortalecer la
              infraestructura técnica de la industria aeroespacial y de defensa.
            </p>
          </div>
        </div>

        {/* Cards grid — gap-px para separar clipPath sin solapamiento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-100 dark:bg-white/[0.04]">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.id} cap={cap} />
          ))}
        </div>

        {/* CTA gap */}
        {/* <div className="flex justify-end">
          <Link
            href="/productos"
            className="group inline-flex items-center gap-3
                       font-mono text-[10px] tracking-[0.3em] uppercase
                       text-defensya-blue hover:text-blue-400 transition-colors duration-200"
          >
            Ver todos los proyectos
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
}