import { ToursHeroSection } from '@/components/sections/ToursHeroSection'
import { ToursFilterSection } from '@/components/sections/ToursFilterSection'
import { ToursGridSection } from '@/components/sections/ToursGridSection'
import { ToursWhatsAppCTASection } from '@/components/sections/ToursWhatsAppCTASection'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Packages & Curated Destinations | Eventurism',
  description: 'Explore our curated Indian and International travel packages designed for meaningful experiences and unforgettable journeys.',
}

export default async function ToursPage({
  searchParams,
}: {
  searchParams: { category?: string; destination?: string }
}) {
  const { category, destination } = searchParams

  const where: any = { published: true }

  if (category) {
    where.type = {
      slug: category === 'international' ? 'international-holidays' : 'india-holidays',
    }
  }

  if (destination && !destination.startsWith('all')) {
    where.destination = {
      contains: destination,
      mode: 'insensitive',
    }
  }

  const packages = await prisma.package.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  })

  return (
    <>
      <ToursHeroSection />
      <ToursFilterSection />
      <ToursGridSection initialPackages={packages} />
      <ToursWhatsAppCTASection />
    </>
  )
}
