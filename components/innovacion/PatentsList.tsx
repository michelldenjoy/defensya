"use client";

import { useMemo, useState } from "react";


const PATENTS_DATA = [
  {
    title: "Refueling Boom with Backup Raising Cable",
    url: "https://www.patentsencyclopedia.com/app/20090127394",
    id: "US2009/0127394",
  },
  {
    title: "System for Refuelling Operations",
    url: "https://www.patentsencyclopedia.com/app/20090302160",
    id: "US2009/0302160",
  },
  {
    title: "Indication System and Method for Refuelling Operations",
    url: "https://www.patentsencyclopedia.com/app/20100108816",
    id: "US2010/0108816",
  },
  {
    title: "Illuminating System for In-Flight Refuelling Operations",
    url: "https://www.patentsencyclopedia.com/app/20100237249",
    id: "US2010/0237249",
  },
  {
    title: "Method and System for Enhanced Vision in Aerial Refueling Operations",
    url: "https://www.patentsencyclopedia.com/app/20110147528",
    id: "US2011/0147528",
  },
  {
    title: "Method and System for Enhanced Vision in Aerial Refuelling Operations",
    url: "https://www.patentsencyclopedia.com/app/20110147529",
    id: "US2011/0147529",
  },
  {
    title: "System for Providing Night Vision at Low Visibility Conditions",
    url: "https://www.patentsencyclopedia.com/app/20110261188",
    id: "US2011/0261188",
  },
  {
    title:
      "Monitoring System for Remotely Supervising and Controlling Critical Operations and Method for Detecting Image Freezing",
    url: "https://www.patentsencyclopedia.com/app/20140104421",
    id: "US2014/0104421",
  },
  {
    title: "System for Night Vision from Distant Observation Places",
    url: "https://www.patentsencyclopedia.com/app/20110253894",
    id: "US2011/0253894",
  },
  {
    title: "System for Night Vision of Selected Objects",
    url: "https://www.patentsencyclopedia.com/app/20110266457",
    id: "US2011/0266457",
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };

/* El año va dentro del número: US2009/… → 2009 */
const yearOf = (id: string) => Number(id.slice(2, 6));

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function PatentsList() {
  const [hover, setHover] = useState<string | null>(null);

  // Orden cronológico 
  const patents = useMemo(
    () => [...PATENTS_DATA].sort((a, b) => a.id.localeCompare(b.id)).map((p) => ({ ...p, year: yearOf(p.id) })),
    []
  );
  const first = patents[0].year;
  const last = patents[patents.length - 1].year;
  const years = Array.from({ length: last - first + 1 }, (_, i) => first + i);

  return (
    <section
      id="patentes"
      aria-labelledby="patents-title"
      className="relative scroll-mt-20 bg-[#0d2340] text-white"
    >
      {/* Línea de corte con el bloque de Haptix */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[12px] tracking-[0.2em] text-white/50" style={MONO}>
              Propiedad intelectual
            </p>
            <h2
              id="patents-title"
              className="mt-5 text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.9] tracking-tight"
            >
              Patentes
            </h2>
          </div>

          {/* Cifras */}
          <dl className="flex gap-10 sm:gap-14">
            <div className="flex flex-col-reverse">
              <dt className="mt-3 text-[11px] tracking-[0.15em] text-white/50" style={MONO}>
                Patentes publicadas
              </dt>
              <dd className="text-[clamp(2.4rem,4.5vw,3.75rem)] font-light leading-none">{patents.length}</dd>
            </div>
          </dl>
        </div>

        {/* ── Línea temporal (tablet y escritorio) ── */}
        <div aria-hidden className="mt-20 hidden sm:block">
          <div className="grid" style={{ gridTemplateColumns: `repeat(${years.length}, minmax(0, 1fr))` }}>
            {years.map((y) => {
              const ofYear = patents.filter((p) => p.year === y);
              return (
                <div key={y} className="flex h-28 flex-col-reverse items-start gap-2 pb-4">
                  {ofYear.map((p) => {
                    const on = hover === p.id;
                    return (
                      <span
                        key={p.id}
                        className={`ml-[-4px] block h-2 w-2 rotate-45 border transition-all duration-300 ${
                          on
                            ? "scale-150 border-white bg-white"
                            : hover
                              ? "border-white/20"
                              : "border-white/60"
                        }`}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div
            className="grid border-t border-white/25"
            style={{ gridTemplateColumns: `repeat(${years.length}, minmax(0, 1fr))` }}
          >
            {years.map((y) => {
              const active = hover !== null && patents.find((p) => p.id === hover)?.year === y;
              return (
                <div key={y} className="relative pt-4">
                  <span className="absolute left-0 top-0 h-2 w-px bg-white/40" />
                  <span
                    className={`text-[12px] tracking-[0.1em] transition-colors duration-300 ${
                      active ? "text-white" : "text-white/45"
                    }`}
                    style={MONO}
                  >
                    {y}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Registro de patentes ── */}
        <ol className="mt-16 border-t border-white/15 lg:mt-20">
          {patents.map((p, i) => (
            <li key={p.id}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(p.id)}
                onBlur={() => setHover(null)}
                className="group relative grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-2 border-b border-white/10 py-6
                           sm:grid-cols-[3rem_4.5rem_1fr_auto_1.25rem] sm:gap-x-6 lg:py-7
                           outline-none focus-visible:bg-white/[0.04]"
              >
                {/* Barrido al pasar el ratón */}
                <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-white/[0.035] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none" />

                <span className="relative text-[12px] text-white/35" style={MONO}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative hidden text-[13px] text-white/55 sm:block" style={MONO}>
                  {p.year}
                </span>
                <span className="relative text-[16px] leading-snug text-white/80 transition-colors duration-300 group-hover:text-white sm:text-[18px]">
                  {p.title}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </span>
                <span
                  className="relative col-start-2 whitespace-nowrap text-[12.5px] tracking-[0.04em] text-white/50 transition-colors duration-300 group-hover:text-white/80 sm:col-start-auto"
                  style={MONO}
                >
                  {p.id}
                </span>
                <svg
                  aria-hidden
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="relative hidden self-center text-white/40 transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white sm:block"
                >
                  <path d="M4 10L10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}