import QuienesSomos from '@/components/empresa/about/QuienesSomos'
import Timeline from '@/components/home/TimeLine'
import HeroAbout from '@/components/empresa/about/HeroAbout'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroAbout
        
        title="Sobre Defensya"
        subtitle=""
        image="/logodefensyanew.png"
      />
     <QuienesSomos  />
     <Timeline />
    </div>
  )
}
