"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────────── */
const rows = [
  {
    num: "01",
    name: "A3R®",
    tag: "Air-to-Air Automated Refueling",
    desc: "Reabastecimiento Air-to-Air automatizado para aeronaves de nueva generación.",
  },
  {
    num: "02",
    name: "A4R®",
    tag: "Autonomous Aerial Refueling",
    desc: "Conceptos de reabastecimiento aéreo completamente autónomo.",
  },
  {
    num: "03",
    name: "Boomerang®",
    tag: "Precision Receptacle Location",
    desc: "Tecnología de localización precisa del receptáculo en condiciones adversas.",
  },
];

const haptixStats = [
  { label: "Hardware", value: "V4.0" },
  { label: "I/O Std",  value: "ARINC 429" },
  { label: "Operativo", value: "28V DC" },
  { label: "Versión",  value: "Certified" },
];

/* ─────────────────────────────────────────────────────────────────
   PRODUCT ROW
───────────────────────────────────────────────────────────────── */
function ProductRow({ num, name, tag, desc }: (typeof rows)[0]) {
  return (
    <div
      className="group relative grid grid-cols-[40px_1fr] md:grid-cols-[56px_180px_1fr_1fr]
                 gap-x-3 gap-y-1 md:gap-6 items-center
                 py-5 px-4 sm:px-5 -mx-4 sm:-mx-5
                 border-b border-white/[0.07]
                 hover:bg-white/[0.03] transition-all duration-300"
    >
      {/* Barra de acento izquierda */}
      <span
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] bg-defensya-blue
                   scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
      />

      {/* Número — col 1, fila 1 */}
      <span className="font-mono text-[11px] text-gray-500 group-hover:text-defensya-blue transition-colors duration-300 shrink-0 self-center">
        {num}
      </span>

      {/* Nombre — col 2, fila 1 */}
      <span
        className="text-2xl sm:text-3xl font-bold uppercase leading-none
                   text-defensya-navy dark:text-gray-200
                   group-hover:text-defensya-blue transition-colors duration-300 self-center"
        style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
      >
        {name}
      </span>

      {/* Tag — solo visible desde md, ocupa su propia columna */}
      <span className="hidden md:block font-mono text-[12px] tracking-[0.2em] text-gray-600 dark:text-gray-400 uppercase leading-snug">
        {tag}
      </span>

      {/* Descripción — en mobile col 2 fila 2 (sangría visual alineada con el nombre) */}
      <span className="text-md text-gray-600 dark:text-gray-400 leading-snug col-start-2 md:col-auto">
        {desc}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CLIP BUTTON (variante link, igual que el corporativo)
───────────────────────────────────────────────────────────────── */
function ClipLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const clip =
    variant === "primary"
      ? "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))"
      : "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)";

  const base =
    variant === "primary"
      ? "bg-defensya-navy-light dark:bg-defensya-blue text-white hover:bg-defensya-blue"
      : "border border-white/20 text-white bg-transparent hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`group/btn relative inline-flex items-center gap-3 px-6 py-3.5
                  text-[11px] tracking-[0.25em] uppercase font-bold
                  transition-colors duration-200 ${base}`}
      style={{ clipPath: clip }}
    >
      {children}
      <svg
        width="12" height="12" viewBox="0 0 12 12" fill="none"
        className="translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200"
      >
        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {variant === "primary" && (
        <span
          className="pointer-events-none absolute bottom-0 right-0 bg-white/25"
          style={{ width: "14px", height: "1px", transformOrigin: "bottom right", transform: "rotate(-45deg) translateX(4px)" }}
        />
      )}
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────── */
export default function TecnologiasSection() {
  return (
    <section className="relative py-16 sm:py-20 px-5 sm:px-8 lg:px-16 overflow-hidden bg-white dark:bg-[#060d18]">
      <div className="tech-grid absolute inset-0 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Header ── */}
        <div className="mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-[6px] h-[6px] bg-defensya-blue shrink-0"
              style={{ transform: "rotate(45deg)" }}
            />
            <span
              className="text-defensya-blue"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              I+D · Defensya Systems
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-defensya-blue/40 to-transparent" />
          </div>

          {/* Título + bajada en grid de dos columnas desde lg */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-end">
            <h2
              className="font-bold uppercase leading-[0.9] tracking-tight
                         text-gray-900 dark:text-white"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
              }}
            >
              Impulsamos el futuro del{" "}
              <span className="text-defensya-blue">repostaje en vuelo</span>
            </h2>

            <p
              className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed
                         lg:max-w-md max-w border-l-2 border-defensya-blue/30 pl-4 lg:pl-5
                         lg:self-end"
            >
              Nuestras soluciones cubren el ciclo completo del reabastecimiento
              aéreo automatizado, desde la percepción hasta el control háptico
              del botalón.
            </p>
          </div>
        </div>

        {/* ── Filas de producto ── */}
        <div className="mb-8">
          {rows.map((p) => (
            <ProductRow key={p.name} {...p} />
          ))}
        </div>

        {/* ── Botón saber más ── */}
        <div className="mb-10 sm:mb-14">
          <ClipLink href="/innovacion">Saber más</ClipLink>
        </div>

        {/* ── HAPTIX hero block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden group"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
          }}
        >
          {/* Imagen */}
          <div className="absolute inset-0">
            <Image
              src="/products/haptix1.webp"
              alt="Haptix® Control System"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Overlays */}
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
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "rgba(14,165,233,0.05)" }} />

          {/* Corner brackets */}
          <span className="pointer-events-none absolute z-20 top-3 left-3 sm:top-4 sm:left-4 w-5 h-5 sm:w-6 sm:h-6"
            style={{ borderTop: "1.5px solid #27389c", borderLeft: "1.5px solid #27389c" }} />
          <span className="pointer-events-none absolute z-20 bottom-3 right-3 sm:bottom-4 sm:right-4 w-5 h-5 sm:w-6 sm:h-6"
            style={{ borderBottom: "1.5px solid rgba(14,165,233,0.45)", borderRight: "1.5px solid rgba(14,165,233,0.45)" }} />

          {/* Contenido */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14 px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14">

            {/* LEFT — texto */}
            <div className="flex-1 min-w-0">
              <h3
                className="font-bold uppercase leading-[0.88] tracking-tight text-white mb-2"
                style={{
                  fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                }}
              >
                Haptix<span className="text-defensya-blue">®</span>
              </h3>

              <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-gray-500 uppercase mb-5 sm:mb-6">
                Haptic Boom Control System
              </p>

              <div className="h-px w-12 bg-defensya-blue/50 mb-5 sm:mb-6 group-hover:w-28 transition-all duration-500" />

              <p className="text-sm sm:text-base md:text-lg  text-gray-300 leading-relaxed max-w-md mb-7 sm:mb-8">
                Control háptico avanzado para el botalón de repostaje. Una sola
                mano, retroalimentación física en tiempo real y protección de
                envolvente por software. El único dispositivo de su clase en el
                mercado.
              </p>

              <ClipLink href="/haptix">Explora el Haptix®</ClipLink>
            </div>

            {/* RIGHT — stats en grid 2×2 en mobile, columna en desktop */}
            <div className="shrink-0 w-full lg:w-auto">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {haptixStats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3
                               border border-white/[0.08] bg-defensya-blue/10
                               hover:border-defensya-blue/40 hover:bg-defensya-blue/20
                               transition-all duration-200"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[8px] tracking-[0.28em] text-gray-500 uppercase">
                        {label}
                      </span>
                      <span className="font-mono text-sm sm:text-[15px] font-bold text-white leading-none">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barra de progreso inferior */}
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/5 z-20">
            <div className="h-full bg-defensya-blue/60 w-4/5 group-hover:w-full transition-all duration-700" />
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className="mt-8 sm:mt-12 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-defensya-blue/30" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 dark:text-gray-500 uppercase">
              Defensya · R&D Division
            </span>
            <div className="h-px w-10 bg-white/[0.04]" />
          </div>
        </div>

      </div>
    </section>
  );
}
