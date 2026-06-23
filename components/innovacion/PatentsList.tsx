"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */
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
    title:
      "Method and System for Enhanced Vision in Aerial Refueling Operations",
    url: "https://www.patentsencyclopedia.com/app/20110147528",
    id: "US2011/0147528",
  },
  {
    title:
      "Method and System for Enhanced Vision in Aerial Refuelling Operations",
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

/* ─────────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────────── */
function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────────────────────────────────────────────
   PATENT ROW
───────────────────────────────────────────────────────────────── */
function PatentRow({
  patent,
  index,
  visible,
}: {
  patent: (typeof PATENTS_DATA)[0];
  index: number;
  visible: boolean;
}) {
  return (
    <Link
      href={patent.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 sm:gap-6
        py-4 sm:py-5
        border-b border-gray-200 dark:border-white/[0.07]
        overflow-hidden
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-defensya-blue"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-1rem)",
        transition: `opacity 0.5s ease ${index * 55}ms, transform 0.5s ease ${index * 55}ms`,
      }}
    >
      {/* Hover sweep referencia */}
      <div
        className="absolute inset-0 -left-2 -right-2
          bg-gray-100 dark:bg-white/[0.025]
          origin-left scale-x-0 group-hover:scale-x-100
          transition-transform duration-300 ease-out"
      />

      {/* Index */}
      <span
        className="relative shrink-0 w-7 text-right text-[11px] font-mono
          text-defensya-blue tracking-widest select-none"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Patent ID  */}
      <span
        className="relative hidden sm:block shrink-0 text-[11px] font-mono
          tracking-[0.18em] text-gray-300 dark:text-white/20 uppercase
          group-hover:text-defensya-blue/50 transition-colors duration-300 w-32"
      >
        {patent.id}
      </span>

      {/* Title */}
      <p
        className="relative flex-1 text-xs sm:text-sm font-medium leading-snug
          text-gray-500 dark:text-gray-400 uppercase tracking-wide
          group-hover:text-gray-900 dark:group-hover:text-white
          transition-colors duration-200"
      >
        {patent.title}
      </p>

      {/* Status badge */}
      <span
        className="relative hidden md:flex items-center gap-1.5 shrink-0
          text-[9px] font-mono tracking-[0.15em] text-gray-300 dark:text-white/20
          group-hover:text-defensya-blue/60
          transition-colors duration-300 uppercase"
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-white/20
            group-hover:bg-defensya-blue
            transition-colors duration-300"
        />
        Registrada
      </span>

      {/* Arrow */}
      <span
        className="relative shrink-0 text-defensya-blue
          opacity-0 group-hover:opacity-100
          -translate-x-1 group-hover:translate-x-0
          transition-all duration-200"
      >
        <svg
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M7 7h10v10"
          />
        </svg>
      </span>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────── */
export default function PatentsList() {
  const { ref: listRef, visible: listVisible } = useVisible(0.05);
  const { ref: quoteRef, visible: quoteVisible } = useVisible(0.3);

  return (
    <section
      id="patents"
      className="py-28 px-6 lg:px-16 bg-white dark:bg-defensya-navy
        border-t border-gray-200 dark:border-white/[0.07] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div
          className="grid lg:grid-cols-[1fr_42%] gap-12 lg:gap-20 items-end
          border-b border-gray-200 dark:border-white/[0.07] pb-16 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-slate-400" />
              <span className="text-[12px] lg:text-[14px] font-mono tracking-[0.30em] text-slate-400 uppercase ">
                I + D + i
              </span>
            </div>
            <h2
              className="text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[0.92]
                tracking-tight text-gray-900 dark:text-white uppercase"
            >
              Nuestras
              <br />
              <span className="text-defensya-blue">Patentes</span>
            </h2>
          </div>

          <div>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-[1.85] mb-5">
              En Defensya demostramos un especial interés por la investigación
              innovadora y por el desarrollo de los frutos de esta actividad,
              convirtiéndolos en productos de alto contenido tecnológico.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-[1.85]">
              A lo largo de más de veinticinco años de actividad hemos
              registrado{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                más de veinte patentes
              </span>
              , algunas de las cuales ya han sido cedidas a clientes como{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                EADS (Airbus)
              </span>
              .
            </p>
          </div>
        </div>

        {/* ── List header ────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-1 pb-3 border-b border-gray-200 dark:border-white/[0.07]">
          <span className="w-7 text-right text-[10px] font-mono tracking-widest text-slate-500 dark:text-white/20 select-none">
            №
          </span>
          <span className="hidden sm:block w-32 text-[10px] font-mono tracking-[0.18em] text-slate-500 dark:text-white/20 uppercase">
            Referencia
          </span>
          <span className="flex-1 text-[10px] font-mono tracking-[0.18em] text-slate-500 dark:text-white/20 uppercase">
            Nombre
          </span>
          <span className="hidden md:block text-[9px] font-mono tracking-[0.18em] text-slate-500 dark:text-white/20 uppercase">
            Estado
          </span>
        </div>

        {/* ── Patent rows ────────────────────────────────────────── */}
        <div ref={listRef} className="mb-16">
          {PATENTS_DATA.map((patent, i) => (
            <PatentRow
              key={i}
              patent={patent}
              index={i}
              visible={listVisible}
            />
          ))}
        </div>

        {/* ── Quote ──────────────────────────────────────────────── */}
        <div className="px-5 sm:px-8 lg:px-16 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div
              ref={quoteRef}
              className="relative grid sm:grid-cols-[2px_1fr] gap-6 sm:gap-8 p-6 sm:p-10 lg:p-12
                       bg-[#060d18] text-white overflow-hidden group"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                opacity: quoteVisible ? 1 : 0,
                transform: quoteVisible
                  ? "translateY(0)"
                  : "translateY(1.5rem)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              {/* Bisel */}
              <div
                className="absolute top-0 right-0 bg-defensya-blue/60"
                style={{
                  width: 24,
                  height: 24,
                  clipPath: "polygon(100% 0,0 0,100% 100%)",
                }}
              />

              {/* Barra lateral */}
              <div className="hidden sm:block bg-defensya-blue/40" />

              <div className="relative">
                <p
                  className="text-defensya-blue mb-4 sm:mb-5"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Última invención
                </p>
                <p
                  className="font-light italic leading-[1.75] text-white/75 max-w-2xl"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
                >
                  &ldquo;Nuestra última invención posibilita la{" "}
                  <strong className="not-italic font-bold text-white">
                    Automatización
                  </strong>{" "}
                  luego de una Semiautomatización supervisada de tareas de
                  Repostaje aéreo con Boom.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-defensya-blue/40" />
                  <span
                    className="text-white/30"
                    style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    Defensya Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}