'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const packages = [
  {
    id: 'p1',
    destination: 'The Andaman Archipelagos',
    location: 'Andaman Islands, India',
    description: 'Uncover untouched coral reefs and pristine white sands. A secluded paradise where time slows down and nature takes center stage. Perfect for those seeking both adventure and absolute tranquility.',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1589394815804-964ce0ff96c7?w=1200&q=80'
  },
  {
    id: 'p2',
    destination: 'Golden Sands of Rajasthan',
    location: 'Rajasthan, India',
    description: 'Step into a world of royal heritage. Stay in opulent palaces, explore ancient forts, and dine under the starlit desert sky. A deeply cultural journey through India’s most regal state.',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80'
  },
  {
    id: 'p3',
    destination: 'Spiritual Varanasi',
    location: 'Uttar Pradesh, India',
    description: 'Witness the soul of India on the banks of the Ganges. An immersive journey into ancient rituals, mysticism, and the profound daily life of one of the world’s oldest living cities.',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80'
  },
  {
    id: 'p4',
    destination: 'Coorg Coffee Trails',
    location: 'Karnataka, India',
    description: 'Breathe in the aroma of fresh coffee estates nestled in the misty Western Ghats. A tranquil escape into nature featuring estate walks, local cuisine, and comfortable luxury.',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1596422846543-7ec4602f3117?w=1200&q=80'
  }
]

export function ToursGridSection() {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Spacious Grid (Single Column Mobile, Two Column Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12">
          {packages.map((pkg, idx) => (
            <AnimatedSection key={pkg.id} delay={0.1 * idx}>
              <div className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.03)] border border-border/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                
                {/* Immersive Image */}
                <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.destination} 
                    fill 
                    className="object-cover" 
                  />
                  
                  {/* Subtle Location Tag */}
                  <div className="absolute top-5 left-5">
                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full flex items-center gap-2 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-widest">{pkg.location}</span>
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
                    {pkg.destination}
                  </h3>

                  <p className="font-sans text-secondary/70 leading-relaxed font-light mb-10 text-[15px] sm:text-base flex-grow">
                    {pkg.description}
                  </p>

                  {/* Dual CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-border/50">
                    <Link 
                      href={`/tours/${pkg.id}`}
                      className="flex-1 px-6 py-3.5 rounded-full bg-secondary text-white font-sans text-[13px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-primary transition-colors duration-300 group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <a 
                      href={`https://wa.me/919999999999?text=Hi, I am interested in the ${pkg.destination} package.`}
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
