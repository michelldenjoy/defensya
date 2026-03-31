"use client";
import { useState } from "react";



const declaracion = [
  {
    id: "01",
    titulo: "Excelencia como objetivo ineludible",
    texto:
      "La Dirección de DEFENSYA INGENIERIA INTERNACIONAL busca obtener, como objetivo ineludible, la excelencia en todas sus actividades y, en consecuencia, la consolidación como empresa del sector ingeniería de telecomunicación, electrónica e informática y afines, a través de la satisfacción diaria de sus clientes, para lo cual, y consciente de la importancia de la calidad de los servicios creados por nuestra compañía, decidió implantar un Sistema de Gestión de la Calidad basado en las normas ISO 9001:2015.",
  },
  {
    id: "02",
    titulo: "Conocimiento del cliente",
    texto:
      "La política de calidad de DEFENSYA INGENIERIA INTERNACIONAL se fundamenta en el conocimiento de las necesidades y expectativas de nuestros clientes y procura, desde ese conocimiento, conseguir la satisfacción de los mismos, ofreciéndoles un tratamiento personalizado a cada uno de ellos.",
  },
  {
    id: "03",
    titulo: "Las personas, pilar de la calidad",
    texto:
      "La calidad de los servicios prestados por DEFENSYA INGENIERIA INTERNACIONAL depende de sus recursos humanos. Por ello, la participación, involucración y vocación de servicio de todo el personal es esencial para la adecuación del trabajo a las expectativas marcadas por los clientes.",
  },
  {
    id: "04",
    titulo: "Compromiso con la mejora continua",
    texto:
      "Esto lleva a DEFENSYA INGENIERIA INTERNACIONAL a adquirir el compromiso de identificar y satisfacer tanto los requisitos de nuestros clientes como los normativos y legales asociados a nuestras actividades, lo cual obliga a impulsar el compromiso con la mejora continua a todos los niveles dentro de la empresa.",
  },
];

const objetivos = [
  "Concienciar al equipo directivo de la importancia de su participación en el proyecto con el fin de mejorar los flujos de información.",
  "Impulsar la obtención de resultados medibles en los procesos de la empresa mediante la incorporación de indicadores en los mismos.",
  "Fomentar la participación del personal en el desarrollo de la calidad y en el proceso de mejora continua, promoviendo su formación y la permanente actualización de sus conocimientos, habilidades y desarrollo profesional.",
];

const valores = [
  {
    label: "Enfoque al cliente",
    desc: "Satisfacción de las necesidades del cliente optimizando los recursos disponibles.",
  },
  {
    label: "Enfoque por procesos",
    desc: "Visión de la empresa como conjunto de procesos encaminados a satisfacer al cliente.",
  },
  {
    label: "Gestión de riesgos",
    desc: "Prevención de resultados no deseados y aprovechamiento de oportunidades.",
  },
  {
    label: "Formación continua",
    desc: "La formación como mecanismo fundamental de mejora continua de productos y servicios.",
  },
  {
    label: "Mejora continua",
    desc: "Proceso fundamental de mejora del Sistema de Gestión de la Calidad.",
  },
];

const compromisos = [
  {
    num: "01",
    label: "Excelencia operativa",
    desc: "Búsqueda permanente de la excelencia en todos los procesos y actividades de la compañía.",
  },
  {
    num: "02",
    label: "Orientación al cliente",
    desc: "Tratamiento personalizado y satisfacción de las expectativas de cada cliente como prioridad estratégica.",
  },
  {
    num: "03",
    label: "Mejora continua",
    desc: "Revisión y actualización constante del sistema de gestión para adaptarse a nuevos requisitos y oportunidades.",
  },
];

// ─── Sub-componente

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-3">
      {children}
    </p>
  );
}

// ─── Tabs (Objetivos / Valores) ─────────

type Tab = "objetivos" | "valores";

function ObjetivosValoresTabs() {
  const [tab, setTab] = useState<Tab>("objetivos");

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex border-b border-white/8 mb-10 gap-0">
        {(["objetivos", "valores"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative px-6 py-3 font-mono text-[12px] tracking-[0.25em] uppercase transition-colors duration-200 ${
              tab === t ? "text-white" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {t === "objetivos"
              ? "Objetivos Estratégicos"
              : "Valores Fundamentales"}
            {tab === t && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-defensya-blue" />
            )}
          </button>
        ))}
      </div>

      {/* OBJETIVOS */}
      {tab === "objetivos" && (
        <div className="space-y-0 border-t border-white/6">
          {objetivos.map((item, i) => (
            <div
              key={i}
              className="group flex gap-6 py-6 border-b border-white/6 hover:bg-white/2 transition-colors duration-200 px-2"
            >
              <span className="font-mono text-[12px] text-defensya-blue tracking-widest shrink-0 pt-0.5 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-gray-400 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      )}

      {/* VALORES */}
      {tab === "valores" && (
        <div className="space-y-0 border-t border-white/6">
          {valores.map((item, i) => (
            <div
              key={i}
              className="group flex gap-6  py-5 border-b border-white/6 hover:bg-white/2 transition-colors duration-200 px-2 items-start"
            >
              <span className="font-mono text-[12px] text-defensya-blue tracking-widest shrink-0 pt-0.5 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="text-md font-semibold tracking-wide uppercase text-white leading-none"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                  }}
                >
                  {item.label}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PoliticaCalidad() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      {/* ══ HERO ═════ */}
      <section className="px-6 lg:px-16 pt-16 pb-24 border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue uppercase">
              Empresa — Calidad y Certificaciones
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_40%] gap-12 lg:gap-20 items-start">
            <div>
              <SectionTag>Política oficial</SectionTag>
              <h1
                className="text-[clamp(2.6rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] text-gray-900 dark:text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Declaración
                <br />
                de la Política
                <br />
                <span className="text-defensya-blue">de Calidad</span>
              </h1>
            </div>

            <div className="flex flex-col gap-6 lg:pt-8">
              <div className="inline-flex items-stretch gap-4 border border-gray-200 dark:border-white/8 self-start">
                <div className="w-1 bg-defensya-blue shrink-0" />
                <div className="px-4 py-4">
                  <p className="text-[11px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-1">
                    Certificación activa
                  </p>
                  <p
                    className="text-3xl font-bold text-defensya-blue"
                    style={{
                      fontFamily:
                        "var(--font-display, 'Barlow Condensed', sans-serif)",
                    }}
                  >
                    ISO 9001:2015
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px border border-gray-200 dark:border-white/[0.07] bg-gray-200 dark:bg-white/[0.07]">
                {[
                  { val: "+20", label: "Años de experiencia" },
                  { val: "100%", label: "Mejora continua" },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    className="bg-white dark:bg-defensya-navy px-5 py-4"
                  >
                    <p
                      className="text-3xl font-bold text-gray-900 dark:text-white"
                      style={{
                        fontFamily:
                          "var(--font-display, 'Barlow Condensed', sans-serif)",
                      }}
                    >
                      {val}
                    </p>
                    <p className="text-[11px] font-mono tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Sistema de Gestión de la Calidad implantado en base a la norma
                internacional ISO 9001:2015, orientado a la excelencia y la
                mejora continua en todas las actividades de la empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUOTE ════ */}
      <section className="px-6 lg:px-16 py-16 bg-defensya-navy border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6 lg:gap-10 items-start">
            <span
              className="text-[6rem] lg:text-[9rem] leading-none font-bold text-defensya-blue/20 select-none shrink-0 -mt-4 lg:-mt-6"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              "
            </span>
            <div>
              <p
                className="text-xl lg:text-3xl font-bold uppercase text-white leading-snug lg:leading-snug max-w-3xl"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                La excelencia en todas las actividades es un objetivo ineludible
                para Defensya Ingeniería Internacional.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="h-px w-8 bg-defensya-blue" />
                <span className="font-mono text-[11px] tracking-[0.3em] text-gray-500 uppercase">
                  Dirección General — Política de Calidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DECLARACIÓN ══════*/}
      <section className="px-6 lg:px-16 py-20 border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
            <div className="lg:pt-1">
              <SectionTag> Declaración</SectionTag>
              <p className="hidden lg:block text-sm text-gray-400 dark:text-gray-500 leading-relaxed mt-3">
                Texto oficial del sistema de gestión de calidad de Defensya
                Ingeniería Internacional.
              </p>

              <div className="hidden lg:block w-px h-24 bg-gray-200 dark:bg-white/[0.07] mt-6 ml-px" />
            </div>

            <div className="space-y-0 border-t border-gray-200 dark:border-white/[0.07]">
              {declaracion.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 dark:border-white/[0.07]"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center gap-5 py-5 text-left group"
                    >
                      <span className="font-mono text-[11px] text-defensya-blue tracking-widest shrink-0 w-7">
                        {item.id}
                      </span>

                      <span
                        className={`shrink-0 w-0.75 self-stretch rounded-full transition-colors duration-200 ${
                          isOpen
                            ? "bg-defensya-blue"
                            : "bg-gray-200 dark:bg-white/[0.07]"
                        }`}
                      />

                      <h3
                        className={`flex-1 text-base lg:text-lg font-bold uppercase transition-colors duration-200 ${
                          isOpen
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                        }`}
                        style={{
                          fontFamily:
                            "var(--font-display, 'Barlow Condensed', sans-serif)",
                        }}
                      >
                        {item.titulo}
                      </h3>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <path
                          d="M8 3V13M3 8H13"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-96 opacity-100 pb-5"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pl-12">
                        {item.texto}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ OBJETIVOS Y VALORES ═════ */}
      <section className="px-6 lg:px-16 py-20 bg-defensya-navy border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
            <div>
              <SectionTag>Marco Estratégico</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Objetivos
                <br />y Valores
              </h2>
            </div>

            <ObjetivosValoresTabs />
          </div>
        </div>
      </section>

      {/* ══ PILARES DE ACTUACION ═══════ */}
      {/* <section className="px-6 lg:px-16 py-20 border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
            <div>
              <SectionTag>Compromiso</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 dark:text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Pilares de
                <br />
                actuación
              </h2>
            </div>

            
            <div className="grid sm:grid-cols-3 gap-px bg-gray-200 dark:bg-white/[0.07] border border-gray-200 dark:border-white/[0.07]">
              {compromisos.map(({ num, label, desc }) => (
                <div
                  key={num}
                  className="group bg-white dark:bg-defensya-navy p-6 lg:p-7 hover:bg-gray-50 dark:hover:bg-white/3 transition-colors duration-200"
                >
               
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[11px] text-defensya-blue tracking-widest">
                      {num}
                    </span>
                    <div className="h-px flex-1 bg-gray-200 dark:bg-white/[0.07]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-defensya-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>

                  <h3
                    className="text-3xl font-bold uppercase leading-none text-gray-900 dark:text-white mb-3"
                    style={{
                      fontFamily:
                        "var(--font-display, 'Barlow Condensed', sans-serif)",
                    }}
                  >
                    {label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

    </main>
  );
}
