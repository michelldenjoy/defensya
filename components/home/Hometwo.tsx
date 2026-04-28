"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ThreePlane from "../ui/ThreePlane";
import Divisiones from "./Divisiones";
import HeroSection from "./HeroSection";
import TecnologiasSection from "./TecnologiaSection";

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

<HeroSection />


      <Rule />

      {/* ───────── TRUST STRIP ───────── */}
      <section className="py-12 bg-defensya-navy dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/5">
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

      {/* ───────── QUÉ HACEMOS ───────── */}
      <section className="py-22 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center mb-16">
            <div>
 
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none tracking-tight"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Sistemas de 
                <br />
                Alto Rendimiento
              </h2>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md leading-relaxed border-l border-gray-200 dark:border-white/10 pl-8">
              Arquiecturas modulares que integran inteligencia artificial y procesamiento en tiempo real para el dominio del espacio aéreo.
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


<Divisiones />


      {/* ──────────── CAPACIDADES ─────────────────── */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center mb-16">
            <div>
              <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-3">
                Especialización
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none tracking-tight"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Capacidades y Soluciones
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

      {/* ───────── INNOVACIÓN ───── */}
      <TecnologiasSection />


     

      <Rule />



      <Rule />

      {/* ──────────── COLABORACION ───── */}
      {/* <section className="py-20 px-6 lg:px-16 bg-defensya-navy">
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
      </section> */}
    </main>
  );
}
