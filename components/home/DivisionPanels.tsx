"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   CONTENIDO
   ───────────────────────────────────────────────────────────── */

type Division = {
  code: string;
  title: string;
  image: string;
  role: string;
  desc: string;
};

const divisions: Division[] = [
  {
    code: "DFS-DEF",
    title: "Defensa",
    image: "/images/defensa2.jpg",
    role: "Proyectos complejos del sector defensa",
    desc: "Contamos con un equipo de ingenieros altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector de defensa.",
  },
  {
    code: "DFS-AER",
    title: "Aeronáutica",
    image: "/images/aeronautic.jpg",
    role: "Sistemas electrónicos y optoelectrónicos",
    desc: "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, optoelectrónicos y mecánicos destinados al sector aeronáutico, integrando tecnología avanzada.",
  },
  {
    code: "DFS-ELE",
    title: "Electrónica",
    image: "/images/electronica.webp",
    role: "Hardware crítico y sistemas embebidos",
    desc: "Expertos en diseño de sistemas embebidos, ingeniería de hardware y desarrollo de software crítico. Creamos soluciones robustas para el tratamiento de señal y control de sistemas.",
  },
  {
    code: "DFS-IMG",
    title: "Imagen y Vídeo",
    image: "/images/imagevideo.png",
    role: "Captación y visualización en tiempo real",
    desc: "Desarrollamos tecnología integrada avanzada en captación y visualización, incluyendo cámaras especializadas, monitores de alta definición y sistemas de gestión de vídeo en tiempo real. Todos con las calificaciones necesarias para ambientes exigidos por defensa.",
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const CUT = "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)";

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function DivisionsPanels() {
  const [open, setOpen] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  
  const handleClick = (i: number) =>
    setOpen((prev) => (prev === i && !canHover ? null : i));

  return (
    <section
      aria-labelledby="divisiones-title"
      className="relative bg-defensya-navy py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="divisiones-title"
          className="max-w-2xl text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight text-white"
        >
          Cuatro áreas <br />
          <em className="not-italic font-light text-white/45">
            una misma exigencia
          </em>
        </h2>

        {/* Paneles */}
        <div
          className="mt-14 flex flex-col gap-2 lg:mt-20 lg:h-[560px] lg:flex-row"
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") setOpen(null);
          }}
        >
          {divisions.map((d, i) => {
            const on = open === i;
            const dimmed = open !== null && !on;
            return (
              <button
                key={d.code}
                type="button"
                aria-expanded={on}
                aria-controls={`div-desc-${d.code}`}
                onClick={() => handleClick(i)}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") setOpen(i);
                }}
                onFocus={() => canHover && setOpen(i)}
                className={`group relative min-w-0 overflow-hidden text-left outline-none
                  transition-[height,flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  motion-reduce:transition-none lg:h-auto lg:basis-0
                  focus-visible:ring-1 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-defensya-navy
                  ${on ? "h-[460px]" : "h-[150px]"}`}
                style={{ flexGrow: on ? 3 : 1, clipPath: CUT }}
              >
                {/* Foto */}
                <Image
                  src={d.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-cover transition-[opacity,transform] duration-700 motion-reduce:transition-none ${
                    on ? "scale-100 opacity-70" : "scale-105 opacity-25"
                  }`}
                />
                {/* Tinte navy para que todo lea igual */}
                <div className="absolute inset-0 bg-gradient-to-t from-defensya-navy via-defensya-navy/75 to-defensya-navy/35" />
                <div className="absolute inset-0 border border-white/10" />

                {/* Línea superior que se completa al abrir */}
                <span
                  className={`absolute left-0 top-0 h-px w-full origin-left bg-white/70 transition-transform duration-700 motion-reduce:transition-none ${
                    on ? "scale-x-100" : "scale-x-0"
                  }`}
                />

                {/* Contenido */}
                <div className="relative flex h-full flex-col justify-between p-6 lg:p-8">
                  <span
                    className={`text-[12px] tracking-[0.2em] transition-colors duration-500 ${
                      on ? "text-white/80" : "text-white/40"
                    }`}
                    style={MONO}
                  >
                    {d.code}
                  </span>

                  <div>
                    <h3
                      className={`text-[clamp(1.5rem,2.2vw,2.25rem)] font-semibold uppercase leading-[0.95] tracking-tight transition-colors duration-500 ${
                        dimmed ? "text-white/55" : "text-white"
                      }`}
                    >
                      {d.title}
                    </h3>
                    <p
                      className={`mt-3 text-[14px] leading-snug transition-colors duration-500 ${dimmed ? "text-white/35" : "text-white/65"}`}
                    >
                      {d.role}
                    </p>

                    {/* Descripción: aparece al abrir */}
                    <div
                      id={`div-desc-${d.code}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-700 motion-reduce:transition-none ${
                        on
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <span className="mt-6 block h-px w-12 bg-white/25" />
                        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Paso natural hacia el caso del A330 MRTT */}
        <div className="mt-16 flex items-center gap-5 lg:mt-20">
          <span className="h-px w-16 bg-white/25" />
          <p className="text-[15px] text-white/55">
            Así se aplica en un caso real: el A330&nbsp;MRTT.
          </p>
        </div>
      </div>
    </section>
  );
}
