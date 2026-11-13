"use client";

import { useEffect, useRef, useState } from "react";

const FRASES = [
  { lead: "La I+D", rest: "no es un departamento." },
  { lead: "Es la razón de ser", rest: "de la compañía." },
  { lead: "Cada beneficio", rest: "se reinvierte en seguir inventando." },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const pad = (n: number) => String(n).padStart(2, "0");

export default function Manifiesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(isReduced);
    if (isReduced) return;

    const section = sectionRef.current;
    if (!section) return;
    let raf = 0;
    let last = -1;

    const update = () => {
      raf = 0;
      const r = section.getBoundingClientRect();
      const range = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / range));
      const i = Math.min(FRASES.length - 1, Math.floor(p * FRASES.length));
      if (i !== last) {
        last = i;
        setActive(i);
      }
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
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

  
  if (reduced) {
    return (
      <section aria-label="Manifiesto" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl space-y-16 px-6 py-24">
          {FRASES.map((f, i) => (
            <p key={i} className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-light leading-[1] tracking-tight">
              <span className="text-white">{f.lead}</span> <span className="text-white/45">{f.rest}</span>
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      aria-label="Manifiesto"
      className="relative border-t border-white/10"
      style={{ height: `${FRASES.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Manifiesto · {pad(active + 1)} / {pad(FRASES.length)}
          </p>

          {/* Frases apiladas */}
          <div className="mt-10 grid">
            {FRASES.map((f, i) => {
              const state = i === active ? "on" : i < active ? "past" : "next";
              return (
                <p
                  key={i}
                  aria-hidden={i !== active}
                  className={`[grid-area:1/1] max-w-5xl text-[clamp(2.4rem,6.5vw,6.5rem)] font-light leading-[0.98] tracking-tight transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    state === "on"
                      ? "translate-y-0 opacity-100 blur-0"
                      : state === "past"
                        ? "-translate-y-8 opacity-0 blur-sm"
                        : "translate-y-8 opacity-0 blur-sm"
                  }`}
                >
                  <span className="text-white">{f.lead}</span> <span className="text-white/45">{f.rest}</span>
                </p>
              );
            })}
          </div>

          {/* Avance */}
          <div className="mt-16 h-px w-full max-w-md overflow-hidden bg-white/15">
            <span ref={barRef} className="block h-full w-full origin-left bg-white/80" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}