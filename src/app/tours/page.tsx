import { CTABanner } from '@/components/sections/CTABanner'
import { ToursHeroSection } from '@/components/sections/ToursHeroSection'
import { ToursFilterSection } from '@/components/sections/ToursFilterSection'
import { ToursFeaturedSection } from '@/components/sections/ToursFeaturedSection'
import { ToursGridSection } from '@/components/sections/ToursGridSection'
import { ToursComparisonSection } from '@/components/sections/ToursComparisonSection'
import { ToursPlannerCTASection } from '@/components/sections/ToursPlannerCTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tour Packages from Chennai | Tamil Nadu Holiday Packages',
  description: 'Explore curated tour packages from Chennai — Ooty, Kodaikanal, Andaman, Kerala, Pondicherry and more. Customized holiday packages with hotel, transport and activities included.',
}

export default async function ToursPage() {

  return (
    <>
      <ToursHeroSection />

      <ToursFilterSection />

      <ToursFeaturedSection />

      <ToursGridSection />

      <ToursComparisonSection />

      <ToursPlannerCTASection />

      <CTABanner />
    </>
  )
}
