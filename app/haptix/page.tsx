"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  ShieldAlert,
  Gauge,
} from "lucide-react";

const HAPTIX_IMAGES = [
  { src: "/products/haptix.jpg", label: "Vista Frontal - Ergonomía" },
  { src: "/products/haptix1.webp", label: "Arquitectura de Sensores" },
  { src: "/products/haptix2.webp", label: "Mecanismo Stylus V4" },
];

export default function page() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % HAPTIX_IMAGES.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + HAPTIX_IMAGES.length) % HAPTIX_IMAGES.length
    );
  return (
    <main className="bg-white dark:bg-defensya-navy text-gray-900 dark:text-white min-h-screen">
      {/* <HeroSection
        label="Career"
        title="Trabajamos en la innovacion del reabastecimiento en vuelo"
        subtitle="Participa en el desarrollo de soluciones tecnológicas para los sectores más exigentes."
        image="/products/haptix.jpg"
      /> */}

      <section className="min-h-screen grid lg:grid-cols-[1fr_45%] border-b border-gray-100 dark:border-white/5">
        {/* COLUMNA IZQUIERDA: CONTENIDO */}
        <div className="flex flex-col justify-center px-6 lg:px-16 pt-32 pb-16 border-r border-gray-200 dark:border-white/[0.07]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-defensya-blue font-semibold tracking-[0.3em] uppercase text-[12px] mb-8 block">
              The Haptix Concept
            </span>

            <h1
              className="text-[clamp(2.5rem,5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight mb-10"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Hacia un Reabastecimiento <br />
              <span className="text-defensya-blue">
                Semiautomático <br /> y Robusto
              </span>
            </h1>

            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mb-12">
              En entornos cambiantes, la complejidad operativa escala
              drásticamente. Haptix® nace para reducir la carga de trabajo del
              boomer, haciendo que la misión sea más intuitiva y drásticamente
              más segura.
            </p>

            {/* Grid de capacidades técnicas rápidas */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100 dark:border-white/5">
              <div>
                <p className="text-lg font-bold font-mono text-defensya-blue leading-none">
                  V4.0
                </p>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase mt-2">
                  Latest Hardware
                </p>
              </div>
              <div>
                <p className="text-lg font-bold font-mono text-defensya-blue leading-none">
                  ARINC 429
                </p>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase mt-2">
                  I/O Standard
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: IMAGEN (Estilo Home) */}
        <div className="relative hidden  lg:block bg-gray-50 dark:bg-white/[0.02]">
          <Image
            src="/products/haptix2.webp"
            alt="Haptix Control System"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Overlay de degradado para que la imagen no "flote" */}
          <div className="absolute inset-0 bg-linear-to-t from-defensya-navy/40 via-transparent to-transparent" />

          {/* Brackets decorativos opcionales para dar aire "tech" */}
          <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-white/20" />
          <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-white/20" />
        </div>
      </section>

      {/* ── COMPARATIVA: TRADICIONAL VS HAPTIX ───── */}
      <section className="py-24 px-6 lg:px-16 bg-gray-50 dark:bg-defensya-navy-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Problema: Control Tradicional */}
            <div className="space-y-8">
              <h2
                className="text-3xl font-bold uppercase tracking-tight dark:text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                El Limitante del{" "}
                <span className="text-red-500">Control Tradicional</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Históricamente, el reabastecimiento se ha basado en dos
                joysticks: uno para el alabeo/cabeceo y otro para la extensión
                del botalón. Esto satura ambas manos del Boomer, impidiéndole
                gestionar otras funciones críticas de la consola sin soltar los
                mandos.
              </p>
              <div className="p-6 bg-red-500/5 border-l-4 border-red-500 rounded-r-xl">
                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                  "Los joysticks no intuitivos de la 'vieja escuela' generan una
                  mayor propensión al error humano y fatiga en misiones
                  prolongadas."
                </p>
              </div>
              {/* ESPACIO IMAGEN */}
            </div>

            {/* Solución: Haptix Device */}
            <div className="space-y-8">
              <h2
                className="text-3xl font-bold uppercase tracking-tight text-defensya-blue"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                La Revolución:{" "}
                <span className="dark:text-white">Haptix Device</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Con Haptix, solo se requiere <strong>una mano</strong> para
                controlar y manejar el boom. Ofrece una maniobrabilidad superior
                a los sistemas actuales, siendo extremadamente intuitivo. Esto
                reduce los recursos necesarios y permite alcanzar un nivel de
                experto en una fracción del tiempo habitual.
              </p>
              <ul className="space-y-4">
                {[
                  "Contacto realizado en menor tiempo operativo.",
                  "Menor probabilidad de incidentes inesperados.",
                  "Manejo intuitivo con retroalimentación física.",
                  "Libera la segunda mano para gestión de sistemas.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Zap
                      className="text-defensya-blue shrink-0 mt-0.5"
                      size={16}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: CAPACIDADES HÁPTICAS Y HARDWARE ───── */}
      <section className="py-24 px-6 lg:px-16 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* SLIDER */}
            <div className="order-2 lg:order-1 relative aspect-square bg-slate-50 dark:bg-defensya-navy-light/10 rounded-3xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl group">
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={HAPTIX_IMAGES[current].src}
                      alt={HAPTIX_IMAGES[current].label}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-defensya-navy/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>
              </div>



              {/* ── CONTROLES NAVEGACIÓN ── */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-defensya-navy/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-defensya-blue transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-defensya-navy/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-defensya-blue transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* ── INDICADORES (DOTS) ── */}
              <div className="absolute top-8 right-8 flex gap-2">
                {HAPTIX_IMAGES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-defensya-blue" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2
                className="text-4xl font-bold uppercase tracking-tighter mb-8"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Interacción a{" "}
                <span className="text-defensya-blue">Escala Real</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                El propósito de Haptix® es crear una imagen escalada que permita
                al usuario interactuar con el sistema real, pero con fuerza y
                tamaño reducidos. El <strong>Stylus</strong> representa el
                botalón de vuelo real, permitiendo una gestión con una sola mano
                que agiliza drásticamente la operación.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-defensya-blue/5 rounded-xl border border-defensya-blue/10">
                  <div className="mt-1">
                    <Zap className="text-defensya-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider mb-1">
                      Efectores Hápticos
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Motores y engranajes coordinados que vibran y bloquean
                      movimientos peligrosos para advertir al operador de forma
                      física.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-defensya-blue/5 rounded-xl border border-defensya-blue/10">
                  <div className="mt-1">
                    <ShieldAlert className="text-defensya-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider mb-1">
                      Protección de Envolvente
                    </h4>
                    <p className="text-xs text-gray-400">
                      Sensores que evitan colisiones y guían al operador para
                      permanecer dentro de los límites operativos del Boom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECCIÓN 4: OPERATIONAL MODES (Tarjetas Técnicas) ───── */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h3
                className="text-3xl font-bold uppercase tracking-tight mb-4"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Modos Operativos Avanzados
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Tres capas de software trabajando en paralelo para garantizar la
                precisión total en el contacto.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tracking Mode */}
              <div className="p-8 bg-white dark:bg-defensya-navy-light border border-gray-200 dark:border-white/10 rounded-2xl hover:border-defensya-blue/50 transition-all group">
                <div className="w-12 h-12 bg-defensya-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-defensya-blue group-hover:text-white transition-colors">
                  <Gauge size={24} />
                </div>
                <h4 className="text-xl font-bold uppercase mb-4">
                  Tracking Mode
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Reduce la fricción y las fuerzas necesarias para mover el
                  stylus. Aísla al usuario de la carga mecánica real del
                  botalón, permitiendo movimientos fluidos y sin esfuerzo.
                </p>
              </div>

              {/* Anti-collision Mode */}
              <div className="p-8 bg-white dark:bg-defensya-navy-light border border-gray-200 dark:border-white/10 rounded-2xl hover:border-defensya-blue/50 transition-all group">
                <div className="w-12 h-12 bg-defensya-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-defensya-blue group-hover:text-white transition-colors">
                  <ShieldAlert size={24} />
                </div>
                <h4 className="text-xl font-bold uppercase mb-4">
                  Anti-collision
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Crea "paredes virtuales" de software para evitar impactos con
                  el cockpit, fuselaje o alas del receptor. Mantiene el equipo
                  estrictamente dentro del margen de seguridad.
                </p>
              </div>

              {/* Contact Aiding Mode */}
              <div className="p-8 bg-white dark:bg-defensya-navy-light border border-gray-200 dark:border-white/10 rounded-2xl hover:border-defensya-blue/50 transition-all group">
                <div className="w-12 h-12 bg-defensya-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-defensya-blue group-hover:text-white transition-colors">
                  <Zap size={24} />
                </div>
                <h4 className="text-xl font-bold uppercase mb-4">
                  Contact Aiding
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Genera un campo de fuerza virtual que atrae o repele la
                  boquilla del receptáculo. Facilita la inserción perfecta,
                  evitando situaciones no deseadas mediante fuerzas escaladas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: EVOLUCIÓN Y ESTADO DEL ARTE ───── */}
      <section className="py-24 px-6 lg:px-16 bg-white dark:bg-defensya-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_350px] gap-16">
            <div>
              <span className="text-defensya-blue font-mono tracking-[0.3em] uppercase text-xs mb-4 block">
                Development Roadmap
              </span>
              <h2
                className="text-4xl font-bold uppercase tracking-tighter mb-8"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                La Evolución hacia el{" "}
                <span className="text-defensya-blue">Vuelo Autónomo</span>
              </h2>

              <div className="space-y-8 text-gray-500 dark:text-gray-400 leading-relaxed">
                <p>
                  No existe en el mercado de reabastecimiento un dispositivo
                  como el <strong>Haptix®</strong>. Desde los primeros
                  prototipos en impresión 3D hasta la actual{" "}
                  <strong>Versión 4.0</strong>, hemos perfeccionado la capacidad
                  de sensado, la robustez mecánica y la experiencia del usuario
                  (User Friendliness).
                </p>
                <p>
                  El sistema utiliza un conjunto de sensores giroscópicos, de
                  presión y ópticos que detectan cada micro-movimiento del
                  operador sobre el <em>Stylus</em>. Esta información se cruza
                  con el <strong>BCU (Boom Control Unit)</strong> para
                  posicionar el botalón real en sincronía exacta con la mano del
                  Boomer.
                </p>

                <div className="bg-defensya-blue/5 p-6 rounded-2xl border-l-4 border-defensya-blue">
                  <h4 className="text-gray-900 dark:text-white font-bold uppercase text-sm mb-2">
                    Próximo Hito: Versión 5.0
                  </h4>
                  <p className="text-sm">
                    Estamos desarrollando el procedimiento de{" "}
                    <strong>aproximación automática de contacto</strong>. El
                    software guiará el Stylus (y por tanto la boquilla) hacia el
                    receptáculo de forma autónoma, creando el sistema de
                    reabastecimiento más seguro y coste-eficiente del mundo.
                  </p>
                </div>
              </div>
            </div>

            {/* LINEA DE TIEMPO DE VERSIONES  */}
            <div className="space-y-4">
              {[
                { v: "1.0", desc: "Prototipo inicial (3D Printing)" },
                { v: "2.0", desc: "Mejora de sensado y ergonomía" },
                { v: "3.0", desc: "Diseño rugerizado y nuevos sensores" },
                {
                  v: "4.0",
                  desc: "Diseño mecánico final certificado",
                  current: true,
                },
                { v: "5.0", desc: "AAR Totalmente Automático", future: true },
              ].map((version) => (
                <div
                  key={version.v}
                  className={`p-4 border rounded-xl flex items-center gap-4 ${
                    version.current
                      ? "border-defensya-blue bg-defensya-blue/5"
                      : "border-gray-200 dark:border-white/10 opacity-60"
                  }`}
                >
                  <span
                    className={`font-bold ${
                      version.current ? "text-defensya-blue" : ""
                    }`}
                  >
                    {version.v}
                  </span>
                  <span className="text-xs uppercase font-semibold tracking-tight">
                    {version.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: ───── */}
      <section className="py-24 px-6 lg:px-16 bg-gray-50 dark:bg-defensya-navy-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
            <h3
              className="text-3xl font-bold uppercase tracking-tight"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Especificaciones Técnicas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
            {/* Columna 1: Dimensiones y Peso */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-defensya-navy dark:bg-white/10 flex items-center justify-center text-white">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-gray-400">
                    Peso Operativo
                  </p>
                  <p className="text-xl font-bold tracking-tight">7.0 Kg</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-defensya-navy dark:bg-white/10 flex items-center justify-center text-white">
                  <Image size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-gray-400">
                    Dimensiones (mm)
                  </p>
                  <p className="text-xl font-bold tracking-tight">
                    260 × 230 × 345
                  </p>
                </div>
              </div>
            </div>

            {/* Columna 2: Electrónica e I/O */}
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-mono uppercase text-gray-400 mb-1">
                  Voltaje Operativo
                </p>
                <p className="text-lg font-bold uppercase">28V DC (MIL-STD)</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-gray-400 mb-1">
                  Protocolos de Entrada / Salida
                </p>
                <p className="text-lg font-bold uppercase text-defensya-blue">
                  ARINC 429 / RS422
                </p>
              </div>
            </div>

            {/* Columna 3: Rango Ambiental y Certificaciones */}
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-mono uppercase text-gray-400 mb-1">
                  Temperatura de Operación
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">-55°C</span>
                  <span className="text-gray-400 text-xs">to</span>
                  <span className="text-lg font-bold">+85°C</span>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-[10px] font-mono uppercase text-defensya-blue font-bold mb-2">
                  Compliance Standards
                </p>
                <div className="flex gap-2">
                  {["DO-160", "DO-178", "DO-254"].map((std) => (
                    <span
                      key={std}
                      className="px-2 py-1 bg-defensya-blue/10 text-defensya-blue text-[10px] font-bold rounded"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER DE PÁGINA */}
          <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10 text-center">
            <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">
              Haptix System — Document Ref: DS-HPTX-2026-V3.01
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
