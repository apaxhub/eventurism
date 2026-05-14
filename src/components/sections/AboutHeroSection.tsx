'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-ivory overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Content & Typography */}
          <div className="max-w-xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-primary/60" />
              <span className="font-sans text-xs tracking-[0.2em] text-secondary/80 uppercase font-medium">
                Our Story
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display font-medium text-5xl sm:text-6xl lg:text-[4.5rem] text-secondary leading-[1.1] mb-8"
            >
              Travel with <em className="text-primary not-italic font-serif">purpose</em> and passion.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg font-sans text-secondary/80 leading-relaxed mb-6 max-w-md font-light"
            >
              Since 2011, we have believed that travel is more than just visiting a destination—it is about the connections you make and the moments that stay with you forever.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg font-sans text-secondary/70 leading-relaxed max-w-md font-light"
            >
              We craft authentic, thoughtfully designed journeys that allow you to explore the world at your own pace, supported by people who truly care.
            </motion.p>
          </div>

          {/* Right Column: Imagery Collage */}
          <div className="relative h-[450px] sm:h-[600px] w-full mt-12 lg:mt-0">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/60 rounded-full blur-3xl pointer-events-none" />

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-[5%] right-[5%] w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] z-10 border-4 border-ivory/50"
            >
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200"
                alt="Travelers exploring a scenic landscape"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-[5%] left-[0%] w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-xl z-20 border-[8px] border-ivory"
            >
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800"
                alt="Authentic local experience"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
