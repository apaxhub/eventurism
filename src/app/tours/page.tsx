import { ToursHeroSection } from '@/components/sections/ToursHeroSection'
import { ToursFilterSection } from '@/components/sections/ToursFilterSection'
import { ToursGridSection } from '@/components/sections/ToursGridSection'
import { ToursWhatsAppCTASection } from '@/components/sections/ToursWhatsAppCTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Packages & Curated Destinations | Eventurism',
  description: 'Explore our curated Indian and International travel packages designed for meaningful experiences and unforgettable journeys.',
}

export default function ToursPage() {
  return (
    <>
      <ToursHeroSection />
      <ToursFilterSection />
      <ToursGridSection />
      <ToursWhatsAppCTASection />
    </>
  )
}
