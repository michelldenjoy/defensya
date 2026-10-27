"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


/* ─────────────────────────────────────────────────────────────
   CONTENIDO
   ───────────────────────────────────────────────────────────── */

const BLOCKS = [
  {
    num: "01",
    title: "El desafío",
    body: "Históricamente, el reabastecimiento aire-aire ha sido una operación manual que requiere una elevada precisión por parte del operador. Aunque esta capacidad actúa como un importante multiplicador de fuerza en las operaciones aéreas, su rendimiento sigue condicionado por los límites del factor humano.",
    status: "Operación manual",
  },
  {
    num: "02",
    title: "Nuestra visión",
    body: "Defensya impulsa la evolución hacia sistemas de reabastecimiento automatizados capaces de mejorar la precisión, reducir riesgos operativos y mantener el rendimiento incluso en condiciones ambientales adversas.",
    status: "Asistencia automatizada",
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const CUT = "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)";

/* Animaciones propias de esta página */
const KEYFRAMES = `
@keyframes reticle-drift {
  0%   { transform: translate(-50%, -50%) translate(-18px, 10px); }
  25%  { transform: translate(-50%, -50%) translate(14px, -16px); }
  50%  { transform: translate(-50%, -50%) translate(22px, 12px); }
  75%  { transform: translate(-50%, -50%) translate(-10px, 18px); }
  100% { transform: translate(-50%, -50%) translate(-18px, 10px); }
}
@keyframes reticle-lock {
  0%   { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
  60%  { opacity: 1; }
  100% { transform: translate(-75%, -30%) scale(1); opacity: 1; }
}
`;

/* ─────────────────────────────────────────────────────────────
   PIEZAS VISUALES
   ───────────────────────────────────────────────────────────── */

/* Retícula grande y tranquila de fondo en la portada (tema: visión) */
function HeroReticle() {
  const ticks = Array.from({ length: 72 }, (_, i) => i);
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      className="pointer-events-none absolute -right-48 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-40 sm:-right-32 lg:-right-10 lg:h-[680px] lg:w-[680px] lg:opacity-60"
    >
      <g className="origin-center animate-[spin_120s_linear_infinite] motion-reduce:animate-none" style={{ transformBox: "fill-box" }}>
        {ticks.map((i) => {
          const long = i % 6 === 0;
          return (
            <line
              key={i}
              x1="300"
              y1={long ? 18 : 26}
              x2="300"
              y2="36"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth={long ? 1.2 : 0.8}
              transform={`rotate(${i * 5} 300 300)`}
            />
          );
        })}
      </g>
      <circle cx="300" cy="300" r="250" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <circle cx="300" cy="300" r="150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 8" />
      <line x1="300" y1="120" x2="300" y2="250" stroke="rgba(255,255,255,0.15)" />
      <line x1="300" y1="350" x2="300" y2="480" stroke="rgba(255,255,255,0.15)" />
      <line x1="120" y1="300" x2="250" y2="300" stroke="rgba(255,255,255,0.15)" />
      <line x1="350" y1="300" x2="480" y2="300" stroke="rgba(255,255,255,0.15)" />
    </svg>
  );
}

/* Visor sobre la foto: deriva en "manual", se fija en "automatizado" */
function VisionOverlay({ locked, status }: { locked: boolean; status: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Marco que se cierra sobre el objetivo */}
      <div
        className="absolute transition-[inset] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ inset: locked ? "30% 28%" : "12% 10%" }}
      >
        {[
          "left-0 top-0 border-l border-t",
          "right-0 top-0 border-r border-t",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((c) => (
          <span
            key={c}
            className={`absolute h-5 w-5 transition-colors duration-700 ${c} ${locked ? "border-white" : "border-white/40"}`}
          />
        ))}
      </div>

      {/* Mira central */}
      <div
        key={locked ? "lock" : "drift"}
        className={`absolute left-1/2 top-1/2 h-14 w-14 ${
          locked
            ? "animate-[reticle-lock_700ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
            : "animate-[reticle-drift_7s_ease-in-out_infinite]"
        } motion-reduce:animate-none`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <span className={`absolute inset-0 rounded-full border ${locked ? "border-white/90" : "border-white/35"}`} />
        <span className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 ${locked ? "bg-white" : "bg-white/40"}`} />
        <span className={`absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 ${locked ? "bg-white" : "bg-white/40"}`} />
        <span className={`absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 ${locked ? "bg-white" : "bg-white/40"}`} />
        <span className={`absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 ${locked ? "bg-white" : "bg-white/40"}`} />
        <span className={`absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full ${locked ? "bg-white" : "bg-white/0"}`} />
      </div>

      {/* Lecturas */}
      <span className="absolute right-5 top-5 text-[11px] tracking-[0.2em] text-white/80 sm:right-6 sm:top-6" style={MONO}>
        {status}
      </span>
      <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.3em] text-white/70 sm:bottom-6 sm:left-6" style={MONO}>
        Aerial Refueling Systems
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PÁGINA
   ───────────────────────────────────────────────────────────── */

export default function Refueling() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);

    // Marca como activo el bloque que está en el centro de la pantalla
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    blockRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const lines = [
    { text: "Ingeniería para", cls: "" },
    { text: "entornos de", cls: "" },
    { text: "alta seguridad", cls: "font-light text-white/45" },
  ];

  return (
    <main className="w-full bg-defensya-navy text-white">
      <style>{KEYFRAMES}</style>

      {/* ══ §1 PORTADA ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-24 pt-36 lg:pb-36 lg:pt-44">
        <HeroReticle />

        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Innovación · Reabastecimiento aire-aire
          </p>

          <h1 className="mt-8 text-[clamp(2.6rem,6vw,5.75rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            {lines.map((l, i) => (
              <span key={l.text} className="block overflow-hidden pb-[0.06em]">
                <span
                  className={`block transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${l.cls} ${
                    mounted ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{ transitionDelay: `${120 + i * 110}ms` }}
                >
                  {l.text}
                </span>
              </span>
            ))}
          </h1>

          <span className="mt-12 block h-px w-12 bg-white/25" />
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/65">
            En Defensya, la innovación es el motor que impulsa nuestro compromiso en la industria aeroespacial.{" "}
            <strong className="font-normal text-white">Desarrollamos soluciones avanzadas</strong> que transforman la defensa y la
            seguridad, desde sistemas de reabastecimiento en vuelo hasta patentes innovadoras.
          </p>
        </div>
      </section>

      {/* ══ §2 EL RETO Y NUESTRA VISIÓN ═════════════════════════ */}
      <section aria-labelledby="reto-title" className="relative border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 id="reto-title" className="text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            El reto y nuestra visión
          </h2>

          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
            {/* Imagen con visor: se queda fija mientras lees (escritorio) */}
            <div className="lg:order-2">
              <div
                className="relative aspect-[4/3] overflow-hidden border border-white/10 lg:sticky lg:top-[15vh] lg:aspect-auto lg:h-[70vh]"
                style={{ clipPath: CUT }}
              >
                <Image
                  src="/images/refueling2.jpeg"
                  alt="Reabastecimiento en vuelo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-[filter,opacity] duration-700 ${
                    active === 1 ? "opacity-90 saturate-100" : "opacity-60 saturate-50"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-defensya-navy/70 via-defensya-navy/10 to-defensya-navy/20" />
                <VisionOverlay locked={active === 1} status={BLOCKS[active].status} />
              </div>
            </div>

            {/* Textos */}
            <div className="lg:order-1">
              {BLOCKS.map((b, i) => (
                <div
                  key={b.num}
                  ref={(el) => {
                    blockRefs.current[i] = el;
                  }}
                  data-index={i}
                  className={`flex flex-col justify-center py-10 transition-opacity duration-700 lg:min-h-[70vh] lg:py-0 ${
                    active === i ? "opacity-100" : "opacity-100 lg:opacity-35"
                  }`}
                >
                  <p className="flex items-baseline gap-4">
                    <span className="text-[13px] text-white/40" style={MONO}>
                      {b.num}
                    </span>
                    <span className="text-[clamp(2.4rem,4.6vw,4.25rem)] font-light leading-[0.95] tracking-tight">
                      {b.title}
                    </span>
                  </p>
                  <span className="mt-7 block h-px w-12 bg-white/25" />
                  <p className="mt-7 max-w-md text-[17px] leading-relaxed text-white/65">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      
    </main>
  );
}