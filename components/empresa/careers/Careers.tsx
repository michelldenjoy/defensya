"use client";

function Rule() {
  return <hr className="border-t border-gray-200 dark:border-white/[0.07]" />;
}

export default function Careers() {
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
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue uppercase">
              Empresa — Careers
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 items-center">
            <h1
              className="text-[clamp(2.8rem,7vw,6rem)] font-bold uppercase
                         leading-[0.95] tracking-tight"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Tu ingenio, en el centro de la
              <br />
              <span className="text-defensya-blue"> defensa global</span>
            </h1>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed lg:pb-2">
              En Defensya, creemos que nuestro éxito se basa en el talento y la
              pasión de nuestro equipo. Estamos siempre en busca de
              profesionales dedicados y apasionados por la innovación
              aeroespacial. Si estás interesado en formar parte de una empresa
              líder en la industria, explora nuestras oportunidades de carrera y
              únete a nosotros en la misión de transformar el futuro de la
              defensa.
            </p>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ DEFENSYA ────────── */}
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
              Por qué Defensya
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Lo que ofrecemos
            </h2>
          </div>

          <div
            className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x
                          divide-gray-200 dark:divide-white/[0.07]"
          >
            {[
              {
                num: "01",
                title: "Proyectos de Impacto",
                desc: "Trabajarás en sistemas que vuelan en el A330 MRTT y soluciones para el Ministerio de Defensa.",
              },
              {
                num: "02",
                title: "Cultura de Patentes",
                desc: "Fomentamos la invención. Tu trabajo puede convertirse en la próxima patente tecnológica de la industria.",
              },
              {
                num: "03",
                title: "I+D de Vanguardia",
                desc: "Desde IA y redes neuronales hasta sistemas ópticos y criptografía avanzada.",
              },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                className="px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0"
              >
                <span className="text-[12px] font-mono text-defensya-blue tracking-widest mb-6 block">
                  {num}
                </span>
                <h3 className="text-2xl font-semibold mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFILES ───────── */}
      <section className="px-6 lg:px-16 py-24 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-sky uppercase mb-3">
              Perfiles
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight text-white"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Perfiles que buscamos
            </h2>
          </div>

          <div className="border-t border-white/8">
            {[
              {
                area: "Técnico Mecanizado",
                desc: "Operación de centros de torneado y fresado multieje para componentes de alta precisión y tolerancias críticas.",
              },
              {
                area: "Programador CAM - CATIA",
                desc: "Generación de estrategias de mecanizado avanzado y simulación de procesos para utillajes complejos de aeronáutica.",
              },
              {
                area: "Ingeniería Mecánica",
                desc: "Desarrollo de sistemas estructurales, análisis de fatiga y simulación térmica para entornos de misión crítica.",
              },
              {
                area: "Ingeniería de Diseño",
                desc: "Modelado conceptual y detallado de hardware táctico, optimizando peso, ergonomía y robustez mecánica.",
              },
              {
                area: "Ingeniería Electrónica",
                desc: "Diseño de hardware, sensórica avanzada, adquisición de señal y arquitectura de sistemas de potencia.",
              },
              {
                area: "Técnico de Calidad",
                desc: "Aseguramiento de estándares MIL-SPEC mediante inspección metrológica y control de procesos productivos.",
              },
              {
                area: "Técnico de Mantenimiento",
                desc: "Gestión preventiva y correctiva de sistemas industriales y equipos de diagnóstico de alta disponibilidad.",
              },
              {
                area: "Técnico de Electrónica",
                desc: "Integración, soldadura de precisión y testeo de tarjetas PCBA y mazos de cables bajo normativa IPC.",
              },
            ].map(({ area, desc }, i) => (
              <div
                key={area}
                className="grid sm:grid-cols-[48px_1fr_2fr] gap-4 lg:gap-8 items-start
                 py-6 border-b border-white/8
                 hover:bg-white/2 transition-colors px-2 -mx-2 group"
              >
                <span className="text-[12px] font-mono text-defensya-sky tracking-widest pt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4
                  className="text-xl font-bold uppercase leading-none tracking-tight text-white group-hover:text-defensya-sky transition-colors"
                  style={{
                    fontFamily: "var(--font-display, 'Inter', sans-serif)", // He cambiado Barlow por Inter para seguir tu petición de seriedad
                  }}
                >
                  {area}
                </h4>
                <p className="text-md text-gray-400 leading-relaxed font-light">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── FORMULARIO ──── */}
      <section className="px-6 lg:px-16 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_56%] gap-16 lg:gap-24 items-start">
            {/* Left — context */}
            <div className="lg:sticky lg:top-24">
              <p
                className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                            dark:text-gray-500 uppercase mb-3"
              >
                Candidatura
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                           leading-none tracking-tight mb-6"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Envíanos
                <br />
                tu talento
              </h2>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">
                ¿No ves una posición abierta que encaje? Envíanos tu CV para
                futuras oportunidades. Revisamos cada candidatura con atención.
              </p>

              <div className="mt-10 border-t border-gray-200 dark:border-white/[0.07]">
                {[
                  { label: "Respuesta", value: "En menos de 3 días" },
                  { label: "Modalidad", value: "Presencial — Madrid" },
                  { label: "Sector", value: "Defensa & Aeronáutica" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3
                               border-b border-gray-200 dark:border-white/6"
                  >
                    <span
                      className="text-[12px] font-mono tracking-widest
                                     text-gray-400 dark:text-gray-500 uppercase"
                    >
                      {label}
                    </span>
                    <span className="text-xs font-medium text-gray-900 dark:text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <form className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Nombre completo">
                  <input
                    type="text"
                    placeholder="Juan García"
                    className={inputCls}
                    required
                  />
                </Field>
                <Field label="Correo electrónico">
                  <input
                    type="email"
                    placeholder="juan@email.com"
                    className={inputCls}
                    required
                  />
                </Field>
              </div>

              <Field label="Puesto de interés">
                <select className={inputCls}>
                  <option value="" defaultValue="">
                    Selecciona un puesto
                  </option>
                  {[
                    "Técnico de Mecanizado",
                    "Programador CAM - CATIA",
                    "Ingeniería Mecánica",
                    "Ingeniería de Diseño",
                    "Ingeniería Electrónica",
                    "Técnico de Calidad",
                    "Técnico de Mantenimiento",
                    "Técnico de Electrónica",
                  ].map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Área de interés">
                <select className={inputCls}>
                  <option value="" defaultValue="">
                    Selecciona un área
                  </option>
                  <option>Software</option>
                  <option>Electrónica</option>
                  <option>Visión / Óptica</option>
                  <option>Fabricación 3D</option>
                  <option>Sanidad</option>
                  <option>Otros</option>
                </select>
              </Field>

              <Field label="Mensaje / Motivación">
                <textarea
                  rows={4}
                  placeholder="Cuéntanos por qué quieres unirte al equipo de Defensya..."
                  className={inputCls + " resize-none"}
                />
              </Field>

              {/* CV upload */}
              <Field label="Adjuntar CV">
                <label
                  className="flex items-center gap-4 cursor-pointer
                             border border-dashed border-gray-300 dark:border-white/5
                             px-5 py-4 hover:border-defensya-blue
                             dark:hover:border-defensya-blue transition-colors group"
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    required
                  />

                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="text-gray-400 dark:text-gray-500
                               group-hover:text-defensya-blue transition-colors shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <div>
                    <p
                      className="text-xs font-medium text-gray-700 dark:text-gray-300
                                  group-hover:text-defensya-blue transition-colors"
                    >
                      Seleccionar archivo
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
                      PDF, DOC o DOCX — máx. 5 MB
                    </p>
                  </div>
                </label>
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 px-8 py-3.5 bg-defensya-blue text-white
                           text-xs tracking-widest uppercase font-medium
                           hover:bg-defensya-navy-accent transition-colors
                           self-start"
              >
                Enviar Candidatura
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Field wrapper ─────────────

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-[10px] font-mono tracking-widest text-gray-400
                        dark:text-gray-500 uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

// ─── Shared input classes ──────────

const inputCls = `
  w-full bg-gray-50 dark:bg-white/[0.03]
  border border-gray-200 dark:border-white/[0.08]
  px-4 py-3 text-sm text-gray-900 dark:text-white
  placeholder:text-gray-400 dark:placeholder:text-gray-600
  focus:outline-none focus:border-defensya-blue dark:focus:border-defensya-blue
  transition-colors duration-200
`.trim();
