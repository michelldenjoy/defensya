export default function Refueling() {
  return (
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >

      <section className="px-6 lg:px-16 pt-16 pb-28
                          border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-14">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase">
              Innovación — Reabastecimiento Air-to-Air
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_40%] gap-12 lg:gap-20 items-center">
            <h1
              className="text-[clamp(2.8rem,7vw,6rem)] font-bold uppercase
                         leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Innovación en<br />
              Reabastecimiento<br />
              <span className="text-defensya-blue">Air-to-Air</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed lg:pb-2">
              Defensya desarrolla tecnologías avanzadas para automatizar el
              reabastecimiento aire-aire (AAR), mejorando la seguridad, precisión
              y eficiencia de una de las operaciones más complejas de la aviación
              militar.
            </p>
          </div>
        </div>
      </section>

      {/* ── DESAFÍO / VISIÓN ───── */}
      <section className="px-6 lg:px-16 py-24
                          border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">

          <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                        dark:text-gray-500 uppercase mb-12">
            01 — Contexto
          </p>

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x
                          divide-gray-200 dark:divide-white/[0.07]">

            <div className="pb-10 md:pb-0 md:pr-12 lg:pr-20">
              <span className="text-[12px] font-mono text-defensya-blue tracking-widest uppercase mb-5 block">
                01
              </span>
              <h3
                className="text-2xl lg:text-4xl font-bold uppercase leading-none
                           tracking-tight mb-5"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                El desafío
              </h3>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">
                Tradicionalmente, el reabastecimiento aire-aire ha sido una
                operación manual que requiere una elevada precisión por parte del
                operador. Aunque esta capacidad actúa como un importante
                multiplicador de fuerza en las operaciones aéreas, su rendimiento
                sigue condicionado por los límites del factor humano.
              </p>
            </div>

            <div className="pt-10 md:pt-0 md:pl-12 lg:pl-20">
              <span className="text-[12px] font-mono text-defensya-blue tracking-widest uppercase mb-5 block">
                02
              </span>
              <h3
                className="text-2xl lg:text-4xl font-bold uppercase leading-none
                           tracking-tight mb-5"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                Nuestra visión
              </h3>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">
                Defensya impulsa la evolución hacia sistemas de reabastecimiento
                automatizados capaces de mejorar la precisión, reducir riesgos
                operativos y mantener el rendimiento incluso en condiciones
                ambientales adversas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NIVELES DE AUTOMATIZACIÓN ───── */}
      <section className="px-6 lg:px-16 py-24 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-14">
            <div>
              <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-3">
                02 — Automatización
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                           leading-none tracking-tight text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                Niveles de Automatización
              </h2>
            </div>
          </div>

          {/* A3R / A4R */}
          <div className="border-t border-white/8">
            {[
              {
                name: "A3R®",
                tag: "Automated Air-to-Air Refueling",
                desc: "Reabastecimiento aire-aire automatizado donde el sistema de botalón o manguera es controlado automáticamente mientras el operador mantiene funciones de supervisión y puede intervenir en cualquier momento.",
              },
              {
                name: "A4R®",
                tag: "Autonomous Air-to-Air Refueling",
                desc: "Nivel avanzado de automatización donde todas las fases del proceso de reabastecimiento se realizan de forma autónoma, eliminando la necesidad de control activo por parte del operador.",
              },
            ].map(({ name, tag, desc }) => (
              <div
                key={name}
                className="grid sm:grid-cols-[160px_1fr] lg:grid-cols-[200px_220px_1fr]
                           gap-4 lg:gap-8 items-start py-8
                           border-b border-white/8
                           hover:bg-white/3 transition-colors
                           px-2 -mx-2"
              >
                <span
                  className="text-3xl lg:text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {name}
                </span>
                <span className="text-[14px] font-mono tracking-widest text-defensya-blue
                                 uppercase self-center hidden lg:block">
                  {tag}
                </span>
                <p className="text-md text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTAJAS OPERATIVAS ──────── */}
      <section className="px-6 lg:px-16 py-24
                          border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3">
              03 — Beneficios
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Ventajas Operativas
            </h2>
          </div>

          {/* 4-cell grid with shared borders */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4
                          border-t border-l border-gray-200 dark:border-white/[0.07]">
            {[
              "Mayor precisión en el contacto con la aeronave receptora",
              "Operaciones de reabastecimiento más rápidas",
              "Reducción del desgaste en los sistemas mecánicos",
              "Mayor seguridad en condiciones meteorológicas adversas",
            ].map((item, i) => (
              <div
                key={i}
                className="border-b border-r border-gray-200 dark:border-white/[0.07]
                           p-6 lg:p-8 group
                           hover:bg-gray-50 dark:hover:bg-white/2 transition-colors"
              >
                <span className="text-[12px] font-mono text-defensya-blue tracking-widest
                                 uppercase mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECNOLOGÍAS CLAVE ────── */}
      <section className="px-6 lg:px-16 py-24 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-14">
            <div>
              <p className="text-[10px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-3">
                04 — Tecnologías Propietarias
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                           leading-none tracking-tight text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                Tecnologías Clave
              </h2>
            </div>
          </div>

          {/* Boomerang + Haptix — full-width rows */}
          <div className="grid md:grid-cols-2 border-t border-l border-white/8">
            {[
              {
                name: "Boomerang®",
                tag: "Precision Receptacle Location",
                desc: "Tecnología diseñada para mejorar la precisión en la localización del receptáculo de repostaje. Reduce significativamente las latencias del sistema aire-aire, permitiendo operaciones de reabastecimiento estables incluso en condiciones de fuerte turbulencia.",
              },
              {
                name: "Haptix®",
                tag: "Haptic Boom Control",
                desc: "Dispositivo de control manual con retroalimentación háptica que permite controlar el botalón de repostaje de forma natural e intuitiva. Facilita la transición desde operaciones manuales hacia entornos de automatización A3R®.",
              },
            ].map(({ name, tag, desc }) => (
              <div
                key={name}
                className="border-b border-r border-white/8
                           p-8 lg:p-10 group
                           hover:bg-white/3 transition-colors"
              >
                <span className="text-[10px] font-mono tracking-widest text-defensya-blue
                                 uppercase mb-3 block">
                  {tag}
                </span>
                <h3
                  className="text-3xl lg:text-4xl font-bold uppercase leading-none
                             tracking-tight text-white mb-5"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}