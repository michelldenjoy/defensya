import Careers from '@/components/empresa/careers/Careers'
import HeroSection from '@/components/shared/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Career"
        title=""
        subtitle=""
        image="/images/career.webp"
      />
      <Careers />
    </div>
  )
}
