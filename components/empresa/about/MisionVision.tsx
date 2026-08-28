const MisionVision = () => {
  return (
    <section className="relative overflow-hidden bg-[#f6f8fb] dark:bg-[#07101d]">
      
      <div className="absolute inset-[14px] border border-[rgba(14,95,163,0.35)] pointer-events-none" />

      {/* ── Esquinas ── */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <CornerMark key={pos} position={pos} />
      ))}

      {/* ── Contenido ── */}
      <div className="relative max-w-7xl mx-auto px-10  pt-12 pb-14">
        {/* ── Columnas Misión / Visión ── */}
        <div className="grid md:grid-cols-2 relative mb-10">
          
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
                fontSize: "8px",
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
          <div className="pr-0 md:pr-10 lg:pr-16 mt-10">
            <span
              className="text-slate-400 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase"

            >
              nuestra
            </span>
            <span
              className="block text-defensya-blue dark:text-defensya-steel leading-[1.1] mb-5"
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                fontFamily: "'Share Tech Mono', monospace",
              }}
            >
              Misión
            </span>
            <div className="w-7 h-px bg-[#0e5fa3] dark:bg-[#4fa8e0] mb-5" />
            <p
              className="text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)] leading-[1.35]"
              style={{
                fontSize: "1.20rem",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
          Somos una empresa de base tecnológica que rinde culto a la innovación y al arte de inventar. La I+D no es un departamento — es la razón de ser de la compañía. Cada beneficio generado se reinvierte en seguir inventando.
            </p>
          </div>

          {/* VISIÓN */}
          <div className="pl-0 md:pl-10 lg:pl-16 mt-10 ">
            
            <span
              className="text-slate-400 text-[12px] lg:text-[14px] tracking-[0.3em] uppercase"

            >
              nuestra
            </span>
            <span
              className="block text-defensya-blue dark:text-defensya-steel leading-[1.1] mb-5"
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                
              
              }}
            >
               Visión
            </span>
            <div className="w-7 h-px bg-[#0e5fa3] dark:bg-[#4fa8e0] mb-5" />
            <p
              className="text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)] leading-[1.35]"
              style={{
                fontSize: "1.20rem",
                fontWeight: 400,
                letterSpacing: "0.01em",
                fontFamily: "'Share Tech Mono', monospace",
              }}
            >
              Ser un referente internacional en el desarrollo de tecnologías de visión y control para los sectores aeroespacial y de defensa, liderando la innovación en sistemas críticos que garantizan la seguridad y precisión de las misiones más exigentes.
            </p>
          </div>
        </div>

        {/* ── Footer con title block ── */}
        <div className="flex items-end justify-between border-t border-[rgba(14,95,163,0.35)] pt-4 gap-6 flex-wrap">
          <span
            className="text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)]"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "8.2px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Defensya Systems · Todos los derechos reservados
          </span>

          {/* Title block — esquina inferior derecha */}
          {/* <div className="border-l border-t border-[rgba(14,95,163,0.35)] px-4 pt-2 pb-[7px] shrink-0">
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
                { label: "Sede", value: "España" },
                { label: "Cert.", value: "ISO 9001" },
                { label: "Ámbito", value: "Defensa · Aero · Industria" },
              ].map(({ label, value }) => (
                <span
                  key={label}
                  className="text-[rgba(11,31,56,0.4)] dark:text-[rgba(200,220,238,0.38)]"
                  style={{
                    fontSize: "7.5px",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}:{" "}
                  <span className="text-[#0e5fa3] dark:text-[#4fa8e0]">
                    {value}
                  </span>
                </span>
              ))}
            </div>
          </div> */}
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
        fontSize: "9px",
      }}
    >
      {number}
    </div>
  </div>
);

export default MisionVision;
