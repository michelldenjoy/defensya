import Link from "next/link";

function Rule() {
  return <hr className="border-t border-gray-200 dark:border-white/[0.07]" />;
}

export default function Sostenibilidad() {
  return (
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <section
        className="px-6 lg:px-16 pt-16 pb-28
                          border-b border-gray-200 dark:border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase">
              Empresa — Sostenibilidad
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
            <h1
              className="text-[clamp(2.8rem,7vw,6rem)] font-bold uppercase
                         leading-[0.95] tracking-tight"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Compromiso
              <br />
              Ambiental y<br />
              <span className="text-defensya-blue">Sostenibilidad</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed lg:pb-2">
              En Defensya Ingeniería Internacional, la calidad de nuestros
              servicios y la protección del entorno son pilares inseparables.
              Operamos bajo un Sistema de Gestión de Calidad y Medio Ambiente
              diseñado para optimizar cada proceso, garantizando la satisfacción
              del cliente y la preservación de los recursos naturales. Este
              compromiso, respaldado por todo nuestro equipo, asegura que cada
              solución tecnológica contribuya a la rentabilidad y continuidad de
              la empresa desde una perspectiva responsable. Nos enfocamos en los
              siguientes objetivos estratégicos:
            </p>
          </div>
        </div>
      </section>

      {/* ── DECLARACIÓN ───── */}
      {/* <section
        className="px-6 lg:px-16 py-24
                          border-b border-gray-200 dark:border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                        dark:text-gray-500 uppercase mb-12"
          >
            01 — Declaración
          </p>

          <div className="grid lg:grid-cols-[1fr_56%] items-center gap-12 lg:gap-20">
            <div className="hidden lg:flex flex-col gap-3 pt-1">
              <span className="text-[16px] font-mono text-defensya-blue tracking-widest uppercase leading-relaxed">
                Defensya Ingeniería
                <br />
                Internacional
              </span>
              <div className="w-px flex-1 bg-gray-200 dark:bg-white/[0.07] ml-px mt-3" />
            </div>

            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">
              A través del presente compromiso, suscrito por todos los
              trabajadores, Defensya establece que todas nuestras actividades,
              productos y servicios se desarrollan desde la perspectiva de la
              satisfacción, la protección y conservación del medio ambiente como
              medios para asegurar la rentabilidad y continuidad de la empresa,
              apostando por conseguir los siguientes objetivos:
            </p>
          </div>
        </div>
      </section> */}

      {/* ── OBJETIVOS ─────── */}
      <section className="px-6 lg:px-16 py-24 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-3">
              Objetivos
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight text-white"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Compromisos
              <br />
              Medioambientales
            </h2>
          </div>

          {/* Objectives list — full-width rows */}
          <div className="border-t border-white/8">
            {[
              "Cumplir con los requisitos de nuestros clientes y con los requisitos legales que se derivan de la legislación aplicable en calidad y medio ambiente, así como con otros requisitos que suscribamos relacionados con nuestros aspectos medioambientales.",
              "Efectuar un permanente seguimiento de los resultados obtenidos a través de la Gestión Ambiental y de Calidad. Este seguimiento será la base que nos permitirá conseguir una mejora continua del comportamiento ambiental y de la eficacia del Sistema de Gestión integrado de Calidad y Medio Ambiente y la prevención de la contaminación.",
              "Dotar de recursos humanos, económicos, de estructura y organización que nos permita mantener un Sistema de Gestión Medioambiental, basado en las normas nacionales e internacionales.",
              "Motivar y formar al personal en su desarrollo profesional, potenciando su actitud de trabajo en equipo, la comunicación interna y el trato personalizado hacia los mismos, de manera que se impliquen y sientan integrados en la consecución de la Gestión de Calidad y Ambiental, otorgándoles las responsabilidades y autoridad necesarias.",
              "Establecer todos los mecanismos necesarios para prevenir y minimizar la contaminación e impacto ambiental en el desarrollo de nuestras actividades, identificando y evaluando los aspectos que puedan tener un impacto significativo en el medio ambiente, planificando los controles operacionales necesarios que garanticen la actuación responsable desde el inicio de cada proceso.",
              "Reducir progresivamente nuestros vertidos de aguas residuales, residuos, nivel de ruido, la contaminación de los suelos y las emisiones de contaminantes a la atmósfera, entendiendo que sólo de esta forma estaremos garantizando el progreso y la sostenibilidad económica de nuestra compañía.",
              "Mantener una continua colaboración y comunicación con nuestros proveedores, de forma que queden claros nuestros requisitos de calidad y medio ambiente.",
            ].map((item, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-[48px_1fr] gap-4 lg:gap-8 items-start
                           py-6 border-b border-white/8
                           hover:bg-white/2 transition-colors
                           px-2 -mx-2 group"
              >
                <span
                  className="text-[12px] font-mono text-defensya-blue tracking-widest
                                 pt-0.5 shrink-0"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-md text-gray-400 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── ÁREAS DE ACTUACIÓN ───────── */}
      <section
        className="px-6 lg:px-16 py-24
                          border-b border-gray-200 dark:border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p
              className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3"
            >
              Acción
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Áreas de Actuación
            </h2>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4
                          border-t border-l border-gray-200 dark:border-white/[0.07]"
          >
            {[
              {
                num: "01",
                label: "Gestión de residuos",
                desc: "Reducción y tratamiento controlado de residuos industriales en todos los procesos de fabricación.",
              },
              {
                num: "02",
                label: "Eficiencia energética",
                desc: "Optimización del consumo energético en instalaciones y equipos de producción.",
              },
              {
                num: "03",
                label: "Cadena de suministro",
                desc: "Selección y colaboración con proveedores que cumplan los requisitos ambientales establecidos.",
              },
              {
                num: "04",
                label: "Formación ambiental",
                desc: "Capacitación continua del equipo en buenas prácticas medioambientales y normativa vigente.",
              },
            ].map(({ num, label, desc }) => (
              <div
                key={num}
                className="border-b border-r border-gray-200 dark:border-white/[0.07]
                           p-6 lg:p-8 hover:bg-gray-50 dark:hover:bg-white/2
                           transition-colors group"
              >
                <span
                  className="text-[12px] font-mono text-defensya-blue tracking-widest
                                 uppercase mb-4 block"
                >
                  {num}
                </span>
                <h3
                  className="text-2xl font-bold uppercase leading-none tracking-tight
                             text-gray-900 dark:text-white mb-3"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                  }}
                >
                  {label}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 lg:px-16 py-24
                          border-b border-gray-200 dark:border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="grid lg:grid-cols-[auto_1fr] gap-6 items-start
                          border border-gray-200 dark:border-white/[0.07] p-8 lg:p-12"
          >
            <div className="hidden lg:block w-px self-stretch bg-defensya-blue shrink-0" />
            <div>
              <p
                className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue
                            uppercase mb-4"
              >
                Declaración final
              </p>
              <p
                className="text-base lg:text-lg text-gray-600 dark:text-gray-300
                            leading-relaxed italic"
              >
                "Defensya Ingeniería Internacional establece, implanta y mejora
                un Sistema de Gestión de la Calidad y Medio Ambiente,
                asegurando, controlando y optimizando la calidad de sus
                servicios con el objetivo de satisfacer las necesidades de los
                clientes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALIDAD ──────── */}
      <section className="px-6 lg:px-16 py-24 bg-defensya-navy">
        <div
          className="max-w-7xl mx-auto
                        grid lg:grid-cols-[1fr_auto] gap-10 items-center"
        >
          <div>
            <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-5">
              Cumplimiento
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight text-white"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Política de Calidad
            </h2>
            <p className="text-md text-gray-400 leading-relaxed mt-4 max-w-lg">
              Consulta la declaración de nuestra política de calidad y las
              certificaciones que avalan nuestros procesos y sistemas de
              gestión.
            </p>
          </div>

          <Link
            href="/empresa/calidad-certificacion"
            className="group inline-flex items-center gap-4 border border-white/20
                       px-8 py-5 hover:bg-white/5 hover:border-white/40
                       transition-all duration-200 shrink-0 self-start lg:self-center"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="text-defensya-blue group-hover:-translate-x-1 transition-transform duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4 4-4M20 12H3"
              />
            </svg>
            <span className="text-xs font-mono tracking-widest uppercase text-white">
              Ver Política de Calidad
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
