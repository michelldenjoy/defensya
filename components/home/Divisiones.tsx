"use client";

import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Division {
  num: string;
  tag: string;
  title: string;
  image: string;
  desc: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const divisions: Division[] = [
  {
    num: "01",
    tag: "SEC-01",
    title: "Defensa",
    image: "/images/defensa2.jpg",
    desc: "Contamos con un equipo de ingenieros altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector de defensa. Más de dos décadas avalan nuestra capacidad.",
  },
  {
    num: "02",
    tag: "SEC-02",
    title: "Aeronáutica",
    image: "/images/aeronautica.jpg",
    desc: "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, ópticos y mecánicos destinados al sector aeronáutico, integrando tecnología avanzada en colaboración con empresas de reconocido prestigio.",
  },
  {
    num: "03",
    tag: "SEC-04",
    title: "Electrónica",
    image: "/images/electronica.webp",
    desc: "Expertos en diseño de sistemas embebidos, ingeniería de hardware y desarrollo de software crítico. Creamos soluciones robustas para el tratamiento de señal y control de sistemas en entornos exigentes.",
  },
  {
    num: "04",
    tag: "SEC-05",
    title: "Imagen y Vídeo",
    image: "/images/imagevideo.png",
    desc: "Desarrollamos tecnología integrada avanzada en captación y visualización, incluyendo cámaras especializadas, monitores de alta definición y sistemas de gestión de vídeo en tiempo real con latencia mínima.",
  },
];

// ─── Corner Brackets ──────────────────────────────────────────────────────────

function Corners() {
  return (
    <>
      <span className="pointer-events-none absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-300/50 transition-colors duration-300 group-hover:border-white" />
      <span className="pointer-events-none absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-300/50 transition-colors duration-300 group-hover:border-white" />
    </>
  );
}

// ─── Single Card gap ──────────────────────────────────────────────────────────────

function DivisionCard({ item }: { item: Division }) {
  return (
    <div
      className="experience-card group relative overflow-hidden bg-black cursor-pointer w-full"
      style={{
        height: "clamp(340px, 38vw, 460px)",
        clipPath:
          "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
      }}
    >
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
        style={{
          backgroundImage: "url('/textura5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Base gradient */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background:
            "linear-gradient(175deg, rgba(6,13,24,0.6) 60%, rgba(6,13,24,0.92) 100%)",
        }}
      />

      {/* Hover tint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "rgba(14,165,233,0.08)" }}
      />

      {/* Corners */}
      <div className="relative group w-full h-full">
        <Corners />
      </div>

      {/* Ghost number */}
      <span
        className="pointer-events-none absolute top-2 right-4 font-mono font-black select-none
                   text-white/[0.04] group-hover:text-blue-300/30 transition-colors duration-500"
        style={{ fontSize: "clamp(4rem, 6vw, 6rem)", lineHeight: 1 }}
      >
        {item.num}
      </span>

      {/* Tag pill */}
      <div className="absolute top-5 left-5 z-10">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.3em] text-blue-300/50 border border-blue-300/50 px-2 py-[3px] uppercase">
          <span className="w-1 h-1 rounded-full bg-blue-300/50" />
          {item.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end group-hover:justify-center transition-all duration-500 z-10">
        <h3
          className="text-white text-center translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
          style={{
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </h3>

        {/* Expanding divider */}
        <div className="my-4 h-px relative overflow-hidden">
          <div className="h-full w-full bg-white/10" />
          <div
            className="absolute left-0 top-0 h-full bg-blue-300/50 w-8 group-hover:w-full"
            style={{
              transition: "width 0.5s cubic-bezier(0.22,1,0.36,1) 0.08s",
            }}
          />
        </div>

        <p
          className="
            text-sm text-gray-400 leading-relaxed text-center
            opacity-0 translate-y-4
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white
            transition-all duration-500 delay-75
          "
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Divisiones() {
  return (
    <section className="relative py-20 px-6 bg-defensya-navy overflow-hidden dark:bg-black/40">
      <div className="tech-grid absolute inset-0 opacity-60 pointer-events-none" />

      <div className="max-w relative">
        {/* ── Header ── */}
        <div className="my-8 pb-8 text-center">
          <p className="text-[12px] font-mono tracking-[0.30em] text-slate-400 uppercase mb-3">
            Áreas Tecnológicas
          </p>
          <h2
            className="text-[2.3rem]
      sm:text-[2.5rem]
      md:text-[3rem]
      lg:text-[3.5rem]
      xl:text-[4rem] font-bold uppercase leading-none
                tracking-tight text-white"
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            }}
          >
            Sectores que manejamos
          </h2>
        </div>

        {/* ── Grid — 1 col mobile / 2 col tablet / 4 col desktop ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {divisions.map((item) => (
            <DivisionCard key={item.num} item={item} />
          ))}
        </div>

        {/* ── Bottom meta ── */}
        <div className="mt-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/5" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            Defensya · Ingeniería de Defensa
          </span>
          <div className="h-px w-12 bg-blue-300/50" />
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
