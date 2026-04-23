"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ThreePlane from "../ui/ThreePlane";

function Rule() {
  return <hr className="border-t border-gray-200 dark:border-white/8" />;
}

const items = [
  {
    label: "Reconocimiento",
    value: "Airbus Top Award Supplier",
  },
  {
    label: "Estándar",
    value: "Certificación EN 9100 / ISO 9001",
  },
  {
    label: "Soberanía",
    value: "Tecnología 100% Europea",
  },
];

export default function Hometwo() {
  return (
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <section className="pt-14 min-h-[85vh] items-center grid lg:grid-cols-[1fr_55%] overflow-hidden">
        {/* texto izquierda */}
        <div
          className="flex flex-col justify-center px-6 lg:px-20 pt-20 pb-16
                  border-r border-gray-200 dark:border-white/[0.07] bg-white dark:bg-defensya-navy"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-defensya-blue" />
              <span className="text-[12px] font-bold tracking-[0.4em] text-defensya-blue uppercase">
                Sistemas aeroespaciales avanzados
              </span>
            </div>

            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tighter
                   uppercase text-gray-900 dark:text-white mb-10"
              style={{
                fontFamily: "var(--font-display, 'Inter', sans-serif)",
              }}
            >
              Tecnología
              <br />
              <span className="text-defensya-blue ">Soberana</span>
              <br />
              Aeroespacial
            </h1>

            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mb-12 border-l border-defensya-blue/20 pl-6">
              Defensya desarrolla tecnologías avanzadas para los sistemas
              aeroespaciales del futuro. Visión artificial y software
              inteligente donde el margen de error es inexistente.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/productos"
                className="px-5 py-3 bg-defensya-blue text-white text-[11px] tracking-[0.2em]
                     uppercase font-bold hover:bg-defensya-navy-accent transition-all hover:px-7"
              >
                Nuestros Proyectos
              </Link>
              <Link
                href="/empresa/quienes-somos"
                className="px-8 py-3 border border-gray-300 dark:border-white/10 text-[11px]
                     tracking-[0.2em] uppercase font-bold text-gray-700 dark:text-gray-300
                     hover:bg-white/5 transition-all"
              >
                Sobre Defensya
              </Link>
            </div>
          </motion.div>
        </div>

        {/* imagen derecha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="relative aspect-video w-full shadow-2xl overflow-hidden border border-gray-100 dark:border-white/5 bg-[#05080e]/50">
            {/* <ThreePlane /> */}
            <Image
              src="/images/refueling2.webp"
              alt="Defensya Hero Image"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform"
            />
          </div>
        </motion.div>
      </section>

      <Rule />

      {/* ───────── TRUST STRIP ───────── */}
      <section className="py-12 bg-defensya-navy-light dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-wrap justify-around items-center gap-8 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-defensya-steel">
                  {item.label}
                </p>
                <p className="text-sm text-white font-bold uppercase">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── QUÉ HACEMOS className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3" ───────── */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-3">
                Capacidades Core
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold uppercase leading-[0.9] tracking-tighter">
                Sistemas de <br />
                Alto Rendimiento
              </h2>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed border-l border-gray-200 dark:border-white/10 pl-8">
              Arquitecturas modulares que integran inteligencia artificial y
              procesamiento en tiempo real para el dominio del espacio aéreo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Visión Computacional",
                desc: "Algoritmos avanzados para la detección y seguimiento de activos en condiciones de visibilidad nula.",
              },
              {
                num: "02",
                title: "Smart Refueling",
                desc: "Líderes en automatización del reabastecimiento en vuelo (A3R/A4R) con precisión milimétrica.",
              },
              {
                num: "03",
                title: "Sistemas Críticos",
                desc: "Desarrollo de hardware y software bajo estándares de seguridad aeronáutica más exigentes.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="group cursor-default">
                <div className="text-4xl font-bold text-defensya-blue/20 group-hover:text-defensya-blue transition-colors mb-6 font-mono">
                  {num}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                  {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-balance">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ───────── INNOVACIÓN ───── */}
      <section className="py-20 px-6 lg:px-16 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center mb-16">
            <div>
              <p
                className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3"
              >
                Tecnologías
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none
                            text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Impulsamos el futuro
                <br />
                del reabastecimiento
              </h2>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed border-l border-gray-200 dark:border-white/10 pl-8">
              Nuestras soluciones propietarias cubren el ciclo completo del
              reabastecimiento aéreo automatizado, desde la percepción hasta el
              control háptico del botalón.
            </p>
          </div>

          <div className="border-t border-white/8">
            {[
              {
                name: "A3R®",
                tag: "Air-to-Air Automated Refueling",
                desc: "Reabastecimiento Air-to-Air automatizado para aeronaves de nueva generación.",
              },
              {
                name: "A4R®",
                tag: "Autonomous Aerial Refueling",
                desc: "Conceptos de reabastecimiento aéreo completamente autónomo.",
              },
              {
                name: "Boomerang®",
                tag: "Precision Receptacle Location",
                desc: "Tecnología de localización precisa del receptáculo en condiciones adversas.",
              },
              {
                name: "Haptix®",
                tag: "Haptic Boom Control",
                desc: "Control háptico avanzado para el botalón de repostaje.",
                href: "/haptix",
                highlight: true,
              },
            ].map(({ name, tag, desc, href, highlight }) => (
              <div
                key={name}
                className={`grid md:grid-cols-[180px_220px_1fr] gap-6 items-center
                 py-8 border-b border-white/8
                 hover:bg-white/3 transition-colors px-4 -mx-4 group ${
                   highlight ? "bg-white/2" : "bg-transparent"
                 }
        hover:bg-white/5`}
              >
                {/* Nombre del Producto */}
                <span
                  className="text-2xl font-bold text-white"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                  }}
                >
                  {name}
                </span>

                {/* Tag Técnico */}
                <span className="text-[11px] font-mono tracking-[0.15em] text-defensya-sky uppercase">
                  {tag}
                </span>

                {/* Descripción + Link */}
                <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
                  <span className="text-md text-gray-400 leading-snug">
                    {desc}
                  </span>

                  {href && (
                    <Link
                      href={href}
                      className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-defensya-sky hover:text-white transition-all group/link"
                    >
                      <span className="border-b border-defensya-sky/30 group-hover/link:border-white transition-colors pb-1">
                        Explora el proyecto
                      </span>
                      <div className="p-1.5 rounded-full border border-defensya-sky/20 group-hover/link:border-white group-hover/link:bg-white group-hover/link:text-black transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/innovacion"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase
                         font-medium text-white border border-white/20 px-6 py-3
                         hover:bg-white/10 hover:border-white/40 transition-all"
            >
              Nuestras Tecnologías
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4-4 4M3 12h18"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Rule />

      {/* ──────────── CAPACIDADES ─────────────────── */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center mb-16">
            <div>
              <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-3">
                Ingeniería
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none tracking-tight"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Capacidades
                <br />
                de Ingeniería
              </h2>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed border-l border-gray-200 dark:border-white/10 pl-8">
              Cubrimos el stack completo de ingeniería aeroespacial, desde el
              diseño electrónico hasta la inteligencia artificial embarcada, con
              aplicación directa en entornos de alta exigencia.
            </p>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0
                          border-t border-l border-gray-200 dark:border-white/[0.07]"
          >
            {[
              "Diseño Electrónico",
              "Sistemas Embebidos",
              "Procesamiento de Señal",
              "Sistemas de Visión",
              "IA y Aprendizaje Automático",
              "Sistemas de Datos Seguros",
            ].map((capability, i) => (
              <div
                key={i}
                className="border-b border-r  border-gray-200 dark:border-white/[0.07]
                           p-6 flex items-center justify-between group
                           hover:bg-gray-50 dark:hover:bg-white/2 transition-colors"
              >
                <span className="text-md font-medium">{capability}</span>
                <span className="text-[12px] font-mono text-gray-300 dark:text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ──────────── COLABORACION ───── */}
      <section className="py-20 px-6 lg:px-16 bg-defensya-navy">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p
              className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3"
            >
              Colaboración
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none
                         tracking-tight text-white max-w-2xl"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Colaborando en la próxima generación de sistemas aeroespaciales
            </h2>
          </div>

          <div className="flex flex-col gap-3 lg:items-end shrink-0">
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed border-l border-gray-200 dark:border-white/10 pl-8">
              Trabajamos con fabricantes, organizaciones de defensa y socios
              tecnológicos para desarrollar los sistemas del futuro.
            </p>
            <Link
              href="/contacto"
              className="px-8 py-3 w-40 bg-defensya-blue text-white text-xs tracking-widest
                         uppercase font-medium hover:bg-defensya-navy-accent transition-colors
                         whitespace-nowrap"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
