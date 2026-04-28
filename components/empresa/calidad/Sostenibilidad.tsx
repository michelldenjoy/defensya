import React from "react";
import Link from "next/link";


// SOSTENIBILIDAD STRIP EN CALIDAD ********************************

function SectionTag({ children }: { children: React.ReactNode }) {
    return (
      <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-3">
        {children}
      </p>
    );
  }
export default function Sostenibilidad() {

  return (
    <main >
      <section className="px-6 lg:px-16 py-15 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-20 items-center">
            <div>
              <SectionTag>Mejora continua</SectionTag>
              <h2
                className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Sostenibilidad
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mt-3 max-w-md">
                Conoce el compromiso de Defensya con el desarrollo sostenible,
                la responsabilidad medioambiental y el impacto social de nuestra
                actividad.
              </p>
            </div>

            <Link
            href="/empresa/sostenibilidad"
            className="
              group relative inline-flex items-center gap-3
              px-7 py-3.5
              border border-defensya-blue text-white
              text-[11px] font-mono tracking-[0.25em] uppercase
              bg-defensya-blue hover:font-bold hover:scale-105
              transition-all duration-200
            "
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
            }}
          >
            {/* TL corner accent */}
            <span
              className="pointer-events-none absolute top-0 left-0 w-[10px] h-px opacity-50
                         group-hover:opacity-100 transition-opacity duration-200"
              style={{ transformOrigin: "top left", transform: "rotate(-45deg) translateX(-4px)" }}
            />
            Explorar 
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={1.5}
              className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
            </svg>
          </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
