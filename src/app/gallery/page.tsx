import type { Metadata } from 'next'
import { EmotionalCTASection } from '@/components/sections/EmotionalCTASection'
import { GalleryHeroSection } from '@/components/sections/GalleryHeroSection'
import { GalleryCategoriesSection } from '@/components/sections/GalleryCategoriesSection'

export const metadata: Metadata = {
  title: 'Gallery | Holiday & Tour Photos | Eventurism Chennai',
  description: 'Browse photos from Eventurism tour packages across India — Ooty, Kodaikanal, Andaman, Kerala, Pondicherry and more beautiful destinations.',
}

import { GalleryStoriesSection } from '@/components/sections/GalleryStoriesSection'
import { GalleryTravelerMomentsSection } from '@/components/sections/GalleryTravelerMomentsSection'
import { GalleryMasonrySection } from '@/components/sections/GalleryMasonrySection'

export default function GalleryPage() {
  return (
    <>
      <GalleryHeroSection />
      <GalleryCategoriesSection />


      <GalleryStoriesSection />
      <GalleryTravelerMomentsSection />
      <GalleryMasonrySection />
      <EmotionalCTASection />
    </>
  )
}
