"use client";
import Link from "next/link";
import React, { useState } from "react";

const declaracion = [
  {
    id: "01",
    titulo: "Excelencia como objetivo innegociable",
    texto:
      "La Dirección de  DEFENSYA INGENIERIA INTERNACIONAL busca obtener, como objetivo ineludible, la excelencia en todas sus actividades y, en consecuencia, la consolidación como empresa del sector ingeniería de telecomunicación, electrónica e informática y afines, a través de la satisfacción diaria de sus clientes, para lo cual, y consciente de la importancia de la calidad de los servicios creados por nuestra compañía, decidió implantar un Sistema de Gestión de la Calidad basado en las normas ISO 9001:2015.",
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
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Enfoque por procesos",
    desc: "Visión de la empresa como conjunto de procesos encaminados a satisfacer al cliente.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Gestión de riesgos",
    desc: "Prevención de resultados no deseados y aprovechamiento de oportunidades.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Formación continua",
    desc: "La formación como mecanismo fundamental de mejora continua de productos y servicios.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    label: "Mejora continua",
    desc: "Proceso fundamental de mejora del Sistema de Gestión de la Calidad.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <span
        className={onDark ? "text-slate-400" : "text-defensya-blue"}
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "14px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
      <div
        className={`flex-1 h-px bg-gradient-to-r ${
          onDark ? "from-slate-400/30" : "from-defensya-blue/40"
        } to-transparent`}
      />
    </div>
  );
}

/* Pequeño código de referencia monoespaciado, mismo lenguaje visual
   que el resto del sitio (DFS-ID-001, etc.) — marca cada subsección
   dentro del bloque "Sistema de Gestión" sin competir con el Eyebrow. */
function RefCode({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-3 text-gray-600"
      style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "10px",
        letterSpacing: "0.15em",
      }}
    >
      {children}
    </p>
  );
}

type Tab = "objetivos" | "valores";

function ObjetivosValoresTabs() {
  const [tab, setTab] = useState<Tab>("objetivos");

  return (
    <div>
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
              tab === key ? "text-white" : "text-gray-500 hover:text-gray-300"
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
              className="group flex gap-5 sm:gap-6 py-5 sm:py-6 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-200 px-1"
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

      {/* Valores — grid de cards */}
      {tab === "valores" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {valores.map((item, i) => (
            <div
              key={i}
              className="group bg-defensya-navy hover:bg-white/[0.03] transition-colors duration-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-defensya-blue opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  {item.icon}
                </div>
                <span
                  className="text-gray-600"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="h-px w-5 bg-defensya-blue mb-4" />
              <h3
                className="font-bold uppercase text-white leading-tight mb-2"
                style={{ fontSize: "0.95rem", letterSpacing: "0.04em" }}
              >
                {item.label}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PoliticaCalidad() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const toggle = (id: string) =>
    setOpenItem((prev) => (prev === id ? null : id));

  return (
    <main className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white">
      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative px-5 sm:px-8 lg:px-16 pt-16 sm:pt-20 pb-16 sm:pb-24 border-b border-gray-200 dark:border-white/[0.07] overflow-hidden">
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <Eyebrow>Calidad · ISO 9001:2015</Eyebrow>

          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">
            <div>
              <h1
                className="font-bold uppercase leading-[0.92] tracking-[-0.045em] text-gray-900 dark:text-white mb-6"
                style={{ fontSize: "clamp(3.1rem, 5.0vw, 5.2rem)" }}
              >
                Garantía en
                <br />
                <span className="text-defensya-blue">Entornos Críticos</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                El cumplimiento de los estándares internacionales es la base de
                nuestra ingeniería. Sostenemos un sistema de gestión orientado a
                la optimización de procesos y la rigurosidad técnica, acreditado
                por las principales entidades de certificación del sector.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* ISO badge */}
              <div className="inline-flex items-stretch border border-gray-200 dark:border-white/[0.1] self-start w-full sm:w-auto">
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
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
                  >
                    ISO 9001:2015
                  </p>
                </div>
              </div>

              {/* Stats — 3 datos concretos */}
              <div className="grid grid-cols-3 gap-px bg-gray-200 dark:bg-white/[0.07] border border-gray-200 dark:border-white/[0.07]">
                {[
                  { val: "+20", label: "Años de experiencia" },
                  { val: "2008", label: "Año de certificación" },
                  { val: "EN 9100", label: "Estándar aeronáutico" },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    className="bg-white dark:bg-defensya-navy px-4 py-4"
                  >
                    <p
                      className="font-bold text-gray-900 dark:text-white leading-none"
                      style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
                    >
                      {val}
                    </p>
                    <p
                      className="text-gray-400 dark:text-gray-500 mt-1"
                      style={{
                        fontFamily: "'Share Tech Mono', monospace",
                        fontSize: "8px",
                        letterSpacing: "0.15em",
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

      {/* ══ SISTEMA DE GESTIÓN — Declaración + Objetivos y Valores ═══
          Una sola sección oscura, unida por un Eyebrow compartido.
          Las dos subsecciones se separan internamente con una línea
          fina en vez de un cambio de fondo/borde de página completo. */}
      <section className="px-5 sm:px-8 lg:px-16 py-14 sm:py-20 bg-defensya-navy border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          

          {/* Declaración */}
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">
            <div className="lg:pt-1">
              <h2
                className="font-bold uppercase leading-tight text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                Declaración
              </h2>
              
            </div>

            <div className="border-t border-white/[0.07]">
              {declaracion.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div key={item.id} className="border-b border-white/[0.07]">
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
                      <span
                        className={`shrink-0 w-px self-stretch rounded-full transition-colors duration-200 ${
                          isOpen ? "bg-defensya-blue" : "bg-white/[0.07]"
                        }`}
                      />
                      <h3
                        className={`flex-1 font-bold uppercase transition-colors duration-200 leading-snug ${
                          isOpen
                            ? "text-white"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                        style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
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
                          ? "max-h-[600px] opacity-100 pb-6"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light pl-12">
                        {item.texto}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* divisor entre subsecciones */}
          <div className="h-px bg-white/[0.07] my-14 sm:my-20" />

          {/* Objetivos y Valores */}
          <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20">
            <div>
              <h2
                className="font-bold uppercase leading-tight text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                Objetivos
                <br />y Valores
              </h2>
              
            </div>
            <ObjetivosValoresTabs />
          </div>
        </div>
      </section>

      {/* ══ CIERRE — Compromiso de Dirección ════════════════════ */}
      {/* <section className="grid lg:grid-cols-2">
        <div className="px-5 sm:px-8 lg:px-16 py-14 sm:py-20 bg-defensya-navy flex flex-col justify-center">
          <Eyebrow onDark>Dirección General · Política de Calidad</Eyebrow>

          <blockquote
            className="font-bold uppercase text-white leading-snug"
            style={{ fontSize: "clamp(1.1rem, 2.3vw, 1.7rem)" }}
          >
            El compromiso con la calidad en todas las actividades es un
            objetivo ineludible para Defensya Ingeniería Internacional.
          </blockquote>
        </div>

        <div
          className="relative min-h-[280px] lg:min-h-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/refueling13.webp')",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(11, 31, 56, 0.35)" }}
          />
        </div>
      </section> */}
    </main>
  );
}