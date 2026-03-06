import HomePage from '@/components/home/HomePage'
import Homethree from '@/components/home/Homethree'
import Hometwo from '@/components/home/Hometwo'
import Timeline from '@/components/home/TimeLinea'
import { Home } from 'lucide-react'
import React from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function page() {
  return (
    <div>
      <HomePage />
      
      <Hometwo />
      <Timeline />
      <Homethree  />
    </div>
  )
}
