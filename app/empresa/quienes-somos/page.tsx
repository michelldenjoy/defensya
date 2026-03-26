import QuienesSomos from '@/components/empresa/about/QuienesSomos'
import Timeline from '@/components/home/TimeLine'
import HeroAbout from '@/components/empresa/about/HeroAbout'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroAbout
        
        title="Quiénes somos"
        subtitle="Defensya es una empresa líder en el sector de defensa y seguridad, con más de 25 años de experiencia en el diseño, desarrollo e integración de sistemas avanzados para clientes militares y civiles en todo el mundo."
        image="/logodefensyanew.png"
      />
     <QuienesSomos  />
     <Timeline />
    </div>
  )
}
