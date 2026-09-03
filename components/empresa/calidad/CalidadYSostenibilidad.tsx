"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ClipButton } from "@/components/home/HeroSection";



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

const objetivosCalidad = [
  "Concienciar al equipo directivo de la importancia de su participación en el proyecto con el fin de mejorar los flujos de información.",
  "Impulsar la obtención de resultados medibles en los procesos de la empresa mediante la incorporación de indicadores en los mismos.",
  "Fomentar la participación del personal en el desarrollo de la calidad y en el proceso de mejora continua, promoviendo su formación y la permanente actualización de sus conocimientos, habilidades y desarrollo profesional.",
];

const valores = [
  {
    label: "Enfoque al cliente",
    desc: "Satisfacción de las necesidades del cliente optimizando los recursos disponibles.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Formación continua",
    desc: "La formación como mecanismo fundamental de mejora continua de productos y servicios.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    label: "Mejora continua",
    desc: "Proceso fundamental de mejora del Sistema de Gestión de la Calidad.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

const areasSostenibilidad = [
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


function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8 min-w-0">
      <span
        className="text-slate-500 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase"
      >
        {children}
      </span>

    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   SUB-TABS: Objetivos / Valores
   ════════════════════════════════════════════════════════════════ */

type SubTab = "objetivos" | "valores";

function ObjetivosValoresTabs() {
  const [tab, setTab] = useState<SubTab>("objetivos");

  return (
    <div className="min-w-0">
      
      <div className="flex border-b border-white/10 mb-8">
        {([
          { key: "objetivos", label: "Objetivos Estratégicos" },
          { key: "valores", label: "Valores Fundamentales" },
        ] as { key: SubTab; label: string }[]).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`relative shrink-0 px-4 sm:px-5 py-3 text-left transition-colors duration-200 ${
              tab === key ? "text-white" : "text-gray-500 hover:text-gray-300"
            }`}
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
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

      {/* Objetivos       style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontFamily: "'Barlow Condensed', sans-serif"
               }} */}
      {tab === "objetivos" && (
        <div className="border-t border-white/[0.06]">
          {objetivosCalidad.map((item, i) => (
            <div
              key={i}
              className="group flex gap-4 sm:gap-6 py-5 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-200"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {valores.map((item, i) => (
            <div
              key={i}
              className="group bg-defensya-navy hover:bg-white/[0.03] transition-colors duration-200 p-5 sm:p-6"
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
                style={{ fontSize: "0.9rem", letterSpacing: "0.04em" }}
              >
                {item.label}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   TAB 1 — POLÍTICA DE CALIDAD
   ════════════════════════════════════════════════════════════════ */

function PoliticaCalidadTab() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const toggle = (id: string) => setOpenItem((prev) => (prev === id ? null : id));

  return (
    <div className="min-w-0">
     
      <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 xl:gap-20">
        <div className="lg:pt-1">
          <h2
            className="font-bold uppercase leading-tight text-white"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
          >
            Declaración
          </h2>
        </div>

        <div className="border-t border-white/[0.07] min-w-0">
          {declaracion.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div key={item.id} className="border-b border-white/[0.07]">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center gap-3 sm:gap-5 py-5 text-left group"
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
                    className={`flex-1 min-w-0 font-bold uppercase transition-colors duration-200 leading-snug ${
                      isOpen ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                    }`}
                    style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}
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
                    isOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light pl-10 sm:pl-12 pr-2">
                    {item.texto}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-white/[0.07] my-12 sm:my-16 lg:my-20" />

      {/* Objetivos y Valores */}
      <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 xl:gap-20">
        <div>
          <h2
            className="font-bold uppercase leading-tight text-white"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
          >
            Objetivos y Valores
          </h2>
        </div>
        <ObjetivosValoresTabs />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   TAB 2 — SOSTENIBILIDAD
   ════════════════════════════════════════════════════════════════ */

function SostenibilidadTab() {
  return (
    <div className="min-w-0">
      {/* Áreas de actuación */}
      <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 xl:gap-20">
        <div>
          <p
            className="text-gray-500 uppercase mb-3"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.3em",
            }}
          >
            Acción
          </p>
          <h2
            className="font-bold uppercase leading-tight text-white mb-3"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
          >
            Áreas de
            <br />Actuación
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Cuatro ejes de acción medioambiental que guían las decisiones de cada área de la compañía.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07]">
          {areasSostenibilidad.map(({ num, label, desc, image }) => (
            <div
              key={num}
              className="group relative overflow-hidden bg-defensya-navy min-h-[220px] sm:min-h-[240px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-55 group-hover:opacity-80 transition-opacity duration-500"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-defensya-navy/80 via-defensya-navy/40 to-transparent" />
              <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-end">
                <span
                  className="font-mono text-[11px] text-gray-500 tracking-widest mb-4 block"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  {num}
                </span>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-5 bg-defensya-blue" />
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3
                  className="font-bold uppercase leading-none text-white mb-2"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
                >
                  {label}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-white/[0.07] my-12 sm:my-16 lg:my-20" />

      {/* CTA — sostenibilidad */}
      <div className="grid  lg:grid-cols-2 border border-white/[0.07]">
        <div className="px-6 sm:px-8 py-10 sm:py-14 flex flex-col justify-center">
          <blockquote
            className="font-bold uppercase text-white leading-snug"
            style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)" }}
          >
            Todas nuestras actividades se desarrollan desde la protección y conservación del medio ambiente como garantía de progreso y continuidad.
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
        <div
          className="relative min-h-[240px] lg:min-h-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/forest1.jpg')" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(11, 31, 56, 0.3)" }} />
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   main component
   ════════════════════════════════════════════════════════════════ */

type MainTab = "calidad" | "sostenibilidad";

const mainTabs: { key: MainTab; num: string; label: string }[] = [
  { key: "calidad", num: "01", label: "Política de Calidad" },
  { key: "sostenibilidad", num: "02", label: "Sostenibilidad" },
];

export default function CalidadYSostenibilidad() {
  const [mainTab, setMainTab] = useState<MainTab>("calidad");

  return (
    <main className="w-full bg-white text-white overflow-x-hidden">

      {/* ══ HERO ═════════════════════════════════════════════════ */}
      <section className="relative px-5 sm:px-8 lg:px-16 pt-16 sm:pt-20 pb-16 sm:pb-24 border-b border-gray-200 dark:border-white/[0.07] overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <Eyebrow>Calidad · Certificación · Sostenibilidad</Eyebrow>

          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">
            <div>
              <h1
                className="font-bold uppercase leading-[0.92] tracking-[-0.045em] text-gray-900 dark:text-white mb-6"
                style={{ fontSize: "clamp(2.3rem, 4.6vw, 5.2rem)",
                  
                  letterSpacing: "0.005em"
                 }}
              >
                Compromiso en
                <br />
                <span className="text-defensya-blue">Entornos Críticos</span>
              </h1>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                El cumplimiento de los estándares internacionales es la base de nuestra ingeniería. Sostenemos un sistema de gestión
                orientado a la rigurosidad técnica, la mejora continua y la protección del entorno, acreditado por las principales
                entidades de certificación del sector.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="inline-flex items-stretch border border-gray-200 dark:border-white/[0.1] self-start w-full sm:w-auto">
                <div className="w-1 bg-defensya-blue shrink-0" />
                <div className="px-5 py-4 flex-1">
                  <p
                    className="text-gray-400 dark:text-gray-500 mb-1"
                    style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}
                  >
                    Certificación activa
                  </p>
                  <p className="font-bold text-defensya-blue dark:text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}>
                    ISO 9001:2015
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══ TAB BAR PRINCIPAL ═══════════════════════════════════ */}
      <section className="bg-defensya-navy border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-10 sm:py-14 flex justify-center">
          <div className="relative inline-flex items-stretch border border-white/[0.12]">
            {/* Corner brackets HUD */}
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-defensya-blue pointer-events-none" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-defensya-blue pointer-events-none" />

            {mainTabs.map(({ key, num, label }, i) => {
              const isActive = mainTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setMainTab(key)}
                  className={`relative flex items-center gap-3 sm:gap-4 px-7 sm:px-10 lg:px-14 py-5 sm:py-6 transition-colors duration-300 ${
                    isActive
                      ? "bg-white/[0.04] text-white"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.015]"
                  } ${i !== 0 ? "border-l border-white/[0.1]" : ""}`}
                >
                  <span
                    className={`transition-colors duration-300 shrink-0 ${
                      isActive ? "text-defensya-blue" : "text-gray-600"
                    }`}
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {num}
                  </span>
                  <span
                    className="font-bold uppercase whitespace-nowrap"
                    style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.82rem)", letterSpacing: "0.06em" }}
                  >
                    {label}
                  </span>
                  {/* Indicador activo */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-defensya-blue transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CONTENIDO ACTIVO ════════════════════════════════════ */}
      <section className="px-5 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">
          {mainTab === "calidad" && <PoliticaCalidadTab />}
          {mainTab === "sostenibilidad" && <SostenibilidadTab />}
        </div>
      </section>
    </main>
  );
}