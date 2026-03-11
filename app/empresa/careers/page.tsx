import Careers from '@/components/empresa/careers/Careers'
import HeroSection from '@/components/shared/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection
        label="Career"
        title="Únete a Defensya"
        subtitle="Participa en el desarrollo de soluciones tecnológicas para los sectores más exigentes."
        image="/images/career.webp"
      />
      <Careers />
    </div>
  )
}
