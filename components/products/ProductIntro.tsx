"use client";

export default function ProductIntro() {
  return (
    <section className="relative w-full bg-defensya-navy border-b border-[rgba(14,165,233,0.12)] px-5 sm:px-8 lg:px-16 py-14 sm:py-20 overflow-hidden">
      {/* Marco perimetral */}
      <div className="absolute inset-[14px] border border-[rgba(14,95,163,0.12)] pointer-events-none" />

      {/* Esquinas */}
      {(
        [
          "top-[14px] left-[14px] border-t border-l",
          "top-[14px] right-[14px] border-t border-r",
          "bottom-[14px] left-[14px] border-b border-l",
          "bottom-[14px] right-[14px] border-b border-r",
        ] as const
      ).map((cls, i) => (
        <span
          key={i}
          className={`absolute w-[13px] h-[13px] pointer-events-none border-defensya-blue ${cls}`}
        />
      ))}

      <div className="relative max-w-7xl mx-auto">
        {/* Eyebrow  */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-slate-500 text-slate-500 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase">
            Defensya · Proyectos
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-defensya-steel/20 to-transparent" />
        </div>

        {/* Heading + cuerpo items */}
        <div className="grid lg:grid-cols-[1fr_38%] gap-8 lg:gap-16 items-center">
          <h1
            className="font-bold uppercase leading-[0.92] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.3rem, 5.0vw, 5.2rem)",
                  fontFamily: "'Barlow Condensed', sans-serif", 
                  letterSpacing: "0.005em"
                 }}
          >
            La seguridad del <br /> futuro se construye
            <br />
            <em className="not-italic font-light text-white/45">
              {" "}
              con precisión{" "}
            </em>
            <br />{" "}
          </h1>

          <div className="flex flex-col gap-4">
            <p
              className="text-sm sm:text-base text-white/42 dark:text-gray-400 leading-relaxed border-l-2 border-defensya-steel/20 pl-4 sm:pl-5 lg:self-end"
              
            >
              En esta sección encontrarás{" "}
              <strong className="text-white/80 font-normal">
                herramientas avanzadas y sistemas de última generación
              </strong>{" "}
              desarrollados por Defensya para anticiparse a cualquier riesgo. No
              solo creamos soluciones; entregamos la{" "}
              <strong className="text-white/80 font-normal">
                confianza necesaria para operar
              </strong>{" "}
              en un mundo en constante cambio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
