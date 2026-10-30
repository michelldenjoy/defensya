"use client";

import { useEffect, useRef } from "react";
import { ClipButton } from "@/components/ui/ClipButton";

const MONO = { fontFamily: "'Share Tech Mono', monospace" };

export default function CTACalidad() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // El vídeo solo se reproduce cuando se ve (ahorra batería y datos).
  // Si el usuario tiene activado "reducir movimiento", se queda quieto.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="cierre-title"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-defensya-navy text-white"
    >
      {/* Vídeo: en blanco y negro y algo oscurecido */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.55] contrast-125 grayscale"
      >
        <source src="/turbine.mp4" type="video/mp4" />
      </video>

      {/* Tinte y fundidos para unirlo con las secciones de arriba y abajo */}
      <div className="absolute inset-0 -z-10 bg-defensya-navy/45" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#0d2340] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-defensya-navy to-transparent" />
      <div className="absolute inset-y-0 left-0 -z-10 hidden w-1/2 bg-gradient-to-r from-defensya-navy/70 to-transparent lg:block" />

      <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:py-36">
        <p className="text-[12px] tracking-[0.2em] text-white/55" style={MONO}>
          Defensya · Ingeniería Internacional
        </p>

        <h2
          id="cierre-title"
          className="mt-8 max-w-4xl text-[clamp(2.4rem,5.5vw,5rem)] font-semibold uppercase leading-[0.92] tracking-tight"
        >
          No solo fabricamos tecnología.
          <br />
          <span className="font-light text-white/55">Entregamos fiabilidad operativa para entornos críticos.</span>
        </h2>

        <span className="mt-12 block h-px w-12 bg-white/30" />
        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/70">
          En Defensya, la excelencia técnica se rige por estándares de calidad internacionales.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <ClipButton href="/contacto" variant="primary">
            Hablemos de tu proyecto
          </ClipButton>
          <ClipButton href="/productos" variant="outline">
            Ver productos
          </ClipButton>
        </div>
      </div>
    </section>
  );
} 