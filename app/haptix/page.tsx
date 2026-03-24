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
  Target,
  GitBranch,
  Settings,
} from "lucide-react";


const HAPTIX_IMAGES = [
  { src: "/products/haptixfrontal.png", label: "Vista Frontal - Ergonomía" },
  { src: "/products/haptixback.jpg", label: "Arquitectura de Sensores" },
  { src: "/products/haptixside.jpg", label: "Mecanismo Stylus V4" },
  { src: "/products/haptixangle.png", label: "Ángulo Operativo" },
];

const FONT_DISPLAY =
  "font-['Barlow_Condensed',_sans-serif] uppercase tracking-tighter font-bold";
const FONT_MONO =
  "font-['Space_Mono',_monospace] font-mono uppercase tracking-[0.3em] text-xs text-defensya-sky";

export default function Page() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % HAPTIX_IMAGES.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + HAPTIX_IMAGES.length) % HAPTIX_IMAGES.length
    );

  return (
    <main className="bg-white dark:bg-[#050609] text-gray-900 dark:text-gray-100 min-h-screen selection:bg-defensya-blue/30">
      {/* ── SECCIÓN 1: HERO (Tu código original, limpio) ───── */}
      <section className="min-h-screen grid lg:grid-cols-[1fr_43%] bg-[#040508] text-gray-100 min-h-screen selection:bg-blue-600/20 border-b border-white/5 relative overflow-hidden">
        {/* LEFT */}
        <div className="relative z-10 flex flex-col justify-center px-8 lg:px-20 pt-36 pb-20 border-r border-white/5">
          {/* Live status */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-12"
          ></motion.div>

          {/* Sub-label */}
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-[11px] tracking-[0.4em] text-defensya-sky mb-6 block uppercase"
          >
            The Haptix Concept
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[clamp(2rem,3.8vw,4.2rem)] font-bold leading-[1.15] text-white mb-10 tracking-tight"
          >
            Hacia un
            <br />
            Reabastecimiento
            <br />
            <span className="text-defensya-blue">Semiautomático</span>{" "}
            <span className="text-defensya-blue">y Robusto</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[15px] text-gray-400 leading-relaxed max-w-md mb-14 font-light"
          >
            En entornos cambiantes, la complejidad operativa escala
            drásticamente. Haptix® nace para reducir la carga de trabajo del
            boomer, haciendo que la misión sea más intuitiva y drásticamente más
            segura.
          </motion.p>

          {/* Stats */}
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
                className={`px-8 py-7 bg-white/[0.02] ${
                  i === 1 ? "border-l border-white/[0.07]" : ""
                }`}
              >
                <p className="font-bold text-3xl text-defensya-blue leading-none mb-2">
                  {stat.value}
                </p>
                <p className="font-mono text-[9px] text-gray-500 tracking-[0.3em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: image */}
        <div className="relative hidden lg:block">
          <Image
            src="/products/haptix2.webp"
            alt="Haptix Control System"
            fill
            className="object-cover object-center"
            priority
          />
         
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#040508] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040508]/40 to-transparent" />

          {/* Corner reticles */}
          <div className="absolute top-8 left-8 w-5 h-5 border-t border-l border-defensya-blue/40" />
          <div className="absolute top-8 right-8 w-5 h-5 border-t border-r border-defensya-blue/40" />
          <div className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-defensya-blue/40" />
          <div className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-defensya-blue/40" />
        </div>
      </section>

      {/* ── COMPARATIVA: TRADICIONAL VS HAPTIX ───── */}
   
      <section className="py-32 px-6 lg:px-16 relative overflow-hidden bg-gray-50 dark:bg-[#080a0f]">
        <div className="absolute inset-0 bg-[radial-gradient(var(--defensya-navy-light)_1px,transparent_1px)] dark:bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:30px_30px] opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Problema: Control Tradicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10 group"
            >
              <div className="flex items-center gap-4">
                <h2
                  className={`${FONT_DISPLAY} text-4xl leading-none text-gray-950 dark:text-white`}
                >
                  El Limitante del{" "}
                  <span className="text-red-500 group-hover:text-red-400 transition-colors">
                    Control Tradicional
                  </span>
                </h2>
              </div>

              <p className="text-md text-gray-600 dark:text-gray-400 leading-relaxed bg-white/50 dark:bg-black/20 p-6 border border-gray-100 dark:border-white/5 shadow-inner">
                Históricamente, el reabastecimiento se ha basado en dos
                joysticks: uno para el alabeo/cabeceo y otro para la extensión
                del botalón. Esto satura ambas manos del Boomer, impidiéndole
                gestionar otras funciones críticas de la consola sin soltar los
                mandos.
              </p>

              {/* Cita  */}
              <div className="p-8 bg-gray-200 dark:bg-red-950/30 border border-red-900  relative overflow-hidden group">
                <div className="absolute -top-4 -left-4 text-9xl font-serif text-red-900/50 group-hover:scale-110 transition-transform">
                  “
                </div>
                <p className="text-sm italic text-black dark:text-red-200 leading-relaxed relative z-10">
                  "Los joysticks no intuitivos de la 'vieja escuela' generan una
                  mayor propensión al error humano y fatiga en misiones
                  prolongadas."
                </p>
              </div>
            </motion.div>

            {/* Solución: Haptix Device */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="space-y-10 group"
            >
              <div className="flex items-center gap-4">
                <h2
                  className={`${FONT_DISPLAY} text-4xl leading-none text-gray-950 dark:text-white`}
                >
                  La Revolución:{" "}
                  <span className="text-defensya-blue group-hover:text-defensya-sky transition-colors">
                    Haptix Device
                  </span>
                </h2>
              </div>

              <p className="text-md text-gray-600 dark:text-gray-400 leading-relaxed bg-white/50 dark:bg-black/20 p-6 border border-gray-100 dark:border-white/5 shadow-inner">
                Con Haptix, solo se requiere <strong>una mano</strong> para
                controlar y manejar el boom. Ofrece una maniobrabilidad superior
                a los sistemas actuales, siendo extremadamente intuitivo. Esto
                reduce los recursos necesarios y permite alcanzar un nivel de
                experto en una fracción del tiempo habitual.
              </p>

              {/* Lista de beneficios */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  "Contacto realizado en menor tiempo operativo.",
                  "Menor probabilidad de incidentes inesperados.",
                  "Manejo intuitivo con retroalimentación física.",
                  "Libera la segunda mano para gestión de sistemas.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-sm text-gray-700 dark:text-gray-200 group/item"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: CAPACIDADES Y HARDWARE ───── */}
      <section className="py-32 px-6 lg:px-16 border-t border-b border-gray-100 dark:border-white/5 relative bg-white dark:bg-[#050609]">
        <div className="absolute h-full w-[1px] left-[5%] top-0 bg-gradient-to-b from-transparent via-gray-200 dark:via-white/5 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            {/* SLIDER */}
            <div className="order-2 lg:order-1 relative group rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl bg-gray-50 dark:bg-black/30 p-2">
              
              <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-defensya-blue z-20" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-defensya-blue z-20" />

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                {" "}
                
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
                      alt={HAPTIX_IMAGES[current].label}
                      fill
                      className="object-contain p-4"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-30" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ── CONTROLES NAVEGACIÓN  ── */}
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prev}
                  className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-defensya-blue transition-colors group/btn active:scale-95"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-defensya-blue transition-colors group/btn active:scale-95"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* ── INDICADORES  ── */}
              <div className="absolute top-8 right-8 flex gap-2 z-30 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm">
                {HAPTIX_IMAGES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-defensya-blue"
                        : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2
                className={`${FONT_DISPLAY} text-5xl leading-none text-gray-950 dark:text-white tracking-tighter`}
              >
                Interacción a{" "}
                <span className="text-defensya-blue">Escala Real</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                El propósito de Haptix® es crear una imagen escalada que permita
                al usuario interactuar con el sistema real, pero con fuerza y
                tamaño reducidos. El <strong>Stylus</strong> representa el
                botalón de vuelo real, permitiendo una gestión con una sola mano
                que agiliza drásticamente la operación.
              </p>

              {/* Tarjetas de capacidades */}
              <div className="space-y-6">
                <div className="flex gap-6 p-6 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 shadow-inner hover:border-defensya-blue/20 transition-colors group">

                  <div>
                    <h4 className="font-bold font-mono text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-1.5">
                      Efectores Hápticos
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Motores y engranajes coordinados que vibran y bloquean
                      movimientos peligrosos para advertir al operador de forma
                      física.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 shadow-inner hover:border-defensya-blue/20 transition-colors group">

                  <div>
                    <h4 className="font-bold font-mono text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-1.5">
                      Protección de Envolvente
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Sensores que evitan colisiones y guían al operador para
                      permanecer dentro de los límites operativos del Boom.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── SECCIÓN 4 : OPERATIONAL MODES ───── */}
          <div className="mt-32 relative">
            
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-defensya-blue/20 to-transparent" />

            <div className="text-center mb-16 relative z-10">
              <h3
                className={`${FONT_DISPLAY} text-4xl text-gray-950 dark:text-white mb-4`}
              >
                Modos Operativos Avanzados
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Tres capas de software trabajando en paralelo para garantizar la
                precisión total en el contacto.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {MODOS_OPERATIVOS.map((modo, i) => (
                <motion.div
                  key={modo.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white dark:bg-[#080a0f] border border-gray-100 dark:border-white/5 rounded-2xl shadow-lg hover:border-defensya-blue/50 hover:shadow-defensya-blue/10 transition-all group relative overflow-hidden"
                >
                  {/* Brackets */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/5 group-hover:border-defensya-blue/30 transition-colors" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/5 group-hover:border-defensya-blue/30 transition-colors" />

                  <h4 className="text-2xl font-bold font-display uppercase italic mb-4 text-gray-950 dark:text-white group-hover:text-defensya-blue transition-colors">
                    {modo.titulo}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {modo.descripcion}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: EVOLUCIÓN Y ESTADO ───── */}
      <section className="py-32 px-6 lg:px-16 bg-gray-50 dark:bg-[#080a0f] relative overflow-hidden border-b border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(var(--defensya-navy-light)_1px,transparent_1px)] dark:bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:25px_25px] opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className={`${FONT_MONO} mb-4 block`}>
                Development Roadmap
              </span>
              <h2
                className={`${FONT_DISPLAY} text-5xl leading-none mb-10 text-gray-950 dark:text-white`}
              >
                La Evolución hacia el{" "}
                <span className="text-defensya-blue">Vuelo Autónomo</span>
              </h2>

              <div className="space-y-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed bg-white/50 dark:bg-black/20 p-8 border border-gray-100 dark:border-white/5 shadow-inner">
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

                {/* Hito */}
                <div className="bg-defensya-blue/10 dark:bg-defensya-blue/5 p-7 border-l-4 border-defensya-blue rounded-r-xl relative overflow-hidden group">
                  <Settings className="absolute -bottom-6 -right-6 text-9xl text-defensya-blue/10 group-hover:rotate-90 transition-transform duration-1000" />
                  <h4 className="text-gray-950 dark:text-white font-bold font-mono text-sm uppercase tracking-wider mb-2 relative z-10">
                    Próximo Hito: Versión 5.0
                  </h4>
                  <p className="text-sm relative z-10">
                    Estamos desarrollando el procedimiento de{" "}
                    <strong>aproximación automática de contacto</strong>. El
                    software guiará el Stylus (y por tanto la boquilla) hacia el
                    receptáculo de forma autónoma, creando el sistema de
                    reabastecimiento más seguro y coste-eficiente del mundo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* LINEA DE TIEMPO DE VERSIONES */}
            <div className="space-y-4 lg:mt-24 relative p-6 bg-white dark:bg-black/20 border border-gray-100 dark:border-white/5 rounded-2xl shadow-xl">

              {VERSIONES_ROADMAP.map((version, i) => (
                <motion.div
                  key={version.v}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-5 border-l-2 flex items-center gap-5 group transition-all ${
                    version.current
                      ? "border-defensya-blue bg-defensya-blue/5 dark:bg-defensya-blue/10"
                      : version.future
                      ? "border-dashed border-gray-300 dark:border-gray-700 opacity-60 hover:opacity-100"
                      : "border-gray-200 dark:border-white/5 opacity-60 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`font-extrabold font-display italic text-2xl leading-none transition-colors ${
                      version.current
                        ? "text-defensya-blue"
                        : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200"
                    }`}
                  >
                    {version.v}
                  </span>
                  <div className="flex-1">
                    <span className="text-xs uppercase font-bold tracking-tight text-gray-900 dark:text-gray-100">
                      {version.desc}
                    </span>
                    {version.future && (
                      <span className={`${FONT_MONO} text-[9px] block mt-1`}>
                        Status: En desarrollo
                      </span>
                    )}
                  </div>
                  {version.current && (
                    <GitBranch
                      className="text-defensya-blue absolute -right-2 top-1/2 -translate-y-1/2"
                      size={16}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: ESPECIFICACIONES ───── */}
      <section className="py-32 px-6 lg:px-16 bg-white dark:bg-[#050609]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-b border-gray-200 dark:border-white/5 pb-8 relative">
            <h3
              className={`${FONT_DISPLAY} text-4xl text-gray-950 dark:text-white`}
            >
              Especificaciones Técnicas
            </h3>
            <span className="absolute bottom-0 left-0 h-1 w-24 bg-defensya-blue" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 p-12 rounded-3xl shadow-inner">
            {ESPECIFICACIONES_TECNICAS.map((seccion, i) => (
              <motion.div
                key={seccion.titulo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-8"
              >
                <h4
                  className={`${FONT_MONO} border-l-2 border-defensya-blue/30 pl-4`}
                >
                  {seccion.titulo}
                </h4>
                <div className="space-y-6">
                  {seccion.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-center p-4 bg-white dark:bg-[#0A0C11] rounded-lg border border-gray-100 dark:border-white/5 shadow-sm group hover:border-defensya-blue/20 transition-all"
                    >

                      <div>
                        <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p
                          className={`text-lg font-bold tracking-tight text-gray-950 dark:text-white ${
                            item.destacado
                              ? "text-defensya-blue dark:text-defensya-blue"
                              : ""
                          }`}
                        >
                          {item.valor}
                          {item.extra && (
                            <span className="text-gray-400 text-xs font-normal ml-2">
                              {item.extra}
                            </span>
                          )}
                        </p>
                        {item.tags && (
                          <div className="flex gap-2 mt-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-defensya-blue/10 text-defensya-blue text-[9px] font-mono font-bold rounded tracking-widest"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* FOOTER DE PÁGINA */}
          <div className="mt-24 pt-10 border-t border-gray-100 dark:border-white/5 text-center">
            <p className={`${FONT_MONO} tracking-[0.4em]`}>
              Haptix System — Document Ref: DS-HPTX-2026-V3.01 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── DATOS ESTRUCTURADOS ────────────────────────────────

const MODOS_OPERATIVOS = [
  {
    icon: Gauge,
    titulo: "Tracking Mode",
    descripcion:
      "Reduce la fricción y las fuerzas necesarias para mover el stylus. Aísla al usuario de la carga mecánica real del botalón, permitiendo movimientos fluidos y sin esfuerzo.",
  },
  {
    icon: ShieldAlert,
    titulo: "Anti-collision",
    descripcion:
      'Crea "paredes virtuales" de software para evitar impactos con el cockpit, fuselaje o alas del receptor. Mantiene el equipo estrictamente dentro del margen de seguridad.',
  },
  {
    icon: Zap,
    titulo: "Contact Aiding",
    descripcion:
      "Genera un campo de fuerza virtual que atrae o repele la boquilla del receptáculo. Facilita la inserción perfecta, evitando situaciones no deseadas mediante fuerzas escaladas.",
  },
];

const VERSIONES_ROADMAP = [
  { v: "1.0", desc: "Prototipo inicial (3D Printing)" },
  { v: "2.0", desc: "Mejora de sensado y ergonomía" },
  { v: "3.0", desc: "Diseño rugerizado y nuevos sensores" },
  { v: "4.0", desc: "Diseño mecánico final certificado", current: true },
  { v: "5.0", desc: "AAR Totalmente Automático", future: true },
];

const ESPECIFICACIONES_TECNICAS = [
  {
    titulo: "Dimensiones y Peso",
    items: [
      { icon: Zap, label: "Peso Operativo", valor: "7.0 Kg" },
      {
        icon: Image,
        label: "Dimensiones (mm)",
        valor: "260 × 230 × 345",
        extra: "(W×D×H)",
      },
    ],
  },
  {
    titulo: "Electrónica e I/O",
    items: [
      {
        label: "Voltaje Operativo",
        valor: "28V DC",
        extra: "(MIL-STD-704F Compliant)",
      },
      {
        label: "Protocolos de Entrada / Salida",
        valor: "ARINC 429 / RS422",
        destacado: true,
      },
    ],
  },
  {
    titulo: "Rango y Cumplimiento",
    items: [
      { label: "Temperatura de Operación", valor: "-55°C", extra: "to +85°C" },
      {
        label: "Compliance Standards",
        valor: "RTCA Certifications",
        tags: ["DO-160G", "DO-178C", "DO-254"],
      },
    ],
  },
];
