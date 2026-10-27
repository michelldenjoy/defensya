"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const HAPTIX_IMAGES = [
  { src: "/products/haptixfrontal.png", label: "Vista Frontal" },
  { src: "/products/haptixback.jpg", label: "Vista Trasera" },
  { src: "/products/haptixside.jpg", label: "Vista Lateral" },
  { src: "/products/haptixangle.png", label: "Vista Angular" },
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
      { k: "Peso", v: "7.0 Kg" },
      { k: "Anchura (W)", v: "260 mm" },
      { k: "Profundidad (D)", v: "230 mm" },
      { k: "Altura (H)", v: "345 mm" },
    ],
  },
  {
    title: "Electrónica e I/O",
    rows: [
      { k: "Voltaje", v: "28V DC" },
      { k: "Norma", v: "MIL-STD-704F" },
      { k: "Protocolo 1", v: "ARINC 429" },
      { k: "Protocolo 2", v: "RS422" },
    ],
  },
  {
    title: "Rango y cumplimiento",
    rows: [
      { k: "Temp. mín.", v: "-55°C" },
      { k: "Temp. máx.", v: "+85°C" },
      { k: "Cert. ambiental", v: "DO-160G" },
      { k: "Cert. software", v: "DO-178C" },
      { k: "Cert. hardware", v: "DO-254" },
    ],
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const ALIGN_RIGHT = "lg:pr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]";

/* ─────────────────────────────────────────────────────────────
   COMPONENTE 
   ───────────────────────────────────────────────────────────── */

export default function HaptixSlider() {
  const [current, setCurrent] = useState(0);
  const total = HAPTIX_IMAGES.length;
  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  return (
    <section
      aria-labelledby="haptix-tech-title"
      className="relative border-t border-white/10 bg-defensya-navy text-white lg:grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2"
    >
      {/* ── Visor ── */}
      <div
        role="region"
        aria-roledescription="carrusel"
        aria-label="Vistas del dispositivo Haptix"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        className="relative flex min-h-[520px] flex-col bg-white outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-defensya-navy/40 lg:min-h-0"
      >
        {/* Lecturas */}
        <div className="flex items-center justify-between px-5 pt-5 text-[11px] tracking-[0.2em] lg:px-8 lg:pt-8" style={MONO}>
          <span className="text-black/55" aria-live="polite">
            {HAPTIX_IMAGES[current].label}
          </span>
          <span className="text-black/35">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Imagen */}
        <div className="relative flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={HAPTIX_IMAGES[current].src}
                alt={`Haptix — ${HAPTIX_IMAGES[current].label}`}
                fill
                sizes=" (max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 lg:p-[5vh]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Miniaturas + flechas */}
        <div className="flex items-end justify-between gap-4 px-5 pb-5 lg:px-8 lg:pb-8">
          <div className="flex gap-2">
            {HAPTIX_IMAGES.map((img, i) => {
              const on = i === current;
              return (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Ver ${img.label}`}
                  aria-pressed={on}
                  className={`relative h-14 w-14 border transition-[opacity,border-color] duration-300 sm:h-16 sm:w-16 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-defensya-navy ${
                    on ? "border-defensya-navy opacity-100" : "border-black/10 opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img.src} alt="" fill sizes="64px" className="object-contain p-1.5" />
                </button>
              );
            })}
          </div>
          <div className="flex gap-1.5">
            {[
              { fn: prev, d: "M9 3L4 8L9 13", label: "Vista anterior" },
              { fn: next, d: "M5 3L10 8L5 13", label: "Vista siguiente" },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={b.fn}
                aria-label={b.label}
                className="flex h-10 w-10 items-center justify-center bg-defensya-navy text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-defensya-navy"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d={b.d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Datos ── */}
      <div className={`flex flex-col justify-center px-6 py-20 lg:py-[6vh] lg:pl-14 ${ALIGN_RIGHT}`}>
        <h2
          id="haptix-tech-title"
          className="text-[clamp(1.9rem,4.8vh,2.9rem)] font-semibold uppercase leading-[0.9] tracking-tight"
        >
          Características técnicas
        </h2>

        <ol className="mt-[clamp(1.25rem,3vh,2rem)] border-t border-white/10">
          {features.map((f) => (
            <li key={f.num} className="grid grid-cols-[2.25rem_1fr] border-b border-white/10 py-[clamp(0.9rem,2.1vh,1.4rem)]">
              <span className="pt-1.5 text-[11px] text-white/40" style={MONO}>
                {f.num}
              </span>
              <div>
                <h3 className="text-[clamp(1.2rem,2.7vh,1.6rem)] font-light leading-tight tracking-tight">{f.titulo}</h3>
                <p className="mt-1.5 max-w-lg text-[14px] leading-relaxed text-white/55">{f.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-[clamp(1.5rem,4vh,2.5rem)] text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
          Especificaciones técnicas
        </p>
        <div className="mt-3 grid gap-x-6 border-t border-white/10 sm:grid-cols-3">
          {specsGroups.map((g) => (
            <div key={g.title}>
              <p className="pb-1.5 pt-3 text-[11px] tracking-[0.15em] text-white/40" style={MONO}>
                {g.title}
              </p>
              <dl>
                {g.rows.map((r) => (
                  <div key={r.k} className="flex items-baseline justify-between gap-3 py-[clamp(0.2rem,0.7vh,0.4rem)]">
                    <dt className="text-[13px] text-white/55">{r.k}</dt>
                    <dd className="whitespace-nowrap text-[12.5px] text-white" style={MONO}>
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}