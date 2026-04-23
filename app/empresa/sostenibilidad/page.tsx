import HeroSection from '@/components/shared/HeroSection'
import ODSSection from '@/components/sostenibilidad/ODSSection'
import Sostenibilidad from '@/components/sostenibilidad/Sostenibilidad'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Sostenibilidad"
        title="Trabajamos por un Futuro Sostenible"
        subtitle=""
        image="/images/sostenibilidad.png"
      />

      <Sostenibilidad />
      <ODSSection />
    </div>
  )
}
