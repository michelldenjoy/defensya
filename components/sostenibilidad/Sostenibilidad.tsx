"use client";

import Link from "next/link";
import { useState } from "react";

const objetivos = [
  {
    id: "01",
    titulo: "Cumplimiento normativo",
    texto:
      "Cumplir con los requisitos de nuestros clientes y con los requisitos legales que se derivan de la legislación aplicable en calidad y medio ambiente, así como con otros requisitos que suscribamos relacionados con nuestros aspectos medioambientales.",
  },
  {
    id: "02",
    titulo: "Seguimiento y mejora continua",
    texto:
      "Efectuar un permanente seguimiento de los resultados obtenidos a través de la Gestión Ambiental y de Calidad. Este seguimiento será la base que nos permitirá conseguir una mejora continua del comportamiento ambiental y de la eficacia del Sistema de Gestión integrado de Calidad y Medio Ambiente y la prevención de la contaminación.",
  },
  {
    id: "03",
    titulo: "Recursos e infraestructura",
    texto:
      "Dotar de recursos humanos, económicos, de estructura y organización que nos permita mantener un Sistema de Gestión Medioambiental, basado en las normas nacionales e internacionales.",
  },
  {
    id: "04",
    titulo: "Formación y participación del equipo",
    texto:
      "Motivar y formar al personal en su desarrollo profesional, potenciando su actitud de trabajo en equipo, la comunicación interna y el trato personalizado hacia los mismos, de manera que se impliquen y sientan integrados en la consecución de la Gestión de Calidad y Ambiental.",
  },
  {
    id: "05",
    titulo: "Prevención del impacto ambiental",
    texto:
      "Establecer todos los mecanismos necesarios para prevenir y minimizar la contaminación e impacto ambiental en el desarrollo de nuestras actividades, identificando y evaluando los aspectos que puedan tener un impacto significativo en el medio ambiente, planificando los controles operacionales necesarios.",
  },
  {
    id: "06",
    titulo: "Reducción de emisiones y residuos",
    texto:
      "Reducir progresivamente nuestros vertidos de aguas residuales, residuos, nivel de ruido, la contaminación de los suelos y las emisiones de contaminantes a la atmósfera, entendiendo que sólo de esta forma estaremos garantizando el progreso y la sostenibilidad económica de nuestra compañía.",
  },
  {
    id: "07",
    titulo: "Cadena de suministro responsable",
    texto:
      "Mantener una continua colaboración y comunicación con nuestros proveedores, de forma que queden claros nuestros requisitos de calidad y medio ambiente.",
  },
];

const areas = [
  {
    num: "01",
    label: "Gestión de residuos",
    desc: "Reducción y tratamiento controlado de residuos industriales en todos los procesos de fabricación.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v6M14 11v6M9 6V4h6v2" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Eficiencia energética",
    desc: "Optimización del consumo energético en instalaciones y equipos de producción.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Cadena de suministro",
    desc: "Selección y colaboración con proveedores que cumplan los requisitos ambientales establecidos.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "Formación ambiental",
    desc: "Capacitación continua del equipo en buenas prácticas medioambientales y normativa vigente.",
    icon: (
      <svg
        width="22"
        height="22"
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
];

function SectionTag({
  children = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-3">
      {children}
    </p>
  );
}

export default function Sostenibilidad() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenItem((prev) => (prev === id ? null : id));

  return (
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <section className="px-6 lg:px-16 pt-16 pb-24 border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue uppercase">
              Impacto Positivo
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_42%] gap-10 lg:gap-20 items-center">
            <div>
              <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-display font-bold leading-[0.95] tracking-tight uppercase ">
                Compromiso
                <br />
                <span className="text-defensya-blue"> Ambiental</span>
              </h1>
            </div>

            <div className="flex flex-col gap-6 lg:pt-8">
              {/* Cert badges */}
              <div className="grid grid-cols-2 gap-px bg-gray-200 dark:bg-white/[0.07] border border-gray-200 dark:border-white/[0.07]">
                {[
                  { val: "ISO 9001", label: "Calidad" },
                  { val: "ISO 14001", label: "Medio Ambiente" },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    className="bg-white dark:bg-defensya-navy px-5 py-4"
                  >
                    <p
                      className="text-2xl font-bold text-defensya-blue"
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

              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">
                En Defensya, la calidad de nuestros servicios y la protección
                del entorno son pilares inseparables. Operamos bajo un Sistema
                de Gestión de Calidad y Medio Ambiente diseñado para optimizar
                cada proceso, garantizando la satisfacción del cliente y la
                preservación de los recursos naturales.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ══ OBJETIVOS ════ */}
      <section className="px-6 lg:px-16 py-20 bg-defensya-navy border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
            <div>
              <SectionTag light>Objetivos</SectionTag>
              <h2
                className="text-3xl lg:text-5xl  font-bold uppercase leading-tight text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Sostenibilidad
                <br />
                Operativa
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mt-4">
                {objetivos.length} compromisos activos
              </p>
            </div>

            {/* Accordion */}
            <div className="border-t lg:px-20 border-white/[0.07]">
              {objetivos.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div key={item.id} className="border-b border-white/[0.07]">
                    <button
                      onClick={() => toggle(item.id)}
                      className="w-full flex items-center gap-5 py-5 text-left group"
                    >
                      <span className="font-mono text-[11px] text-defensya-sky tracking-widest shrink-0 w-7">
                        {item.id}
                      </span>
                      <span
                        className={`shrink-0 w-0.75 self-stretch rounded-full transition-colors duration-200 ${
                          isOpen ? "bg-defensya-blue" : "bg-white/8"
                        }`}
                      />
                      <h3
                        className={`flex-1 text-base lg:text-lg font-bold uppercase transition-colors duration-200 ${
                          isOpen
                            ? "text-white"
                            : "text-gray-400 group-hover:text-gray-200"
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
                        className={`shrink-0 text-gray-500 transition-transform duration-300 ${
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
                          ? "max-h-64 opacity-100 pb-5"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-gray-400 leading-relaxed pl-12">
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

      {/* ══ ÁREAS DE ACTUACIÓN ════ */}
      <section className="px-6 lg:px-16 py-20 border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] items-center  gap-10 lg:gap-20">
            <div>
              <SectionTag>Acción</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 dark:text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Áreas de Actuación
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-gray-200 dark:bg-white/[0.07] border border-gray-200 dark:border-white/[0.07]">
              {areas.map(({ num, label, desc, icon }) => (
                <div
                  key={num}
                  className="group bg-white dark:bg-defensya-navy p-6 lg:p-8 hover:bg-gray-50 dark:hover:bg-white/3 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-defensya-blue opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                      {icon}
                    </div>
                    <span className="font-mono text-[11px] text-gray-300 dark:text-gray-600 tracking-widest">
                      {num}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-px w-5 bg-defensya-blue" />
                    <div className="h-px flex-1 bg-gray-100 dark:bg-white/6" />
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
      </section>

      {/* ══ DECLARACIÓN FINAL ══════ */}
      <section className="px-6 lg:px-16 py-20 border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] items-center  gap-10 lg:gap-20">
            <div>
              <SectionTag>Declaración</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 dark:text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Posición oficial
              </h2>
            </div>

            <div className="border border-gray-200 dark:border-white/[0.07] p-8 lg:p-10 flex gap-6 items-start">
              <div className="w-0.75 self-stretch bg-defensya-blue shrink-0 rounded-full" />
              <div>
                <p className="text-[11px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-4">
                  Declaración final
                </p>
                <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "Defensya Ingeniería Internacional establece, implanta y
                  mejora un Sistema de Gestión de la Calidad y Medio Ambiente,
                  asegurando, controlando y optimizando la calidad de sus
                  servicios con el objetivo de satisfacer las necesidades de los
                  clientes."
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="h-px w-6 bg-gray-300 dark:bg-white/20" />
                  <span className="font-mono text-[11px] tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase">
                    Defensya Ingeniería Internacional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA — POLÍTICA DE CALIDAD ═════ */}
      <section className="px-6 lg:px-16 py-14 bg-defensya-navy border-b border-white/[0.07]">
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
                className="text-xl lg:text-3xl font-bold uppercase text-white leading-snug max-w-3xl"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Todas nuestras actividades se desarrollan desde la perspectiva
                de la protección y conservación del medio ambiente como garantía
                de progreso y continuidad.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="h-px w-8 bg-defensya-blue" />
                <span className="font-mono text-[11px] tracking-[0.3em] text-gray-500 uppercase">
                  Dirección General — Política Medioambiental
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
