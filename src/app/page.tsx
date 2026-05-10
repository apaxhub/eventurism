import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { PackageCard } from '@/components/ui/PackageCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
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
            <AnimatedSection className="flex items-end justify-between mb-12">
              <div>
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Popular Picks</span>
                <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-2">
                  Handpicked For You
                </h2>
              </div>
              <Link href="/tours" className="hidden md:flex items-center gap-1 text-sm font-medium font-sans text-primary hover:gap-2 transition-all">
                All packages <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPackages.map((pkg, index) => (
                <AnimatedSection key={pkg.id} delay={index * 0.1}>
                  <PackageCard {...pkg} id={pkg.id} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Destination showcase */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Top Destinations</span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-2">
              Where Would You Like to Go?
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatedSection direction="left" delay={0.1} className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Hill station tours from Chennai" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Escape the Heat</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">Hill Station Getaways</h3>
                <p className="font-sans text-white/70 text-sm mb-3">Ooty · Kodaikanal · Munnar · Coorg</p>
                <Link href="/tours?category=Hill+Station" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm font-sans transition-colors">
                  Explore Packages <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" alt="Beach holidays from Chennai" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Sun & Sea</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-2">Beach Holiday Packages</h3>
                <p className="font-sans text-white/70 text-sm mb-3">Andaman · Goa · Pondicherry · Kerala</p>
                <Link href="/tours?category=Beach" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm font-sans transition-colors">
                  Explore Packages <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
