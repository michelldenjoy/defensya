import type { ReactNode } from "react"

interface HeroProps {
  label?: string
  title: string
  subtitle?: string
  children?: ReactNode
  image?: string
  video?: string
}

export default function HeroSection({
  label,
  title,
  subtitle,
  children,
  image,
  video
}: HeroProps) {
  return (
    <section className="relative w-full border-b border-white/8 bg-[#080A0E] overflow-hidden">

      {/* VIDEO */}
      {video && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* IMAGEN */}
      {!video && image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-l from-slate-900/10 via-transparent to-black/70" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4FAAFF]/40 to-transparent" />

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] uppercase ">
              {title}
            </h1>
  
            {subtitle && (
              <p className="mt-8 text-lg text-zinc-400 leading-relaxed border-l-2 border-defensya-sky/30 pl-6">
                {subtitle}
              </p>
            )}
  
            {children && (
              <div className="mt-10 flex items-center gap-4 flex-wrap">
                {children}
              </div>
            )}
          </div>
        </div>
  
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  )
}