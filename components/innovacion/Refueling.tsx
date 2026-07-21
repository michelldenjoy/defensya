"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HaptixSlider from "./HaptixSlider";
import HaptixIntro from "./HaptixIntro";

const HAPTIX_IMAGES = [
  { src: "/products/haptixfrontal.png", label: "Vista Frontal" },
  { src: "/products/haptixback.jpg", label: "Vista Trasera" },
  { src: "/products/haptixside.jpg", label: "Vista Lateral" },
  { src: "/products/haptixangle.png", label: "Vista Angular" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <span className="text-slate-500 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-defensya-steel/20 to-transparent" />
    </div>
  );
}

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

export default function Refueling() {
  const [current, setCurrent] = useState(0);

  return (
    <main
      className="w-full text-gray-900 dark:text-white"
      style={{ fontFamily: "'Share Tech Mono', monospace" }}
    >
      {/* ══ §1 INTRO ════ */}

      <section
        className="relative px-5 sm:px-8 lg:px-16 pt-16 sm:pt-24"
        style={{
          backgroundColor: "var(--bg-intro, #0a1128)",
          paddingBottom: "8rem",
          zIndex: 2,
          position: "relative",
        }}
      >
        {/* bg dark */}
        <div className="absolute inset-0 bg-defensya-navy dark:bg-defensya-navy hidden dark:block pointer-events-none" />
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-40 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-defensya-blue/20 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Eyebrow>Innovación · Reabastecimiento Air-to-Air</Eyebrow>

          <div className="grid lg:grid-cols-[1fr_40%] gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
            <h1
              className="font-bold uppercase leading-[0.88] tracking-[-0.025em] text-white dark:text-white"
              style={{ fontSize: "clamp(2.3rem, 5.0vw, 5.2rem)",
                  fontFamily: "'Barlow Condensed', sans-serif", 
                  letterSpacing: "0.005em"
                 }}
            >
              Ingeniería para
              <br />
              entornos de
              <br />
              <span className="not-italic font-light text-white/45">
                alta seguridad
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/42 dark:text-gray-400 leading-relaxed border-l-2 border-defensya-steel/20 pl-4 sm:pl-5 lg:self-end">
              En Defensya, la innovación es el motor que impulsa nuestro
              compromiso en la industria aeroespacial.{" "}
              <strong className="text-white/80 font-normal">
                Desarrollamos soluciones avanzadas
              </strong>{" "}
               que transforman la defensa y la
              seguridad, desde sistemas de reabastecimiento en vuelo hasta
              patentes innovadoras.
            </p>
          </div>
        </div>

        {/* CUÑA DIAGONAL  */}
        <div
          className="absolute left-0 right-0 bg-slate-50 dark:bg-[#0d2340]"
          style={{
            bottom: "-3rem",
            height: "6rem",
            transform: "skewY(-3deg)",
            transformOrigin: "left bottom",
            zIndex: 3,
          }}
        />
      </section>

      {/* ══ §2 DESAFÍO Y VISIÓN ═══════════════════════════════════════ */}
      <section
        className="relative px-5 sm:px-8 lg:px-16 pb-14 sm:pb-24
                   bg-slate-50 dark:bg-[#0d2340]
                   border-b border-gray-100 dark:border-white/[0.07]"
        style={{
          paddingTop: "5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <h2
            className="font-bold uppercase  leading-[0.9] tracking-tight text-gray-900 dark:text-white mb-10 sm:mb-14"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
            }}
          >
            El reto y nuestra visión
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            <div className="flex flex-col gap-4 sm:gap-6">
              {[
                {
                  num: "01",
                  title: "El desafío",
                  body: "Históricamente, el reabastecimiento aire-aire ha sido una operación manual que requiere una elevada precisión por parte del operador. Aunque esta capacidad actúa como un importante multiplicador de fuerza en las operaciones aéreas, su rendimiento sigue condicionado por los límites del factor humano.",
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
                  <span className="absolute top-0 inset-x-0 h-[2px] bg-defensya-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <h3
                    className="font-bold uppercase leading-none mb-3 text-gray-900 dark:text-white group-hover:text-defensya-blue transition-colors duration-300"
                    style={{
                      fontFamily: "Share Tech Mono",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                    }}
                  >
                    {title}
                  </h3>
                  <div className="h-px w-8 bg-defensya-blue/40 group-hover:w-full transition-all duration-500 mb-4" />
                  <p
                    className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light"
                    style={{ fontFamily: "Share Tech Mono" }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-full overflow-hidden border border-gray-100 dark:border-white/[0.06]"
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

      <HaptixIntro />
      <HaptixSlider />
    </main>
  );
}
