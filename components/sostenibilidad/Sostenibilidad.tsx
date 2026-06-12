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
    image: "/images/residuos.jpg",
    
  },
  {
    num: "02",
    label: "Eficiencia energética",
    desc: "Optimización del consumo energético en instalaciones y equipos de producción.",
    image: "/images/energia.jpg",
    
  },
  {
    num: "03",
    label: "Cadena de suministro",
    desc: "Selección y colaboración con proveedores que cumplan los requisitos ambientales establecidos.",
    image: "/images/colabambiental.jpg",
    
  },
  {
    num: "04",
    label: "Formación ambiental",
    desc: "Capacitación continua del equipo en buenas prácticas medioambientales y normativa vigente.",
    image: "/images/formacion.jpg",
    
  },
];

function SectionTag({
  children = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className="text-[14px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-3">
      {children}
    </p>
  );
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        
        style={{ transform: "rotate(45deg)" }}
      />
      <span
        className={light ? "text-defensya-blue" : "text-defensya-blue"}
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "14px",
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

export default function Sostenibilidad() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenItem((prev) => (prev === id ? null : id));

  return (
    <main className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white">
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-white/[0.07]">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sostenibilidad-hero.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 dark:bg-defensya-navy/85" />

        <div className="relative z-10 px-6 lg:px-16 pt-20 pb-24">
          <div className="max-w-7xl mx-auto">
            <Eyebrow>Medio Ambiente · Defensya Systems </Eyebrow>
            <div className="grid lg:grid-cols-[1fr_38%] gap-16 items-center">
              <div>
                <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-display font-bold leading-[0.95] tracking-tight uppercase">
                  Trabajamos <br /> por un Futuro
                  <span className="text-defensya-blue"> Sostenible</span>
                </h1>
              </div>
              <div className="flex flex-col gap-6 lg:pt-8">
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
        </div>
      </section>

      {/* ══ OBJETIVOS ════ */}
      <section className="px-6 lg:px-16 py-20 bg-defensya-navy border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
            <div>
              <SectionTag light>Objetivos</SectionTag>
              <h2 className="text-3xl lg:text-5xl  font-bold uppercase leading-tight text-white">
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
              <h2 className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 dark:text-white">
                Áreas de Actuación
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed lg:pb-1 lg:max-w-lg">
                Cuatro ejes de acción medioambiental que guían las decisiones de cada área de la compañía.
              </p>
            </div>
            

            <div className="grid sm:grid-cols-2 gap-2 bg-gray-200 dark:bg-white/[0.07] border border-gray-200 dark:border-white/[0.07]">
              {areas.map(({ num, label, desc, image }) => (
                <div
                  key={num}
                  className="group relative overflow-hidden bg-black/65 dark:bg-defensya-navy transition-colors duration-200"
                >
                  {/* Imagen de fondo siempre visible */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-55 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  {/* Overlay para legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-defensya-navy/70 via-defensya-navy/30 to-transparent" />

                  {/* Contenido */}
                  <div className="relative z-10 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-5">

                      <span className="font-mono text-[11px] text-gray-300 dark:text-gray-600 tracking-widest">
                        {num}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="h-px w-5 bg-defensya-blue" />
                      <div className="h-px flex-1 bg-gray-100 dark:bg-white/6" />
                    </div>
                    <h3 className="text-3xl font-bold uppercase leading-none text-white mb-3">
                      {label}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed hover:text-gray-200">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA — POLÍTICA DE CALIDAD ═════ */}
      <section className="border-b border-gray-200 dark:border-white/[0.07]">
        <div className="grid lg:grid-cols-2">

          {/* Izquierda — quote */}
          <div className="px-6 lg:px-16 py-14 bg-defensya-navy flex flex-col justify-center">
            <p
              className="text-defensya-blue mb-6"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}
            >
              Dirección General — Política Medioambiental
            </p>
            <blockquote
              className="font-bold uppercase text-white leading-snug"
              style={{ fontSize: "clamp(1.1rem, 2.3vw, 1.7rem)" }}
            >
              Todas nuestras actividades se desarrollan desde la protección y
              conservación del medio ambiente como garantía de progreso y
              continuidad.
            </blockquote>
            <div className="flex items-center gap-3 mt-8">
              <div className="h-px w-8 bg-defensya-blue shrink-0" />
              <span
                className="text-gray-500"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Defensya Systems S.L. · Compromiso Ambiental Activo
              </span>
            </div>
          </div>

          {/* Derecha — imagen */}
          <div
            className="relative min-h-[280px] lg:min-h-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/forest1.jpg')" }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(11, 31, 56, 0.3)" }}
            />
          </div>

        </div>
      </section>
    </main>
  );
}
