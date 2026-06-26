import React from 'react'

export default function CTACalidad() {
  return (
    <div>
      <div className="relative overflow-hidden h-[420px] w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/turbine.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(11, 31, 56, 0.82)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-defensya-blue/60 via-defensya-blue/20 to-transparent" />

        <div className="relative z-10 h-full px-5 sm:px-8 lg:px-16 py-12 sm:py-16 max-w-7xl mx-auto flex flex-col justify-between">
          <div>
            <span
              className="pointer-events-none select-none font-mono font-black hidden sm:block leading-none mb-2"
              style={{ fontSize: "5rem", color: "rgba(255,255,255,0.04)" }}
            >
              DSY
            </span>
            <p className="text-md sm:text-base lg:text-xl text-gray-300 leading-relaxed font-light max-w-5xl">
              No solo fabricamos tecnología;{" "}
              <span className="text-white font-medium">
                entregamos la fiabilidad operativa necesaria para que
                organizaciones globales operen en entornos críticos.
              </span>{" "}
              En{" "}
              <span className="text-defensya-steel font-semibold">
                Defensya
              </span>
              , la excelencia técnica se rige por estándares de calidad
              internacionales, garantizando la seguridad en el futuro de la
              exploración y la defensa global.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-px w-10 bg-defensya-blue/50" />
              <span
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgb(107 114 128)",
                }}
              >
                Defensya · Ingeniería Internacional
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-defensya-blue/30 via-transparent to-transparent" />
      </div>
    </div>
  )
}
