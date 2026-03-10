import Link from "next/link"

// ─── Hairline rule ────────────────────────────────────────────────────────────

function Rule() {
  return <hr className="border-t border-gray-200 dark:border-white/[0.07]" />
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PoliticaCalidad() {
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
              Empresa — Calidad y Certificaciones
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_38%] gap-12 lg:gap-20 items-center">
            <h1
              className="text-[clamp(2.8rem,7vw,6rem)] font-bold uppercase
                         leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Declaración<br />
              de la Política<br />
              <span className="text-defensya-blue">de Calidad</span>
            </h1>

            {/* ISO badge */}
            <div className="lg:pb-2 flex flex-col gap-5">
              <div className="inline-flex items-center gap-4 border border-gray-200
                              dark:border-white/1 px-5 py-4 self-start">
                <div className="w-1 self-stretch bg-defensya-blue shrink-0" />
                <div>
                  <p className="text-[12px] font-mono tracking-widest text-gray-400
                                dark:text-gray-500 uppercase mb-1">
                    Certificación
                  </p>
                  <p
                    className="text-2xl font-bold text-defensya-blue"
                    style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                    
                  >
                    ISO 9001:2015
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Sistema de Gestión de la Calidad implantado en base a la norma
                internacional ISO 9001:2015, orientado a la excelencia y la
                mejora continua en todas las actividades de la empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DECLARACIÓN ────────────── */}
      <section className="px-6 lg:px-16 py-24
                          border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">

          <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                        dark:text-gray-500 uppercase mb-12">
            01 — Declaración
          </p>

          <div className="grid lg:grid-cols-[1fr_56%] gap-12 lg:gap-20">

            
            <div className="hidden lg:flex flex-col gap-3 pt-1">
              <span className="text-[14px] font-mono text-defensya-blue tracking-widest uppercase">
                Defensya Ingeniería<br />Internacional
              </span>
              <div className="w-px flex-1 bg-gray-200 dark:bg-white/[0.07] ml-px mt-3" />
            </div>

            <div className="space-y-6">
              {[
                "La Dirección de DEFENSYA INGENIERIA INTERNACIONAL busca obtener, como objetivo ineludible, la excelencia en todas sus actividades y, en consecuencia, la consolidación como empresa del sector ingeniería de telecomunicación, electrónica e informática y afines, a través de la satisfacción diaria de sus clientes, para lo cual, y consciente de la importancia de la calidad de los servicios creados por nuestra compañía y de la satisfacción de nuestros clientes, decidió implantar un Sistema de Gestión de la Calidad basado en las normas ISO 9001:2015.",
                "La política de calidad de DEFENSYA INGENIERIA INTERNACIONAL se fundamenta en el conocimiento de las necesidades y expectativas de nuestros clientes y procura, desde ese conocimiento, conseguir la satisfacción de los mismos, ofreciéndoles un tratamiento personalizado a cada uno de ellos.",
                "La calidad de los servicios prestados por DEFENSYA INGENIERIA INTERNACIONAL depende de sus recursos humanos. Por ello, la participación, involucración y vocación de servicio de todo el personal es esencial para la adecuación del trabajo a las expectativas marcadas por los clientes.",
                "Esto lleva a DEFENSYA INGENIERIA INTERNACIONAL a adquirir el compromiso de identificar y satisfacer tanto los requisitos de nuestros clientes como los normativos y legales asociados a nuestras actividades, lo cual obliga a impulsar el compromiso con la mejora continua a todos los niveles dentro de la empresa.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-md text-gray-500 dark:text-gray-400 leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────── OBJETIVOS Y VALORES ───────── */}
      <section className="px-6 lg:px-16 py-24 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-3">
              02 — Marco Estratégico
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Objetivos y Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border-t border-white/8">

            {/* Objetivos */}
            <div className="border-b md:border-b-0 md:border-r border-white/8
                            py-10 md:pr-12 lg:pr-16">
              <span className="text-lg font-mono text-defensya-blue tracking-widest
                               uppercase mb-6 block">
                Objetivos Estratégicos
              </span>
              <div className="space-y-0 border-t border-white/6">
                {[
                  "Concienciar al equipo directivo de la importancia de su participación en el proyecto con el fin de mejorar los flujos de información.",
                  "Impulsar la obtención de resultados medibles en los procesos de la empresa mediante la incorporación de indicadores en los mismos.",
                  "Fomentar la participación del personal de la empresa en el desarrollo de la calidad y en el proceso de mejora continua, promoviendo su formación y la permanente actualización de sus conocimientos y habilidades, así como fomentando su desarrollo profesional y personal.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 py-5 border-b border-white/6"
                  >
                    <span className="text-[12px] font-mono text-defensya-blue
                                     tracking-widest shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-md text-gray-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Valores */}
            <div className="py-10 md:pl-12 lg:pl-16">
              <span className="text-lg font-mono text-defensya-blue tracking-widest
                               uppercase mb-6 block">
                Valores Fundamentales
              </span>
              <div className="space-y-0 border-t border-white/6">
                {[
                  "Enfoque al cliente (satisfacción de las necesidades de nuestros clientes optimizando los recursos).",
                  "Enfoque por procesos (visualización de la empresa como un conjunto de procesos encaminados a satisfacer las necesidades de los clientes).",
                  "Gestión de riesgos para prevenir los resultados no deseados y aprovechar las oportunidades que pudieran surgir como consecuencia de esta gestión.",
                  "Formación continua del personal (formación como mecanismo fundamental de mejora continua de la calidad de los productos y servicios ofrecidos).",
                  "Mejora continua (proceso fundamental de mejora del Sistema de Gestión de la Calidad).",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 py-5 border-b border-white/6"
                  >
                    <span className="text-[12px] font-mono text-defensya-blue
                                     tracking-widest shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-md text-gray-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Rule />

      {/* ────── COMPROMISO ──────── */}
      <section className="px-6 lg:px-16 py-24
                          border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">

          <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                        dark:text-gray-500 uppercase mb-12">
            03 — Compromiso
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3
                          border-t border-l border-gray-200 dark:border-white/[0.07]">
            {[
              { num: "01", label: "Excelencia operativa", desc: "Búsqueda permanente de la excelencia en todos los procesos y actividades de la compañía." },
              { num: "02", label: "Orientación al cliente", desc: "Tratamiento personalizado y satisfacción de las expectativas de cada cliente como prioridad estratégica." },
              { num: "03", label: "Mejora continua", desc: "Revisión y actualización constante del sistema de gestión para adaptarse a nuevos requisitos y oportunidades." },
            ].map(({ num, label, desc }) => (
              <div
                key={num}
                className="border-b border-r border-gray-200 dark:border-white/[0.07]
                           p-6 lg:p-8 hover:bg-gray-50 dark:hover:bg-white/2
                           transition-colors"
              >
                <span className="text-[12px] font-mono text-defensya-blue tracking-widest
                                 uppercase mb-4 block">
                  {num}
                </span>
                <h3
                  className="text-3xl font-bold uppercase leading-none tracking-tight
                             text-gray-900 dark:text-white mb-3"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
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

      {/* ──  SOSTENIBILIDAD ───────── */}
      <section className="px-6 lg:px-16 py-24 bg-defensya-navy">
        <div className="max-w-7xl mx-auto
                        grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>

            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Sostenibilidad
            </h2>
            <p className="text-md text-gray-400 leading-relaxed mt-4 max-w-lg">
              Conoce el compromiso de Defensya con el desarrollo sostenible,
              la responsabilidad medioambiental y el impacto social de nuestra actividad.
            </p>
          </div>

          <Link
            href="/empresa/sostenibilidad"
            className="group inline-flex items-center gap-4 border border-white/20
                       px-8 py-5 hover:bg-white/5 hover:border-white/40
                       transition-all duration-200 shrink-0 self-start lg:self-center"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-white">
              Ver Sostenibilidad
            </span>
            <svg
              width="14" height="14" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={1.5}
              className="text-defensya-blue group-hover:translate-x-1 transition-transform duration-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}