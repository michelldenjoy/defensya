import QuienesSomos from '@/components/empresa/about/QuienesSomos'
import HeroSection from '@/components/shared/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Empresa"
        title="Quiénes somos"
        subtitle="Defensya es una empresa líder en el sector de la defensa y la seguridad, con más de 25 años de experiencia en el diseño, desarrollo e integración de sistemas avanzados para clientes militares y civiles en todo el mundo."
        image="/empresa/quienes-somos/hero-bg.jpg"
      />
     <QuienesSomos  />
    </div>
  )
}
