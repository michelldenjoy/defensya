import React from 'react'
import Refueling from '@/components/innovacion/Refueling'
import PatentsList from '@/components/innovacion/PatentsList'
import HeroSection from '@/components/shared/HeroSection'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Innovación"
        title="Creando el Futuro de la Defensa"
        subtitle="En Defensya, la innovación es el motor que impulsa nuestro compromiso con la excelencia en la industria aeroespacial. Nos dedicamos a desarrollar soluciones avanzadas y tecnologías de vanguardia que transforman la defensa y la seguridad. Desde sistemas de reabastecimiento en vuelo hasta patentes innovadoras, estamos a la vanguardia de la innovación para garantizar un futuro más seguro y eficiente."
        image="/images/innovacion-hero.jpg"
      />
      <Refueling />
      <PatentsList />
    </div>
  )
}
