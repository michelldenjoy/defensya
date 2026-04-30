"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";



const rows = [
  {
    num: "01",
    name: "A3R®",
    tag: "Air-to-Air Automated Refueling",
    desc: "Reabastecimiento Air-to-Air automatizado para aeronaves de nueva generación.",
  },
  {
    num: "02",
    name: "A4R®",
    tag: "Autonomous Aerial Refueling",
    desc: "Conceptos de reabastecimiento aéreo completamente autónomo.",
  },
  {
    num: "03",
    name: "Boomerang®",
    tag: "Precision Receptacle Location",
    desc: "Tecnología de localización precisa del receptáculo en condiciones adversas.",
  },
];

const haptixStats = [
  { label: "Hardware",    value: "V4.0"      },
  { label: "I/O Std",    value: "ARINC 429" },
  { label: "Operativo",  value: "28V DC"    },
  { label: "Versión",    value: "Certified"  },
];



function ProductRow({ num, name, tag, desc }: typeof rows[0]) {
  return (
    <div className="group relative grid md:grid-cols-[56px_200px_260px_1fr] gap-6 items-center
                    py-7 px-5 -mx-5 border-b border-white/[0.07]
                    hover:bg-white/[0.03] transition-all duration-300">

      {/* Left accent bar */}
      <span className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] bg-defensya-blue
                      scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      <span className="font-mono text-[11px] text-gray-600 group-hover:text-defensya-blue transition-colors duration-300">
        {num}
      </span>

      <span className="text-2xl font-bold uppercase leading-none text-white
                      group-hover:text-defensya-blue transition-colors duration-300"
            style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}>
        {name}
      </span>

      <span className="hidden md:block font-mono text-[10px] tracking-[0.2em] text-gray-600 uppercase">
        {tag}
      </span>

      <span className="text-sm text-gray-400 leading-snug group-hover:text-gray-300 transition-colors duration-300">
        {desc}
      </span>
    </div>
  );
}


export default function TecnologiasSection() {
  return (
    <section className="relative py-32 px-6 lg:px-16 overflow-hidden bg-defensya-navy">
      <div className="tech-grid absolute inset-0 opacity-50 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, #0ea5e9 40%, transparent)", opacity: 0.25 }} />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 rounded-full bg-defensya-blue"
                style={{ animation: "blink 1.4s step-end infinite" }} />
              <span className="w-6 h-px bg-defensya-blue/50" />
              <span className="font-mono text-[11px] tracking-[0.35em] text-defensya-blue uppercase">
                Tecnologías
              </span>
            </div>
            <h2 className="font-bold uppercase leading-[0.9] tracking-tight text-white"
                style={{
                  fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                }}>
              Impulsamos el futuro
              <br />
              <span className="text-defensya-blue">del reabastecimiento</span>
            </h2>
          </div>

          <div className="relative max-w-sm border-l-2 border-defensya-blue/25 pl-6
                         before:content-[''] before:absolute before:-top-2 before:left-[-2px]
                         before:w-[2px] before:h-4 before:bg-defensya-blue">
            <p className="text-sm text-gray-400 leading-relaxed">
              Nuestras soluciones cubren el ciclo completo del reabastecimiento aéreo
              automatizado, desde la percepción hasta el control háptico del botalón.
            </p>
          </div>
        </div>

      
        <div className="hidden md:grid md:grid-cols-[56px_200px_260px_1fr] gap-6
                        px-5 -mx-5 pb-3 border-b border-white/[0.12]">
          {["#", "Producto", "Clasificación", "Descripción"].map((h) => (
            <span key={h} className="font-mono text-[9px] tracking-[0.3em] text-gray-700 uppercase">{h}</span>
          ))}
        </div>

        {/* ── FILAS  A3R A4R  BOOMERANG ── */}
        <div className="mb-4">
          {rows.map((p) => <ProductRow key={p.name} {...p} />)}
        </div>

        {/* HAPTIX — hero block */}
            
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="relative mt-4 overflow-hidden group"
          style={{
            clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))",
          }}
        >
          {/* ── IMAGEN ── */}
          <div className="absolute inset-0">
            <Image
              src="/products/haptix1.webp"
              alt="Haptix® Control System"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/*  overlays */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(6,13,24,0.97) 0%, rgba(6,13,24,0.80) 45%, rgba(6,13,24,0.30) 100%)" }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(6,13,24,0.60) 0%, transparent 60%)" }} />

          {/* Blue hover tint */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "rgba(14,165,233,0.05)" }} />

          {/* Corner brackets */}
          <>
            <span className="pointer-events-none absolute z-20"
              style={{ top: 14, left: 14, width: 22, height: 22,
                borderTop: "1.5px solid #0ea5e9", borderLeft: "1.5px solid #0ea5e9" }} />
            <span className="pointer-events-none absolute z-20"
              style={{ top: 14, right: 14, width: 22, height: 22,
                borderTop: "1px solid rgba(255,255,255,0.12)", borderRight: "1px solid rgba(255,255,255,0.12)" }} />
            <span className="pointer-events-none absolute z-20"
              style={{ bottom: 14, left: 14, width: 22, height: 22,
                borderBottom: "1px solid rgba(255,255,255,0.12)", borderLeft: "1px solid rgba(255,255,255,0.12)" }} />
            <span className="pointer-events-none absolute z-20"
              style={{ bottom: 14, right: 14, width: 22, height: 22,
                borderBottom: "1.5px solid rgba(14,165,233,0.45)", borderRight: "1.5px solid rgba(14,165,233,0.45)" }} />
          </>

          {/* Diagonal accent on clip corner */}
          <svg className="absolute top-0 right-0 pointer-events-none z-20"
            width="52" height="52" viewBox="0 0 52 52" fill="none">
            <line x1="0" y1="34" x2="34" y2="0" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.5" />
          </svg>

          {/* Ghost number */}
          <span className="pointer-events-none absolute bottom-4 right-8 font-mono font-black select-none
                          text-white/[0.04] group-hover:text-defensya-blue/[0.07] transition-colors duration-500"
            style={{ fontSize: "9rem", lineHeight: 1 }}>
            04
          </span>

      
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center
                          gap-8 lg:gap-16 px-8 sm:px-12 py-12 lg:py-14">

            {/* Left — text */}
            <div className="flex-1 max-w-xl">


         
              <h3 className="font-bold uppercase leading-[0.88] tracking-tight text-white mb-2"
                  style={{
                    fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                    fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  }}>
                Haptix<span className="text-defensya-blue">®</span>
              </h3>

              <p className="font-mono text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-6">
                Haptic Boom Control System
              </p>

           
              <div className="h-px w-12 bg-defensya-blue/50 mb-6
                             group-hover:w-32 transition-all duration-500" />

              <p className="text-sm text-gray-300 leading-relaxed max-w-md mb-8">
                Control háptico avanzado para el botalón de repostaje. Una sola mano,
                retroalimentación física en tiempo real y protección de envolvente por software.
                El único dispositivo de su clase en el mercado.
              </p>

      
              <Link
                href="/haptix"
                className="group/btn inline-flex items-center gap-3
                           px-7 py-3.5 bg-defensya-blue text-white
                           font-mono text-[11px] tracking-[0.25em] uppercase font-bold
                           hover:bg-defensya-blue/80 transition-all duration-200"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                Explorar Haptix®
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className="group-hover/btn:translate-x-1 transition-transform duration-200">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

   
            <div className="lg:self-stretch lg:flex lg:flex-col lg:justify-center shrink-0">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-2">
                {haptixStats.map(({ label, value }) => (
                  <div key={label}
                       className="flex items-center gap-4 px-5 py-3
                                  border border-white/[0.08] bg-white/[0.03]
                                  hover:border-defensya-blue/40 hover:bg-defensya-blue/[0.06]
                                  transition-all duration-200">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] tracking-[0.3em] text-gray-600 uppercase">{label}</span>
                      <span className="font-mono text-[15px] font-bold text-white leading-none">{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 font-mono text-[9px] tracking-[0.25em] text-gray-700 uppercase text-right">
                REF-HPTX/04
              </p>
            </div>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/5 z-20">
            <div className="h-full bg-defensya-blue/60 w-4/5
                           group-hover:w-full transition-all duration-700" />
          </div>
        </motion.div>

        {/* ── Footer CTA ── */}
        <div className="mt-12 flex items-center justify-between flex-wrap gap-6">
          <Link
            href="/innovacion"
            className="group inline-flex items-center gap-3
                       px-7 py-3.5 border border-white/15 text-white
                       font-mono text-[11px] font-bold tracking-[0.25em] uppercase
                       hover:border-defensya-blue hover:bg-defensya-blue
                       transition-all duration-200"
            style={{
              clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
            }}
          >
            nuestra Innovación
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform duration-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
            </svg>
          </Link>

          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-defensya-blue/30" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-700 uppercase">
              Defensya · R&D Division
            </span>
            <div className="h-px flex-1 bg-white/[0.04]" />
          </div>
        </div>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}