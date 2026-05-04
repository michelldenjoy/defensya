"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Corners({ size = 20 }: { size?: number }) {
  return (
    <>
      {/* TL — accent blue */}
      <span
        className="pointer-events-none absolute z-20"
        style={{
          top: 14,
          left: 14,
          width: size,
          height: size,
          borderTop: "1.5px solid #0ea5e9",
          borderLeft: "1.5px solid #0ea5e9",
        }}
      />
      {/* TR — subtle */}
      <span
        className="pointer-events-none absolute z-20"
        style={{
          top: 14,
          right: 14,
          width: size,
          height: size,
          borderTop: "1px solid rgba(255,255,255,0.18)",
          borderRight: "1px solid rgba(255,255,255,0.18)",
        }}
      />
      {/* BL — subtle */}
      <span
        className="pointer-events-none absolute z-20"
        style={{
          bottom: 14,
          left: 14,
          width: size,
          height: size,
          borderBottom: "1px solid rgba(255,255,255,0.18)",
          borderLeft: "1px solid rgba(255,255,255,0.18)",
        }}
      />
      {/* BR — accent blue dim */}
      <span
        className="pointer-events-none absolute z-20"
        style={{
          bottom: 14,
          right: 14,
          width: size,
          height: size,
          borderBottom: "1.5px solid rgba(14,165,233,0.55)",
          borderRight: "1.5px solid rgba(14,165,233,0.55)",
        }}
      />
    </>
  );
}

// ─── Clipped Button ───────────────────────────────────────────────────────────

type BtnVariant = "primary" | "outline";

export function ClipButton({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: BtnVariant;
  target?: string;
  rel?: string;
}) {
  const clip =
    variant === "primary"
      ? "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))"
      : "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className="group relative inline-flex items-center gap-3 px-6 py-3.5
                   bg-defensya-navy-light dark:bg-defensya-blue text-white text-[11px] tracking-[0.25em] uppercase font-bold
                   hover:bg-defensya-blue transition-colors duration-200"
        style={{ clipPath: clip }}
      >
        {children}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
        >
          <path
            d="M2 6h8M7 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="pointer-events-none absolute bottom-0 right-0 bg-white/25"
          style={{
            width: "14px",
            height: "1px",
            transformOrigin: "bottom right",
            transform: "rotate(-45deg) translateX(4px)",
          }}
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-3 px-6 py-3.5
                 border text-[11px] tracking-[0.25em] uppercase font-bold
                 text-gray-800 hover:bg-defensya-blue hover:text-white hover:border-defensya-blue
                 transition-all duration-200 dark:text-white dark:border-0"
      style={{ clipPath: clip }}
    >
      <span
        className="pointer-events-none absolute top-0 left-0 opacity-60"
        style={{
          width: "14px",
          height: "1px",
          transformOrigin: "top left",
          transform: "rotate(-45deg) translateX(-4px)",
        }}
      />
      {children}
    </Link>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section
      className="
        relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr]
        overflow-hidden bg-white dark:bg-defensya-navy
        /* Mobile: auto height. md+: full viewport height (min 560px, max 860px) */
        min-h-[auto] md:min-h-[560px] md:h-[calc(100svh-64px)] md:max-h-[860px]
      "
    >
      {/* Tech grid */}
      <div className="tech-grid absolute inset-0 opacity-40 pointer-events-none z-0" />

      {/* ════════════════════════════════════════════════════════
          LEFT — Text column
      ════════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 flex flex-col justify-center
                   px-6 lg:px-16 xl:px-20 pt-20 pb-12 md:py-0
                   border-r border-white/[0.06]"
      >
        {/* Vertical accent line */}
        <span
          className="hidden lg:block pointer-events-none absolute left-0 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0ea5e9 40%, transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col"
        >
          {/* ── Headline ── */}
          <h1
            className="font-bold leading-[0.88] tracking-[-0.025em] uppercase text-black mb-8"
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
              fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
            }}
          >
            <span className="text-defensya-blue dark:text-white">
              Ingeniería
            </span>
            <br />
            <span className="dark:text-white">Avanzada</span>
            <br />
            <span className="dark:text-blue-300">para el futuro</span>
            <br />
            <span className="text-defensya-blue dark:text-white">
              Aeroespacial
            </span>
          </h1>

          {/* ── Descriptor ── */}
          <p
            className="text-sm text-gray-500 leading-relaxed max-w-sm mb-12
                       border-l-2 border-defensya-navy-light pl-5"
          >
            Defensya desarrolla tecnologías avanzadas para los sistemas
            aeroespaciales del futuro. Visión artificial y software inteligente
            donde el margen de error es inexistente.
          </p>

          {/* ── Buttons ── */}
          <div className="flex flex-wrap gap-3 mb-14">
            <ClipButton href="/productos" variant="primary">
              Nuestros Proyectos
            </ClipButton>
            <ClipButton href="/empresa/quienes-somos" variant="outline">
              Sobre Defensya
            </ClipButton>
          </div>

          {/* ── Bottom data strip ── */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[9px] tracking-[0.3em] text-gray-600 uppercase dark:text-gray-400">
                Fundada
              </span>
              <span className="font-mono text-[13px] text-defensya-navy font-bold dark:text-white">
                2002
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[9px] tracking-[0.3em] text-gray-600 uppercase dark:text-gray-400">
                Sectores
              </span>
              <span className="font-mono text-[13px] text-defensya-navy font-bold dark:text-white">
                05 ÁREAS
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[9px] tracking-[0.3em] text-gray-600 uppercase dark:text-gray-400">
                Certificación
              </span>
              <span className="font-mono text-[13px] text-defensya-navy font-bold dark:text-white">
                ISO 9001
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════
          RIGHT — Image column  (full-bleed, fills the grid cell)
      ════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="
          relative z-10 group md:mt-10
          /* Mobile: fixed aspect ratio so image has a decent height */
          aspect-[16/9] md:aspect-auto
          /* md+: stretch to fill the full grid-row height */
          md:self-stretch
        "
      >
        {/* Outer glow edge on left side (where it meets the text column) */}
        <div
          className="absolute inset-y-0 left-0 w-px pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #0ea5e9 40%, transparent 100%)",
            opacity: 0.4,
          }}
        />

        {/* ── Photo — fills the entire column ── */}
        <Image
          src="/images/refueling2.jpeg"
          alt="Defensya Hero Image"
          fill
          priority
          className="object-cover object-center transition-transform duration-700"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(170deg, rgba(6,13,24,0.15) 0%, rgba(6,13,24,0.50) 100%)",
          }}
        />

        {/* Blue hover tint */}
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "rgba(14,165,233,0.05)" }}
        />

        {/* Corner brackets — inside the image, above overlays */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Corners size={22} />
        </div>

        {/* ── BOTTOM info bar ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 px-5 py-4
                     flex items-end justify-between"
          style={{
            background:
              "linear-gradient(to top, rgba(6,13,24,0.92) 0%, transparent 100%)",
          }}
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] tracking-[0.3em] text-defensya-steel uppercase">
              Sistema de Reabastecimiento
            </span>
          </div>
          <span
            className="font-mono font-black text-white/[0.05] select-none leading-none
             text-[clamp(1.5rem,6vw,3.5rem)] whitespace-nowrap"
          >
            DEFENSYA
          </span>
        </div>

        {/* Diagonal cut accent — top-right */}
        <svg
          className="absolute top-0 right-0 pointer-events-none z-20"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <line
            x1="0"
            y1="32"
            x2="32"
            y2="0"
            stroke="#0ea5e9"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        </svg>

        {/* Diagonal cut accent scale — bottom-left */}
        <svg
          className="absolute bottom-0 left-0 pointer-events-none z-20"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <line
            x1="0"
            y1="16"
            x2="16"
            y2="48"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
