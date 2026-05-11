'use client'

import Image from 'next/image'
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const trips = [
  {
    id: 't1',
    destination: 'The Andaman Archipelagos',
    description: 'Uncover untouched coral reefs and pristine white sands. A secluded paradise where time slows down.',
    duration: '6 Days',
    travelerType: 'Couples / Retreat',
    tags: ['Island Hopping', 'Scuba Diving', 'Sunset Cruise'],
    price: '₹55,000',
    image: 'https://images.unsplash.com/photo-1589394815804-964ce0ff96c7?w=800&q=80'
  },
  {
    id: 't2',
    destination: 'Golden Sands of Rajasthan',
    description: 'Step into a world of royal heritage. Stay in opulent palaces and dine under the starlit desert sky.',
    duration: '8 Days',
    travelerType: 'Family / Culture',
    tags: ['Palace Stays', 'Desert Safari', 'Heritage Tour'],
    price: '₹72,000',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80'
  },
  {
    id: 't3',
    destination: 'Spiritual Varanasi',
    description: 'Witness the soul of India on the banks of the Ganges. An immersive journey into ancient rituals and mysticism.',
    duration: '4 Days',
    travelerType: 'Solo / Culture',
    tags: ['Ghat Walks', 'Evening Aarti', 'Temple Tour'],
    price: '₹28,000',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80'
  },
  {
    id: 't4',
    destination: 'Coorg Coffee Trails',
    description: 'Breathe in the aroma of fresh coffee estates nestled in the misty Western Ghats. A tranquil escape into nature.',
    duration: '3 Days',
    travelerType: 'Nature lovers',
    tags: ['Estate Stay', 'Coffee Tasting', 'Nature Walks'],
    price: '₹22,000',
    image: 'https://images.unsplash.com/photo-1596422846543-7ec4602f3117?w=800&q=80'
  }
]

export function ToursGridSection() {
  return (
    <section className="py-24 bg-ivory border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <AnimatedSection>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-4">
                Curated <em className="text-primary not-italic font-medium">Experiences</em>
              </h2>
              <p className="font-sans text-secondary/70 font-light text-lg">
                Explore our collection of meticulously planned journeys, each designed to reveal the authentic heart of a destination.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection>
             <p className="font-sans text-[11px] text-secondary/40 font-bold tracking-widest uppercase">Showing {trips.length} Journeys</p>
          </AnimatedSection>
        </div>

        {/* Spacious Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12">
          {trips.map((trip, idx) => (
            <AnimatedSection key={trip.id} delay={0.1 * idx}>
              <div className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] border border-border/40 transition-all duration-500">
                
                {/* Immersive Image */}
                <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                  <Image 
                    src={trip.image} 
                    alt={trip.destination} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full flex items-center gap-2 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-widest">{trip.destination}</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow relative bg-white">
                  
                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-secondary/50 mb-5 font-sans text-[10px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-secondary/30" />
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      <span>{trip.travelerType}</span>
                    </div>
                  </div>

                  <p className="font-sans text-secondary/80 leading-relaxed font-light mb-8 text-[15px] flex-grow">
                    {trip.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {trip.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-ivory text-secondary/70 text-[10px] font-sans font-bold uppercase tracking-widest rounded-md border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer (Price & CTA) */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/50 mt-auto">
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-1">From</p>
                      <p className="font-display text-xl font-medium text-secondary">{trip.price} <span className="font-sans text-xs text-secondary/50 font-normal">/ person</span></p>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center text-secondary border border-border/50 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 text-center">
          <AnimatedSection>
            <button className="px-8 py-3 border-b border-secondary/30 hover:border-primary hover:text-primary text-secondary/80 font-sans text-sm font-medium transition-all duration-300 pb-1">
              Load More Experiences
            </button>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
