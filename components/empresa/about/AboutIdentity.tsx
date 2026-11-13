"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const LogoPlate3D = dynamic(() => import("./LogoPlate3D"), { ssr: false });

const MONO = { fontFamily: "'Share Tech Mono', monospace" };

const smooth = (a: number, b: number, v: number) => {
  const t = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function Titular() {
  return (
    <>
      <h1 className="text-[clamp(2.6rem,6.5vw,6.25rem)] font-semibold uppercase leading-[0.9] tracking-tight">
        Rendimos culto
        <br />
        al arte de <span className="font-light text-white/45">inventar</span>
      </h1>
      <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-white/65">
        Somos una empresa de base tecnológica con sede en Madrid. Diseñamos, desarrollamos y fabricamos sistemas de visión y
        control para aeronáutica y defensa.
      </p>
    </>
  );
}

export default function AboutIdentity() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const disperseRef = useRef(0);
  const [formed, setFormed] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Función estable: el logo no se reinicia cuando cambia "formed"
  const handleFormed = useCallback(() => setFormed(true), []);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(isReduced);
    if (isReduced) return;

    const section = sectionRef.current;
    if (!section) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = section.getBoundingClientRect();
      const range = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / range));

      disperseRef.current = smooth(0.02, 0.6, p);

      const o = smooth(0.3, 0.75, p);
      if (textRef.current) {
        textRef.current.style.opacity = String(o);
        textRef.current.style.transform = `translateY(${(1 - o) * 28}px)`;
      }
      if (hintRef.current) hintRef.current.style.opacity = String(1 - smooth(0, 0.12, p));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Sin animaciones: logo arriba y titular debajo */
  if (reduced) {
    return (
      <section className="relative bg-defensya-navy pt-24 text-white">
        <div className="h-[55vh]">
          <LogoPlate3D onFormed={handleFormed} />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-20 text-center">
          <Titular />
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-defensya-navy text-white">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* El logo en partículas */}
        <div className="absolute inset-0">
          <LogoPlate3D onFormed={handleFormed} disperseRef={disperseRef} />
        </div>

        {/* Etiqueta de sección */}
        <p
          className={`absolute left-1/2 top-28 -translate-x-1/2 text-[12px] tracking-[0.2em] text-white/50 transition-opacity duration-1000 lg:top-32 ${
            formed ? "opacity-100" : "opacity-0"
          }`}
          style={MONO}
        >
          Quiénes somos
        </p>

        {/* Titular: emerge cuando el logo se disuelve */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div ref={textRef} className="max-w-5xl text-center" style={{ opacity: 0, transform: "translateY(28px)" }}>
            <Titular />
          </div>
        </div>

        {/* Invitación a bajar */}
        <div
          ref={hintRef}
          aria-hidden
          className={`absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 transition-opacity duration-1000 ${
            formed ? "visible" : "invisible opacity-0"
          }`}
        >
          <span className="text-[11px] tracking-[0.2em] text-white/45" style={MONO}>
            Desliza
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>

        {/* Fundido hacia la sección siguiente */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-defensya-navy to-transparent" />
      </div>
    </section>
  );
}