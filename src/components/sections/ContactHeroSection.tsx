'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ArrowDown } from 'lucide-react'

export function ContactHeroSection() {
  const scrollToForm = () => {
    // Scrolls down slightly past the hero
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-32 pb-24 lg:pt-0 lg:pb-0 overflow-hidden bg-ivory">
      
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image 
            src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=2400&q=80" 
            alt="Elegant luxury travel consultation space"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle warm gradient overlays to create a cinematic atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Layered Editorial Text Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full md:w-[80%] lg:w-[50%] xl:w-[45%] bg-white/95 backdrop-blur-md p-10 sm:p-14 lg:p-16 rounded-[32px] shadow-[0_40px_80px_rgba(15,23,42,0.15)] border border-white/60 mt-12 lg:mt-0"
        >
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary" />
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                Private Consultation
              </span>
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[56px] text-secondary leading-[1.1] mb-6">
              A Conversation <br />
              <em className="text-primary not-italic">Before</em> the Journey.
            </h1>
            
            <p className="font-sans text-lg text-secondary/80 leading-relaxed font-light mb-8">
              Every unforgettable voyage begins with a simple conversation. Whether you have a specific destination in mind or merely a feeling you wish to capture, our concierge team is ready to listen.
            </p>
            
            <p className="font-sans text-sm text-secondary/50 leading-relaxed font-medium mb-10 tracking-wide uppercase">
              No pressure. No obligations. Just Travel.
            </p>

            <button 
              onClick={scrollToForm}
              className="group inline-flex items-center gap-4 bg-transparent border-none p-0 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center bg-white group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(242,100,64,0.15)] transition-all duration-500">
                <ArrowDown className="w-4 h-4 text-secondary group-hover:text-primary transition-colors duration-500" />
              </div>
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-secondary group-hover:text-primary transition-colors duration-500">
                Contact Us
              </span>
            </button>
            
          </AnimatedSection>
        </motion.div>

      </div>
    </section>
  )
}
