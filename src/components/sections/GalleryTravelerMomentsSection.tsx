'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function GalleryTravelerMomentsSection() {
  return (
    <section className="py-24 lg:py-40 bg-white relative overflow-hidden border-t border-secondary/5">
      
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Documentary Photography */}
          <div className="w-full lg:w-[45%] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-[24px] overflow-hidden shadow-2xl z-10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80" 
                alt="Travelers connecting with locals in Rajasthan"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Overlapping small detail photo for depth */}
            <motion.div 
              initial={{ opacity: 0, y: 40, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute -bottom-10 -right-6 lg:-right-16 w-56 aspect-square rounded-[16px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] z-20 border-[8px] border-white"
            >
              <Image 
                src="https://images.unsplash.com/photo-1533555239916-2f0868f000b9?w=800&q=80" 
                alt="Intimate cultural detail"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Editorial Quote & Story */}
          <div className="w-full lg:w-[55%] relative z-30 pt-12 lg:pt-0">
            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-10 bg-primary" />
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                  A Traveler&apos;s Reflection
                </span>
              </div>
              
              <div className="relative pl-8 lg:pl-12">
                {/* Massive decorative quote mark */}
                <span className="absolute top-[-40px] left-[-20px] lg:top-[-60px] lg:left-[-30px] text-[100px] lg:text-[140px] font-display text-primary/10 leading-none pointer-events-none select-none">
                  &quot;
                </span>
                
                <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-[42px] text-secondary leading-[1.3] mb-12 italic">
                  It wasn&apos;t merely a journey across the map; it was a profound awakening. We didn&apos;t just see the world—we felt it deeply, guided by artisans who understand the quiet power of human connection.
                </h2>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-px bg-secondary/30" />
                  <div>
                    <h3 className="font-sans text-sm tracking-widest text-secondary uppercase font-semibold mb-1">
                      The Harrison Family
                    </h3>
                    <p className="font-sans text-xs tracking-wide text-secondary/50">
                      Cultural Immersion, Rajasthan
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  )
}
