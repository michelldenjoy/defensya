"use client";

import Image from "next/image";

const experienceItems = [
  {
    num: "01",
    title: "Sistemas de Visión",
    tag: "Optics / Display",
    desc: "Fabricación de monitores de vídeo, gestión de audio y datos con encriptación síncrona, sistemas de iluminación LED/Láser y cámaras de precisión.",
    image: "/images/sistemavision.png",
  },
  {
    num: "02",
    title: "Software y Electrónica",
    tag: "Embedded / SCADA",
    desc: "Desarrollo en aeronáutica, defensa, SCADAs, adquisición de señal y sistemas embebidos llevando el control de procesos industriales al siguiente nivel.",
    image: "/images/software.jpg",
  },
  {
    num: "03",
    title: "Tecnologías Emergentes",
    tag: "AI / Data",
    desc: "Expertos en redes neuronales, sistemas de aprendizaje, Inteligencia Artificial, seguridad y análisis de datos avanzado.",
    image: "/images/ai.jpg",
  },
];

const stats = [
  { value: "20", suffix: "+", label: "Patentes registradas" },
  { value: "15", suffix: "+", label: "Años de experiencia" },
  { value: "A330", suffix: "", label: "MRTT en operación" },
];

const Experiencia = () => {
  return (
    <section
      className="relative bg-[#060d18] text-white overflow-hidden py-16 px-6 lg:px-10"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-14 border-b border-[rgba(14,165,233,0.15)] pb-6 gap-6 flex-wrap">
        <div className="flex flex-col gap-2.5">
          {/* Title */}
          <h2
            className="leading-[0.9] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4rem)",
              textTransform: "uppercase",
            }}
          >
            <span className="font-bold">Nuestra </span>
            <em className="text-white/50" style={{ fontWeight: 200 }}>
              Experiencia
            </em>
          </h2>
        </div>

        {/* Doc ref */}
        <div
          className="text-right text-white/25 leading-loose shrink-0"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "8px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Aeronáutica · Defensa · Industria
          <br />
        </div>
      </div>

      {/* ── Cards grid ── */}
      <div
        className="grid md:grid-cols-3 gap-px"
        style={{ background: "rgba(14,165,233,0.1)" }}
      >
        {experienceItems.map((item) => (
          <ExperienceCard key={item.num} {...item} />
        ))}
      </div>

      {/* ── Footer: stats + ref ── */}
      <div className="items-center justify-between mt-8 pt-5 border-t border-[rgba(14,165,233,0.12)] flex-wrap gap-4">
        <span
          className="text-white/15"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "8px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          DFS-EXP-002 · Capacidades · Hoja 1/1
        </span>
      </div>
    </section>
  );
};

/* ── Card sub-componente ── */

interface CardProps {
  num: string;
  title: string;
  tag: string;
  desc: string;
  image: string;
}

const ExperienceCard = ({ num, title, tag, desc, image }: CardProps) => {
  return (
    <div
      className="group relative bg-[#060d18] overflow-hidden flex flex-col justify-end"
      style={{ height: "480px" }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)] opacity-55 group-hover:scale-[1.04] group-hover:opacity-35">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Overlay degradado */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 30%, rgba(6,13,24,0.95) 100%)",
        }}
      />

      {/* Número fantasma */}
      <span
        className="absolute top-5 right-5 font-black leading-none tracking-[-0.04em] text-white/[0.04] transition-colors duration-500 group-hover:text-[rgba(14,165,233,0.07)] select-none pointer-events-none"
        style={{ fontSize: "6rem" }}
      >
        {num}
      </span>

      {/* Tag pill */}
      <div className="absolute top-5 left-5">
        <span
          className="text-[rgba(14,165,233,0.7)] border border-[rgba(14,165,233,0.3)] px-2 py-[3px]"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          {tag}
        </span>
      </div>

      {/* Corner marks */}
      <CornerMarks />

      {/* Contenido */}
      <div className="relative z-10 p-7 flex flex-col">
        {/* Línea expansiva */}
        <div
          className="h-px bg-[#0ea5e9] mb-[14px] transition-[width] duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ width: "24px" }}
          ref={(el) => {
            if (!el) return;
            const card = el.closest(".group");
            if (!card) return;
            const expand = () => (el.style.width = "100%");
            const collapse = () => (el.style.width = "24px");
            card.addEventListener("mouseenter", expand);
            card.addEventListener("mouseleave", collapse);
          }}
        />

        <h3
          className="font-semibold uppercase leading-none tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-[#e0f2fe] mb-[14px]"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
        >
          {title}
        </h3>

        {/* Descripción — aparece en hover */}
        <p
          className="font-light leading-[1.65] tracking-[0.01em] text-[rgba(200,220,240,0)] overflow-hidden transition-[max-height,color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:text-[rgba(200,220,240,0.8)]"
          style={{
            fontSize: "1.3rem",
            maxHeight: 0,
          }}
          ref={(el) => {
            if (!el) return;
            const card = el.closest(".group");
            if (!card) return;
            const open = () => (el.style.maxHeight = "120px");
            const close = () => (el.style.maxHeight = "0px");
            card.addEventListener("mouseenter", open);
            card.addEventListener("mouseleave", close);
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

/* ── Corner marks ── */
const corners = [
  "top-[10px] left-[10px] border-t border-l",
  "top-[10px] right-[10px] border-t border-r",
  "bottom-[10px] left-[10px] border-b border-l",
  "bottom-[10px] right-[10px] border-b border-r",
] as const;

const CornerMarks = () => (
  <>
    {corners.map((cls, i) => (
      <span
        key={i}
        className={`absolute w-[14px] h-[14px] border-[rgba(14,165,233,0.2)] transition-[border-color,width,height] duration-400 group-hover:border-[rgba(14,165,233,0.6)] group-hover:w-[18px] group-hover:h-[18px] ${cls}`}
      />
    ))}
  </>
);

export default Experiencia;
