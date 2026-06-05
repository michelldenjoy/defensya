"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────────── */
const HAPTIX_IMAGES = [
  { src: "/products/haptixfrontal.png", label: "Vista Frontal" },
  { src: "/products/haptixback.jpg",    label: "Vista Trasera" },
  { src: "/products/haptixside.jpg",    label: "Vista Lateral" },
  { src: "/products/haptixangle.png",   label: "Vista Angular" },
];

const features = [
  {
    num: "01",
    titulo: "Efectores Hápticos",
    desc: "Motores y engranajes coordinados que vibran y bloquean movimientos peligrosos para advertir al operador de forma física.",
  },
  {
    num: "02",
    titulo: "Protección de Envolvente",
    desc: "Sensores que evitan colisiones y guían al operador para permanecer dentro de los límites operativos del Boom.",
  },
  {
    num: "03",
    titulo: "Sincronía con BCU",
    desc: "Comunicación en tiempo real con la Boom Control Unit para posicionar el botalón en sincronía exacta con la mano del Boomer.",
  },
];

const specsGroups = [
  {
    title: "Dimensiones y peso",
    rows: [
      { k: "Peso",            v: "7.0 Kg" },
      { k: "Anchura (W)",     v: "260 mm" },
      { k: "Profundidad (D)", v: "230 mm" },
      { k: "Altura (H)",      v: "345 mm" },
    ],
  },
  {
    title: "Electrónica e I/O",
    rows: [
      { k: "Voltaje",     v: "28V DC" },
      { k: "Norma",       v: "MIL-STD-704F" },
      { k: "Protocolo 1", v: "ARINC 429" },
      { k: "Protocolo 2", v: "RS422" },
    ],
  },
  {
    title: "Rango y cumplimiento",
    rows: [
      { k: "Temp. mín.",      v: "-55°C" },
      { k: "Temp. máx.",      v: "+85°C" },
      { k: "Cert. ambiental", v: "DO-160G" },
      { k: "Cert. software",  v: "DO-178C" },
      { k: "Cert. hardware",  v: "DO-254" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────
   SEPARADOR DE SECCIÓN
───────────────────────────────────────────────────────────────── */
function SecRule({ label, dark = true }: { label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-5 h-px bg-defensya-blue/50" />
      <span
        className={dark ? "text-white/25" : "text-black/30"}
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "8.5px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <div className={`flex-1 h-px ${dark ? "bg-white/[0.05]" : "bg-black/[0.07]"}`} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────── */
export default function HaptixSlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p - 1 + HAPTIX_IMAGES.length) % HAPTIX_IMAGES.length);
  const next = () => setCurrent((p) => (p + 1) % HAPTIX_IMAGES.length);

  return (
    <section className="relative overflow-hidden border-b border-white/[0.07]">

      {/* ── SPLIT completo: blanco izquierda / navy derecha ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ════ LEFT — fondo BLANCO, título + slider ════ */}
        <div className="bg-white px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16 pb-10 sm:pb-14 flex flex-col justify-center">

          <SecRule label="Vista del dispositivo" dark={false} />

          {/* Imagen slider */}
          <div className="relative group mb-4">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-px pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, transparent 60%)",
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
              }}
            />

            <div
              className="relative overflow-hidden bg-slate-100"
              style={{
                aspectRatio: "3/4",
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={HAPTIX_IMAGES[current].src}
                    alt={HAPTIX_IMAGES[current].label}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Corners */}
              <span className="pointer-events-none absolute z-20 top-[10px] left-[10px] w-[18px] h-[18px]"
                style={{ borderTop: "1.5px solid #0ea5e9", borderLeft: "1.5px solid #0ea5e9" }} />
              <span className="pointer-events-none absolute z-20 bottom-[10px] right-[10px] w-[18px] h-[18px]"
                style={{ borderBottom: "1.5px solid rgba(14,165,233,0.45)", borderRight: "1.5px solid rgba(14,165,233,0.45)" }} />

              {/* View tag */}
              <div className="absolute top-[10px] left-[10px] z-30">
                <span
                  className="bg-white/90 text-defensya-blue border border-defensya-blue/30 px-2 py-[3px]"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "8px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {HAPTIX_IMAGES[current].label}
                </span>
              </div>

              {/* Counter */}
              <div className="absolute top-[10px] right-[10px] z-30">
                <span
                  className="text-black/25"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                  }}
                >
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(HAPTIX_IMAGES.length).padStart(2, "0")}
                </span>
              </div>

              {/* Ghost number */}
              <span
                className="pointer-events-none absolute bottom-3 right-4 font-mono font-black
                           select-none text-black/[0.04] leading-none"
                style={{ fontSize: "5rem" }}
              >
                {String(current + 1).padStart(2, "0")}
              </span>

              {/* Barra de progreso */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-slate-200 z-20">
                <motion.div
                  className="h-full bg-defensya-blue"
                  initial={false}
                  animate={{ width: `${((current + 1) / HAPTIX_IMAGES.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Flechas hover */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-30
                             opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {[
                  { fn: prev, d: "M9 3L4 8L9 13" },
                  { fn: next, d: "M5 3L10 8L5 13" },
                ].map((btn, i) => (
                  <button
                    key={i}
                    onClick={btn.fn}
                    className="w-10 h-10 flex items-center justify-center
                               border border-black/10 bg-white/80
                               text-slate-500 hover:border-defensya-blue hover:text-defensya-blue
                               transition-all duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d={btn.d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbs */}
          <div className="flex gap-1.5 mb-3">
            {HAPTIX_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-1 h-[3px] transition-all duration-300 ${
                  i === current ? "bg-defensya-blue" : "bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex gap-2">
            {[
              { fn: prev, d: "M9 3L4 8L9 13" },
              { fn: next, d: "M5 3L10 8L5 13" },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={btn.fn}
                className="w-9 h-9 flex items-center justify-center
                           border border-black/10 bg-transparent
                           text-slate-400 hover:border-defensya-blue hover:text-defensya-blue
                           transition-all duration-200"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d={btn.d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* ════ RIGHT — fondo NAVY, descripción + features + specs ════ */}
        <div className="bg-defensya-navy px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16 pb-10 sm:pb-14 flex flex-col justify-center
                        border-t lg:border-t-0 lg:border-l border-white/[0.07]">

          {/* Features */}
          <SecRule label="Características técnicas" />
          <div className="mb-10">
            {features.map((f, i) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex gap-4 py-4
                           border-b border-white/[0.06] last:border-b-0
                           hover:bg-white/[0.02] transition-colors duration-200 px-1"
              >
                {/* Barra lateral de acento */}
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-defensya-blue
                                 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <span
                  className="shrink-0 text-defensya-blue mt-[2px]"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                  }}
                >
                  {f.num}
                </span>
                <div>
                  <h4
                    className="font-bold uppercase leading-none text-white mb-2
                               group-hover:text-defensya-blue transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                      fontSize: "1rem",
                    }}
                  >
                    {f.titulo}
                  </h4>
                  <p
                    className="font-light leading-[1.65] text-gray-400
                               group-hover:text-gray-300 transition-colors duration-300"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specs */}
          <SecRule label="Especificaciones técnicas" />
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ background: "rgba(14,165,233,0.07)" }}
          >
            {specsGroups.map(({ title, rows }) => (
              <div key={title} className="bg-defensya-navy p-4">
                <div
                  className="text-white/22 border-b border-white/[0.05] pb-2 mb-3"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "8px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  {title}
                </div>
                {rows.map(({ k, v }) => (
                  <div
                    key={k}
                    className="flex justify-between items-baseline py-[4px]
                               border-b border-white/[0.04] last:border-b-0"
                  >
                    <span className="font-light text-white/32" style={{ fontSize: "0.75rem" }}>
                      {k}
                    </span>
                    <span
                      className="font-bold text-defensya-blue"
                      style={{
                        fontFamily: "'Share Tech Mono', monospace",
                        fontSize: "10px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
