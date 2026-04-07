"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Settings,
} from "lucide-react";


interface SpecItem {
  label: string;
  valor: string;
  extra?: string;
  destacado?: boolean;
  tags?: string[];
}

interface SpecSection {
  titulo: string;
  items: SpecItem[];
}

interface Version {
  v: string;
  desc: string;
  current?: boolean;
  future?: boolean;
}

interface ModoOperativo {

  titulo: string;
  descripcion: string;
}


const HAPTIX_IMAGES = [
  { src: "/products/haptixfrontal.png" },
  { src: "/products/haptixback.jpg" },
  { src: "/products/haptixside.jpg" },
  { src: "/products/haptixangle.png" },
];

const MODOS_OPERATIVOS: ModoOperativo[] = [
  {
    titulo: "Tracking Mode",
    descripcion:
      "Reduce la fricción y las fuerzas necesarias para mover el stylus. Aísla al usuario de la carga mecánica real del botalón, permitiendo movimientos fluidos y sin esfuerzo.",
  },
  {
    titulo: "Anti-collision",
    descripcion:
      'Crea "paredes virtuales" de software para evitar impactos con el cockpit, fuselaje o alas del receptor. Mantiene el equipo estrictamente dentro del margen de seguridad.',
  },
  {
    titulo: "Contact Aiding",
    descripcion:
      "Genera un campo de fuerza virtual que atrae o repele la boquilla del receptáculo. Facilita la inserción perfecta, evitando situaciones no deseadas mediante fuerzas escaladas.",
  },
];

const VERSIONES_ROADMAP: Version[] = [
  { v: "1.0", desc: "Prototipo inicial (3D Printing)" },
  { v: "2.0", desc: "Mejora de sensado y ergonomía" },
  { v: "3.0", desc: "Diseño rugerizado y nuevos sensores" },
  { v: "4.0", desc: "Diseño mecánico final certificado", current: true },
  { v: "5.0", desc: "AAR Totalmente Automático", future: true },
];

const ESPECIFICACIONES_TECNICAS: SpecSection[] = [
  {
    titulo: "Dimensiones y Peso",
    items: [
      { label: "Peso Operativo", valor: "7.0 Kg" },
      { label: "Dimensiones (mm)", valor: "260 × 230 × 345", extra: "(W×D×H)" },
    ],
  },
  {
    titulo: "Electrónica e I/O",
    items: [
      { label: "Voltaje Operativo", valor: "28V DC", extra: "(MIL-STD-704F Compliant)" },
      { label: "Protocolos de Entrada / Salida", valor: "ARINC 429 / RS422", destacado: true },
    ],
  },
  {
    titulo: "Rango y Cumplimiento",
    items: [
      { label: "Temperatura de Operación", valor: "-55°C", extra: "to +85°C" },
      { label: "Compliance Standards", valor: "RTCA Certifications", tags: ["DO-160G", "DO-178C", "DO-254"] },
    ],
  },
];



function SectionTag({ children = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-3">
      {children}
    </p>
  );
}



export default function Page() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % HAPTIX_IMAGES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + HAPTIX_IMAGES.length) % HAPTIX_IMAGES.length);

  return (
    <main className="bg-white dark:bg-defensya-navy text-gray-900 dark:text-gray-100 min-h-screen selection:bg-defensya-blue/30">

      
      <section className="min-h-screen grid lg:grid-cols-[1fr_45%] bg-blue-950 text-gray-100 border-b border-white/5 relative overflow-hidden">
        {/* IZQUIERDA TEXTO */}
        <div className="relative z-10 flex flex-col justify-center px-8 lg:px-20 pt-36 pb-20 border-r border-white/5">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[12px] font-mono tracking-[0.3em] text-slate-200 mb-6 block uppercase"
          >
            The Haptix Concept
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[clamp(2rem,3.8vw,4.2rem)] font-bold leading-[1.15] text-white mb-10"
            style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
          >
            Hacia un
            <br />
            Reabastecimiento
            <br />
            <span>Semiautomático</span>{" "}
            <span>y Robusto</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-400 leading-relaxed max-w-md mb-14 font-light"
          >
            En entornos cambiantes, la complejidad operativa escala drásticamente. Haptix® nace
            para reducir la carga de trabajo del boomer, haciendo que la misión sea más
            intuitiva y drásticamente más segura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="grid grid-cols-2 border border-white/[0.07]"
          >
            {[
              { value: "V4.0", label: "Latest Hardware" },
              { value: "ARINC 429", label: "I/O Standard" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-8 py-7 bg-white/2 ${i === 1 ? "border-l border-white/[0.07]" : ""}`}
              >
                <p
                  className="font-bold text-3xl text-gray-100 leading-none mb-2"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {stat.value}
                </p>
                <p className="font-mono text-[9px] text-gray-500 tracking-[0.3em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DERECHA IMAGEN */}
        <div className="relative hidden lg:block">
          <Image
            src="/products/haptix2.webp"
            alt="Haptix Control System"
            fill
            className="object-cover object-center"
            priority
          />
         {/* Esquinas de imagen */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#040508]/40 to-transparent" />
          <div className="absolute top-8 left-8 w-5 h-5 border-t border-l border-white" />
          <div className="absolute top-8 right-8 w-5 h-5 border-t border-r border-white" />
          <div className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-white" />
          <div className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-white" />
        </div>
      </section>

      
      <section className="py-24 px-6 lg:px-16 bg-gray-50 dark:bg-[#080a0f] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-20 mb-16">
            <div>
              <SectionTag>Contexto</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                El problema
                <br />
                y la solución
              </h2>
            </div>
            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed lg:pt-8 max-w-2xl">
              Históricamente, el reabastecimiento en vuelo ha saturado las dos manos del operador. Haptix® redefine esta interacción con un único dispositivo de control.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">

           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-[#080a0f] p-8 lg:p-10 flex flex-col gap-7"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] tracking-[0.3em] text-red-400 uppercase">Control Tradicional</span>
              </div>
              <h3
                className="text-3xl font-bold uppercase leading-none text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                El limitante
              </h3>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">
                Históricamente, el reabastecimiento se ha basado en dos joysticks: uno para el alabeo/cabeceo y otro para la extensión del botalón. Esto satura ambas manos del Boomer, impidiéndole gestionar otras funciones críticas de la consola sin soltar los mandos.
              </p>
              <div className="border-l-4 border-red-800/60 bg-gray-100 dark:bg-red-950/20 p-6 mt-auto">
                <p className="text-md italic text-gray-600 dark:text-red-200 leading-relaxed">
                  "Los joysticks no intuitivos de la 'vieja escuela' generan una mayor propensión al error humano y fatiga en misiones prolongadas."
                </p>
              </div>
            </motion.div>

            {/* Solución */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15 }}
              className="bg-white dark:bg-[#080a0f] p-8 lg:p-10 flex flex-col gap-7"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] tracking-[0.3em] text-defensya-sky uppercase">Haptix Device</span>
              </div>
              <h3
                className="text-3xl font-bold uppercase leading-none text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                La revolución
              </h3>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">
                Con Haptix, solo se requiere <strong className="text-gray-900 dark:text-white">una mano</strong> para controlar y manejar el boom. Ofrece una maniobrabilidad superior a los sistemas actuales, siendo extremadamente intuitivo. Esto reduce los recursos necesarios y permite alcanzar un nivel de experto en una fracción del tiempo habitual.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {[
                  "Contacto realizado en menor tiempo operativo.",
                  "Menor probabilidad de incidentes inesperados.",
                  "Manejo intuitivo con retroalimentación física.",
                  "Libera la segunda mano para gestión de sistemas.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-md text-gray-600 dark:text-gray-300">
                    <span className="w-0.75 h-0.75 rounded-full bg-defensya-blue mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CAPACIDADES Y HARDWARE */}
      <section className="py-24 px-6 lg:px-16 border-b border-gray-100 dark:border-white/5 bg-white dark:bg-[#050609]">
        <div className="max-w-7xl mx-auto">

          <div className="grid items-center lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
            <div>
              <SectionTag>Hardware</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                Interacción
                <br />
                a escala real
              </h2>
            </div>
            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed lg:pt-8 max-w-2xl">
              El propósito de Haptix® es crear una imagen escalada que permita al usuario interactuar con el sistema real, pero con fuerza y tamaño reducidos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

            {/* SLIDER */}
            <div className="relative group overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl bg-gray-50 dark:bg-black/30 p-2">
              <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-defensya-blue z-20" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-defensya-blue z-20" />

              <div className="relative aspect-3/4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={HAPTIX_IMAGES[current].src}
                      alt={`Haptix vista ${current + 1}`}
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-30" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Nav controls */}
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prev}
                  className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-defensya-blue transition-colors active:scale-95"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-defensya-blue transition-colors active:scale-95"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dot indicatores */}
              <div className="absolute top-8 right-8 flex gap-2 z-30 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm">
                {HAPTIX_IMAGES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-defensya-blue" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {[
                {
                  titulo: "Efectores Hápticos",
                  desc: "Motores y engranajes coordinados que vibran y bloquean movimientos peligrosos para advertir al operador de forma física.",
                },
                {
                  titulo: "Protección de Envolvente",
                  desc: "Sensores que evitan colisiones y guían al operador para permanecer dentro de los límites operativos del Boom.",
                },
              ].map(({ titulo, desc }, i) => (
                <div
                  key={i}
                  className="p-6 lg:p-7 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 hover:border-defensya-blue/30 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-5 bg-defensya-blue" />
                    <h4
                      className="text-lg font-bold uppercase leading-none text-gray-900 dark:text-white"
                      style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                    >
                      {titulo}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── MODOS OPERATIVOS ── */}
          <div>
            <div className="grid items-center lg:grid-cols-2 gap-10 lg:gap-20 mb-10">
              <div>
                <SectionTag>Software</SectionTag>
                <h2
                  className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 dark:text-white"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  Modos
                  <br />
                  Operativos
                </h2>
              </div>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed lg:pt-8 max-w-2xl">
                Tres capas de software trabajando en paralelo para garantizar la precisión total en el contacto.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">
              {MODOS_OPERATIVOS.map((modo, i) => {
                
                return (
                  <motion.div
                    key={modo.titulo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white dark:bg-[#050609] p-7 lg:p-8 hover:bg-gray-50 dark:hover:bg-white/3 transition-colors relative"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-defensya-blue/60 transition-colors duration-300" />
                    <div className="flex items-center justify-between mb-5">
                     
                      <span className="font-mono text-[10px] tracking-[0.3em] text-gray-300 dark:text-gray-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-px w-4 bg-defensya-blue" />
                      <div className="h-px flex-1 bg-gray-100 dark:bg-white/6" />
                    </div>
                    <h4
                      className="text-2xl font-bold uppercase leading-none text-gray-900 dark:text-white mb-3"
                      style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                    >
                      {modo.titulo}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {modo.descripcion}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ EVOLUCIÓN  */}
      <section className="py-24 px-6 lg:px-16 bg-defensya-navy border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto">

          <div className="grid items-center lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
            <div>
              <SectionTag light>Roadmap</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                Evolución
                <br />
                del sistema
              </h2>
            </div>
            <p className="text-md text-gray-400 leading-relaxed lg:pt-8 max-w-2xl">
              Desde los primeros prototipos en impresión 3D hasta la actual Versión 4.0, hemos perfeccionado la capacidad de sensado, la robustez mecánica y la experiencia del usuario.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">

           
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="border border-white/[0.07] p-8 lg:p-10 flex flex-col gap-5">
                <p className="text-sm text-gray-400 leading-relaxed">
                  No existe en el mercado de reabastecimiento un dispositivo como el <strong className="text-white">Haptix®</strong>. Desde los primeros prototipos en impresión 3D hasta la actual <strong className="text-white">Versión 4.0</strong>, hemos perfeccionado la capacidad de sensado, la robustez mecánica y la experiencia del usuario (User Friendliness).
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  El sistema utiliza un conjunto de sensores giroscópicos, de presión y ópticos que detectan cada micro-movimiento del operador sobre el <em>Stylus</em>. Esta información se cruza con el <strong className="text-white">BCU (Boom Control Unit)</strong> para posicionar el botalón real en sincronía exacta con la mano del Boomer.
                </p>
              </div>

              {/* VERSION 5 */}
              <div className="border-l-4 border-defensya-blue bg-defensya-blue/5 p-7 relative overflow-hidden group">
                <Settings
                  className="absolute -bottom-6 -right-6 text-defensya-blue/10 group-hover:rotate-90 transition-transform duration-1000"
                  size={120}
                />
                <p className="text-[11px] font-mono tracking-[0.3em] text-defensya-sky uppercase mb-3">
                  Próximo hito — Versión 5.0
                </p>
                <h4
                  className="text-2xl font-bold uppercase text-white mb-2"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  Aproximación automática
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                  Estamos desarrollando el procedimiento de <strong className="text-white">aproximación automática de contacto</strong>. El software guiará el Stylus (y por tanto la boquilla) hacia el receptáculo de forma autónoma, creando el sistema de reabastecimiento más seguro y coste-eficiente del mundo.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="border border-white/[0.07] p-6 bg-white/2">
              <p className="text-[11px] font-mono tracking-[0.3em] text-gray-500 uppercase mb-5">
                Development Roadmap
              </p>
              <div className="space-y-2">
                {VERSIONES_ROADMAP.map((version, i) => (
                  <motion.div
                    key={version.v}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex items-center gap-5 p-4 border-l-2 transition-all ${
                      version.current
                        ? "border-defensya-blue bg-defensya-blue/8"
                        : version.future
                        ? "border-dashed border-gray-700 opacity-60 hover:opacity-100"
                        : "border-white/[0.07] opacity-50 hover:opacity-80"
                    }`}
                  >
                    <span
                      className={`font-bold text-2xl leading-none transition-colors shrink-0 ${
                        version.current
                          ? "text-defensya-blue"
                          : "text-gray-500"
                      }`}
                      style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                    >
                      {version.v}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm font-bold uppercase text-white block leading-tight">
                        {version.desc}
                      </span>
                      {version.future && (
                        <span className="font-mono text-[9px] tracking-[0.25em] text-defensya-sky uppercase mt-1 block">
                          En desarrollo
                        </span>
                      )}
                      {version.current && (
                        <span className="font-mono text-[9px] tracking-[0.25em] text-defensya-sky uppercase mt-1 block">
                          Versión actual
                        </span>
                      )}
                    </div>
                    {version.current && (
                      <GitBranch className="text-defensya-blue shrink-0" size={14} />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ESPECIFICACIONES TÉCNICAS */}
      <section className="py-24 px-6 lg:px-16 bg-white dark:bg-[#050609]">
        <div className="max-w-7xl mx-auto">

          <div className="grid items-center lg:grid-cols-2 gap-10 lg:gap-20 mb-14">
            <div>
              <SectionTag> Specs</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                Especificaciones
                <br />
                Técnicas
              </h2>
            </div>
            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed lg:pt-8 max-w-2xl">
              Hardware rugerizado y certificado para entornos de misión crítica, con cumplimiento de los estándares RTCA internacionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">
            {ESPECIFICACIONES_TECNICAS.map((seccion, i) => (
              <motion.div
                key={seccion.titulo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#050609] p-7 lg:p-8"
              >
                <p className="text-[11px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-6 border-l-2 border-defensya-blue/40 pl-3">
                  {seccion.titulo}
                </p>
                <div className="space-y-3">
                  {seccion.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 hover:border-defensya-blue/20 transition-colors"
                    >
                      <p className="text-[10px] font-mono uppercase text-gray-400 tracking-wider mb-1.5">
                        {item.label}
                      </p>
                      <p
                        className={`text-lg font-bold leading-none ${
                          item.destacado
                            ? "text-defensya-blue"
                            : "text-gray-900 dark:text-white"
                        }`}
                        style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                      >
                        {item.valor}
                        {item.extra && (
                          <span className="text-gray-400 text-xs font-normal ml-2">
                            {item.extra}
                          </span>
                        )}
                      </p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-defensya-blue/10 text-defensya-blue text-[9px] font-mono font-bold tracking-widest"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          
          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-defensya-blue" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase">
                Haptix System — Document Ref: DS-HPTX-2026-V3.01
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-gray-300 dark:text-gray-600 uppercase">
              Defensya Ingeniería Internacional
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}