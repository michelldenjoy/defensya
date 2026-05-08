import Link from "next/link";
import Image from "next/image";

/*
  ─── Section rhythm ───────────────────────────────────────────────
  §1 Hero          → LIGHT  bg-white         / dark:bg-defensya-navy
  §2 Desafío       → LIGHT  bg-gray-50       / dark:bg-defensya-navy
  §3 Automatiz.    → DARK   bg-defensya-navy
  §4 Ventajas      → LIGHT  bg-white         / dark:bg-defensya-navy
  §5 Tecnologías   → DARK   bg-defensya-navy
  ─────────────────────────────────────────────────────────────────*/

// ─── Primitives ───────────────────────────────────────────────────────────────

function Corners({
  size = 16,
  onDark = false,
}: {
  size?: number;
  onDark?: boolean;
}) {
  const muted = onDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  return (
    <>
      <span
        className="pointer-events-none absolute z-20"
        style={{
          top: 12,
          left: 12,
          width: size,
          height: size,
          borderTop: "1.5px solid #0ea5e9",
          borderLeft: "1.5px solid #0ea5e9",
        }}
      />

      <span
        className="pointer-events-none absolute z-20"
        style={{
          bottom: 12,
          left: 12,
          width: size,
          height: size,
          borderBottom: `1px solid ${muted}`,
          borderLeft: `1px solid ${muted}`,
        }}
      />
      <span
        className="pointer-events-none absolute z-20"
        style={{
          bottom: 12,
          right: 12,
          width: size,
          height: size,
          borderBottom: "1.5px solid rgba(14,165,233,0.45)",
          borderRight: "1.5px solid rgba(14,165,233,0.45)",
        }}
      />
    </>
  );
}

function SectionHeader({
  title,
  accent,
  onDark = false,
}: {
  title: string;
  accent?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mb-14">
      <h2
        className={`font-bold uppercase leading-[0.9] tracking-tight
          ${onDark ? "text-white" : "text-gray-900 dark:text-white"}`}
        style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
        }}
      >
        {title}
        {accent && (
          <>
            <br />
            <span className="text-defensya-blue">{accent}</span>
          </>
        )}
      </h2>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Refueling() {
  return (
    <main
      className="w-full text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

      {/* ══════════════════════════════════════════════════════════
          §1 HERO — LIGHT bg-white / dark:bg-defensya-navy
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative px-6 lg:px-16 pt-32 pb-28 overflow-hidden
                          bg-white dark:bg-defensya-navy
                          border-b border-gray-100 dark:border-white/[0.07]"
      >
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r
                       from-transparent via-defensya-blue to-transparent opacity-20"
        />

        <div className="max-w-7xl mx-auto relative">
          {/* Eyebrow */}
          {/* <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-defensya-blue/50" />
            <span className="font-mono text-[11px] tracking-[0.35em] text-defensya-blue uppercase">
              Innovación · Reabastecimiento Air-to-Air
            </span>
          </div> */}

          <div className="grid lg:grid-cols-[1fr_40%] gap-12 lg:gap-20 items-center">
            <h1
              className="font-bold uppercase leading-[0.88] tracking-[-0.025em]
                         text-gray-900 dark:text-white"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
              }}
            >
              Ingeniería para
              <br />
              entornos de
              <br />
              <span className="text-defensya-blue">alta seguridad</span>
            </h1>

            <div className="flex flex-col gap-8">
              <p
                className="text-md text-gray-500 dark:text-gray-400 leading-relaxed
                           border-l-2 border-defensya-blue/30 pl-5"
              >
                En Defensya, la innovación es el motor que impulsa nuestro
                compromiso en la industria aeroespacial. Desarrollamos
                soluciones avanzadas que transforman la defensa y la seguridad,
                desde sistemas de reabastecimiento en vuelo hasta patentes
                innovadoras.
              </p>
            </div>
          </div>

          {/* Meta strip */}
          <div className="mt-16 flex flex-wrap items-center gap-6">
            <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.06] hidden sm:block" />
            {[
              { label: "Tecnologías activas", value: "04" },
              { label: "Área", value: "AAR / A2AR" },
              { label: "División", value: "R&D" },
            ].map(({ label, value }, i) => (
              <div key={label} className="flex items-center gap-6">
                {i > 0 && (
                  <div className="w-px h-8 bg-gray-200 dark:bg-white/[0.08]" />
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-gray-400 uppercase">
                    {label}
                  </span>
                  <span className="font-mono text-[13px] font-bold text-gray-900 dark:text-white">
                    {value}
                  </span>
                </div>
              </div>
            ))}
            <div className="h-px w-12 bg-defensya-blue/30" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §2 DESAFÍO / VISIÓN — LIGHT bg-gray-50 / dark:bg-defensya-navy
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-slate-100 dark:bg-defensya-navy
                          border-b border-gray-100 dark:border-white/[0.07]"
      >
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <SectionHeader title="El reto y" accent="nuestra visión" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* LEFT — TEXT */}
            <div className="grid gap-4 h-full">
              {/* Desafío */}
              <div
                className="relative overflow-hidden p-8 lg:p-10 group
               bg-white dark:bg-white/[0.02]
               border border-gray-100 dark:border-white/[0.06]
               transition-colors duration-300"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                }}
              >
                <Corners size={16} onDark={false} />

                {/* <span
                  className="pointer-events-none absolute top-2 right-4 font-mono font-black
                 select-none text-black/[0.04] dark:text-white/[0.04]
                 group-hover:text-defensya-blue/[0.07]
                 transition-colors duration-500"
                  style={{ fontSize: "5rem", lineHeight: 1 }}
                >
                  01
                </span> */}

                <span
                  className="inline-flex mb-6 font-mono text-[10px] tracking-[0.3em]
                 text-defensya-blue border border-defensya-blue/30
                 px-2 py-[3px] uppercase"
                >
                  01
                </span>

                <h3
                  className="text-2xl lg:text-3xl font-bold uppercase leading-none mb-4
                 text-gray-900 dark:text-white
                 group-hover:text-defensya-blue transition-colors duration-300"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                  }}
                >
                  El desafío
                </h3>

                <div className="h-px w-8 bg-defensya-blue/40 group-hover:w-full transition-all duration-500 mb-5" />

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Tradicionalmente, el reabastecimiento aire-aire ha sido una
                  operación manual que requiere una elevada precisión por parte
                  del operador. Aunque esta capacidad actúa como un importante
                  multiplicador de fuerza en las operaciones aéreas, su
                  rendimiento sigue condicionado por los límites del factor
                  humano.
                </p>
              </div>

              {/* Visión */}
              <div
                className="relative overflow-hidden p-8 lg:p-10 group
               bg-white dark:bg-white/[0.02]
               border border-gray-100 dark:border-white/[0.06]
               transition-colors duration-300"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                }}
              >
                <Corners size={16} onDark={false} />

                {/* <span
                  className="pointer-events-none absolute top-2 right-4 font-mono font-black
                 select-none text-black/[0.04] dark:text-white/[0.04]
                 group-hover:text-defensya-blue/[0.07]
                 transition-colors duration-500"
                  style={{ fontSize: "5rem", lineHeight: 1 }}
                >
                  02
                </span> */}

                <span
                  className="inline-flex mb-6 font-mono text-[10px] tracking-[0.3em]
                 text-defensya-blue border border-defensya-blue/30
                 px-2 py-[3px] uppercase"
                >
                  02
                </span>

                <h3
                  className="text-2xl lg:text-3xl font-bold uppercase leading-none mb-4
                 text-gray-900 dark:text-white
                 group-hover:text-defensya-blue transition-colors duration-300"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                  }}
                >
                  Nuestra visión
                </h3>

                <div className="h-px w-8 bg-defensya-blue/40 group-hover:w-full transition-all duration-500 mb-5" />

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Defensya impulsa la evolución hacia sistemas de
                  reabastecimiento automatizados capaces de mejorar la
                  precisión, reducir riesgos operativos y mantener el
                  rendimiento incluso en condiciones ambientales adversas.
                </p>
              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div
              className="relative min-h-[420px] lg:min-h-full overflow-hidden
             border border-gray-100 dark:border-white/[0.06]"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
              }}
            >
              <Image
                src="/images/refueling2.jpeg"
                alt="Air-to-Air Refueling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              <Corners size={18} onDark />

              {/* label */}
              <div className="absolute bottom-6 left-6 z-10">
                <span
                  className="font-mono text-[10px] tracking-[0.3em]
                 text-white/80 uppercase"
                >
                  Aerial Refueling Systems
                </span>
              </div>
            </div>
          </div>
          {/* VENTAJAS OPERATIVAS */}
          <div>
            <h3
              className="text-2xl lg:text-4xl font-bold uppercase leading-none my-12
                 text-gray-900 dark:text-white"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Ventajas operativas
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Mayor precisión en el contacto con la aeronave receptora.",
                "Operaciones de reabastecimiento más rápidas y eficientes.",
                "Reducción del desgaste en los sistemas mecánicos del botalón.",
                "Mayor seguridad en condiciones meteorológicas adversas.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden p-7 group
                 bg-gray-50 dark:bg-white/[0.02]
                 border border-gray-100 dark:border-white/[0.06]
                 hover:bg-white dark:hover:bg-white/[0.04]
                 transition-colors duration-300"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                  }}
                >
                  {/* Top accent */}
                  <span
                    className="absolute top-0 inset-x-0 h-[2px] bg-defensya-blue
                      scale-x-0 group-hover:scale-x-100
                      transition-transform duration-400 origin-left"
                  />

                  {/* Ghost number */}
                  <span
                    className="pointer-events-none absolute top-1 right-3 font-mono font-black
                      select-none text-black/[0.04] dark:text-white/[0.04]
                      group-hover:text-defensya-blue/[0.08] transition-colors duration-500"
                    style={{ fontSize: "4rem", lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="inline-flex mb-5 font-mono text-[10px] tracking-[0.3em]
                      text-defensya-blue border border-defensya-blue/30 px-2 py-[3px] uppercase"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p
                    className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed
                   group-hover:text-gray-900 dark:group-hover:text-gray-300
                   transition-colors duration-300"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VENTAJAS OPERATIVAS SECTION */}
      {/* <section
        className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-white dark:bg-defensya-navy
                          border-b border-gray-100 dark:border-white/[0.07]"
      >
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl mb-8">Ventajas operativas</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Mayor precisión en el contacto con la aeronave receptora.",
              "Operaciones de reabastecimiento más rápidas y eficientes.",
              "Reducción del desgaste en los sistemas mecánicos del botalón.",
              "Mayor seguridad en condiciones meteorológicas adversas.",
            ].map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden p-7 group
                           bg-gray-50 dark:bg-white/[0.02]
                           border border-gray-100 dark:border-white/[0.06]
                           hover:bg-white dark:hover:bg-white/[0.04]
                           transition-colors duration-300"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                }}
              >
                
                <span
                  className="absolute top-0 inset-x-0 h-[2px] bg-defensya-blue
                                scale-x-0 group-hover:scale-x-100
                                transition-transform duration-400 origin-left"
                />

                
                <span
                  className="pointer-events-none absolute top-1 right-3 font-mono font-black
                                select-none text-black/[0.04] dark:text-white/[0.04]
                                group-hover:text-defensya-blue/[0.08] transition-colors duration-500"
                  style={{ fontSize: "4rem", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className="inline-flex mb-5 font-mono text-[10px] tracking-[0.3em]
                                text-defensya-blue border border-defensya-blue/30 px-2 py-[3px] uppercase"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p
                  className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed
                             group-hover:text-gray-900 dark:group-hover:text-gray-300
                             transition-colors duration-300"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════════════════
          §3 AUTOMATIZACIÓN — DARK bg-defensya-navy
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-defensya-navy border-b border-white/[0.07]"
      >
        <div className="tech-grid absolute inset-0 opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <h2
            className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-white dark:text-white mb-6"
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            }}
          >
            Niveles de automatización
          </h2>

          {/* Table header */}
          <div
            className="hidden sm:grid sm:grid-cols-[180px_220px_1fr] gap-6 lg:gap-8
                          px-5 -mx-5 pb-3 border-b border-white/[0.12]"
          >
            {["Sistema", "Clasificación", "Descripción"].map((h) => (
              <span
                key={h}
                className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase"
              >
                {h}
              </span>
            ))}
          </div>

          {[
            {
              name: "A3R®",
              tag: "Automated Air-to-Air Refueling",
              desc: "Reabastecimiento aire-aire automatizado donde el sistema de botalón o manguera es controlado automáticamente mientras el operador mantiene funciones de supervisión y puede intervenir en cualquier momento.",
            },
            {
              name: "A4R®",
              tag: "Autonomous Air-to-Air Refueling",
              desc: "Nivel avanzado de automatización donde todas las fases del proceso de reabastecimiento se realizan de forma autónoma, eliminando la necesidad de control activo por parte del operador.",
            },
          ].map((item, i) => (
            <div
              key={item.name}
              className="group relative flex flex-col sm:grid sm:grid-cols-[180px_220px_1fr]
                            gap-3 sm:gap-6 lg:gap-8 items-center
                            py-7 px-5 -mx-5 border-b border-white/[0.07]
                            hover:bg-white/[0.03] transition-all duration-200"
            >
              {/* Left accent bar */}
              <span
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] bg-defensya-blue
                              scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
              />

              <span
                className="text-3xl lg:text-4xl font-bold text-white
                           group-hover:text-defensya-blue transition-colors duration-300"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                {item.name}
              </span>

              <span
                className="hidden sm:block font-mono text-[11px] tracking-[0.2em]
                             text-defensya-steel uppercase self-center"
              >
                {item.tag}
              </span>

              <p
                className="text-md text-gray-400 leading-relaxed
                           group-hover:text-gray-300 transition-colors duration-300"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §5 TECNOLOGÍAS CLAVE — DARK bg-defensya-navy
      ══════════════════════════════════════════════════════════ */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden bg-defensya-navy">
        <div className="tech-grid absolute inset-0 opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
        <h2
            className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-white dark:text-white mb-6"
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            }}
          >
            Tenologías Claves
          </h2>

          {/* ── Boomerang — text row ── */}
          <div
            className="group relative flex flex-col sm:grid sm:grid-cols-[200px_220px_1fr]
                          gap-3 sm:gap-6 lg:gap-8 items-center
                          py-7 px-5 -mx-5 border-y border-white/[0.07]
                          hover:bg-white/[0.03] transition-all duration-200 mb-4"
          >
            <span
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] bg-defensya-blue
                            scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
            />

            <span
              className="text-3xl lg:text-4xl font-bold text-white
                           group-hover:text-defensya-blue transition-colors duration-300"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Boomerang®
            </span>

            <span
              className="hidden sm:block font-mono text-[11px] tracking-[0.2em]
                           text-defensya-steel uppercase self-center"
            >
              Precision Receptacle Location
            </span>

            <p
              className="text-md text-gray-400 leading-relaxed
                         group-hover:text-gray-300 transition-colors duration-300"
            >
              Tecnología diseñada para mejorar la precisión en la localización
              del receptáculo de repostaje. Reduce significativamente las
              latencias del sistema aire-aire, permitiendo operaciones estables
              incluso en condiciones de fuerte turbulencia.
            </p>
          </div>

          {/* ── Haptix — hero block ── */}
          <div
            className="relative overflow-hidden group"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))",
            }}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/products/haptix1.webp"
                alt="Haptix® Control System"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Gradient overlays */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(6,13,24,0.97) 0%, rgba(6,13,24,0.82) 50%, rgba(6,13,24,0.35) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,13,24,0.65) 0%, transparent 55%)",
              }}
            />

            {/* Blue hover tint */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "rgba(14,165,233,0.05)" }}
            />

            {/* Corner brackets */}
            <Corners size={22} onDark />

            {/* Diagonal accent on clip corner */}
            <svg
              className="absolute top-0 right-0 pointer-events-none z-20"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <line
                x1="0"
                y1="34"
                x2="34"
                y2="0"
                stroke="#0ea5e9"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            </svg>

            {/* Ghost text */}
            <span
              className="pointer-events-none absolute bottom-4 right-8 font-mono font-black
                            select-none text-white/[0.04] group-hover:text-defensya-blue/[0.06]
                            transition-colors duration-500"
              style={{ fontSize: "9rem", lineHeight: 1 }}
            >
              HX
            </span>

            {/* Content */}
            <div
              className="relative z-10 flex flex-col lg:flex-row lg:items-center
                            gap-8 lg:gap-16 px-8 sm:px-12 py-12 lg:py-14"
            >
              {/* Left — text */}
              <div className="flex-1 max-w-xl">
                {/* Name */}
                <h3
                  className="font-bold uppercase leading-[0.88] tracking-tight text-white mb-2"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                    fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  }}
                >
                  Haptix<span className="text-defensya-blue">®</span>
                </h3>

                <p className="font-mono text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-6">
                  Control háptico avanzado del botalón
                </p>

                <div
                  className="h-px w-12 bg-defensya-blue/50 mb-6
                               group-hover:w-32 transition-all duration-500"
                />

                <p className="text-sm text-gray-300 leading-relaxed max-w-md mb-8">
                  Dispositivo de control manual con retroalimentación háptica
                  que permite controlar el botalón de forma natural e intuitiva.
                  Una sola mano, precisión total. Facilita la transición desde
                  operaciones manuales hacia entornos A3R®.
                </p>

                <Link
                  href="/haptix"
                  className="group/btn inline-flex items-center gap-3
                             px-7 py-3.5 bg-defensya-blue text-white
                             font-mono text-[11px] tracking-[0.25em] uppercase font-bold
                             hover:bg-defensya-blue/80 transition-all duration-200"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                >
                  Explorar Haptix®
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="group-hover/btn:translate-x-1 transition-transform duration-200"
                  >
                    <path
                      d="M2 6h8M7 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Right — stat pills */}
              <div className="flex flex-row lg:flex-col gap-2 flex-wrap lg:flex-nowrap shrink-0">
                {[
                  { label: "Hardware", value: "V4.0" },
                  { label: "I/O Std", value: "ARINC 429" },
                  { label: "Tensión", value: "28V DC" },
                  { label: "Estado", value: "Certified" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 px-5 py-3
                                  border border-white/[0.08] bg-white/[0.03]
                                  hover:border-defensya-blue/40 hover:bg-defensya-blue/[0.06]
                                  transition-all duration-200"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] tracking-[0.3em] text-gray-600 uppercase">
                        {label}
                      </span>
                      <span className="font-mono text-[15px] font-bold text-white leading-none">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}

                <p className="font-mono text-[9px] tracking-[0.25em] text-gray-700 uppercase self-end mt-1">
                  REF-HPTX/04
                </p>
              </div>
            </div>

            {/* Bottom progress bar */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/5 z-20">
              <div
                className="h-full bg-defensya-blue/60 w-4/5
                             group-hover:w-full transition-all duration-700"
              />
            </div>
          </div>

          {/* Bottom meta */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.05]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-700 uppercase">
              Defensya · R&D Division
            </span>
            <div className="h-px w-12 bg-defensya-blue/30" />
          </div>
        </div>
      </section>
    </main>
  );
}
