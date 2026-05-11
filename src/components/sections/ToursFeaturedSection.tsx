'use client'

import Image from 'next/image'
import { MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const featuredPackages = [
  {
    id: 'f1',
    destination: 'The Kerala Backwaters',
    tagline: 'A Symphony of Water and Light',
    duration: '5 Days / 4 Nights',
    description: 'Drift through time on a private luxury houseboat. Wake up to the sound of rippling water, savor authentic coastal cuisine prepared by your personal chef, and witness sunsets that paint the sky in impossible colors.',
    highlights: ['Private Premium Houseboat', 'Ayurvedic Spa Session', 'Candlelight Dinner on Deck', 'Village Walk Experience'],
    price: '₹45,000',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
    align: 'left' // Image left, text right
  },
  {
    id: 'f2',
    destination: 'Mystic Munnar Peaks',
    tagline: 'Above the Clouds, Beyond the Ordinary',
    duration: '4 Days / 3 Nights',
    description: 'Escape to a colonial-era tea estate transformed into a boutique luxury retreat. Breathe the crisp mountain air, trek through emerald plantations, and reconnect with nature in absolute comfort.',
    highlights: ['Heritage Tea Estate Stay', 'Guided Plantation Trek', 'Exclusive Tea Tasting', 'Mountain View Balcony'],
    price: '₹38,000',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666c6b?w=1200&q=80',
    align: 'right' // Image right, text left
  }
]

export function ToursFeaturedSection() {
  return (
    <section className="py-24 bg-ivory overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection>
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                Signature Collection
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mb-6 leading-[1.1]">
              Curated <em className="text-primary not-italic font-medium">Masterpieces</em>
            </h2>
            <p className="font-sans text-lg text-secondary/70 font-light">
              Our most sought-after experiences, designed with obsessive attention to detail for those who demand the extraordinary.
            </p>
          </AnimatedSection>
        </div>

        {/* Featured Packages List */}
        <div className="space-y-32">
          {featuredPackages.map((pkg) => (
            <div key={pkg.id} className={`flex flex-col ${pkg.align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-0`}>
              
              {/* Image Column */}
              <div className="w-full lg:w-[55%] relative">
                <AnimatedSection 
                  className={`relative z-10 w-full h-[450px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] ${pkg.align === 'left' ? 'lg:mr-[-10%]' : 'lg:ml-[-10%]'}`}
                >
                  <Image src={pkg.image} alt={pkg.destination} fill className="object-cover transition-transform duration-1000 hover:scale-105" />
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
                </AnimatedSection>
                {/* Decorative background blob */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${pkg.align === 'left' ? '-left-20' : '-right-20'} w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none`} />
              </div>

              {/* Content Column (Overlapping) */}
              <div className="w-full lg:w-[55%] relative z-20">
                <AnimatedSection 
                  className="bg-white p-8 sm:p-12 lg:p-14 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.08)] border border-border/40"
                  delay={0.2}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-sans text-[11px] tracking-widest text-secondary/60 uppercase font-bold">
                      {pkg.destination}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl lg:text-[2.5rem] text-secondary mb-4 leading-[1.15]">
                    {pkg.tagline}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-secondary/80 mb-6 font-sans text-[13px] font-semibold bg-ivory/50 inline-flex px-3 py-1.5 rounded-md border border-border/50">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                  
                  <p className="font-sans text-secondary/70 leading-relaxed font-light mb-8 text-[15px]">
                    {pkg.description}
                  </p>
                  
                  <div className="mb-10">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-4">Experience Highlights</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {pkg.highlights.map(highlight => (
                        <li key={highlight} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="font-sans text-[13px] text-secondary/80 font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/40 gap-6">
                    <div className="w-full sm:w-auto text-left">
                      <p className="font-sans text-[10px] text-secondary/40 uppercase tracking-widest mb-1 font-bold">Curated from</p>
                      <p className="font-display text-2xl font-medium text-secondary">{pkg.price} <span className="font-sans text-xs text-secondary/50 font-normal">/ person</span></p>
                    </div>
                    <button className="w-full sm:w-auto px-8 py-3.5 bg-secondary hover:bg-primary text-white rounded-full font-sans text-[13px] font-medium transition-colors duration-300 flex items-center justify-center gap-2 group shadow-[0_10px_20px_rgba(15,23,42,0.1)]">
                      Explore Itinerary
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="mt-28 text-center">
          <AnimatedSection>
             <button className="px-8 py-4 bg-transparent border border-secondary/20 hover:border-primary hover:text-primary text-secondary/80 hover:bg-white rounded-full font-sans text-[13px] font-medium transition-all duration-300 inline-flex items-center gap-2 group">
               View All Signature Packages
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
