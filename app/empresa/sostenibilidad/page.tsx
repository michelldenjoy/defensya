import HeroSection from '@/components/shared/HeroSection'
import ODSSection from '@/components/sostenibilidad/ODSSection'
import Sostenibilidad from '@/components/sostenibilidad/Sostenibilidad'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Sostenibilidad"
        title=""
        subtitle=""
        image="/images/sostenible.jpg"
        imagePosition="center 50%"
      />


      <Sostenibilidad />
      <ODSSection />
    </div>
  )
}
