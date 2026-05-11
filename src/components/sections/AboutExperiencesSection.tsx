'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function AboutExperiencesSection() {
  return (
    <section className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20 md:mb-32">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
            Signature Moments
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-4 leading-tight">
            Memories Over Itineraries
          </h2>
          <p className="font-sans text-secondary/70 mt-5 text-lg font-light leading-relaxed">
            We don&apos;t just book hotels; we curate moments that stop time. From private clifftop dinners to silent wellness retreats, these are the experiences that define an Eventurism journey.
          </p>
        </AnimatedSection>

        <div className="space-y-16 lg:space-y-32">
          
          {/* 1. Full Width Banners - Private Dining */}
          <div className="relative w-full h-[500px] lg:h-[700px] rounded-[32px] overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1510166089176-b57564a542b1?w=2000&q=80" 
              alt="Luxury private dining experience"
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-8 left-8 sm:bottom-16 sm:left-16 lg:left-24 max-w-lg pr-8"
            >
              <span className="font-sans text-xs tracking-widest text-white/80 uppercase font-semibold block mb-3">
                Private Dining
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                A Table for Two, <br className="hidden sm:block" />
                <em className="text-primary/90 not-italic">At the Edge of the World.</em>
              </h3>
            </motion.div>
          </div>

          {/* 2 & 3. Split Layout - Cultural & Coastal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Cultural Explorations */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-8 group">
                <Image 
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80" 
                  alt="Cultural exploration"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-transparent" />
              </div>
              <div className="lg:pr-12">
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-3">
                  Cultural Explorations
                </span>
                <h3 className="font-display font-bold text-3xl text-secondary leading-tight mb-4">
                  Beyond the Façade of the City.
                </h3>
                <p className="font-sans text-secondary/70 leading-relaxed font-light">
                  Step past the tourist traps and into the heart of a civilization. Walk with historians, dine in private heritage homes, and witness traditions that have shaped centuries.
                </p>
              </div>
            </motion.div>

            {/* Coastal Retreats */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:mt-32"
            >
              <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-8 group">
                <Image 
                  src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80" 
                  alt="Coastal retreat"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-transparent" />
              </div>
              <div className="lg:pr-12">
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-3">
                  Coastal Retreats
                </span>
                <h3 className="font-display font-bold text-3xl text-secondary leading-tight mb-4">
                  Where the Horizon Meets Your Doorstep.
                </h3>
                <p className="font-sans text-secondary/70 leading-relaxed font-light">
                  Oceanfront sanctuaries chosen for their absolute privacy and untouched beaches. Let the rhythm of the tides dictate the pace of your days in absolute barefoot luxury.
                </p>
              </div>
            </motion.div>

          </div>

          {/* 4. Asymmetrical Overlap - Mountain Adventures */}
          <div className="relative w-full h-[600px] lg:h-[800px] mt-16 lg:mt-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-full lg:w-[80%] h-[400px] lg:h-[700px] rounded-[32px] overflow-hidden group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80" 
                alt="Mountain adventure"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 lg:left-8 w-[90%] sm:w-[80%] lg:w-[45%] bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.15)] border border-border/50 z-20"
            >
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-4">
                Mountain Adventures
              </span>
              <h3 className="font-display font-bold text-3xl lg:text-4xl text-secondary leading-tight mb-5">
                Elevation for the Soul.
              </h3>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg">
                Discover the raw, unfiltered majesty of high-altitude landscapes. From luxury glamping beneath the Himalayas to private helicopter tours over pristine valleys, we bring bespoke comfort to the world&apos;s most remote peaks.
              </p>
            </motion.div>
          </div>

          {/* 5. Centered Cinematic - Wellness */}
          <div className="text-center max-w-4xl mx-auto pt-16 lg:pt-32">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-[21/9] rounded-[32px] overflow-hidden mb-12 shadow-2xl group">
                <Image 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2000&q=80" 
                  alt="Luxury wellness spa"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-transparent" />
              </div>
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-4">
                Luxury Wellness Escapes
              </span>
              <h3 className="font-display font-bold text-3xl lg:text-5xl text-secondary leading-tight mb-6">
                Return to Your Center.
              </h3>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg max-w-2xl mx-auto">
                Holistic sanctuaries designed to restore balance. Immerse yourself in ancient Ayurvedic therapies, private yoga overlooking misty forests, and personalized wellness regimens in absolute tranquility.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
