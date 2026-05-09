import { prisma } from '@/lib/prisma'
import { PackageCard } from '@/components/ui/PackageCard'
import { CTABanner } from '@/components/sections/CTABanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tour Packages from Chennai | Tamil Nadu Holiday Packages',
  description: 'Explore curated tour packages from Chennai — Ooty, Kodaikanal, Andaman, Kerala, Pondicherry and more. Customized holiday packages with hotel, transport and activities included.',
}

async function getPackages(category?: string) {
  try {
    const where: Record<string, unknown> = { published: true }
    if (category) where.category = category
    return await prisma.package.findMany({
      where,
      orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
    })
  } catch {
    return []
  }
}

const categories = ['All', 'Hill Station', 'Beach', 'Nature', 'Heritage']

export default async function ToursPage({ searchParams }: { searchParams: { category?: string } }) {
  const activeCategory = searchParams.category || 'All'
  const packages = await getPackages(activeCategory === 'All' ? undefined : activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">Our Packages</span>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mt-3 mb-4">
            Journeys Crafted for<br /><span className="text-primary italic">Every Traveller</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            From quick weekend escapes to extended family holidays — we have a package for every kind of journey.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 lg:top-20 z-30 bg-ivory border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map(cat => (
              <a
                key={cat}
                href={cat === 'All' ? '/tours' : `/tours?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-secondary border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-ivory min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {packages.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-400 font-mono text-sm">No packages found in this category.</p>
              <a href="/tours" className="mt-4 inline-block text-primary text-sm hover:underline">View all packages</a>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-400 font-mono mb-6">{packages.length} package{packages.length !== 1 ? 's' : ''} found</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map(pkg => (
                  <PackageCard key={pkg.id} {...pkg} id={pkg.id} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 bg-ivory-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-secondary mb-3">
            Can&apos;t Find Your Dream Package?
          </h2>
          <p className="text-gray-500 mb-6">We build 100% custom itineraries. Just tell us where you want to go.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors">
            Request Custom Package
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
