"use client";

import Link from "next/link";


const products = [
  {
    num: "01",
    name: "A3R®",
    tag: "Air-to-Air Automated Refueling",
    desc: "Reabastecimiento Air-to-Air automatizado para aeronaves de nueva generación.",
    href: null,
    highlight: false,
  },
  {
    num: "02",
    name: "A4R®",
    tag: "Autonomous Aerial Refueling",
    desc: "Conceptos de reabastecimiento aéreo completamente autónomo.",
    href: null,
    highlight: false,
  },
  {
    num: "03",
    name: "Boomerang®",
    tag: "Precision Receptacle Location",
    desc: "Tecnología de localización precisa del receptáculo en condiciones adversas.",
    href: null,
    highlight: false,
  },
  {
    num: "04",
    name: "Haptix®",
    tag: "Haptic Boom Control",
    desc: "Control háptico avanzado para el botalón de repostaje.",
    href: "/haptix",
    highlight: true,
  },
];



function ProductRow({
  num,
  name,
  tag,
  desc,
  href,
  highlight,
}: (typeof products)[0]) {
  return (
    <div
      className={`
        group relative
        grid md:grid-cols-[56px_200px_260px_1fr_auto] gap-6 items-center
        py-7 px-5 -mx-5
        border-b border-white/[0.07]
        transition-all duration-300
        ${highlight
          ? "bg-[#0ea5e9]/[0.04] hover:bg-[#0ea5e9]/[0.09]"
          : ""
        }
      `}
    >
      {/* ── linea lateral ── */}
      <span
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] bg-blue-300/50
                   scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
      />

      {/* ── Index NUMBER ── */}
      <span className="font-mono text-[11px] text-gray-600 transition-colors duration-300">
        {num}
      </span>

      {/* ── Product NAME ── */}
      <span
        className={`
          text-2xl font-bold uppercase leading-none transition-colors duration-300
          ${highlight ? "text-blue-300" : "text-white "}
        `}
        style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
      >
        {name}
      </span>

      
      <span className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase">
        {highlight && (
          <span
            className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0"
            style={{ animation: "blink 1.4s step-end infinite" }}
          />
        )}
        {tag}
      </span>

     
      <span className="text-sm text-gray-400 leading-snug group-hover:text-gray-300 transition-colors duration-300">
        {desc}
      </span>

      {/* ── Link  ── */}
      <div className="flex justify-end min-w-[140px]">
        {href ? (
          <Link
            href={href}
            className="
              group/link relative inline-flex items-center gap-3
              px-5 py-2.5
              border border-defensya-blue bg-defensya-blue text-white
              text-[10px] font-mono tracking-[0.2em] uppercase
             hover:scale-105
              transition-all duration-200
            "
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
            }}
          >
            Explorar
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
              className="translate-x-0 group-hover/link:translate-x-0.5 transition-transform duration-200">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ) : (
        
          <span className="w-[110px]" />
        )}
      </div>
    </div>
  );
}

// ─── COMPONENTE PRINCIPAL ─── 

export default function TecnologiasSection() {
  return (
    <section
      className="relative bg-defensya-navy py-32 px-6 lg:px-16 overflow-hidden dark:bg-black/40"
      
    >
      {/* Tech grid */}
      <div className="tech-grid absolute inset-0 opacity-50 pointer-events-none" />

      {/* Subtle horizontal */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, #0ea5e9 40%, transparent)",
          opacity: 0.25,
        }}
      />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Section Header ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-20">

          {/* Left — titles */}
          <div>
            {/* Status label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-slate-400" />
              <span className="font-mono text-[11px] tracking-[0.35em] text-slate-400 uppercase">
                Tecnologías
              </span>
            </div>

            <h2
              className="font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white"
              style={{
                fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
              }}
            >
              Impulsamos el futuro
              <br />
              del<span className="text-blue-300"> reabastecimiento</span>
            </h2>
          </div>

          {/* Right — descriptor */}
          <div
            className="relative max-w-sm border-l-2 border-[#0ea5e9]/25 pl-6
                       before:content-[''] before:absolute before:-top-2 before:left-[-2px]
                       before:w-[2px] before:h-4 before:bg-[#0ea5e9]"
          >
            <p className="text-sm text-gray-400 leading-relaxed">
              Nuestras soluciones cubren el ciclo completo del reabastecimiento
              aéreo automatizado, desde la percepción hasta el control háptico
              del botalón.
            </p>
          </div>
        </div>

        {/* ── Product count badge ── */}
        {/* <div className="flex items-center gap-4 mb-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            Productos activos
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-mono text-[11px] text-[#0ea5e9]">
            {String(products.length).padStart(2, "0")} sistemas
          </span>
        </div> */}

        {/* ── Table header row ── */}
        {/* <div className="grid md:grid-cols-[56px_200px_260px_1fr_auto] gap-6 px-5 -mx-5 pb-3 border-b border-white/[0.12]">
          {["#", "Producto", "Clasificación", "Descripción", ""].map((h) => (
            <span key={h} className="font-mono text-[9px] tracking-[0.3em] text-gray-700 uppercase">
              {h}
            </span>
          ))}
        </div> */}

        {/* ── Product rows ── */}
        <div>
          {products.map((p) => (
            <ProductRow key={p.name} {...p} />
          ))}
        </div>

        {/* ── Footer CTA ── */}
        <div className="mt-12 flex items-center justify-between flex-wrap gap-6">

          {/* CTA button */}
          <Link
            href="/innovacion"
            className="
              group relative inline-flex items-center gap-3
              px-7 py-3.5
              border border-defensya-blue text-white
              text-[11px] font-mono tracking-[0.25em] uppercase
              bg-defensya-blue hover:scale-105
              transition-all duration-200
            "
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
            }}
          >
            {/* TL corner accent scale */}
            <span
              className="pointer-events-none absolute top-0 left-0 w-[10px] h-px opacity-50
                         group-hover:opacity-100 transition-opacity duration-200"
              style={{ transformOrigin: "top left", transform: "rotate(-45deg) translateX(-4px)" }}
            />
            Nuestras Tecnologías
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={1.5}
              className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
            </svg>
          </Link>

          {/* Meta line */}
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-[#0ea5e9]/30" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-700 uppercase">
              Defensya · R&D Division
            </span>
            <div className="h-px flex-1 bg-white/[0.04]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}