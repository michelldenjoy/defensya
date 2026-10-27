"use client";

import Image from "next/image";


const ventajas = [
  "Mayor precisión en el contacto con la aeronave receptora.",
  "Operaciones de reabastecimiento más rápidas y eficientes.",
  "Reducción del desgaste en los sistemas mecánicos del botalón.",
  "Mayor seguridad en condiciones meteorológicas adversas.",
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };

const KEYFRAMES = `
@keyframes haptic-pulse {
  0%   { transform: translate(-50%, -50%) scale(0.3); opacity: 0.9; }
  100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
}
`;

/* Alinea el texto con el resto de la web en pantallas muy anchas */
const ALIGN_LEFT = "lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]";


export default function HaptixIntro() {
  return (
    <section
      id="haptix"
      aria-labelledby="haptix-title"
      className="relative scroll-mt-20 border-t border-white/10 bg-defensya-navy text-white lg:grid lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2"
    >
      <style>{KEYFRAMES}</style>

      <div className={`flex flex-col justify-center gap-[clamp(1.25rem,3.4vh,2.5rem)] px-6 py-20 lg:py-[6vh] lg:pr-14 ${ALIGN_LEFT}`}>
        <div>
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Tecnologías clave
          </p>
          <h2 id="haptix-title" className="mt-4 text-[clamp(3rem,9vh,6rem)] font-light leading-[0.9] tracking-tight">
            Haptix®
          </h2>
        </div>

        
        <div className="flex items-center gap-4 border-y border-white/10 py-[clamp(1rem,2.4vh,1.5rem)] sm:gap-6">
          <span className="text-[clamp(2.4rem,6vh,3.75rem)] font-light leading-none text-white/25">2</span>
          <span className="text-[11px] leading-snug tracking-[0.15em] text-white/45" style={MONO}>
            Joysticks
            <br />
            dos manos
          </span>
          <svg aria-hidden width="64" height="12" viewBox="0 0 64 12" fill="none" className="mx-1 shrink-0 text-white/40 sm:mx-3">
            <path d="M0 6h60M55 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="text-[clamp(2.4rem,6vh,3.75rem)] font-light leading-none text-white">1</span>
          <span className="text-[11px] leading-snug tracking-[0.15em] text-white/85" style={MONO}>
            Una sola
            <br />
            mano
          </span>
        </div>

        <div className="max-w-xl space-y-3">
          <p className="text-[15px] leading-relaxed text-white/50">
            El sistema tradicional de reabastecimiento aéreo exige el uso de ambas manos mediante dos joysticks separados,
            limitando al operador y aumentando la fatiga y el error humano en misiones prolongadas.
          </p>
          <p className="text-[16px] leading-relaxed text-white/80">
            Haptix resuelve esto permitiendo{" "}
            <strong className="font-normal text-white">controlar el Boom con una sola mano</strong>, con retroalimentación
            háptica intuitiva que reduce el tiempo de contacto, minimiza incidentes y libera la segunda mano para la gestión de
            otros sistemas críticos, alcanzando nivel experto en una fracción del tiempo habitual.
          </p>
        </div>

        <div>
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Ventajas operativas
          </p>
          <ol className="mt-3 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {ventajas.map((v, i) => (
              <li key={v} className="flex gap-3 border-t border-white/10 py-[clamp(0.7rem,1.6vh,1rem)]">
                <span className="pt-0.5 text-[11px] text-white/40" style={MONO}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] leading-snug text-white/80">{v}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ── Imagen ── */}
      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[8/10] lg:aspect-[6/10] xl:aspect-auto">
        <Image
          src="/products/haptix2.webp"
          alt="Dispositivo de control Haptix"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-defensya-navy/70 via-transparent to-defensya-navy/10" />
        <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-defensya-navy/60 to-transparent lg:block" />

        <span className="absolute bottom-5 left-5 text-[11px] tracking-[0.2em] text-white/75 sm:bottom-6 sm:left-6" style={MONO}>
          Retroalimentación háptica
        </span>
      </div>
    </section>
  );
}