'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ToursHeroContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  
  const isInternational = category === 'international'
  
  const title = isInternational ? 'International Packages' : 'Indian Packages'
  const subtitle = isInternational 
    ? 'Discover curated journeys across the globe, designed for unforgettable memories.'
    : 'Explore the diverse landscapes and rich heritage of India with our premium itineraries.'
  
  const bgImage = isInternational 
    ? 'https://images.unsplash.com/photo-1522764725576-4c06737210db?w=2400&q=80'
    : 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=2400&q=80'

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-ivory">
      {/* Soft Background Aesthetic */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative opacity-10"
        >
          <Image 
            src={bgImage} 
            alt="Travel background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ivory mix-blend-screen" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" />
            <span className="font-sans text-xs tracking-[0.2em] text-secondary/80 uppercase font-medium">
              Curated Collections
            </span>
            <div className="h-px w-8 bg-primary/60" />
          </div>
          
          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-secondary leading-[1.1] mb-6">
            {title}
          </h1>
          
          <p className="font-sans text-lg text-secondary/70 leading-relaxed font-light mx-auto max-w-2xl">
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

export function ToursHeroSection() {
  return (
    <Suspense fallback={<div className="h-[50vh] bg-ivory" />}>
      <ToursHeroContent />
    </Suspense>
  )
}
