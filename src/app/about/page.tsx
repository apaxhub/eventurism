import { AboutHeroSection } from '@/components/sections/AboutHeroSection'
import { OurStorySection } from '@/components/sections/OurStorySection'
import { TravelPhilosophySection } from '@/components/sections/TravelPhilosophySection'
import { AboutExperiencesSection } from '@/components/sections/AboutExperiencesSection'
import { TheArtisansSection } from '@/components/sections/TheArtisansSection'
import { MomentsGallerySection } from '@/components/sections/MomentsGallerySection'
import { TravelerStoriesSection } from '@/components/sections/TravelerStoriesSection'
import { EmotionalCTASection } from '@/components/sections/EmotionalCTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Eventurism | Chennai Tour Operator Since 2011',
  description: "Eventurism is Chennai's most trusted tour operator since 2011, specialising in holiday packages, hill station tours, beach holidays, and custom travel across India. 4.8★ rated with 212 verified reviews.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <TravelPhilosophySection />
      <AboutExperiencesSection />
      <TheArtisansSection />
      <MomentsGallerySection />
      <TravelerStoriesSection />
      <EmotionalCTASection />
    </>
  )
}
