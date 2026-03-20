"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldAlert, cpu, Zap, Gauge } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";

export default function page() {
  return (
    <main className="bg-white dark:bg-defensya-navy text-gray-900 dark:text-white min-h-screen">
      <HeroSection
        label="Career"
        title="Trabajamos en la innovacion del reabastecimiento en vuelo"
        subtitle="Participa en el desarrollo de soluciones tecnológicas para los sectores más exigentes."
        image="/products/haptix.jpg"
      />

      <section className="relative pt-32 pb-20 px-6 lg:px-16 overflow-hidden border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-defensya-blue font-mono tracking-[0.3em] uppercase text-sm mb-6 block">
              The Haptix Concept
            </span>
            <h1
              className="text-[clamp(2.5rem,5vw,5rem)] font-bold uppercase leading-[0.9] tracking-tight mb-8"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Hacia un Reabastecimiento <br />
              <span className="text-defensya-blue">
                Semiautomático y Robusto
              </span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
              En entornos cambiantes, la complejidad operativa escala
              drásticamente. En las operaciones de Boom AAR, la sobrecarga puede
              derivar en errores críticos. Haptix® nace para reducir la carga de
              trabajo, haciendo que la misión no solo sea más fácil, sino
              incalculablemente más segura.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-defensya-blue/10 rounded-lg">
                  <ShieldAlert className="text-defensya-blue" size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Reducción de Riesgos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-defensya-blue/10 rounded-lg">
                  <Gauge className="text-defensya-blue" size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Curva de Aprendizaje Optimizada
                </span>
              </div>
            </div>
          </motion.div>

          {/* ESPACIO IMAGEN  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square lg:aspect-video bg-gray-100 dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
              [Imagen Principal del Sistema Haptix - Vista General]
            </div>
            {/* Overlay */}
            <div className="absolute bottom-6 left-6 p-4 bg-defensya-navy/80 backdrop-blur-md border border-white/10 rounded-xl">
              <p className="text-[10px] font-mono text-defensya-sky uppercase tracking-widest mb-1">
                Status
              </p>
              <p className="text-sm font-bold text-white uppercase tracking-tight">
                Ready for A3R / A4R Integration
              </p>
            </div>
          </motion.div>
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
              <div className="aspect-video bg-gray-200 dark:bg-white/5 rounded-xl flex items-center justify-center text-xs text-gray-400 uppercase tracking-widest">
                [Visualización: Configuración Tradicional Dual-Joystick]
              </div>
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
              {/* ESPACIO PARA IMAGEN DEL DISPOSITIVO EN USO - SINGLE HAND */}
              <div className="aspect-video bg-defensya-blue/10 rounded-xl flex items-center justify-center text-xs text-defensya-blue font-bold uppercase tracking-widest border border-defensya-blue/20">
                [Visualización: Manejo con una sola mano y Ergonomía]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 3: CAPACIDADES HÁPTICAS Y HARDWARE ───── */}
      <section className="py-24 px-6 lg:px-16 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative aspect-square bg-slate-50 dark:bg-white/5 rounded-3xl border border-dashed border-gray-300 dark:border-white/10 flex items-center justify-center">
              {/* ESPACIO DIAGRAMA DISPOSITIVO */}
              <div className="text-center p-8">
                <p className="text-xs font-mono text-defensya-blue uppercase mb-4 tracking-[0.2em]">
                  Hardware Architecture
                </p>
                <ul className="text-left space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-defensya-blue text-white flex items-center justify-center text-[10px]">
                      1
                    </span>{" "}
                    Stylus (Replica del Boom)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-defensya-blue text-white flex items-center justify-center text-[10px]">
                      2
                    </span>{" "}
                    Base Robusta
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-defensya-blue text-white flex items-center justify-center text-[10px]">
                      3
                    </span>{" "}
                    Control Unit (Procesamiento)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-defensya-blue text-white flex items-center justify-center text-[10px]">
                      4
                    </span>{" "}
                    Reset Device & Auxiliary
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-defensya-blue text-white flex items-center justify-center text-[10px]">
                      5
                    </span>{" "}
                    Breakaway Buttons
                  </li>
                </ul>
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
