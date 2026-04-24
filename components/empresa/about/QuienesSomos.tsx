import React from "react";
import Image from "next/image";

const experienceItems = [
  {
    num: "01",
    title: "Sistemas de Visión",
    tag: "OPTICS / DISPLAY",
    desc: "Fabricación de monitores de vídeo, gestión de audio y datos con encriptación síncrona, sistemas de iluminación LED/Láser y cámaras de precisión.",
    image: "/images/sistemavision.png",
  },
  {
    num: "02",
    title: "Software y Electrónica",
    tag: "EMBEDDED / SCADA",
    desc: "Desarrollo en aeronáutica, defensa, SCADAs, adquisición de señal y sistemas embebidos llevando el control de procesos industriales al siguiente nivel.",
    image: "/images/software.jpg",
  },
  {
    num: "03",
    title: "Tecnologías Emergentes",
    tag: "AI / DATA",
    desc: "Expertos en redes neuronales, sistemas de aprendizaje, Inteligencia Artificial, seguridad y análisis de datos avanzado.",
    image: "/images/ai.jpg",
  },
];

const stats = [
  { value: "20+", label: "Patentes registradas" },
  { value: "15+", label: "Años de experiencia" },
  { value: "A330", label: "MRTT en operación" },
];

const QuienesSomos = () => {
  return (
    <main
      className="w-full bg-white dark:bg-[#060d18] text-gray-900 dark:text-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >

<style>{`
        :root {
          --blue: #0ea5e9;
          --blue-dim: #0369a1;
          --navy: #060d18;
          --grid-col: rgba(14,165,233,0.06);
        }

        @keyframes scanline {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(1200%); opacity: 0; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.85); opacity: 0.8; }
          70%  { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hline {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .tech-grid {
          background-image:
            linear-gradient(var(--grid-col) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-col) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .scanline-bar {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue), transparent);
          animation: scanline 6s linear infinite;
          pointer-events: none;
        }

        .hero-num {
          font-family: 'Courier New', monospace;
          font-size: clamp(9rem, 20vw, 18rem);
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -0.05em;
          background: linear-gradient(180deg, rgba(14,165,233,0.18) 0%, transparent 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          pointer-events: none;
        }

        .card-img-wrap {
          transition: transform 700ms cubic-bezier(0.22,1,0.36,1);
        }
        .experience-card:hover .card-img-wrap {
          transform: scale(1.08);
        }

        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: absolute;
          width: 18px; height: 18px;
          border-color: rgba(14,165,233,0.5);
          border-style: solid;
        }
        .corner-tl { top: 0; left: 0;  border-width: 2px 0 0 2px; }
        .corner-tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 0; left: 0;  border-width: 0 0 2px 2px; }
        .corner-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

        .hud-line {
          animation: hline 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .ticker-track {
          display: flex;
          gap: 0;
          animation: ticker 22s linear infinite;
          width: max-content;
        }

        .stat-value {
          font-family: 'Barlow Condensed', 'Courier New', monospace;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--blue);
          line-height: 1;
        }

        .radar-ring {
          border: 1px solid rgba(14,165,233,0.15);
          border-radius: 50%;
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .radar-sweep-line {
          position: absolute;
          top: 50%; left: 50%;
          width: 50%; height: 1px;
          transform-origin: left center;
          background: linear-gradient(90deg, rgba(14,165,233,0.6), transparent);
          animation: radar-sweep 4s linear infinite;
        }

        .reveal-up {
          animation: reveal-up 0.9s cubic-bezier(0.22,1,0.36,1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
      {/* ─────────── TICKER BAND ─────────── */}
      <div className="w-full overflow-hidden bg-[#0ea5e9]/10 border-b border-[#0ea5e9]/20 py-2">
        <div className="ticker-track text-[11px] font-mono tracking-[0.25em] text-defensya-navy dark:text-white uppercase">
          {[...Array(2)].map((_, ri) => (
            <React.Fragment key={ri}>
              {[
                " DEFENSYA",
                "◆ VISIÓN AVANZADA",
                "◆ AERONÁUTICA",
                "◆ INTELIGENCIA ARTIFICIAL",
                "◆ I+D+i",
                "◆ INGENIERÍA DE PRECISIÓN",
                "◆ SISTEMAS EMBEBIDOS",
                "◆ A330 MRTT",
              ].map((t, i) => (
                <span key={i} className="px-8 whitespace-nowrap">
                  {t}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─────────── HERO ─────────── */}
      <section className="px-6 lg:px-16 pt-20 pb-24 border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue uppercase">
              Quienes Somos
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_38%] gap-16 items-center">
            <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-display font-bold leading-[0.95] tracking-tight uppercase">
              Tecnología
              <br />
              Avance
              <br />
              <span className="text-defensya-blue"> Innovación</span>
            </h1>

            <div className="lg:pb-2">
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                Defensya es una empresa de base tecnológica orientada a la
                innovación y el diseño en el desarrollo de soluciones avanzadas.
                La Investigación y el Desarrollo (I+D) constituyen pilares
                fundamentales de nuestra actividad.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Especializados en sistemas de visión, diseñamos y fabricamos
                soluciones completas: monitores de vídeo, sistemas de gestión de
                imagen, audio y datos, sistemas de iluminación LED y láser de
                alta potencia, y cámaras de precisión para entornos operativos
                exigentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── EXPERIENCIA ─────────── */}
      <section className="relative py-32 px-6 lg:px-16 bg-[#a8a9aa20] dark:bg-[#070e1a] overflow-hidden">
        {/* Ghost grid */}
        <div className="tech-grid absolute inset-0 opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Section header */}
          <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
            <div>
              <h2
                className="
      font-bold uppercase leading-[0.9] tracking-[-0.02em]
      text-[2.5rem]
      md:text-[3.5rem]
      lg:text-[4rem]
      xl:text-[4.5rem]
    "
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Nuestra Experiencia
              </h2>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-gray-400">
              <span
                className="w-2 h-2 rounded-full bg-[#0ea5e9]"
                style={{ animation: "blink 1.4s step-end infinite" }}
              />
              3 ÁREAS CLAVE ◆ DEFENSYA.
            </div>
          </div>

          {/* Cards grid texture*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experienceItems.map((item, i) => (
              <div
                key={item.num}
                className="experience-card group relative overflow-hidden bg-black cursor-pointer"
                style={{
                  height: "500px",
                  clipPath:
                    "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                  animationDelay: `${i * 0.12}s`,
                }}
              >
                {/* Image */}
                <div className="card-img-wrap absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
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

                {/* Gradient overlay */}
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

                {/* Corner brackets */}
                <div className="corner-tl" />
                <div className="corner-tr" />
                <div className="corner-bl" />
                <div className="corner-br" />

                {/* Ghost number */}
                <span
                  className="absolute top-4 right-5 font-mono font-black text-white/5 group-hover:text-[#0ea5e9]/10 transition-colors duration-500"
                  style={{ fontSize: "7rem", lineHeight: 1 }}
                >
                  {item.num}
                </span>

                {/* Tag pill */}
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-[#0ea5e9] border border-[#0ea5e9]/40 px-2 py-1 uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-end group-hover:justify-center transition-all duration-500">
                  {/* Number label */}
                  <span className="text-[11px] font-mono tracking-[0.3em] text-[#0ea5e9] mb-3">
                    {item.num} <span className="text-gray-300">{item.tag}</span>
                  </span>

                  {/* Title */}
                  <h3
                    className="text-white mb-0 translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
                    style={{
                      fontFamily:
                        "var(--font-display, 'Barlow Condensed', sans-serif)",
                      fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="my-4 h-px relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#0ea5e9]/30 w-0 group-hover:w-full"
                      style={{
                        transition:
                          "width 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s",
                      }}
                    />
                    <div className="h-full w-full bg-white/10" />
                  </div>

                  {/* Desc */}
                  <p
                    className="text-sm text-gray-400 leading-relaxed
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    group-hover:text-base group-hover:text-white
    group-hover:text-center"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── AVIACIÓN ─────────── */}
      <section className="relative py-32 px-6 lg:px-16 bg-[#060d18] overflow-hidden">
        {/* Tech grid */}
        <div className="tech-grid absolute inset-0 pointer-events-none" />

        {/* Radar decoration */}
        <div
          className="absolute -right-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px]  pointer-events-none opacity-90"
          aria-hidden="true"
        >
          {[280, 220, 160, 100].map((s) => (
            <div
              key={s}
              className="radar-ring"
              style={{
                width: s,
                height: s,
                marginLeft: -s / 2,
                marginTop: -s / 2,
              }}
            />
          ))}
          <div className="radar-sweep-line" />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <div>
            <h2
              className="
      font-bold uppercase mb-4 text-white tracking-[-0.02em]
      text-[1.5rem]
      sm:text-[2rem]
      md:text-[2.6rem]
      lg:text-[3.2rem]
      xl:text-[3.5rem]
    "
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              liderazgo en Aviación
            </h2>
          </div>

          <div className="grid lg:grid-cols-[45%_1fr] gap-12 items-start">
            {/* Image with HUD overlay */}
            <div className="relative group">
              <div
                className="relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                  aspectRatio: "16/10",
                }}
              >
                <Image
                  src="/images/defense3.webp"
                  alt="Tanquero A330 MRTT"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-300 from-black/10 to-transparent pointer-events-none" />

                {/* HUD corner marks */}
                {[
                  "top-0 left-0 border-t-2 border-l-2",
                  "top-0 right-0 border-t-2 border-r-2",
                  "bottom-0 left-0 border-b-2 border-l-2",
                  "bottom-0 right-0 border-b-2 border-r-2",
                ].map((c, i) => (
                  <span
                    key={i}
                    className={`absolute w-5 h-5 border-[#0ea5e9]/60 ${c}`}
                  />
                ))}

                {/* Scan line on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="scanline-bar" />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-8">
              <p className="text-base text-gray-400 leading-relaxed border-l-2 border-[#0ea5e9]/30 pl-5">
                Nuestro equipo acumula más de{" "}
                <a
                  href="/innovacion#patents"
                  className="text-white font-semibold"
                >
                  veinte patentes registradas
                </a>
                , algunas de las cuales se encuentran actualmente en operación
                en aeronaves como el{" "}
                <span className="text-[#0ea5e9] font-semibold">A330 MRTT</span>.
              </p>
              <p className="text-base text-gray-400 leading-relaxed pl-5">
                También supervisamos trabajos realizados por otras empresas de
                ingeniería, auditando procesos y resultados con los más altos
                estándares de calidad aeronáutica.
              </p>

              {/* Capability list */}
              <div className="mt-2 space-y-0 border border-[#0ea5e9]/10">
                {[
                  ["PLATAFORMAS", "A330 MRTT, Aeronaves militares"],
                  ["CERTIFICACIÓN", "Normativa aeronáutica internacional"],
                  ["AUDITORÍA", "Supervisión de ingeniería externa"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex gap-0 border-b border-[#0ea5e9]/10 last:border-b-0 group/row hover:bg-[#0ea5e9]/5 transition-colors duration-200"
                  >
                    <div className="w-36 shrink-0 px-4 py-3.5 border-r border-[#0ea5e9]/10">
                      <span className="text-[10px] font-mono tracking-[0.25em] text-[#0ea5e9] uppercase">
                        {k}
                      </span>
                    </div>
                    <div className="px-4 py-3.5">
                      <span className="text-sm text-gray-300 font-mono">
                        {v}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuienesSomos;
