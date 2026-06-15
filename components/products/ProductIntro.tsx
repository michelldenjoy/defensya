"use client";

export default function ProductIntro() {
  return (
    <section className="relative w-full bg-[#060d18] border-b border-[rgba(14,165,233,0.12)] px-5 sm:px-8 lg:px-16 py-14 sm:py-20 overflow-hidden">

      {/* Marco perimetral */}
      <div className="absolute inset-[14px] border border-[rgba(14,95,163,0.12)] pointer-events-none" />

      {/* Esquinas */}
      {([
        "top-[14px] left-[14px] border-t border-l",
        "top-[14px] right-[14px] border-t border-r",
        "bottom-[14px] left-[14px] border-b border-l",
        "bottom-[14px] right-[14px] border-b border-r",
      ] as const).map((cls, i) => (
        <span
          key={i}
          className={`absolute w-[13px] h-[13px] pointer-events-none border-defensya-blue ${cls}`}
        />
      ))}

      <div className="relative max-w-7xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 sm:mb-10">

          <span className="text-defensya-steel text-[12px] tracking-[0.3em] uppercase">
            Catálogo · Defensya Systems · Ingeniería de precisión
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-defensya-blue/40 to-transparent" />

        </div>

        {/* Heading + cuerpo */}
        <div className="grid lg:grid-cols-[1fr_38%] gap-8 lg:gap-16 items-end">

          <h1
            className="font-bold uppercase leading-[0.92] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            La seguridad del
            <br />
            <em className="not-italic font-light text-white/45">futuro se construye {" "}</em>
          <br />
              con precisión{" "}
          
          </h1>

          <div className="flex flex-col gap-4">
            <div className="w-6 h-px bg-defensya-steel" />
            <p
              className="leading-[1.85] text-white/42 font-light"
              style={{ fontSize: "1.10rem" }}
            >
              En esta sección encontrarás{" "}
              <strong className="text-white/80 font-normal">
                herramientas avanzadas y sistemas de última generación
              </strong>{" "}
              desarrollados por Defensya para anticiparse a cualquier riesgo.
              No solo creamos soluciones; entregamos la{" "}
              <strong className="text-white/80 font-normal">
                confianza necesaria para operar
              </strong>{" "}
              en un mundo en constante cambio.
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-between mt-10 sm:mt-14 pt-5
                        border-t border-[rgba(14,95,163,0.32)] flex-wrap gap-4">
          <div className="flex gap-6 sm:gap-8 flex-wrap">
            {[
              { label: "Categorías",     val: "06" },
              { label: "Sistemas activos", val: "20+" },
              { label: "Certificación",  val: "ISO 9001" },
            ].map(({ label, val }) => (
              <div key={label} className="flex flex-col gap-[3px]">
                <span className="text-white/20 text-[8px] tracking-[0.22em] uppercase">
                  {label}
                </span>
                <span className="font-bold text-defensya-steel/60 text-[12px] tracking-[0.06em]">
                  {val}
                </span>
              </div>
            ))}
          </div>
          <span className="text-white/12 text-[8px] tracking-[0.18em] uppercase">
            DFS-CAT-001 · Rev A · Defensya Systems S.L.
          </span>
        </div>

      </div>
    </section>
  );
}