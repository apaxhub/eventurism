'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function ContactFinalCTASection() {
  const scrollToForm = () => {
    // Scroll to the top where the inquiry form is
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2400&q=80" 
          alt="A serene luxury beach horizon"
          fill
          className="object-cover"
        />
        {/* Soft, warm gradient overlay to create a cinematic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex flex-col items-center justify-end text-center mt-32 lg:mt-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-sans text-xs tracking-widest text-white/80 uppercase font-semibold block mb-4 mt-2">
            The World Awaits
          </span>
          
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.1] mb-6">
            Your Masterpiece <br />
            <em className="text-primary/90 not-italic">Begins Here.</em>
          </h2>
          
          <p className="font-sans text-white/70 text-lg sm:text-xl leading-relaxed font-light mb-12 max-w-2xl mx-auto">
            Our artisans are ready to transform your aspirations into an unforgettable reality. Take the first step toward your next great adventure.
          </p>

          <button 
            onClick={scrollToForm}
            className="inline-flex items-center gap-5 group bg-transparent border-none p-0 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary transition-all duration-500">
              <ArrowUp className="w-5 h-5 text-white transition-transform duration-500 group-hover:-translate-y-1" />
            </div>
            <span className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors duration-500">
              Return to Inquiry
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
