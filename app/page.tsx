import Hometwo from '@/components/home/Hometwo'
import { Home } from 'lucide-react'
import React from 'react'
import HeroSection from '@/components/shared/HeroSection'
import Divisiones from '@/components/home/Divisiones'

export default function page() {
  return (
    <div>      
      <HeroSection title="Defensya"/>
      <Hometwo />
      <Divisiones />
  
    </div>
  )
}
