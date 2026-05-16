'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Package } from '@prisma/client'

interface ToursGridSectionProps {
  initialPackages: Package[]
}

export function ToursGridSection({ initialPackages }: ToursGridSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spacious Grid (Single Column Mobile, Two Column Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12">
          {initialPackages.map((pkg, idx) => (
            <AnimatedSection key={pkg.id} delay={0.1 * idx}>
              <div className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.03)] border border-border/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                
                {/* Immersive Image */}
                <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden">
                  <Image 
                    src={pkg.thumbnail} 
                    alt={pkg.title} 
                    fill 
                    className="object-cover" 
                  />
                  
                  {/* Subtle Location Tag */}
                  <div className="absolute top-5 left-5">
                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full flex items-center gap-2 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-widest">{pkg.destination}</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="p-6 sm:p-10 flex flex-col flex-grow bg-white">
                  
                  <div className="flex items-center gap-2 text-secondary/60 mb-4 font-sans text-[11px] font-bold uppercase tracking-widest">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-secondary mb-4 leading-snug">
                    {pkg.title}
                  </h3>

                  <div 
                    className="font-sans text-secondary/70 leading-relaxed font-light mb-10 text-[15px] sm:text-base flex-grow line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: pkg.description }}
                  />

                  {/* Dual CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-border/50">
                    <Link 
                      href={`/tours/${pkg.slug}`}
                      className="flex-1 px-6 py-3.5 rounded-full bg-secondary text-white font-sans text-[13px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-primary transition-colors duration-300 group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <a 
                      href={`https://wa.me/917449229229?text=Hi, I am interested in the ${pkg.title} package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3.5 rounded-full bg-white border border-border/60 text-secondary font-sans text-[13px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:border-primary/40 hover:text-primary transition-colors duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                  
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
