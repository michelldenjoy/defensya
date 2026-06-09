import HeroSection from '@/components/shared/HeroSection'
import ODSSection from '@/components/sostenibilidad/ODSSection'
import Sostenibilidad from '@/components/sostenibilidad/Sostenibilidad'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Sostenibilidad"
        title="Compromiso Ambiental"
        subtitle=""
        image="/images/sostenible.jpg"
        imagePosition="center 35%"
      />

      <Sostenibilidad />
      <ODSSection />
    </div>
  )
}
