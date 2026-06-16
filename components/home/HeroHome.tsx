"use client";

import { useRef } from "react";
import Link from "next/link";

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
                   bg-defensya-navy-light dark:bg-defensya-blue text-white text-[11px] lg:text-[13px] tracking-[0.25em] uppercase 
                   hover:bg-defensya-blue transition-colors duration-200"
        style={{ clipPath: clip, fontFamily: "'Share Tech Mono', monospace" }}
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
                 border text-[11px] lg:text-[13px] tracking-[0.25em] uppercase 
                 text-gray-800 hover:bg-defensya-blue hover:text-white hover:border-defensya-blue
                 transition-all duration-200 text-white dark:border-0"
      style={{ clipPath: clip, fontFamily: "'Share Tech Mono', monospace" }}
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

export default function HeroHome() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      className="relative w-full h-[84vh] min-h-[600px] max-h-800px]
                 flex flex-col justify-end overflow-hidden bg-defensya-navy"
    >
      {/* ── VIDEO ── */}
      <video
        ref={videoRef}
        src="/introhero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── OVERLAYS ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-defensya-navy via-defensya-navy/60 to-defensya-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-defensya-navy/60 via-transparent to-transparent" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-14 lg:pb-20">
        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,6.5vw,5rem)] uppercase leading-[0.88] tracking-tight text-white mb-10 max-w-3xl">
          Ingeniería
          <br />
          <span className="text-white/40">& Defensa</span>
        </h1>

        {/* CTAs */}
        <div className="flex flex-row gap-4">
          <ClipButton href="/productos" variant="primary">
            Proyectos
          </ClipButton>
          <ClipButton href="/empresa/quienes-somos" variant="outline">
            Nosotros
          </ClipButton>
        </div>
      </div>
    </section>
  );
}
