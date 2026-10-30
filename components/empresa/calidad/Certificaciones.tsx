import Image from "next/image";
import { ClipButton } from "@/components/home/HeroSection";


const DATOS = [
  { label: "Norma", value: "ISO 9001:2015" },
  { label: "Alcance", value: "Ingeniería electrónica y telecomunicación" },
  { label: "Estado", value: "Certificado vigente", live: true },
  { label: "Auditoría", value: "Organismo externo independiente" },
];

const PILARES = [
  {
    num: "01",
    label: "Aseguramiento de la calidad",
    desc: "Estandarizamos cada proceso de ingeniería para garantizar resultados consistentes, predecibles y de máxima precisión.",
  },
  {
    num: "02",
    label: "Gestión y mitigación de riesgos",
    desc: "Evaluamos y controlamos minuciosamente cada variable del proyecto, un factor crítico en el desarrollo y diseño de sistemas aeroespaciales.",
  },
  {
    num: "03",
    label: "Cultura de mejora continua",
    desc: "Optimizamos de forma constante nuestras metodologías internas y herramientas de software para desarrollar soluciones cada vez más avanzadas, eficientes y precisas.",
  },
  {
    num: "04",
    label: "Cumplimiento normativo estricto",
    desc: "Aseguramos la alineación con las regulaciones internacionales vigentes y los requisitos técnicos específicos de nuestros clientes y socios industriales.",
  },
];

const PDF = "/doc/ISO9001.pdf";
const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const CUT = "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)";

/* ─────────────────────────────────────────────────────────────
   SELLO GIRATORIO
   ───────────────────────────────────────────────────────────── */

function Sello() {
  const R = 82;
  return (
    <div className="relative h-40 w-40 shrink-0 sm:h-48 sm:w-48">
      {/* Anillos fijos */}
      <svg aria-hidden viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      </svg>

      {/* Texto que gira */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[spin_40s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <path id="sello-path" d={`M100,100 m-${R},0 a${R},${R} 0 1,1 ${R * 2},0 a${R},${R} 0 1,1 -${R * 2},0`} />
        </defs>
        <text fill="rgba(255,255,255,0.65)" fontSize="9" style={MONO}>
          <textPath href="#sello-path" textLength={2 * Math.PI * R - 4} lengthAdjust="spacing">
            ISO 9001:2015 · GESTIÓN DE LA CALIDAD · CERTIFICADO VIGENTE ·
          </textPath>
        </text>
      </svg>

      {/* Logo */}
      <div className="absolute inset-[24%] overflow-hidden rounded-full bg-white">
        <Image src="/images/ISO9001.png" alt="Logotipo ISO 9001:2015" fill sizes="120px" className="object-contain p-3" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function Certificaciones() {
  return (
    <>
      <section
        id="certificacion"
        aria-labelledby="cert-title"
        className="relative scroll-mt-20 bg-[#0d2340] text-white"
      >
        {/* Línea de corte con Calidad y Sostenibilidad */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          {/* ── Cabecera ── */}
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end md:gap-12 lg:gap-20">
            <div>
              <p className="text-[12px] tracking-[0.2em] text-white/50" style={MONO}>
                Certificación
              </p>
              <h2 id="cert-title" className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.9] tracking-tight">
                Certificado
              </h2>
            </div>
            <p className="max-w-xl text-[17px] leading-relaxed text-white/65 md:pb-[0.4em]">
              Garantizamos la excelencia operativa a través del cumplimiento estricto de estándares internacionales de calidad y
              gestión, auditados y verificados por organismos independientes.
            </p>
          </div>

          {/* ── Ficha del certificado ── */}
          <div className="mt-16 grid border border-white/10 lg:mt-20 lg:grid-cols-2" style={{ clipPath: CUT }}>
            {/* Izquierda: el certificado */}
            <div className="flex flex-col p-6 sm:p-10 lg:p-14">
              <Sello />

              <p className="mt-10 text-[12px] tracking-[0.2em] text-white/50" style={MONO}>
                Sistema de Gestión de Calidad
              </p>
              <h3 className="mt-3 text-[clamp(2.4rem,4.5vw,3.75rem)] font-light leading-none tracking-tight">
                ISO 9001<span className="text-white/40">:2015</span>
              </h3>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/60">
                Certificación que avala nuestra capacidad para proporcionar productos y servicios que satisfacen los requisitos
                del cliente y la normativa legal aplicable, con foco en la mejora continua del sistema de gestión.
              </p>

              <dl className="mt-10 border-t border-white/10">
                {DATOS.map((d) => (
                  <div key={d.label} className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4">
                    <dt className="text-[11px] tracking-[0.15em] text-white/45" style={MONO}>
                      {d.label}
                    </dt>
                    <dd className="flex items-center gap-2.5 text-right text-[15px] text-white">
                      {d.live && (
                        <span aria-hidden className="relative flex h-2 w-2">
                          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                          <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                      )}
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <ClipButton href={PDF} variant="primary" target="_blank" rel="noopener noreferrer">
                  Ver certificado
                </ClipButton>
                <a
                  href={PDF}
                  download
                  className="group inline-flex items-center gap-2.5 text-[12px] tracking-[0.2em] text-white/65 transition-colors hover:text-white"
                  style={MONO}
                >
                  <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-y-0.5">
                    <path d="M7 2v8M3.5 6.5L7 10l3.5-3.5M2.5 12.5h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  DESCARGAR PDF
                </a>
              </div>
            </div>

            {/* Derecha: lo que garantiza */}
            <div className="flex flex-col border-t border-white/10 bg-defensya-navy/60 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <blockquote>
                <p className="text-[clamp(1.3rem,2.1vw,1.75rem)] font-light leading-snug text-white/90">
                  “Trabajamos bajo los más estrictos estándares de la industria aeroespacial y de defensa para asegurar la
                  integridad de cada proyecto.”
                </p>
              </blockquote>

              <p className="mt-14 text-[12px] tracking-[0.2em] text-white/50" style={MONO}>
                Pilares del sistema
              </p>
              <ol className="mt-4 border-t border-white/10">
                {PILARES.map((p) => (
                  <li key={p.num} className="grid grid-cols-[2.5rem_1fr] border-b border-white/10 py-6">
                    <span className="pt-1 text-[11px] text-white/40" style={MONO}>
                      {p.num}
                    </span>
                    <div>
                      <h4 className="text-[clamp(1.1rem,1.6vw,1.3rem)] font-light leading-tight tracking-tight text-white">{p.label}</h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/55">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}