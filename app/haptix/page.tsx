"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Settings } from "lucide-react";

/*
  ─── Section rhythm ───────────────────────────────────────────────────
  §1 Hero        → DARK   bg-defensya-navy
  §2 Problema    → LIGHT  bg-white         / dark:bg-defensya-navy
  §3 Hardware    → DARK   bg-defensya-navy
  §4 Modos       → LIGHT  bg-white         / dark:bg-defensya-navy
  §5 Roadmap     → DARK   bg-defensya-navy
  §6 Specs       → LIGHT  bg-white         / dark:bg-defensya-navy
  ─────────────────────────────────────────────────────────────────── */

// ─── Types ────────────────────────────────────────────────────────────────────

interface SpecItem   { label: string; valor: string; extra?: string; destacado?: boolean; tags?: string[] }
interface SpecSection{ titulo: string; items: SpecItem[] }
interface Version    { v: string; desc: string; current?: boolean; future?: boolean }
interface Modo       { titulo: string; descripcion: string }

// ─── Data ─────────────────────────────────────────────────────────────────────

const HAPTIX_IMAGES = [
  { src: "/products/haptixfrontal.png", label: "Vista Frontal" },
  { src: "/products/haptixback.jpg",    label: "Vista Trasera" },
  { src: "/products/haptixside.jpg",    label: "Vista Lateral" },
  { src: "/products/haptixangle.png",   label: "Vista Angular" },
];

const MODOS: Modo[] = [
  {
    titulo: "Tracking Mode",
    descripcion: "Reduce la fricción y las fuerzas necesarias para mover el stylus. Aísla al usuario de la carga mecánica real del botalón, permitiendo movimientos fluidos y sin esfuerzo.",
  },
  {
    titulo: "Anti-collision",
    descripcion: "Crea paredes virtuales de software para evitar impactos con el cockpit, fuselaje o alas del receptor. Mantiene el equipo dentro del margen de seguridad.",
  },
  {
    titulo: "Contact Aiding",
    descripcion: "Genera un campo de fuerza virtual que atrae o repele la boquilla del receptáculo. Facilita la inserción perfecta, evitando situaciones no deseadas mediante fuerzas escaladas.",
  },
];

const VERSIONES: Version[] = [
  { v: "1.0", desc: "Prototipo inicial (3D Printing)" },
  { v: "2.0", desc: "Mejora de sensado y ergonomía" },
  { v: "3.0", desc: "Diseño rugerizado y nuevos sensores" },
  { v: "4.0", desc: "Diseño mecánico final certificado", current: true },
  { v: "5.0", desc: "AAR Totalmente Autónomo", future: true },
];

const SPECS: SpecSection[] = [
  {
    titulo: "Dimensiones y Peso",
    items: [
      { label: "Peso Operativo",    valor: "7.0 Kg" },
      { label: "Dimensiones (mm)", valor: "260 × 230 × 345", extra: "(W×D×H)" },
    ],
  },
  {
    titulo: "Electrónica e I/O",
    items: [
      { label: "Voltaje Operativo",        valor: "28V DC", extra: "(MIL-STD-704F Compliant)" },
      { label: "Protocolos de Entrada / Salida", valor: "ARINC 429 / RS422", destacado: true },
    ],
  },
  {
    titulo: "Rango y Cumplimiento",
    items: [
      { label: "Temperatura de Operación", valor: "-55°C to +85°C" },
      { label: "Compliance Standards",     valor: "RTCA Certifications", tags: ["DO-160G", "DO-178C", "DO-254"] },
    ],
  },
];

// ─── Shared primitives ────────────────────────────────────────────────────────

/** Decorative corner brackets — same system used across all components */
function Corners({ size = 16, onDark = true }: { size?: number; onDark?: boolean }) {
  const muted = onDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  return (
    <>
      <span className="pointer-events-none absolute z-20"
        style={{ top: 12, left: 12, width: size, height: size,
          borderTop: "1.5px solid #0ea5e9", borderLeft: "1.5px solid #0ea5e9" }} />
      <span className="pointer-events-none absolute z-20"
        style={{ top: 12, right: 12, width: size, height: size,
          borderTop: `1px solid ${muted}`, borderRight: `1px solid ${muted}` }} />
      <span className="pointer-events-none absolute z-20"
        style={{ bottom: 12, left: 12, width: size, height: size,
          borderBottom: `1px solid ${muted}`, borderLeft: `1px solid ${muted}` }} />
      <span className="pointer-events-none absolute z-20"
        style={{ bottom: 12, right: 12, width: size, height: size,
          borderBottom: "1.5px solid rgba(14,165,233,0.45)",
          borderRight:  "1.5px solid rgba(14,165,233,0.45)" }} />
    </>
  );
}

/** Section header — eyebrow + blink dot + title with optional blue accent */
function SectionHeader({
  eyebrow, title, accent, tag, onDark = false,
}: {
  eyebrow: string; title: string; accent?: string; tag?: string; onDark?: boolean;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-2 h-2 rounded-full bg-defensya-blue"
          style={{ animation: "blink 1.4s step-end infinite" }} />
        <span className="w-6 h-px bg-defensya-blue/50" />
        <span className="font-mono text-[11px] tracking-[0.35em] text-defensya-blue uppercase">
          {eyebrow}
        </span>
        {tag && (
          <span className="ml-2 font-mono text-[10px] tracking-[0.2em] border border-defensya-blue/30
                          text-defensya-blue px-2 py-[2px] uppercase">
            {tag}
          </span>
        )}
      </div>
      <h2
        className={`font-bold uppercase leading-[0.9] tracking-tight
          ${onDark ? "text-white" : "text-gray-900 dark:text-white"}`}
        style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontSize: "clamp(2.4rem, 5vw, 4rem)",
        }}
      >
        {title}
        {accent && <><br /><span className="text-defensya-blue">{accent}</span></>}
      </h2>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HaptixPage() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % HAPTIX_IMAGES.length);
  const prev = () => setCurrent((p) => (p - 1 + HAPTIX_IMAGES.length) % HAPTIX_IMAGES.length);

  return (
    <main
      className="w-full text-gray-900 dark:text-gray-100 selection:bg-defensya-blue/30"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

      {/* ══════════════════════════════════════════════════════════════
          §1 HERO — DARK bg-defensya-navy
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen grid lg:grid-cols-[1fr_48%] overflow-hidden
                          bg-defensya-navy border-b border-white/[0.07]">
        <div className="tech-grid absolute inset-0 opacity-50 pointer-events-none" />
        {/* top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r
                       from-transparent via-defensya-blue to-transparent opacity-30" />

        {/* ── Left text ── */}
        <div className="relative z-10 flex flex-col justify-center
                        px-6 lg:px-20 pt-32 pb-20
                        border-r border-white/[0.06]">
          {/* Vertical accent */}
          <span className="hidden lg:block pointer-events-none absolute left-0 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, #0ea5e9 40%, transparent)", opacity: 0.2 }} />

          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }} className="flex flex-col">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <span className="w-2 h-2 rounded-full bg-defensya-blue"
                style={{ animation: "blink 1.4s step-end infinite" }} />
              <span className="w-6 h-px bg-defensya-blue/50" />
              <span className="font-mono text-[11px] tracking-[0.35em] text-defensya-blue uppercase">
                Producto Estrella · Haptix®
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-bold uppercase leading-[0.88] tracking-[-0.025em] text-white mb-10"
              style={{
                fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              }}
            >
              Hacia un
              <br />
              <span className="text-defensya-blue">Reabastecimiento</span>
              <br />
              Semiautomático
              <br />
              y Robusto
            </h1>

            {/* Descriptor */}
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-12
                         border-l-2 border-defensya-blue/30 pl-5">
              En entornos cambiantes, la complejidad operativa escala drásticamente. Haptix® nace
              para reducir la carga de trabajo del boomer, haciendo que la misión sea más
              intuitiva y drásticamente más segura.
            </p>

            {/* Stats — clipped boxes */}
            <div
              className="grid grid-cols-2 border border-white/[0.08]"
              style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
            >
              {[
                { value: "V4.0",      label: "Latest Hardware" },
                { value: "ARINC 429", label: "I/O Standard"    },
              ].map((s, i) => (
                <div key={s.label}
                     className={`relative px-7 py-6 bg-white/[0.02] group hover:bg-defensya-blue/[0.06]
                                transition-colors duration-300
                                ${i === 1 ? "border-l border-white/[0.08]" : ""}`}>
                  <p className="font-bold text-3xl text-white leading-none mb-2"
                     style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
                    {s.value}
                  </p>
                  <p className="font-mono text-[9px] text-gray-500 tracking-[0.3em] uppercase">{s.label}</p>
                  {/* bottom accent line on hover */}
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-defensya-blue
                                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              ))}
            </div>

            {/* Bottom meta */}
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-defensya-blue/30" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-gray-700 uppercase">
                Defensya · Haptix® System · DS-HPTX-2026
              </span>
              <div className="h-px flex-1 bg-white/[0.04]" />
            </div>
          </motion.div>
        </div>

        {/* ── Right image ── */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block">

          <Image src="/products/haptix2.webp" alt="Haptix Control System"
            fill className="object-cover object-center" priority />

          {/* overlays */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(6,13,24,0.35) 0%, transparent 40%)" }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(6,13,24,0.85) 0%, transparent 50%)" }} />

          <Corners size={22} onDark />

          {/* Top-left badge */}
          <div className="absolute top-6 left-6 z-20">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em]
                            text-defensya-blue border border-defensya-blue/40
                            bg-black/50 backdrop-blur-sm px-3 py-1.5 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-defensya-blue"
                style={{ animation: "blink 1.4s step-end infinite" }} />
              DEFENSYA · HAPTIX®
            </span>
          </div>

          {/* Top-right ref */}
          <div className="absolute top-6 right-6 z-20">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">
              REF-HPTX/04
            </span>
          </div>

          {/* Diagonal cut SVG on clip corner */}
          <svg className="absolute top-0 right-0 pointer-events-none z-20"
            width="48" height="48" viewBox="0 0 48 48" fill="none">
            <line x1="0" y1="32" x2="32" y2="0" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.5" />
          </svg>

          {/* Bottom info */}
          <div className="absolute bottom-0 inset-x-0 z-20 px-8 py-6 flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[9px] tracking-[0.3em] text-defensya-blue/70 uppercase">
                Boom Control System
              </span>
              <span className="font-mono text-[11px] text-white/50 tracking-wider">
                Versión 4.0 · Certificado
              </span>
            </div>
            <span className="font-mono font-black text-white/[0.05] select-none"
              style={{ fontSize: "3.5rem", lineHeight: 1 }}>
              HX
            </span>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §2 PROBLEMA / SOLUCIÓN — LIGHT bg-white / dark:bg-defensya-navy
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-white dark:bg-defensya-navy
                          border-b border-gray-100 dark:border-white/[0.07]">
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 items-end">
            <SectionHeader eyebrow="Contexto" title="El problema" accent="y la solución" tag="HX-01" />
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                         border-l-2 border-defensya-blue/30 pl-5 mb-14">
              Históricamente, el reabastecimiento en vuelo ha saturado las dos manos del operador.
              Haptix® redefine esta interacción con un único dispositivo de control háptico.
            </p>
          </div>

          {/* Two-col comparison */}
          <div className="grid lg:grid-cols-2 gap-4">

            {/* PROBLEMA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative overflow-hidden p-8 lg:p-10 flex flex-col gap-7
                         bg-gray-50 dark:bg-white/[0.02]
                         border border-gray-100 dark:border-white/[0.06] group"
              style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}
            >
              <Corners size={16} onDark={false} />

              {/* Ghost label */}
              <span className="pointer-events-none absolute top-2 right-4 font-mono font-black select-none
                              text-red-500/[0.06]" style={{ fontSize: "6rem", lineHeight: 1 }}>
                ✕
              </span>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em]
                                border border-red-400/30 text-red-400 px-2 py-[3px] uppercase">
                  <span className="w-1 h-1 rounded-full bg-red-400" />
                  Control Tradicional
                </span>
              </div>

              <h3 className="text-3xl font-bold uppercase leading-none
                             text-gray-900 dark:text-white"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
                El limitante
              </h3>

              <div className="h-px w-8 bg-red-400/40 group-hover:w-full transition-all duration-500" />

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Históricamente, el reabastecimiento se ha basado en dos joysticks: uno para el
                alabeo/cabeceo y otro para la extensión del botalón. Esto satura ambas manos del
                Boomer, impidiéndole gestionar otras funciones críticas sin soltar los mandos.
              </p>

              <div className="mt-auto p-5 bg-red-500/[0.05] border-l-2 border-red-500/40">
                <p className="text-sm italic text-gray-500 dark:text-red-200/70 leading-relaxed">
                  "Los joysticks no intuitivos de la vieja escuela generan mayor propensión al error
                  humano y fatiga en misiones prolongadas."
                </p>
              </div>
            </motion.div>

            {/* SOLUCIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ delay: 0.12 }}
              className="relative overflow-hidden p-8 lg:p-10 flex flex-col gap-7
                         bg-gray-50 dark:bg-white/[0.02]
                         border border-gray-100 dark:border-white/[0.06] group"
              style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}
            >
              <Corners size={16} onDark={false} />

              {/* Ghost label */}
              <span className="pointer-events-none absolute top-2 right-4 font-mono font-black select-none
                              text-defensya-blue/[0.05]" style={{ fontSize: "6rem", lineHeight: 1 }}>
                HX
              </span>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em]
                                border border-defensya-blue/40 text-defensya-blue px-2 py-[3px] uppercase">
                  <span className="w-1 h-1 rounded-full bg-defensya-blue"
                    style={{ animation: "blink 1.4s step-end infinite" }} />
                  Haptix® Device
                </span>
              </div>

              <h3 className="text-3xl font-bold uppercase leading-none
                             text-gray-900 dark:text-white"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
                La revolución
              </h3>

              <div className="h-px w-8 bg-defensya-blue/40 group-hover:w-full transition-all duration-500" />

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Con Haptix, solo se requiere{" "}
                <strong className="text-gray-900 dark:text-white">una mano</strong>{" "}
                para controlar el boom. Ofrece maniobrabilidad superior, siendo extremadamente
                intuitivo. Reduce los recursos necesarios y permite alcanzar nivel de experto
                en una fracción del tiempo habitual.
              </p>

              <ul className="mt-auto grid sm:grid-cols-2 gap-3">
                {[
                  "Contacto realizado en menor tiempo operativo.",
                  "Menor probabilidad de incidentes inesperados.",
                  "Manejo intuitivo con retroalimentación física.",
                  "Libera la segunda mano para gestión de sistemas.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="shrink-0 mt-[5px] w-1.5 h-1.5 bg-defensya-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §3 HARDWARE — DARK bg-defensya-navy
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-defensya-navy border-b border-white/[0.07]">
        <div className="tech-grid absolute inset-0 opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-20">
            <SectionHeader eyebrow="Hardware" title="Interacción" accent="a escala real"
              tag="HX-02" onDark />
            <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-defensya-blue/30 pl-5 mb-14">
              El propósito de Haptix® es crear una imagen escalada que permita al usuario interactuar
              con el sistema real, pero con fuerza y tamaño reducidos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

            {/* ── Image Slider ── */}
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-px pointer-events-none z-10"
                style={{
                  background: "linear-gradient(135deg, rgba(14,165,233,0.2) 0%, transparent 60%)",
                  clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                }} />

              <div
                className="relative overflow-hidden bg-black"
                style={{
                  aspectRatio: "3/4",
                  clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div key={current}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.55 }}
                    className="absolute inset-0">
                    <Image src={HAPTIX_IMAGES[current].src}
                      alt={HAPTIX_IMAGES[current].label}
                      fill className="object-contain p-6"
                      sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(6,13,24,0.9) 0%, transparent 50%)" }} />
                  </motion.div>
                </AnimatePresence>

                <Corners size={20} onDark />

                {/* View label tag */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em]
                                  text-defensya-blue border border-defensya-blue/40 bg-black/60 px-3 py-1.5 uppercase">
                    {HAPTIX_IMAGES[current].label}
                  </span>
                </div>

                {/* Ref top-right */}
                <div className="absolute top-5 right-5 z-20">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-white/20">
                    {String(current + 1).padStart(2,"0")}/{String(HAPTIX_IMAGES.length).padStart(2,"0")}
                  </span>
                </div>

                {/* Ghost number */}
                <span className="pointer-events-none absolute bottom-4 right-5 font-mono font-black
                                select-none text-white/[0.04]" style={{ fontSize: "5rem", lineHeight: 1 }}>
                  {String(current + 1).padStart(2,"0")}
                </span>

                {/* Progress bar */}
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white/5 z-20">
                  <motion.div className="h-full bg-defensya-blue"
                    initial={false}
                    animate={{ width: `${((current + 1) / HAPTIX_IMAGES.length) * 100}%` }}
                    transition={{ duration: 0.4 }} />
                </div>

                {/* Nav arrows — appear on hover */}
                <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 flex justify-between z-30
                               opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {[{ fn: prev, d: "M9 3L4 8L9 13" }, { fn: next, d: "M5 3L10 8L5 13" }].map((btn, i) => (
                    <button key={i} onClick={btn.fn}
                      className="w-10 h-10 flex items-center justify-center
                                border border-white/20 bg-black/60 backdrop-blur-sm
                                text-white hover:border-defensya-blue hover:text-defensya-blue
                                transition-all duration-200">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d={btn.d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* External thumbnail strip */}
              <div className="flex gap-2 mt-3">
                {HAPTIX_IMAGES.map((img, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`flex-1 h-1.5 transition-all duration-300
                      ${i === current ? "bg-defensya-blue" : "bg-white/15 hover:bg-white/30"}`} />
                ))}
              </div>
            </div>

            {/* ── Feature cards ── */}
            <div className="flex flex-col gap-4">
              {[
                {
                  num: "01",
                  titulo: "Efectores Hápticos",
                  desc: "Motores y engranajes coordinados que vibran y bloquean movimientos peligrosos para advertir al operador de forma física.",
                },
                {
                  num: "02",
                  titulo: "Protección de Envolvente",
                  desc: "Sensores que evitan colisiones y guían al operador para permanecer dentro de los límites operativos del Boom.",
                },
                {
                  num: "03",
                  titulo: "Sincronía con BCU",
                  desc: "Comunicación en tiempo real con la Boom Control Unit para posicionar el botalón en sincronía exacta con la mano del Boomer.",
                },
              ].map((f, i) => (
                <motion.div key={f.num}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative group p-6 lg:p-7
                             bg-white/[0.02] border border-white/[0.07]
                             hover:bg-defensya-blue/[0.05] hover:border-defensya-blue/30
                             transition-all duration-300"
                  style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
                >
                  {/* left accent bar */}
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-defensya-blue
                                  scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-defensya-blue">{f.num}</span>
                    <div className="h-px w-5 bg-defensya-blue" />
                    <h4 className="text-lg font-bold uppercase leading-none text-white
                                  group-hover:text-defensya-blue transition-colors duration-300"
                        style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
                      {f.titulo}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §4 MODOS OPERATIVOS — LIGHT bg-white / dark:bg-defensya-navy
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-white dark:bg-defensya-navy
                          border-b border-gray-100 dark:border-white/[0.07]">
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16">
            <SectionHeader eyebrow="Software" title="Modos" accent="Operativos" tag="HX-03" />
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                         border-l-2 border-defensya-blue/30 pl-5 mb-14">
              Tres capas de software trabajando en paralelo para garantizar precisión total
              en cada contacto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {MODOS.map((modo, i) => (
              <motion.div key={modo.titulo}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden group p-8
                           bg-gray-50 dark:bg-white/[0.02]
                           border border-gray-100 dark:border-white/[0.06]
                           hover:bg-white dark:hover:bg-white/[0.04]
                           transition-all duration-300"
                style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
              >
                {/* top accent line slides in */}
                <span className="absolute top-0 inset-x-0 h-[2px] bg-defensya-blue
                                scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                <Corners size={14} onDark={false} />

                {/* Ghost number */}
                <span className="pointer-events-none absolute top-2 right-4 font-mono font-black select-none
                                text-black/[0.04] dark:text-white/[0.04]
                                group-hover:text-defensya-blue/[0.08] transition-colors duration-500"
                  style={{ fontSize: "5rem", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Index tag */}
                <span className="inline-flex mb-6 font-mono text-[10px] tracking-[0.3em]
                                text-defensya-blue border border-defensya-blue/30 px-2 py-[3px] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl font-bold uppercase leading-tight mb-4
                               text-gray-900 dark:text-white
                               group-hover:text-defensya-blue transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
                  {modo.titulo}
                </h3>

                <div className="h-px w-8 bg-defensya-blue/40 group-hover:w-full transition-all duration-500 mb-4" />

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                             group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {modo.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §5 ROADMAP / EVOLUCIÓN — DARK bg-defensya-navy
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-defensya-navy border-b border-white/[0.07]">
        <div className="tech-grid absolute inset-0 opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-20">
            <SectionHeader eyebrow="Roadmap" title="Evolución" accent="del sistema"
              tag="HX-04" onDark />
            <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-defensya-blue/30 pl-5 mb-14">
              Desde los primeros prototipos en impresión 3D hasta la actual Versión 4.0, hemos
              perfeccionado la capacidad de sensado, la robustez mecánica y la experiencia del usuario.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

            {/* Left narrative */}
            <div className="flex flex-col gap-4">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative p-8 lg:p-10 border border-white/[0.07] bg-white/[0.02]"
                style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }}>
                <Corners size={16} onDark />
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  No existe en el mercado de reabastecimiento un dispositivo como el{" "}
                  <strong className="text-white">Haptix®</strong>. Desde los primeros prototipos
                  en impresión 3D hasta la actual <strong className="text-white">Versión 4.0</strong>,
                  hemos perfeccionado la capacidad de sensado, la robustez mecánica y la experiencia
                  del usuario.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  El sistema utiliza un conjunto de sensores giroscópicos, de presión y ópticos que
                  detectan cada micro-movimiento del operador sobre el{" "}
                  <em className="text-white">Stylus</em>. Esta información se cruza con el{" "}
                  <strong className="text-white">BCU (Boom Control Unit)</strong> para posicionar
                  el botalón real en sincronía exacta con la mano del Boomer.
                </p>
              </motion.div>

              {/* V5 callout */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="relative overflow-hidden p-7 border-l-2 border-defensya-blue
                           bg-defensya-blue/[0.05] group">
                <Settings
                  className="absolute -bottom-6 -right-6 text-defensya-blue/10
                             group-hover:rotate-90 transition-transform duration-1000"
                  size={110} />
                <span className="font-mono text-[10px] tracking-[0.3em] text-defensya-blue uppercase block mb-3">
                  Próximo hito — Versión 5.0
                </span>
                <h4 className="text-2xl font-bold uppercase text-white mb-3"
                    style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
                  Aproximación automática
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                  Estamos desarrollando el procedimiento de{" "}
                  <strong className="text-white">aproximación automática de contacto</strong>. El software
                  guiará el Stylus hacia el receptáculo de forma autónoma, creando el sistema de
                  reabastecimiento más seguro y coste-eficiente del mundo.
                </p>
              </motion.div>
            </div>

            {/* Right timeline */}
            <div className="relative border border-white/[0.07] bg-white/[0.02] p-6"
                 style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
              <Corners size={14} onDark />
              <p className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase mb-6">
                Development Roadmap
              </p>
              <div className="flex flex-col gap-2">
                {VERSIONES.map((ver, i) => (
                  <motion.div key={ver.v}
                    initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className={`relative flex items-center gap-5 px-5 py-4 border-l-2 transition-all duration-200
                      ${ver.current  ? "border-defensya-blue bg-defensya-blue/[0.08]" :
                        ver.future   ? "border-dashed border-gray-700 opacity-60 hover:opacity-100" :
                                       "border-white/[0.07] opacity-45 hover:opacity-80"}`}
                  >
                    <span className={`font-bold text-2xl leading-none shrink-0 transition-colors
                                    ${ver.current ? "text-defensya-blue" : "text-gray-600"}`}
                          style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
                      {ver.v}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm font-bold uppercase text-white leading-tight block">{ver.desc}</span>
                      {ver.current && (
                        <span className="font-mono text-[9px] tracking-[0.25em] text-defensya-blue uppercase mt-1 block">
                          Versión actual
                        </span>
                      )}
                      {ver.future && (
                        <span className="font-mono text-[9px] tracking-[0.25em] text-defensya-blue uppercase mt-1 block">
                          En desarrollo
                        </span>
                      )}
                    </div>
                    {ver.current && <GitBranch className="text-defensya-blue shrink-0" size={14} />}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          §6 ESPECIFICACIONES — LIGHT bg-white / dark:bg-defensya-navy
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-white dark:bg-defensya-navy">
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16">
            <SectionHeader eyebrow="Specs" title="Especificaciones" accent="Técnicas" tag="HX-05" />
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                         border-l-2 border-defensya-blue/30 pl-5 mb-14">
              Hardware rugerizado y certificado para entornos de misión crítica, con cumplimiento
              de los estándares RTCA internacionales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SPECS.map((sec, i) => (
              <motion.div key={sec.titulo}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden
                           bg-gray-50 dark:bg-white/[0.02]
                           border border-gray-100 dark:border-white/[0.06]"
                style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
              >
                <Corners size={14} onDark={false} />

                {/* Section title */}
                <div className="px-7 pt-8 pb-4 border-b border-gray-100 dark:border-white/[0.07]">
                  <span className="font-mono text-[10px] tracking-[0.3em]
                                  text-gray-500 dark:text-gray-500 uppercase">
                    {sec.titulo}
                  </span>
                </div>

                <div className="p-5 flex flex-col gap-3">
                  {sec.items.map((item, idx) => (
                    <div key={idx}
                         className="p-4 bg-white dark:bg-black/20
                                   border border-gray-100 dark:border-white/[0.05]
                                   hover:border-defensya-blue/30 transition-colors group">
                      <p className="font-mono text-[10px] uppercase text-gray-400 tracking-wider mb-2">
                        {item.label}
                      </p>
                      <p className={`text-xl font-bold leading-none
                                    ${item.destacado
                                      ? "text-defensya-blue"
                                      : "text-gray-900 dark:text-white"}`}
                         style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
                        {item.valor}
                        {item.extra && (
                          <span className="text-gray-400 text-xs font-normal ml-2">{item.extra}</span>
                        )}
                      </p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.tags.map((tag) => (
                            <span key={tag}
                                  className="px-2 py-0.5 bg-defensya-blue/10 text-defensya-blue
                                            font-mono text-[9px] font-bold tracking-widest">
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

          {/* Bottom doc ref */}
          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/[0.07]
                         flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-defensya-blue/40" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase">
                Haptix System · Document Ref: DS-HPTX-2026-V3.01
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase">
              Defensya Ingeniería Internacional
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}