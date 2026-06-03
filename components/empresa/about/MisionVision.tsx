"use client";

// Fuentes requeridas — añadir en tu layout.tsx o _document.tsx:
// <link
//   href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;600;700&family=Share+Tech+Mono&display=swap"
//   rel="stylesheet"
// />

const MisionVision = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#f6f8fb] dark:bg-[#07101d]"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      {/* ── Marco perimetral ── */}
      <div className="absolute inset-[14px] border border-[rgba(14,95,163,0.35)] pointer-events-none" />

      {/* ── Esquinas técnicas ── */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <CornerMark key={pos} position={pos} />
      ))}

      {/* ── Contenido ── */}
      <div className="relative max-w-7xl mx-auto px-10 lg:px-16 pt-12 pb-14">

        {/* Cabecera */}
        <div className="flex items-center justify-between mb-14">
          <span
            className="border border-[rgba(14,95,163,0.35)] px-3 py-[3px] text-[#0e5fa3] dark:text-[#4fa8e0]"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "8px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            DFS-ID-001 · Rev C
          </span>
          <span
            className="text-right text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)]"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "8px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              lineHeight: "1.8",
            }}
          >
            Defensya Systems S.L.
            <br />
            Est. 2006
          </span>
        </div>

        {/* ── Columnas Misión / Visión ── */}
        <div className="grid md:grid-cols-2 relative mb-10">

          {/* Eje divisor */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none">
            <div
              className="absolute inset-y-0 left-0"
              style={{ borderLeft: "1px dashed rgba(14,95,163,0.35)" }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         bg-[#f6f8fb] dark:bg-[#07101d]
                         border border-[rgba(14,95,163,0.35)] px-2 py-[3px]"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "7px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(14,95,163,0.35)",
                whiteSpace: "nowrap",
              }}
            >
              CL / Eje
            </div>
          </div>

          {/* MISIÓN */}
          <div className="pr-0 md:pr-10 lg:pr-16">
            <ViewTag label="Vista 1 — Misión" number={1} />
            <span
              className="block text-[rgba(11,31,56,0.4)] pb-3 dark:text-[rgba(200,220,238,0.38)] mb-[3px]"
              style={{
                fontSize: "0.8rem",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Lo que hacemos
            </span>
            <span
              className="block text-defensya-blue dark:text-[#4fa8e0] leading-[0.88] mb-5"
              style={{
                fontSize: "clamp(3rem, 5vw, 4.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Misión
            </span>
            <div className="w-7 h-px bg-[#0e5fa3] dark:bg-[#4fa8e0] mb-5" />
            <p
              className="text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)] leading-[1.85]"
              style={{ fontSize: "0.95rem", fontWeight: 400, letterSpacing: "0.01em" }}
            >
              Diseñar y desarrollar{" "}
              <strong className="text-[#0b1f38] dark:text-[#ccdcee] font-semibold">
                soluciones tecnológicas avanzadas
              </strong>{" "}
              en visión, imagen, audio, datos e iluminación especializada —
              proporcionando productos innovadores y de{" "}
              <strong className="text-[#0b1f38] dark:text-[#ccdcee] font-semibold">
                alto rendimiento
              </strong>{" "}
              para sectores estratégicos donde la{" "}
              <strong className="text-[#0b1f38] dark:text-[#ccdcee] font-semibold">
                precisión y la seguridad
              </strong>{" "}
              son fundamentales.
            </p>
          </div>

          {/* VISIÓN */}
          <div className="pl-0 md:pl-10 lg:pl-16 mt-12 md:mt-0">
            <ViewTag label="Vista 2 — Visión" number={2} />
            <span
              className="block text-[rgba(11,31,56,0.4)] pb-3 dark:text-[rgba(200,220,238,0.38)] mb-[3px]"
              style={{
                fontSize: "0.8rem",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Hacia dónde vamos
            </span>
            <span
              className="block text-defensya-blue dark:text-[#4fa8e0] leading-[0.88] mb-5"
              style={{
                fontSize: "clamp(3rem, 5vw, 4.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Visión
            </span>
            <div className="w-7 h-px bg-[#0e5fa3] dark:bg-[#4fa8e0] mb-5" />
            <p
              className="text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)] leading-[1.85]"
              style={{ fontSize: "0.95rem", fontWeight: 400, letterSpacing: "0.01em" }}
            >
              <strong className="text-[#0b1f38] dark:text-[#ccdcee] font-semibold">
                Liderar la innovación
              </strong>{" "}
              en tecnologías de visión y control — convirtiéndonos en{" "}
              <strong className="text-[#0b1f38] dark:text-[#ccdcee] font-semibold">
                referente de confianza
              </strong>{" "}
              para defensa, aeronáutica e industria gracias a nuestra{" "}
              <strong className="text-[#0b1f38] dark:text-[#ccdcee] font-semibold">
                excelencia técnica
              </strong>{" "}
              y compromiso inquebrantable con la calidad.
            </p>
          </div>
        </div>

        {/* ── Footer con title block ── */}
        <div className="flex items-end justify-between border-t border-[rgba(14,95,163,0.35)] pt-4 gap-6 flex-wrap">
          <span
            className="text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)]"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "7.5px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Defensya Systems · Todos los derechos reservados
          </span>

          {/* Title block — esquina inferior derecha */}
          <div className="border-l border-t border-[rgba(14,95,163,0.35)] px-4 pt-2 pb-[7px] shrink-0">
            <span
              className="block text-[#0e5fa3] dark:text-[#4fa8e0] mb-[5px]"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "9.5px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Defensya Systems S.L.
            </span>
            <div className="flex gap-4 flex-wrap border-t border-[rgba(14,95,163,0.12)] pt-[5px]">
              {[
                { label: "Fundada", value: "2006" },
                { label: "Sede",    value: "España" },
                { label: "Cert.",   value: "ISO 9001" },
                { label: "Ámbito", value: "Defensa · Aero · Industria" },
              ].map(({ label, value }) => (
                <span
                  key={label}
                  className="text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)]"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "7.5px",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}:{" "}
                  <span className="text-[#0e5fa3] dark:text-[#4fa8e0]">{value}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ── Sub-componentes ── */

type CornerPos = "tl" | "tr" | "bl" | "br";

const cornerStyles: Record<CornerPos, string> = {
  tl: "top-[14px] left-[14px]",
  tr: "top-[14px] right-[14px] [transform:scaleX(-1)]",
  bl: "bottom-[14px] left-[14px] [transform:scaleY(-1)]",
  br: "bottom-[14px] right-[14px] [transform:scale(-1,-1)]",
};

const CornerMark = ({ position }: { position: CornerPos }) => (
  <svg
    className={`absolute w-4 h-4 pointer-events-none ${cornerStyles[position]}`}
    viewBox="0 0 16 16"
  >
    <path
      d="M0 16 L0 0 L16 0"
      fill="none"
      stroke="rgba(14,95,163,0.45)"
      strokeWidth="1"
    />
  </svg>
);

const ViewTag = ({ label, number }: { label: string; number: number }) => (
  <div
    className="flex items-center justify-between border-b border-[rgba(14,95,163,0.12)]
               pb-2 mb-6 text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)]"
    style={{
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: "8px",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
    }}
  >
    <span>{label}</span>
    <div
      className="flex items-center justify-center w-[17px] h-[17px]
                 border border-[rgba(14,95,163,0.35)]
                 text-[#0e5fa3] dark:text-[#4fa8e0] font-bold"
      style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "9px",
      }}
    >
      {number}
    </div>
  </div>
);

export default MisionVision;
