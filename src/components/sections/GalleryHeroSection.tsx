'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ArrowDown } from 'lucide-react'

export function GalleryHeroSection() {
  const scrollToGallery = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-ivory pt-32 pb-24 lg:pt-0 lg:pb-0 flex items-center overflow-hidden">
      
      {/* Soft background glow for cinematic atmosphere */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Editorial Text */}
          <div className="lg:col-span-5 relative z-20">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-primary" />
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                  The Archives
                </span>
              </div>
              
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[68px] text-secondary leading-[1.05] mb-8">
                A Visual <br />
                <em className="text-primary not-italic">Symphony</em> <br />
                of the World.
              </h1>
              
              <p className="font-sans text-lg text-secondary/70 leading-relaxed font-light mb-12 lg:pr-4">
                More than mere photographs, these are captured emotions, whispered secrets of ancient cities, and the quiet awe of undiscovered landscapes. A curation of unscripted moments.
              </p>

              <button 
                onClick={scrollToGallery}
                className="flex items-center gap-5 group bg-transparent border-none p-0 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full border border-secondary/20 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(242,100,64,0.15)] transition-all duration-500 bg-white">
                  <ArrowDown className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-500" />
                </div>
                <span className="font-sans text-xs tracking-widest text-secondary uppercase font-semibold group-hover:text-primary transition-colors duration-500">
                  Explore the Gallery
                </span>
              </button>
            </AnimatedSection>
          </div>

          {/* Layered Photography Composition */}
          <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] lg:h-[700px] w-full mt-10 lg:mt-0">
            {/* Main large image (background landscape) */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[32px] overflow-hidden shadow-2xl z-10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1600&q=80" 
                alt="Sweeping cinematic landscape"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
            </motion.div>

            {/* Overlapping smaller portrait image (foreground moment) */}
            <motion.div 
              initial={{ opacity: 0, y: 60, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute bottom-0 left-0 w-[50%] h-[60%] rounded-[24px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,23,42,0.4)] z-20 border-[8px] border-ivory"
            >
              <Image 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" 
                alt="Traveler exploring a cinematic setting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
