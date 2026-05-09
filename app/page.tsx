import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { PackageCard } from '@/components/ui/PackageCard'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

async function getFeaturedPackages() {
  try {
    return await prisma.package.findMany({
      where: { featured: true, published: true },
      take: 3,
      orderBy: { createdAt: 'desc' },
    })
  } catch {
    return []
  }
}

export default async function HomePage() {
  const featuredPackages = await getFeaturedPackages()

  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />

      {featuredPackages.length > 0 && (
        <section className="py-20 bg-ivory-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-mono text-xs tracking-widest text-primary uppercase">Trending Now</span>
                <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-2">
                  Handpicked For You
                </h2>
              </div>
              <Link href="/tours" className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                See all packages <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPackages.map(pkg => (
                <PackageCard key={pkg.id} {...pkg} id={pkg.id} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden h-72 group">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" alt="Corporate events" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="font-mono text-xs tracking-widest text-primary uppercase">For Corporates</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">Unforgettable Events, Flawlessly Executed</h3>
                <Link href="/contact" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors">
                  Plan an Event <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 group">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Family tours" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="font-mono text-xs tracking-widest text-primary uppercase">For Families and Couples</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">Curated Journeys. Stress-Free Travel.</h3>
                <Link href="/tours" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors">
                  Browse Tours <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
