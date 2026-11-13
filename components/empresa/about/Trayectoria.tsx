"use client";

import { useEffect, useRef, useState } from "react";



type Hito = {
  year: string;
  tag: string;
  title: string;
  desc: string;
  stat?: { from: string; to: string; label: string };
};

const HITOS: Hito[] = [
  {
    year: "2006",
    tag: "Fundación",
    title: "El origen de una visión",
    desc: "Nace Defensya Ingeniería de Sistemas en Madrid. Establecimos nuestro propósito: resolver los desafíos de visualización y monitorización más críticos donde las soluciones convencionales no alcanzan los estándares de misión.",
  },
  {
    year: "2011",
    tag: "Eficiencia operativa",
    title: "Optimización FAL C295",
    desc: "Desarrollamos nuestro Detector de Deflexión láser para Airbus. Logramos un hito en la línea de montaje: reducir los tiempos de testeo de superficies móviles con precisión micrométrica.",
    stat: { from: "10 h", to: "15 min", label: "Tiempo de testeo de superficies móviles" },
  },
  {
    year: "2015",
    tag: "Consolidación en el A330 MRTT",
    title: "Espejos dicroicos 3D",
    desc: "Diseñamos el sistema de espejos dicroicos 3D, eliminando el ghosting visual y garantizando la seguridad en operaciones de reabastecimiento en vuelo.",
  },
  {
    year: "2019",
    tag: "Innovación RFID",
    title: "Nacimiento de Boom Tag®",
    desc: "Revolucionamos la trazabilidad con tecnología RFID sin batería. Creamos una base de datos digital integrada en cada componente de la pértiga de reabastecimiento, resistiendo las condiciones ambientales más extremas de la atmósfera.",
  },
  {
    year: "2024",
    tag: "Nueva generación",
    title: "A3R® y optrónica avanzada",
    desc: "Lanzamos nuestra plataforma integral de visión y designación láser. Con capacidades de Auto-Tracking y cumplimiento NATO STANAG 3733, lideramos el camino hacia la autonomía total en misiones de repostaje y vigilancia.",
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const EDGE = "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))";


function TarjetaHito({ h, on }: { h: Hito; on: boolean }) {
  return (
    <article
      className={`w-[82vw] shrink-0 border-t pt-8 transition-[opacity,border-color] duration-700 sm:w-[60vw] lg:w-[38vw] ${
        on ? "border-white/70 opacity-100" : "border-white/15 opacity-45"
      }`}
    >
      <p className="text-[clamp(3.5rem,7vw,6.5rem)] font-light leading-none tracking-tight">{h.year}</p>
      <p className="mt-5 text-[12px] tracking-[0.2em] text-white/50" style={MONO}>
        {h.tag}
      </p>
      <h3 className="mt-3 text-[clamp(1.4rem,2.2vw,1.9rem)] font-light leading-tight tracking-tight">{h.title}</h3>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60 lg:text-[16px]">{h.desc}</p>
      {h.stat && (
        <div className="mt-6">
        <p className="text-[11px] tracking-[0.15em] text-white/45" style={MONO}>
          {h.stat.label}
        </p>
        <div className="mt-2 flex items-baseline gap-4">
          <span className="text-[clamp(1.5rem,2.4vw,2rem)] font-light text-white/40 line-through decoration-white/30">
            {h.stat.from}
          </span>
          <svg aria-hidden width="28" height="10" viewBox="0 0 28 10" fill="none" className="text-white/50">
            <path d="M0 5h25M21 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="text-[clamp(1.5rem,2.4vw,2rem)] font-light text-white">{h.stat.to}</span>
        </div>
        </div>
      )}
    </article>
  );
}

export default function Trayectoria() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const n = HITOS.length;

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(isReduced);
    if (isReduced) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let raf = 0;
    let last = -1;
    let maxShift = 0;

    const measure = () => {
      maxShift = Math.max(0, track.scrollWidth - window.innerWidth);
    };
    const update = () => {
      raf = 0;
      const r = section.getBoundingClientRect();
      const range = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / range));
      track.style.transform = `translate3d(${-p * maxShift}px, 0, 0)`;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`;
      const i = Math.round(p * (n - 1));
      if (i !== last) {
        last = i;
        setActive(i);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [n]);

  /* Saltar a un año desde el eje */
  const goTo = (k: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY;
    const range = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (k / (n - 1)) * range, behavior: "smooth" });
  };

  const header = (
    <>
      <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
        Trayectoria
      </p>
      <h2 id="trayectoria-title" className="mt-5 text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight">
        Desde 2006
      </h2>
    </>
  );

  /* lista vertical */
  if (reduced) {
    return (
      <section aria-labelledby="trayectoria-title" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          {header}
          <div className="mt-14 space-y-14">
            {HITOS.map((h) => (
              <TarjetaHito key={h.year} h={h} on />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="trayectoria-title"
      className="relative border-t border-white/10"
      style={{ height: `${n * 75 + 25}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          {header}

          {/* Eje de años*/}
          <div className="relative mt-10 lg:mt-14">
            <div className="absolute left-0 right-0 top-[7px] h-px bg-white/15">
              <span ref={fillRef} className="block h-full w-full origin-left bg-white/80" style={{ transform: "scaleX(0)" }} />
            </div>
            <ol className="relative flex justify-between">
              {HITOS.map((h, i) => {
                const on = i === active;
                return (
                  <li key={h.year}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={on ? "step" : undefined}
                      aria-label={`Ir a ${h.year}`}
                      className="group flex flex-col items-center gap-3 outline-none focus-visible:underline"
                    >
                      <span
                        className={`h-3.5 w-3.5 rotate-45 border transition-colors duration-500 ${
                          i <= active ? "border-white bg-white" : "border-white/40 bg-defensya-navy group-hover:border-white"
                        }`}
                      />
                      <span className={`text-[12px] transition-colors ${on ? "text-white" : "text-white/40 group-hover:text-white/75"}`} style={MONO}>
                        {h.year}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Hitos en horizontal */}
        <div
          ref={trackRef}
          className="mt-12 flex gap-10 will-change-transform lg:mt-16 lg:gap-16"
          style={{ paddingLeft: EDGE, paddingRight: EDGE }}
        >
          {HITOS.map((h, i) => (
            <TarjetaHito key={h.year} h={h} on={i === active} />
          ))}
        </div>
      </div>
    </section>
  );
}