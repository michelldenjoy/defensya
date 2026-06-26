"use client";

import Link from "next/link";
import Image from "next/image";


const FEATURES = [
  {
    num: "01",
    bold: "Haptix®",
    text: " — control del botalón con una sola mano y retroalimentación háptica en tiempo real.",
  },
  {
    num: "02",
    bold: "A3R® / A4R®",
    text: " — niveles crecientes de automatización del repostaje aire-aire.",
  },

];


export default function TecnologiaSection() {
  return (
    <section className="relative w-full bg-[#060d18] px-4 sm:px-6 lg:px-16 pt-2 sm:pt-4 pb-6 sm:pb-10 overflow-hidden">
      <div className="tech-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        
        <div
          className="flex items-center gap-4 mb-7 sm:mb-8 pt-12 sm:pt-16
                        border-t border-white/[0.06]"
        >
          <span
            className="text-slate-400 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            Innovación · Sector Aeronáutico
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-defensya-steel/20 to-transparent" />
        </div>

        {/* Card */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]
                     bg-[#0b1f38] border border-[rgba(14,165,233,0.12)] overflow-hidden"
          style={{
            clipPath:
              "polygon(0 0,calc(100% - 32px) 0,100% 32px,100% 100%,32px 100%,0 calc(100% - 32px))",
          }}
        >
          {/* Bisel */}
          <div
            className="absolute top-0 right-0 bg-defensya-blue z-10"
            style={{
              width: 32,
              height: 32,
              clipPath: "polygon(100% 0,0 0,100% 100%)",
            }}
          />

          {/* ── LEFT — texto items ── */}
          <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            
            <div className="flex gap-2 flex-wrap mb-5">
              {["DFS-AAR", "Haptix® V4.0", "I+D+i"].map((tag) => (
                <span
                  key={tag}
                  className="border border-defensya-blue/35 text-defensya-steel px-2.5 py-[3px]"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            
            <h2
              className="font-bold uppercase leading-[0.95] tracking-[-0.02em] text-white mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
              }}
            >
              Reabastecimiento
              <br />
              air to air <br />{" "}
              <span className="not-italic font-light text-white/45">de alta precisión</span>
            </h2>

           
            <p
              className="text-white/45 font-light leading-[1.85] max-w-xl mb-7"
              style={{ fontSize: "0.88rem" }}
            >
              Dentro de nuestra división aeronáutica, desarrollamos sistemas de
              reabastecimiento aire-aire automatizados y dispositivos de control
              háptico que reducen la carga del operador y aumentan la seguridad
              en cada misión.
            </p>

           
            <div className="flex flex-col mb-7">
              {FEATURES.map(({ num, bold, text }) => (
                <div
                  key={num}
                  className="flex items-start gap-3 py-2.5 border-b border-white/[0.05] last:border-b-0"
                >
                  <span
                    className="text-defensya-steel shrink-0 mt-[2px]"
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "10px",
                    }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-white/45 font-light leading-[1.6]"
                    style={{ fontSize: "0.82rem" }}
                  >
                    <strong className="text-white/80 font-semibold">
                      {bold}
                    </strong>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/innovacion"
              className="group relative inline-flex items-center gap-2.5 w-fit px-6 py-3.5
                         bg-defensya-navy-light text-white hover:bg-defensya-blue/80
                         transition-colors duration-200"
              style={{
                clipPath:
                  "polygon(0 0,calc(100% - 9px) 0,100% 9px,100% 100%,9px 100%,0 calc(100% - 9px))",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Explorar innovación
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  d="M1.5 5.5h8M6.5 2l3 3.5-3 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="pointer-events-none absolute bottom-0 right-0 bg-white/25"
                style={{
                  width: "12px",
                  height: "1px",
                  transformOrigin: "bottom right",
                  transform: "rotate(-45deg) translateX(3px)",
                }}
              />
            </Link>
          </div>

          {/* ── RIGHT — imagen ── */}
          <div
            className="relative min-h-[320px] lg:min-h-full overflow-hidden
                          border-t lg:border-t-0 lg:border-l border-[rgba(14,165,233,0.1)]"
          >
           
            <Image
              src="/products/haptix2.webp"
              alt="Haptix® — Reabastecimiento aéreo de precisión"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(6,13,24,0.4) 0%, transparent 30%)",
              }}
            />

            
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(14,165,233,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Ref esquina */}
            <span
              className="absolute top-5 sm:top-6 left-6 sm:left-10 z-10 text-white/30"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              REF-INNOV/01
            </span>

            {/* Corners HUD */}
            <span
              className="pointer-events-none absolute z-10 top-5 right-5 w-[14px] h-[14px]"
              style={{
                borderTop: "1.5px solid rgba(14,165,233,0.4)",
                borderRight: "1.5px solid rgba(14,165,233,0.4)",
              }}
            />
            <span
              className="pointer-events-none absolute z-10 bottom-5 left-5 w-[14px] h-[14px]"
              style={{
                borderBottom: "1.5px solid rgba(14,165,233,0.25)",
                borderLeft: "1.5px solid rgba(14,165,233,0.25)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}