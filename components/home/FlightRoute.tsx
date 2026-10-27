"use client";

import { useEffect, useRef, useState } from "react";
import { ClipButton } from "./HeroHome";

/* ─────────────────────────────────────────────────────────────
   CONTENIDO — revisa que las rutas (href) coincidan con tus páginas
   ───────────────────────────────────────────────────────────── */

type Stop = {
  code: string;
  name: string;
  headline: string;
  href: string;
  cta: string;
};

const STOPS: Stop[] = [
  {
    code: "DFS-PRD",
    name: "Proyectos",
    headline: "La seguridad del futuro se construye con precisión.",
    href: "/productos",
    cta: "Ver productos",
  },
  {
    code: "DFS-INN",
    name: "Innovación",
    headline: "Ingeniería para entornos de alta seguridad.",
    href: "/innovacion",
    cta: "Ver innovación",
  },
  {
    code: "DFS-CMP",
    name: "Compromiso",
    headline: "Compromiso en entornos críticos.",
    href: "/empresa/calidad-certificacion",
    cta: "Ver compromiso",
  },
  {
    code: "DFS-TAL",
    name: "Careers",
    headline: "El futuro también necesita tu talento.",
    href: "/empresa/careers",
    cta: "Únete al equipo",
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function FlightRoute() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<SVGRectElement>(null);
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const stopRefs = useRef<(HTMLLIElement | null)[]>([]);
  const ysRef = useRef<number[]>([]);
  const [geo, setGeo] = useState({ w: 0, h: 0, d: "" });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Dibuja la ruta: la línea "vuela" hasta donde ha llegado el usuario */
    const update = () => {
      const r = wrap.getBoundingClientRect();
      const head = reduced ? r.height : Math.max(0, Math.min(r.height, window.innerHeight * 0.6 - r.top));
      clipRef.current?.setAttribute("height", String(head));
      stopRefs.current.forEach((el, i) => {
        if (el) el.dataset.on = String(head >= (ysRef.current[i] ?? Infinity) - 2);
      });
    };

    /* Calcula la curva que une los puntos de paso */
    const measure = () => {
      const r = wrap.getBoundingClientRect();
      const pts = markerRefs.current
        .filter((m): m is HTMLSpanElement => m !== null)
        .map((m) => {
          const b = m.getBoundingClientRect();
          return { x: b.left + b.width / 2 - r.left, y: b.top + b.height / 2 - r.top };
        });
      if (!pts.length) return;

      const desktop = window.innerWidth >= 1024;
      const start = { x: desktop ? r.width / 2 : pts[0].x, y: 0 };
      const end = { x: desktop ? r.width / 2 : pts[pts.length - 1].x, y: r.height };
      const all = [start, ...pts, end];

      let d = `M ${all[0].x} ${all[0].y}`;
      for (let i = 1; i < all.length; i++) {
        const a = all[i - 1];
        const b = all[i];
        const my = (a.y + b.y) / 2;
        d += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
      }

      ysRef.current = pts.map((p) => p.y);
      setGeo({ w: r.width, h: r.height, d });
      requestAnimationFrame(update);
    };

    let raf = 0;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(() => {
          ticking = false;
          update();
        });
      }
    };

    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section aria-labelledby="route-title" className="relative bg-defensya-navy py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="route-title"
          className="max-w-2xl text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight text-white"
        >
          Elige tu próximo destino
        </h2>

        <div ref={wrapRef} className="relative mt-20 pb-28 lg:mt-28 lg:pb-36">
          {/* La ruta */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox={`0 0 ${geo.w || 1} ${geo.h || 1}`}
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="flight-route-flown">
                <rect ref={clipRef} x={-40} y={0} width={(geo.w || 1) + 80} />
              </clipPath>
            </defs>
            {/* Ruta prevista: discontinua */}
            <path d={geo.d} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth={1} strokeDasharray="2 7" />
            {/* Ruta recorrida: continua */}
            <path d={geo.d} fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth={1.25} clipPath="url(#flight-route-flown)" />
          </svg>

          {/* Puntos de paso */}
          <ol className="relative flex flex-col gap-28 lg:gap-40">
            {STOPS.map((s, i) => (
              <li
                key={s.code}
                ref={(el) => {
                  stopRefs.current[i] = el;
                }}
                data-on="false"
                className={`group relative pl-10 lg:w-1/2 lg:pl-14 ${i % 2 === 1 ? "lg:ml-[50%]" : ""}`}
              >
                {/* Marca en la ruta */}
                <span
                  ref={(el) => {
                    markerRefs.current[i] = el;
                  }}
                  aria-hidden
                  className="absolute left-0 top-3 flex h-4 w-4 -translate-x-1/2 items-center justify-center"
                >
                  <span className="absolute -inset-2 rounded-full border border-white/0 transition-colors duration-700 group-data-[on=true]:border-white/25 motion-reduce:transition-none" />
                  <span className="h-2.5 w-2.5 rotate-45 border border-white/40 bg-defensya-navy transition-colors duration-500 group-data-[on=true]:border-white group-data-[on=true]:bg-white motion-reduce:transition-none" />
                </span>

                {/* Contenido: se ilumina cuando la ruta llega */}
                <div className="opacity-50 transition-opacity duration-700 group-data-[on=true]:opacity-100 motion-reduce:transition-none">
                  <p className="text-[12px] tracking-[0.2em] text-white/50" style={MONO}>
                    {s.code}
                  </p>
                  <p className="mt-3 text-[clamp(2.6rem,5.2vw,4.75rem)] font-light leading-[0.95] tracking-tight text-white">
                    {s.name}
                  </p>
                  <span className="mt-6 block h-px w-12 bg-white/25" />
                  <h3 className="mt-6 max-w-md text-[clamp(1.15rem,1.7vw,1.5rem)] font-semibold uppercase leading-tight tracking-tight text-white/90">
                    {s.headline}
                  </h3>
                  <div className="mt-8">
                    <ClipButton href={s.href} variant="primary">
                      {s.cta}
                    </ClipButton>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}