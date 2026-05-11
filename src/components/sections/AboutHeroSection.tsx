'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function AboutHeroSection() {
  return (
    <section className="relative bg-ivory min-h-screen flex items-center pt-24 lg:pt-0">
      
      {/* Desktop Background Image (Right Side) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[60%] h-full">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=2000&q=80" 
            alt="Travelers exploring a beautiful misty landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-transparent to-transparent w-32" />
          <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
        </motion.div>
      </div>

      {/* Mobile/Tablet Image */}
      <div className="block lg:hidden w-full h-[450px] relative">
        <Image 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80" 
          alt="Travelers exploring a beautiful misty landscape"
          fill
          className="object-cover rounded-b-[40px] shadow-lg"
          priority
        />
        <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply rounded-b-[40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -mt-24 lg:mt-0 pb-20 lg:pb-0">
        
        {/* Layered Editorial Text Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full lg:w-[55%] xl:w-[50%] bg-white p-8 sm:p-12 lg:p-16 xl:p-20 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12)] border border-border/50 lg:my-32 relative"
        >
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary" />
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                Our Philosophy
              </span>
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[56px] text-secondary leading-[1.1] mb-8">
              Curators of <br />
              <em className="text-primary not-italic">Extraordinary</em> Journeys.
            </h1>
            
            <p className="font-sans text-lg sm:text-xl text-secondary/90 leading-relaxed font-medium mb-6">
              Since 2011, we haven&apos;t just planned trips; we&apos;ve designed chapters of your life.
            </p>
            
            <p className="font-sans text-secondary/70 leading-relaxed font-light mb-10 text-[15px] sm:text-base">
              Eventurism was born in Chennai from a simple belief: travel should be an art form. We move beyond generic itineraries and rigid schedules to craft deeply personal, authentic experiences that linger in your memory long after the journey ends.
            </p>

            <div className="relative pl-6 sm:pl-8 py-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-primary/10 rounded-full" />
              <blockquote className="font-display text-xl sm:text-2xl text-secondary italic leading-relaxed text-secondary/90">
                &ldquo;Our greatest masterpiece is the memory you take home. We measure our success not in miles traveled, but in moments cherished.&rdquo;
              </blockquote>
            </div>
          </AnimatedSection>
        </motion.div>

      </div>
    </section>
  )
}
