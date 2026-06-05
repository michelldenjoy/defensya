"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Corners({ size = 22, onDark = false }) {
  const accent = onDark ? "rgba(14,165,233,0.35)" : "#0ea5e9";
  const muted = onDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
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

const ventajas = [
  "Mayor precisión en el contacto con la aeronave receptora.",
  "Operaciones de reabastecimiento más rápidas y eficientes.",
  "Reducción del desgaste en los sistemas mecánicos del botalón.",
  "Mayor seguridad en condiciones meteorológicas adversas.",
];

export default function HaptixIntro() {
  return (
    <section
      className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden
                 bg-defensya-navy border-b border-white/[0.07]"
    >
      <div className="tech-grid absolute inset-0 opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r
                      from-transparent via-defensya-blue to-transparent opacity-30"
      />

      {/* ── LEFT: texto ── */}
      <div
        className="relative z-10 flex flex-col justify-center
                      px-6 lg:px-18 pt-20 lg:pt-32 pb-16 lg:pb-20
                      border-r border-white/[0.06]"
      >
        {/* Acento vertical */}
        <span
          className="hidden lg:block pointer-events-none absolute left-0 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom,transparent,#0ea5e9 40%,transparent)",
            opacity: 0.2,
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-8"
        >
          {/* Label de sección */}
          <div className="flex items-center gap-3 ">
            <div className="w-5 h-px bg-defensya-blue/50" />
            <span
              className="text-white/50"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "8.5px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              TECNOLÓGIAS CLAVES
            </span>
            <div className="flex-1 h-px bg-white/[0.09]" />
          </div>
          <h2
            className="font-bold uppercase leading-[0.9] tracking-tight
                       text-gray-100 dark:text-white"
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
            }}
          >
            {" "}
            THE HAPTIX{" "}
          </h2>

          {/* Descripción */}
          <div>
            <p
              className="text-gray-400 leading-[1.85] font-light"
              style={{ fontSize: "0.95rem" }}
            >
              El sistema tradicional de reabastecimiento aéreo exige el uso de
              ambas manos mediante dos joysticks separados, limitando al
              operador y aumentando la fatiga y el error humano en misiones
              prolongadas. Haptix resuelve esto permitiendo controlar el boom
              con una sola mano, con retroalimentación háptica intuitiva que
              reduce el tiempo de contacto, minimiza incidentes y libera la
              segunda mano para la gestión de otros sistemas críticos,
              alcanzando nivel experto en una fracción del tiempo habitual.
            </p>
          </div>

          {/* Ventajas operativas */}
          <div>
            {/* Label de sección */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-defensya-blue/50" />
              <span
                className="text-white/50"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "8.5px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                Ventajas operativas
              </span>
              <div className="flex-1 h-px bg-white/[0.09]" />
            </div>

            {/* Lista */}
            <div className="flex flex-col gap-0">
              {ventajas.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 py-4
                             border-b border-white/[0.06] last:border-b-0
                             hover:bg-white/[0.02] transition-colors duration-200 px-1"
                >
                  <span
                    className="shrink-0 text-defensya-blue mt-[2px]"
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Línea vertical separadora */}
                  <span className="shrink-0 w-px self-stretch bg-defensya-blue/20 group-hover:bg-defensya-blue/50 transition-colors duration-200" />
                  <p
                    className="text-gray-400 leading-relaxed font-light
                               group-hover:text-gray-300 transition-colors duration-200"
                    style={{ fontSize: "0.88rem" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT: imagen ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <Image
          src="/products/haptix2.webp"
          alt="Haptix Control System"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right,rgba(6,13,24,0.35) 0%,transparent 40%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top,rgba(6,13,24,0.85) 0%,transparent 50%)",
          }}
        />

        <Corners size={22} onDark />

        <div className="absolute top-6 right-6 z-20">
          <span
            className="text-white/20 uppercase"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.3em",
            }}
          >
            REF-HPTX/04
          </span>
        </div>

        <svg
          className="absolute top-0 right-0 pointer-events-none z-20"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <line
            x1="0"
            y1="32"
            x2="32"
            y2="0"
            stroke="#0ea5e9"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        </svg>
      </motion.div>
    </section>
  );
}
