import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { PackageForm } from '@/components/admin/PackageForm'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'

interface Props { params: { id: string } }

async function getPackage(id: string) {
  try {
    return await prisma.package.findUnique({ where: { id } })
  } catch { return null }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pkg = await getPackage(params.id)
  return { title: pkg ? `Edit: ${pkg.title}` : 'Edit Package' }
}

export default async function EditPackagePage({ params }: Props) {
  const pkg = await getPackage(params.id)
  if (!pkg) notFound()

  const initialData = {
    id: pkg.id,
    title: pkg.title,
    destination: pkg.destination,
    duration: pkg.duration,
    groupSize: pkg.groupSize,
    priceFrom: pkg.priceFrom,
    category: pkg.category,
    tag: pkg.tag ?? undefined,
    description: pkg.description,
    highlights: pkg.highlights,
    inclusions: pkg.inclusions,
    exclusions: pkg.exclusions,
    itinerary: pkg.itinerary as Array<{ day: number; title: string; description: string }>,
    thumbnail: pkg.thumbnail,
    images: pkg.images,
    featured: pkg.featured,
    published: pkg.published,
  }

  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/admin/packages" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-secondary transition-colors font-mono mb-4">
          <ChevronLeft className="w-4 h-4" /> Back to Packages
        </Link>
        <h1 className="font-display font-bold text-2xl text-secondary">Edit Package</h1>
        <p className="text-gray-500 text-sm font-mono mt-1">{pkg.title}</p>
      </div>
      <PackageForm mode="edit" initialData={initialData} />
    </div>
  )
}
