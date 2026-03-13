import React from 'react'
import Refueling from '@/components/innovacion/Refueling'
import PatentsList from '@/components/innovacion/PatentsList'
import HeroSection from '@/components/shared/HeroSection'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Innovación"
        title="Innovamos el Reabastecimiento Aéreo"
        subtitle="Desde sistemas avanzados de reabastecimiento hasta nuevas patentes aeroespaciales, impulsamos la innovación que define la próxima generación de defensa."
        image="/images/innovation.webp"
      />
      <Refueling />
      <PatentsList />
    </div>
  )
}
