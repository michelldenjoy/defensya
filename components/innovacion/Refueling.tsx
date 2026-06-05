"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HaptixSlider from "./HaptixSlider";
import HaptixIntro from "./HaptixIntro";

/* ─────────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────────── */
const ventajas = [
  "Mayor precisión en el contacto con la aeronave receptora.",
  "Operaciones de reabastecimiento más rápidas y eficientes.",
  "Reducción del desgaste en los sistemas mecánicos del botalón.",
  "Mayor seguridad en condiciones meteorológicas adversas.",
];

const HAPTIX_IMAGES = [
  { src: "/products/haptixfrontal.png", label: "Vista Frontal" },
  { src: "/products/haptixback.jpg", label: "Vista Trasera" },
  { src: "/products/haptixside.jpg", label: "Vista Lateral" },
  { src: "/products/haptixangle.png", label: "Vista Angular" },
];

/** Eyebrow  */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <span
        className="w-[6px] h-[6px] bg-defensya-blue shrink-0"
        style={{ transform: "rotate(45deg)" }}
      />
      <span
        className="text-defensya-blue"
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-defensya-blue/40 to-transparent" />
    </div>
  );
}

/** Corners cards */
function Corners({ size = 16, dim = false }: { size?: number; dim?: boolean }) {
  const accent = dim ? "rgba(14,165,233,0.35)" : "#0ea5e9";
  const muted = dim ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  return (
    <>
      <span
        className="pointer-events-none absolute z-20"
        style={{
          top: 10,
          left: 10,
          width: size,
          height: size,
          borderTop: `1.5px solid ${accent}`,
          borderLeft: `1.5px solid ${accent}`,
        }}
      />
      <span
        className="pointer-events-none absolute z-20"
        style={{
          bottom: 10,
          left: 10,
          width: size,
          height: size,
          borderBottom: `1px solid ${muted}`,
          borderLeft: `1px solid ${muted}`,
        }}
      />
      <span
        className="pointer-events-none absolute z-20"
        style={{
          bottom: 10,
          right: 10,
          width: size,
          height: size,
          borderBottom: `1.5px solid rgba(14,165,233,0.45)`,
          borderRight: `1.5px solid rgba(14,165,233,0.45)`,
        }}
      />
    </>
  );
}

/** ClipButton  */
function ClipLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  const clip =
    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))";
  return (
    <Link
      href={href}
      className={`group/btn relative inline-flex items-center gap-3 px-6 py-3.5
                  text-[11px] tracking-[0.25em] uppercase font-bold
                  transition-colors duration-200
                  ${
                    dark
                      ? "bg-defensya-blue text-white hover:bg-defensya-blue/80"
                      : "bg-defensya-navy-light dark:bg-defensya-blue text-white hover:bg-defensya-blue"
                  }`}
      style={{ clipPath: clip }}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200"
      >
        <path
          d="M2 6h8M7 3l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="pointer-events-none absolute bottom-0 right-0 bg-white/25"
        style={{
          width: "14px",
          height: "1px",
          transformOrigin: "bottom right",
          transform: "rotate(-45deg) translateX(4px)",
        }}
      />
    </Link>
  );
}

function SectionHeader({
  eyebrow,
  title,
  accent,
  tag,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  tag?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-[12px] tracking-[0.35em] text-slate-400 uppercase">
          {eyebrow}
        </span>
        {tag && (
          <span
            className="ml-2 font-mono text-[10px] tracking-[0.2em] border border-defensya-blue/30
                          text-defensya-blue px-2 py-[2px] uppercase"
          >
            {tag}
          </span>
        )}
      </div>
      <h2
        className={`font-bold uppercase leading-[0.9] tracking-tight
          ${onDark ? "text-white" : "text-gray-900 dark:text-white"}`}
        style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontSize: "clamp(2.4rem, 5vw, 4rem)",
        }}
      >
        {title}
        {accent && (
          <>
            <br />
            <span className="text-defensya-blue">{accent}</span>
          </>
        )}
      </h2>
    </div>
  );
}

export default function Refueling() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % HAPTIX_IMAGES.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + HAPTIX_IMAGES.length) % HAPTIX_IMAGES.length);

  return (
    <main
      className="w-full text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      {/* ══ §1 INTRO ════════════════════════════════════════════════ */}
      <section
        className="relative px-5 sm:px-8 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-20
                          overflow-hidden bg-white dark:bg-defensya-navy
                          border-b border-gray-100 dark:border-white/[0.07]"
      >
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r
                        from-transparent via-defensya-blue/20 to-transparent"
        />

        <div className="max-w-7xl mx-auto relative">
          <Eyebrow>Innovación · Reabastecimiento Air-to-Air</Eyebrow>

          {/* Heading + bajada */}
          <div className="grid lg:grid-cols-[1fr_40%] gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
            <h1
              className="font-bold uppercase leading-[0.88] tracking-[-0.025em]
                         text-gray-900 dark:text-white"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
              }}
            >
              Ingeniería para
              <br />
              entornos de
              <br />
              <span className="text-defensya-blue">alta seguridad</span>
            </h1>

            <p
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed
                          border-l-2 border-defensya-blue/30 pl-4 sm:pl-5 lg:self-end"
            >
              En Defensya, la innovación es el motor que impulsa nuestro
              compromiso en la industria aeroespacial. Desarrollamos soluciones
              avanzadas que transforman la defensa y la seguridad, desde
              sistemas de reabastecimiento en vuelo hasta patentes innovadoras.
            </p>
          </div>

          {/* linea final */}
          <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-defensya-blue/40 to-transparent" />
        </div>
      </section>

      {/* ══ §2 DESAFÍO Y VISIÓN ══════════════════════════════════════
          Contexto operativo — sobre fondo claro neutro
      ════════════════════════════════════════════════════════════ */}
      <section
        className="relative px-5 sm:px-8 lg:px-16 py-14 sm:py-24
                          overflow-hidden bg-slate-50 dark:bg-defensya-navy
                          border-b border-gray-100 dark:border-white/[0.07]"
      >
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <h2
            className="font-bold uppercase leading-[0.9] tracking-tight
                       text-gray-900 dark:text-white mb-10 sm:mb-14"
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
            }}
          >
            El reto y nuestra visión
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            {/* Cards desafío + visión */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {[
                {
                  num: "01",
                  title: "El desafío",
                  body: "Tradicionalmente, el reabastecimiento aire-aire ha sido una operación manual que requiere una elevada precisión por parte del operador. Aunque esta capacidad actúa como un importante multiplicador de fuerza en las operaciones aéreas, su rendimiento sigue condicionado por los límites del factor humano.",
                },
                {
                  num: "02",
                  title: "Nuestra visión",
                  body: "Defensya impulsa la evolución hacia sistemas de reabastecimiento automatizados capaces de mejorar la precisión, reducir riesgos operativos y mantener el rendimiento incluso en condiciones ambientales adversas.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  className="relative overflow-hidden p-6 sm:p-8 group flex-1
                             bg-white dark:bg-white/[0.02]
                             border border-gray-100 dark:border-white/[0.06]
                             transition-colors duration-300"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
                  }}
                >
                  <Corners size={14} />

                  {/* Línea de acento superior */}
                  <span
                    className="absolute top-0 inset-x-0 h-[2px] bg-defensya-blue
                                   scale-x-0 group-hover:scale-x-100
                                   transition-transform duration-500 origin-left"
                  />

                  <span
                    className="inline-flex mb-4 sm:mb-5 text-defensya-blue
                               border border-defensya-blue/30 px-2 py-[3px]"
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    {num}
                  </span>

                  <h3
                    className="font-bold uppercase leading-none mb-3
                               text-gray-900 dark:text-white
                               group-hover:text-defensya-blue transition-colors duration-300"
                    style={{
                      fontFamily:
                        "var(--font-display, 'Barlow Condensed', sans-serif)",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    }}
                  >
                    {title}
                  </h3>

                  <div
                    className="h-px w-8 bg-defensya-blue/40 group-hover:w-full
                                  transition-all duration-500 mb-4"
                  />

                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            {/* Imagen */}
            <div
              className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-full overflow-hidden
                         border border-gray-100 dark:border-white/[0.06]"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/images/refueling2.jpeg"
                alt="Air-to-Air Refueling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <Corners size={16} dim />
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10">
                <span
                  className="text-white/80"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Aerial Refueling Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*------------ HAPTIX ------------------- */}
      <HaptixIntro />
      <HaptixSlider />
    </main>
  );
}
