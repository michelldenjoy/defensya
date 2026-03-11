import type { ReactNode } from "react"

interface HeroProps {
  label?: string        
  title: string        
  subtitle?: string     
  children?: ReactNode 
  image?: string        
}

export default function HeroSection ({ label, title, subtitle, children, image }: HeroProps) {
  return (
    <section className="relative w-full border-b border-white/8 bg-[#080A0E] overflow-hidden">

      {/* Img de fondo */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-[#080A0E]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4FAAFF]/40 to-transparent" />

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">

        {label && (
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4FAAFF] mb-4">
            {label}
          </p>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-xl leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {children && (
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            {children}
          </div>
        )}

      </div>

     
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
    </section>
  )
}