"use client";

const MisionVision = () => {
  return (
    <section
      className="relative overflow-hidden dark:bg-defensya-navy bg-white"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      {/* Tech grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="w-2 h-2 bg-defensya-blue shrink-0"
            style={{ transform: "rotate(45deg)" }}
          />
          <span
            className="text-[10px] tracking-[.35em] dark:text-gray-300 text-defensya-blue whitespace-nowrap uppercase"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            Identidad / Propósito
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(2,70,116,0.5)] to-transparent " />
          <span
            className="text-[10px] tracking-[.35em] dark:text-gray-300 text-defensya-blue whitespace-nowrap uppercase"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            Defensya · EST. 2006
          </span>
          <span
            className="w-2 h-2 bg-defensya-blue shrink-0"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>

        {/* Main layout */}
        <div className="grid md:grid-cols-[1fr_1px_1fr] mb-8 items-stretch min-h-[440px]">
          {/* MISIÓN */}
          <div className="flex flex-col justify-between gap-8 pr-0 md:pr-2">
            <div className="relative">
              <div className="flex justify-end mb-5">
                <span
                  className="text-[14px] tracking-[.3em] dark:text-gray-300 text-[#475569] uppercase"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Misión
                </span>
              </div>

              <div
                className="relative"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  className="block text-slate-300/60 dark:text-white/[0.07] leading-[0.85] select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(5rem, 9vw, 8rem)",
                    letterSpacing: "-0.04em",
                    marginLeft: "-3px",
                  }}
                >
                  M
                </span>
                <h3
                  className="relative z-10 text-defensya-navy font-bold dark:text-white -mt-6"
                  style={{
                    fontSize: "clamp(3.5rem, 5vw, 4.2rem)",
                    lineHeight: 0.9,
                  }}
                >
                  <span className=" font-light"> Lo que</span>
                  <br />
                  <span className="text-defensya-blue italic">hacemos</span>
                </h3>
              </div>

              <div className="w-8 h-0.5 bg-defensya-blue mt-4 mb-5" />

              <p className="text-md font-light dark:text-[#7c8fa8] leading-[1.85] tracking-wide">
                Diseñar y desarrollar{" "}
                <strong className="dark:text-[#cbd5e1] font-normal">
                  soluciones tecnológicas avanzadas
                </strong>{" "}
                en visión, imagen, audio, datos e iluminación especializada —
                proporcionando productos innovadores, fiables y de{" "}
                <strong className="dark:text-[#cbd5e1] font-normal">
                  alto rendimiento
                </strong>{" "}
                para sectores estratégicos donde la{" "}
                <strong className="dark:text-[#cbd5e1] font-normal">
                  precisión y la seguridad
                </strong>{" "}
                son fundamentales.
              </p>

              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[rgba(14,165,233,0.2)]" />
            </div>

            <div className="flex items-center gap-2.5 border-t border-[rgba(14,165,233,0.12)] pt-5">
              <span
                className="text-[10px] tracking-[.2em] dark:text-slate-400 text-[rgba(29,69,115,0.53)]"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                DFNS-001
              </span>
              <span className="w-1 h-1 rounded-full bg-[rgba(29,69,115,0.53)]" />
              <span
                className="text-[10px] tracking-[.15em] dark:text-slate-400 text-[rgba(29,69,115,0.53)]"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                OPTICS · SYSTEMS · DATA
              </span>
            </div>
          </div>

          {/* SPINE */}
          <div className="hidden md:block relative mx-10">
            <div className="absolute inset-0 w-px bg-[rgba(14,165,233,0.15)] left-1/2" />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-px"
              style={{
                top: 0,
                height: "80px",
                background:
                  "linear-gradient(180deg, transparent, rgba(14,165,233,0.5))",
                animation: "spineGlow 3s ease-in-out infinite",
              }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-px"
              style={{
                bottom: 0,
                height: "80px",
                background:
                  "linear-gradient(0deg, transparent, rgba(14,165,233,0.5))",
                animation: "spineGlow 3s ease-in-out 1.5s infinite",
              }}
            />
          </div>

          {/* VISIÓN */}
          <div className="flex flex-col justify-between gap-8 pl-0 md:pl-2 mt-12 md:mt-0">
            <div className="relative">
              <div className="flex justify-end mb-5">
                <span
                  className="text-[14px] tracking-[.3em] dark:text-gray-300 text-[#475569] uppercase"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Visión
                </span>
              </div>

              <div
                className="relative"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  className="block  text-slate-300/60 dark:text-white/[0.07] leading-[0.85] select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(5rem, 9vw, 8rem)",
                    letterSpacing: "-0.04em",
                    marginLeft: "-3px",
                  }}
                >
                  V
                </span>
                <h3
                  className="relative z-10 text-defensya-navy dark:text-white -mt-6"
                  style={{
                    fontSize: "clamp(3.5rem, 5vw, 4.2rem)",
                    lineHeight: 0.9,
                  }}
                >
                  <span className=" font-light">Hacia dónde</span> <br />{" "}
                  <span className="text-defensya-blue italic font-bold">
                    vamos
                  </span>
                </h3>
              </div>

              <div className="w-8 h-0.5 bg-defensya-blue mt-4 mb-5" />

              <p className="text-md font-light dark:text-[#7c8fa8] leading-[1.85] tracking-wide">
                <strong className="dark:text-[#cbd5e1] font-normal">
                  Liderar la innovación
                </strong>{" "}
                en tecnologías de visión y control — convirtiéndonos en
                referente de confianza para defensa, aeronáutica e industria,
                gracias a nuestra{" "}
                <strong className="dark:text-[#cbd5e1] font-normal">
                  excelencia técnica
                </strong>
                , capacidad de innovación y compromiso con la calidad.
              </p>

              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[rgba(14,165,233,0.2)]" />
            </div>

            <div className="flex items-center gap-2.5 border-t border-[rgba(14,165,233,0.12)] pt-5">
              <span
                className="text-[10px] tracking-[.2em] dark:text-slate-400 text-[rgba(29,69,115,0.53)]"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                DFNS-002
              </span>
              <span className="w-1 h-1 rounded-full bg-[rgba(29,69,115,0.53)]" />
              <span
                className="text-[10px] tracking-[.15em] dark:text-slate-400 text-[rgba(29,69,115,0.53)]"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                DEFENCE · AERO · INDUSTRY
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spineGlow {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default MisionVision;
