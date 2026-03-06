import Careers from '@/components/empresa/careers/Careers'
import HeroSection from '@/components/shared/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Career"
        title="Únete a Nuestro Equipo"
        subtitle="En Defensya, creemos que nuestro éxito se basa en el talento y la pasión de nuestro equipo. Estamos siempre en busca de profesionales dedicados y apasionados por la innovación aeroespacial. Si estás interesado en formar parte de una empresa líder en la industria, explora nuestras oportunidades de carrera y únete a nosotros en la misión de transformar el futuro de la defensa."
        image="/images/careers-hero.jpg"
      />
      <Careers />
    </div>
  )
}
