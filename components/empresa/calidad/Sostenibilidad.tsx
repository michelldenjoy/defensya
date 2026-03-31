import React from "react";
import Link from "next/link";




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
              className="group inline-flex items-center gap-4 border border-white/20
                         px-7 py-4 w-3xs hover:bg-white/5 hover:border-white/40
                         transition-all duration-200 shrink-0 self-start lg:self-center"
            >
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white">
                Ver Sostenibilidad
              </span>
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                className="text-defensya-blue group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4-4 4M3 12h18"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
