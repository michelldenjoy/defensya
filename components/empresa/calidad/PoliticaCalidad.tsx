"use client";
import Link from "next/link";
import React, { useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────────── */
const declaracion = [
  {
    id: "01",
    titulo: "Excelencia como objetivo innegociable",
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

/* ─────────────────────────────────────────────────────────────────
   SUB-COMPONENTES COMPARTIDOS
───────────────────────────────────────────────────────────────── */

/** Eyebrow con diamante — coherente con el resto de Defensya */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <span
        className="w-[6px] h-[6px] bg-defensya-blue shrink-0"
        style={{ transform: "rotate(45deg)" }}
      />
      <span
        className="text-defensya-blue"
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-defensya-blue/40 to-transparent" />
    </div>
  );
}

/** Separador horizontal técnico */
function TechRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-8 sm:my-10">
      <div className="h-px flex-1 bg-gray-200 dark:bg-white/[0.07]" />
      <span
        className="text-gray-400 dark:text-gray-500"
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <div className="h-px w-10 bg-defensya-blue/30" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TABS — Objetivos / Valores
───────────────────────────────────────────────────────────────── */
type Tab = "objetivos" | "valores";

function ObjetivosValoresTabs() {
  const [tab, setTab] = useState<Tab>("objetivos");

  return (
    <div>
      {/* Switcher */}
      <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
        {(
          [
            { key: "objetivos", label: "Objetivos Estratégicos" },
            { key: "valores", label: "Valores Fundamentales" },
          ] as { key: Tab; label: string }[]
        ).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`relative shrink-0 px-5 py-3 text-left transition-colors duration-200 ${
              tab === key
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            {label}
            {tab === key && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-defensya-blue" />
            )}
          </button>
        ))}
      </div>

      {/* Objetivos */}
      {tab === "objetivos" && (
        <div className="border-t border-white/[0.06]">
          {objetivos.map((item, i) => (
            <div
              key={i}
              className="group flex gap-5 sm:gap-6 py-5 sm:py-6
                         border-b border-white/[0.06]
                         hover:bg-white/[0.02] transition-colors duration-200 px-1"
            >
              <span
                className="shrink-0 pt-0.5 w-6 text-defensya-blue"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
                {item}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Valores */}
      {tab === "valores" && (
        <div className="border-t border-white/[0.06]">
          {valores.map((item, i) => (
            <div
              key={i}
              className="group flex gap-5 sm:gap-6 py-5 sm:py-6
                         border-b border-white/[0.06]
                         hover:bg-white/[0.02] transition-colors duration-200 px-1
                         items-start"
            >
              <span
                className="shrink-0 pt-1 w-6 text-defensya-blue"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span
                  className="block font-bold uppercase leading-none mb-2
                               text-white tracking-wide"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.label}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
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

/* ─────────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────────── */
export default function PoliticaCalidad() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const toggle = (id: string) =>
    setOpenItem((prev) => (prev === id ? null : id));

  return (
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >

      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative px-5 sm:px-8 lg:px-16 pt-16 sm:pt-20 pb-16 sm:pb-24
                          border-b border-gray-200 dark:border-white/[0.07] overflow-hidden">
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <Eyebrow>Calidad · Defensya Systems · ISO 9001:2015</Eyebrow>

          {/* Heading + panel derecho */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

            {/* LEFT — heading */}
            <div>
              <h1
                className="font-bold uppercase leading-[0.92] tracking-tight
                           text-gray-900 dark:text-white mb-6"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                  fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                }}
              >
                Garantía en
                <br />
                <span className="text-defensya-blue">
                  Entornos Críticos
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400
                            leading-relaxed max-w-lg">
                El cumplimiento de los estándares internacionales es la base de
                nuestra ingeniería. Sostenemos un sistema de gestión orientado a
                la optimización de procesos y la rigurosidad técnica, acreditado
                por las principales entidades de certificación del sector.
              </p>
            </div>

            {/* RIGHT — métricas */}
            <div className="flex flex-col gap-4">
              {/* ISO badge */}
              <div className="inline-flex items-stretch gap-0 border border-gray-200 dark:border-white/[0.1] self-start w-full sm:w-auto">
                <div className="w-1 bg-defensya-blue shrink-0" />
                <div className="px-5 py-4 flex-1">
                  <p
                    className="text-gray-400 dark:text-gray-500 mb-1"
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "9px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    Certificación activa
                  </p>
                  <p
                    className="font-bold text-defensya-blue dark:text-white"
                    style={{
                      fontFamily:
                        "var(--font-display, 'Barlow Condensed', sans-serif)",
                      fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    }}
                  >
                    ISO 9001:2015
                  </p>
                </div>
              </div>

              {/* Grid de stats */}
              <div className="grid grid-cols-2 gap-px bg-gray-200 dark:bg-white/[0.07]
                              border border-gray-200 dark:border-white/[0.07]">
                {[
                  { val: "+20", label: "Años de experiencia" },
                  { val: "100%", label: "Mejora continua" },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    className="bg-white dark:bg-defensya-navy px-5 py-4"
                  >
                    <p
                      className="font-bold text-gray-900 dark:text-white leading-none"
                      style={{
                        fontFamily:
                          "var(--font-display, 'Barlow Condensed', sans-serif)",
                        fontSize: "clamp(1.6rem, 3vw, 2rem)",
                      }}
                    >
                      {val}
                    </p>
                    <p
                      className="text-gray-400 dark:text-gray-500 mt-1"
                      style={{
                        fontFamily: "'Share Tech Mono', monospace",
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUOTE ══════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-16 py-12 sm:py-16
                          bg-defensya-navy border-b border-white/[0.07] dark:bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-5 sm:gap-8 lg:gap-10 items-start">
            <span
              className="text-[5rem] sm:text-[7rem] lg:text-[9rem] leading-none font-bold
                         text-defensya-blue/20 select-none shrink-0 -mt-3 sm:-mt-5"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              "
            </span>
            <div>
              <p
                className="font-bold uppercase text-white leading-snug"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                  fontSize: "clamp(1.2rem, 3.5vw, 2.2rem)",
                }}
              >
                El compromiso con la calidad en todas las actividades es un
                objetivo ineludible para Defensya Ingeniería Internacional.
              </p>
              <div className="flex items-center gap-3 mt-5 sm:mt-6">
                <div className="h-px w-8 bg-defensya-blue" />
                <span
                  className="text-gray-500"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Dirección General — Política de Calidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DECLARACIÓN ════════════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-16 py-14 sm:py-20
                          border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">

            {/* Sidebar */}
            <div className="lg:pt-1">
              <Eyebrow>DFS-QMS · Rev A</Eyebrow>
              <h2
                className="font-bold uppercase leading-tight
                           text-gray-900 dark:text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                }}
              >
                Declaración
              </h2>
              <p className="hidden lg:block text-sm text-gray-400 dark:text-gray-500
                            leading-relaxed mt-3">
                Texto oficial del sistema de gestión de calidad de Defensya
                Ingeniería Internacional.
              </p>
            </div>

            {/* Acordeón */}
            <div className="border-t border-gray-200 dark:border-white/[0.07]">
              {declaracion.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 dark:border-white/[0.07]"
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      className="w-full flex items-center gap-4 sm:gap-5 py-5 text-left group"
                    >
                      <span
                        className="shrink-0 w-7 text-defensya-blue"
                        style={{
                          fontFamily: "'Share Tech Mono', monospace",
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {item.id}
                      </span>

                      {/* Línea vertical de estado */}
                      <span
                        className={`shrink-0 w-px self-stretch rounded-full transition-colors duration-200 ${
                          isOpen
                            ? "bg-defensya-blue"
                            : "bg-gray-200 dark:bg-white/[0.07]"
                        }`}
                      />

                      <h3
                        className={`flex-1 font-bold uppercase transition-colors duration-200 leading-snug ${
                          isOpen
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                        }`}
                        style={{
                          fontFamily:
                            "var(--font-display, 'Barlow Condensed', sans-serif)",
                          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                        }}
                      >
                        {item.titulo}
                      </h3>

                      {/* Icono +/× */}
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

                    {/* Contenido expandible */}
                    <div
                      className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400
                                    leading-relaxed font-light pl-12">
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

      {/* ══ OBJETIVOS Y VALORES ════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-16 py-14 sm:py-20
                          bg-defensya-navy border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">

            {/* Sidebar */}
            <div>
              <Eyebrow>Gestión · Calidad</Eyebrow>
              <h2
                className="font-bold uppercase leading-tight text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                }}
              >
                Objetivos
                <br />
                y Valores
              </h2>
            </div>

            {/* Tabs */}
            <ObjetivosValoresTabs />
          </div>
        </div>
      </section>

      {/* ══ COMPROMISO FINAL ═══════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-16 py-10
                          border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <TechRule label="Commitment" />

          <div
            className="relative p-6 sm:p-10
                       bg-slate-100 dark:bg-white/[0.02]
                       border border-gray-200 dark:border-white/[0.07]"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
            }}
          >
            {/* Corners */}
            <span className="pointer-events-none absolute z-10"
              style={{ top:10,left:10,width:16,height:16,
                borderTop:"2px solid rgba(36,38,184,1)",
                borderLeft:"2px solid rgba(36,38,184,1)" }} />
            <span className="pointer-events-none absolute z-10"
              style={{ bottom:10,right:10,width:16,height:16,
                borderBottom:"2px solid rgba(36,38,184,1)",
                borderRight:"2px solid rgba(36,38,184,1)" }} />

            {/* Ghost DSY */}
            <span
              className="pointer-events-none absolute bottom-2 right-4
                         font-mono font-black select-none
                         text-black/[0.04] dark:text-white/[0.03] hidden sm:block"
              style={{
                fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "5rem", lineHeight: 1,
              }}
            >
              DSY
            </span>

            <p
              className="font-semibold uppercase mb-4 text-defensya-navy dark:text-white"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.28em",
              }}
            >
              Nuestro Compromiso
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400
                          leading-relaxed font-light max-w-5xl relative z-10">
              No solo fabricamos tecnología;{" "}
              <span className="text-gray-900 dark:text-gray-200 font-medium">
                entregamos la fiabilidad operativa necesaria para que
                organizaciones globales operen en entornos críticos.
              </span>{" "}
              En{" "}
              <span className="text-defensya-blue font-semibold">Defensya</span>,
              la excelencia técnica se rige por{" "}
              <Link
                href="/empresa/calidad-certificacion"
                className="text-defensya-blue font-medium underline underline-offset-4
                           hover:text-blue-400 transition-colors"
              >
                estándares de calidad internacionales
              </Link>
              , garantizando la seguridad en el futuro de la exploración y la
              defensa global.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-4 relative z-10">
              <div className="h-px w-10 bg-defensya-blue/30" />
              <span
                className="text-gray-500 dark:text-gray-600"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                Defensya · Ingeniería Internacional
              </span>
              <div className="h-px flex-1 bg-gray-200 dark:bg-white/[0.04]" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
