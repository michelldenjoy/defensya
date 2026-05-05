import Link from "next/link";

/*
  Fusiona "Qué Hacemos" + "Capacidades y Soluciones" en una sola sección.

  Estructura:
  ┌─ Header (título + descriptor)
  ├─ 3 pilares principales  (antes "Qué Hacemos")
  ├─ Línea divisora con label
  └─ Grid de 6 capacidades  (antes "Capacidades")
*/

const pilares = [
  {
    num: "01",
    title: "Visión Computacional",
    desc: "Algoritmos avanzados para la detección y seguimiento de activos en condiciones de visibilidad nula.",
  },
  {
    num: "02",
    title: "Smart Refueling",
    desc: "Líderes en automatización del reabastecimiento en vuelo (A3R/A4R) con precisión milimétrica.",
  },
  {
    num: "03",
    title: "Sistemas Críticos",
    desc: "Desarrollo de hardware y software bajo los estándares de seguridad aeronáutica más exigentes.",
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

export default function Capacidades() {
  return (
    <section className="px-6 lg:px-16 py-28 bg-white dark:bg-defensya-navy
                        border-b border-gray-100 dark:border-white/[0.07]">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-defensya-blue" />
              <span className="font-mono text-[11px] tracking-[0.35em] text-defensya-blue uppercase">
                Capacidades
              </span>
            </div>
            <h2
              className="font-bold uppercase leading-[0.9] tracking-tight
                         text-gray-900 dark:text-white"
              style={{
                fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
              }}
            >
              Sistemas de alto
              <br />
              <span className="text-defensya-blue">rendimiento</span>
            </h2>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                       max-w-sm border-l-2 border-defensya-blue/30 pl-5 self-end mb-1">
            Cubrimos el stack completo, desde el diseño electrónico hasta la
            inteligencia artificial embarcada, con aplicación directa en
            entornos de alta exigencia.
          </p>
        </div>

        {/* ── 3 Pilares ── */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {pilares.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className="relative group p-7
                         bg-gray-50 dark:bg-white/[0.02]
                         border border-gray-100 dark:border-white/[0.06]
                         hover:bg-white dark:hover:bg-white/[0.04]
                         hover:border-defensya-blue/30
                         transition-all duration-300"
              style={{
                clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Top line on hover */}
              <span className="absolute top-0 inset-x-0 h-[2px] bg-defensya-blue
                              scale-x-0 group-hover:scale-x-100
                              transition-transform duration-400 origin-left" />

              {/* Ghost number */}
              <span
                className="absolute top-2 right-4 font-mono font-black select-none
                           text-black/[0.04] dark:text-white/[0.04]
                           group-hover:text-defensya-blue/[0.08] transition-colors duration-500"
                style={{ fontSize: "5rem", lineHeight: 1 }}
              >
                {num}
              </span>

              {/* Num tag */}
              <span className="inline-flex mb-5 font-mono text-[10px] tracking-[0.3em]
                              text-defensya-blue border border-defensya-blue/30
                              px-2 py-[3px] uppercase">
                {num}
              </span>

              <h3
                className="text-xl font-bold uppercase leading-tight mb-3
                           text-gray-900 dark:text-white
                           group-hover:text-defensya-blue transition-colors duration-300"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                {title}
              </h3>

              {/* Expanding divider */}
              <div className="h-px w-8 bg-defensya-blue/40 group-hover:w-full
                             transition-all duration-500 mb-4" />

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                           group-hover:text-gray-700 dark:group-hover:text-gray-300
                           transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Divider with label ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.06]" />
          <span className="font-mono text-[9px] tracking-[0.35em]
                          text-gray-400 dark:text-gray-600 uppercase whitespace-nowrap">
            Stack tecnológico
          </span>
          <div className="h-px w-12 bg-defensya-blue/30" />
        </div>

        {/* ── Capacidades grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3
                        border-t border-l
                        border-gray-100 dark:border-white/[0.07]">
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
              <span className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px]
                              bg-defensya-blue scale-y-0 group-hover:scale-y-100
                              transition-transform duration-300 origin-top" />

              <span className="text-sm font-medium text-gray-700 dark:text-gray-300
                             group-hover:text-gray-900 dark:group-hover:text-white
                             transition-colors duration-200">
                {cap}
              </span>

              <span className="font-mono text-[10px] text-gray-300 dark:text-white/20
                             group-hover:text-defensya-blue transition-colors duration-200">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom meta ── */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.04]" />
          <span className="font-mono text-[10px] tracking-[0.3em]
                          text-gray-400 dark:text-gray-700 uppercase">
            Defensya · Ingeniería de Defensa
          </span>
          <div className="h-px w-12 bg-defensya-blue/30" />
        </div>
      </div>
    </section>
  );
}