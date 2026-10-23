"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   CONTENIDO
   ───────────────────────────────────────────────────────────── */

const STATEMENT = "Diseñamos sistemas que hacen posibles las misiones aéreas más exigentes.";
const WORDS = STATEMENT.split(" ");

const SUMMARY =
  "Defensya es una empresa de ingeniería con sede en Madrid. Diseñamos, desarrollamos y fabricamos sistemas electrónicos, ópticos y mecánicos para aeronáutica y defensa, de principio a fin.";

const items = [
  {
    label: "Reconocimiento",
    value: "Airbus Top Award Supplier",
    icon: "/icons/award.png",
  },
  {
    label: "Estándar",
    value: "Certificación ISO 9001",
    icon: "/icons/iso.png",
  },
  {
    label: "Soberanía",
    value: "Tecnología 100% Europea",
    icon: "/icons/ue.png",
  },
  {
    label: "Alcance",
    value: "Presencia en Programas Internacionales",
    icon: "/icons/global.png",
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function IntroWelcome() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    // Enciende las palabras según el avance (0 = todo apagado, 1 = todo encendido)
    const paint = (p: number) => {
      const n = WORDS.length;
      wordRefs.current.forEach((w, i) => {
        if (!w) return;
        const v = Math.min(1, Math.max(0, p * (n + 2) - i));
        w.style.opacity = String(0.18 + 0.82 * v);
      });
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      paint(1);
      return;
    }

    let raf = 0;
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = title.getBoundingClientRect();
      const vh = window.innerHeight;
      // Empieza cuando la frase entra por abajo y termina antes de llegar arriba
      const p = (vh * 0.85 - r.top) / (vh * 0.5 + r.height * 0.5);
      paint(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
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

  return (
    <section aria-labelledby="intro-title" className="relative bg-defensya-navy pt-28 pb-12 lg:pt-40 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Frase principal */}
        <h2
          id="intro-title"
          ref={titleRef}
          className="max-w-5xl text-[clamp(2.2rem,5vw,4.6rem)] font-light leading-[1.05] tracking-tight text-white"
        >
          {WORDS.map((w, i) => (
            <span
              key={i}
              ref={(el) => {
                wordRefs.current[i] = el;
              }}
              className="transition-opacity duration-300 motion-reduce:transition-none"
              style={{ opacity: 0.18 }}
            >
              {w}
              {i < WORDS.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        {/* Explicación */}
        <p className="mt-10 max-w-xl text-[17px] leading-relaxed text-white/65 lg:mt-12">{SUMMARY}</p>

        {/* Datos que dan confianza */}
        <ul className="mt-20 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {items.map((it, i) => (
            <li
              key={it.value}
              className={`flex items-start gap-4 border-b border-white/10 py-6 sm:pr-6 lg:border-b-0 lg:py-8 lg:pl-6
                ${i === 0 ? "lg:pl-0" : "lg:border-l"}
                ${i % 2 === 1 ? "sm:border-l sm:pl-6" : ""}`}
            >
              <Image src={it.icon} alt="" width={28} height={28} className="mt-0.5 h-7 w-7 shrink-0 opacity-90 brightness-0 invert" />
              <div>
                <p className="text-[11px] tracking-[0.2em] text-white/40" style={MONO}>
                  {it.label}
                </p>
                <p className="mt-1.5 text-[15px] leading-snug text-white">{it.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}