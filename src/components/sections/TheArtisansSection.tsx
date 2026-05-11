'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const artisans = [
  {
    role: "Travel Curators",
    description: "The architects of your itinerary. They weave together your aspirations with our deep, intimate destination knowledge.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000&q=80", // candid looking at maps/planning
    aspect: "aspect-[3/4]",
    marginTop: "mt-0"
  },
  {
    role: "Local Experience Experts",
    description: "Our eyes and ears on the ground. They are constantly discovering the hidden gems that never make it into the guidebooks.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1000&q=80", // walking in an authentic local setting
    aspect: "aspect-[4/5]",
    marginTop: "md:mt-32"
  },
  {
    role: "Cultural Guides",
    description: "Passionate historians and storytellers who bring ancient walls to life and bridge the profound gap between cultures.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1000&q=80", // pointing something out / cultural setting
    aspect: "aspect-[4/5]",
    marginTop: "mt-0"
  },
  {
    role: "Journey Planners",
    description: "The meticulous organizers working behind the scenes, ensuring every transfer and reservation feels completely effortless.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80", // working together / lifestyle
    aspect: "aspect-[3/4]",
    marginTop: "md:mt-32"
  }
]

export function TheArtisansSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20 md:mb-32">
          <div className="lg:col-span-6">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary" />
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                  The People Behind The Journey
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary leading-[1.15]">
                Meet The Destination Artisans.
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <AnimatedSection delay={0.2}>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg">
                We are not just booking agents. We are a collective of deeply passionate travelers, meticulous planners, and local experts dedicated to the art of meaningful exploration.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Masonry-Style Candid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {artisans.map((artisan, index) => (
            <motion.div 
              key={artisan.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
              className={`flex flex-col ${artisan.marginTop}`}
            >
              <div className={`relative w-full ${artisan.aspect} rounded-[24px] overflow-hidden mb-8 group shadow-lg`}>
                <Image 
                  src={artisan.image} 
                  alt={artisan.role}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-transparent" />
              </div>
              <div className="pl-6 border-l border-primary/30">
                <h3 className="font-display font-bold text-2xl text-secondary mb-3">
                  {artisan.role}
                </h3>
                <p className="font-sans text-secondary/60 leading-relaxed font-light text-[15px]">
                  {artisan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
