'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function OurStorySection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-dark relative overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-primary/60" />
            <span className="font-sans text-xs tracking-[0.2em] text-secondary/80 uppercase font-medium">
              Beyond the Guidebook
            </span>
            <div className="h-px w-8 bg-primary/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-4xl sm:text-5xl text-secondary mb-6 leading-tight"
          >
            We believe travel is about human connection.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-sans text-secondary/70 font-light leading-relaxed"
          >
            It is not just about the places you go, but how you experience them.
          </motion.p>
        </div>

        {/* Story Layout 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-20 sm:mb-32">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-border/30">
              <Image 
                src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?w=1200&q=80" 
                alt="Local street interaction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="max-w-lg">
              <h3 className="font-display font-medium text-3xl text-secondary mb-6">
                Returning to Authentic Travel
              </h3>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg mb-6">
                We noticed that modern travel was becoming increasingly transactional. Between rushed group tours and algorithmic bookings, the genuine joy of exploring a new place was getting lost.
              </p>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg">
                We wanted to change that. We started Eventurism to bring back the romance of the journey, curating trips that let you slow down, breathe, and truly connect with your surroundings.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Story Layout 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-border/30">
              <Image 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80" 
                alt="Travelers embracing a majestic landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="max-w-lg md:ml-auto">
              <h3 className="font-display font-medium text-3xl text-secondary mb-6">
                Thoughtfully Curated Journeys
              </h3>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg mb-6">
                Over the years, we have built genuine relationships with local guides, boutique stays, and communities. We don&apos;t just send you to a destination; we invite you to experience it alongside people who know it best.
              </p>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg">
                Whether it is a peaceful family retreat or a romantic honeymoon, we handle the complex details behind the scenes so you can simply enjoy the moment comfortably and confidently.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
