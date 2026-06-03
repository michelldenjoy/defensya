import React from "react";
import Image from "next/image";
import MisionVision from "./MisionVision";
import TimelineSection from "@/components/home/TimelineSection";




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
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <MisionVision />

      {/* ─────────── EXPERIENCIA ─────────── */}
      <section className="relative pt-10 pb-22 px-6 lg:px-16  bg-[#060d18] dark:bg-[#070e1a] overflow-hidden">
        {/* Ghost grid */}
        <div className="tech-grid  absolute inset-0 opacity-60 pointer-events-none" />

        <div className="w-full mx-auto relative">
          {/* Section header */}
          <div className="flex items-center justify-between mb-14 border-b border-[rgba(14,165,233,0.15)] pb-6 gap-6 flex-wrap">
        <div className="flex mt-8 flex-col gap-2.5">
          {/* Title */}
          <h2
            className="leading-[0.9] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4rem)",
              textTransform: "uppercase",
            }}
          >
            <span className="font-bold text-gray-100">Nuestra </span>
            <em className="text-white/50" style={{ fontWeight: 200 }}>
              Experiencia
            </em>
          </h2>
        </div>

        {/* Doc ref */}
        <div
          className="text-right  text-white/25 leading-loose shrink-0"
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

          {/* Cards grid texture*/}
          <div className="grid md:grid-cols-3 gap-4">
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
                <div className="card-img-wrap absolute inset-0 group-hover:scale-105 transition-transform duration-700">
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
                  <span className="text-[10px] font-mono tracking-[0.3em] text-blue-300 border border-blue-300/40 px-2 py-1 uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute  inset-0 p-7 flex flex-col justify-end group-hover:justify-center transition-all duration-500">
                  {/* Number label */}
                  {/* <span className="text-[11px] text-center font-mono tracking-[0.3em] text-blue-300 mb-3">
                    {item.num} <span className="text-gray-300">{item.tag}</span>
                  </span> */}

                  {/* Title */}
                  <h3
                    className="text-white mb-0 text-center translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
                    style={{
                      fontFamily:
                        "var(--font-display,  'Barlow Condensed', sans-serif)",
                      fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* linea divisora debajo del titulo */}
                  <div className="my-4 h-px relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#0ea5e9]/30 w-35 group-hover:w-full"
                      style={{
                        transition:
                          "width 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s",
                      }}
                    />
                    <div className="h-full w-full bg-white/10" />
                  </div>

                  {/* Desc */}
                  <p
                    className=" text-gray-400 leading-relaxed
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
    group-hover:text-base group-hover:text-white
    group-hover:text-center"
    style={{
      fontSize: "1.5rem",
      maxHeight: 0,
    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Timeline /> */}

      {/* ─────────── LIDERAZGO AVIACIÓN ─────────── */}
      {/* <section className="relative py-25 px-6 lg:px-16 bg-[#060d18] overflow-hidden">
        <div className="tech-grid absolute inset-0 pointer-events-none" />

        <div
          className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div>
            <h2
              className="
      font-bold uppercase mb-4 text-white tracking-[-0.02em]
      text-[1rem]
      sm:text-[1.5rem]
      md:text-[2rem]
      lg:text-[2.3rem]
      xl:text-[2.8rem]
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

                
                {[
                  "top-0 left-0 border-t-2 border-l-2",
                  "top-0 right-0 border-t-2 border-r-2",
                  "bottom-0 left-0 border-b-2 border-l-2",
                  "bottom-0 right-0 border-b-2 border-r-2",
                ].map((c, i) => (
                  <span
                    key={i}
                    className={`absolute w-5 h-5 border-defensya-steel ${c}`}
                  />
                ))}

                
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="scanline-bar" />
                </div>
              </div>
            </div>

            
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
                <span className="text-white font-semibold">A330 MRTT</span>.
              </p>
              <p className="text-base text-gray-400 leading-relaxed pl-5">
                También supervisamos trabajos realizados por otras empresas de
                ingeniería, auditando procesos y resultados con los más altos
                estándares de calidad aeronáutica.
              </p>

             
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
                      <span className="text-[10px] font-mono tracking-[0.25em] text-defensya-steel uppercase">
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
      </section> */}
<TimelineSection />
      
    </main>
  );
};

export default QuienesSomos;
