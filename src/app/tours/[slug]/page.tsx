import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { PackageDetailContent } from '@/components/sections/PackageDetailContent'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pkg = await prisma.package.findUnique({
    where: { slug: params.slug }
  })

  if (!pkg) return { title: 'Package Not Found' }

  return {
    title: `${pkg.title} | Eventurism`,
    description: pkg.description.replace(/<[^>]*>/g, '').slice(0, 160)
  }
}

export default async function PackageDetailPage({ params }: PageProps) {
  const pkg = await prisma.package.findUnique({
    where: { slug: params.slug },
    include: {
      type: true,
      category: true,
    }
  })

  if (!pkg || !pkg.published) {
    notFound()
  }

  // Map the Prisma model to the expected prop structure of PackageDetailContent
  const packageData = {
    ...pkg,
    itinerary: pkg.itinerary as any[] // Assuming the JSON matches the ItineraryItem interface
  }

  return <PackageDetailContent packageData={packageData} />
}

