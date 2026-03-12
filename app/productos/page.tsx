import HeroSection from '@/components/shared/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Proyectos"
        title="Creamos Soluciones que vuelan Alto"
        subtitle="Conoce nuestros proyectos y descubre cómo transformamos ideas en realidades tecnológicas del alto impacto."
        video="/products.mp4"
      />
    </div>
  )
}
