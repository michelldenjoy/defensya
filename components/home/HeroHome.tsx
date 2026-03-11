"use client";

import { useRef, } from "react";

export default function HeroHome() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      className="relative w-full h-[92vh] min-h-150 max-h-250
                 flex flex-col justify-end overflow-hidden bg-defensya-navy"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      {/* ── VIDEO ───────── */}
      <video
        ref={videoRef}
        src="/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"

      />

      {/* ── OVERLAYS ─────────────────── */}
      <div
        className="absolute inset-0 bg-linear-to-t
                      from-defensya-navy/50 via-defensya-navy/40 to-defensya-navy/5"
      />
      {/* Subtle left vignette */}
      <div
        className="absolute inset-0 bg-linear-to-r
                      from-defensya-navy/60 via-transparent to-transparent"
      />
      {/* Top bar fade */}
      <div
        className="absolute top-0 inset-x-0 h-24
                      bg-linear-to-b from-defensya-navy/40 to-transparent"
      />

      {/* ── CONTENT ────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 max-w-7xl mx-auto w-full
                      px-6 lg:px-16 pb-14 lg:pb-20"
      >
        {/* Heading */}
        <h1
          className="text-[clamp(3rem,8vw,7rem)] font-bold uppercase
                     leading-[0.92] tracking-tight text-white mb-8 max-w-4xl"
          style={{
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          }}
        >
          Hacemos
          <br />
          volar
          <br />
          <span className="text-blue-300">ideas</span>
        </h1>

        {/* Subline + CTAs in a row */}
        <div
          className="flex flex-col sm:flex-row sm:items-end
                        justify-between gap-8 lg:gap-16"
        >
          <p className="text-xl text-gray-300 leading-relaxed max-w-md">
          Tecnología avanzada para los sistemas que impulsan el futuro del sector aeronáutico.
          </p>
        </div>


      </div>
    </section>
  );
}
