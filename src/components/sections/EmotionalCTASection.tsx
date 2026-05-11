'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function EmotionalCTASection() {
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
          src="https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=2400&q=80" 
          alt="A tranquil path toward the horizon"
          fill
          className="object-cover"
        />
        {/* Soft, warm gradient overlay to create a cinematic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex items-center">
        <div className="w-full lg:w-[45%]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="bg-ivory/95 backdrop-blur-md p-10 sm:p-14 lg:p-16 rounded-[32px] shadow-[0_40px_80px_rgba(15,23,42,0.3)] border border-white/20 relative"
          >
            {/* Elegant decorative line */}
            <div className="absolute top-0 left-10 w-16 h-1 bg-primary rounded-b-full" />

            <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-4 mt-2">
              Your Invitation
            </span>
            
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[52px] text-secondary leading-[1.1] mb-6">
              Let&apos;s Write the <br />
              <em className="text-primary not-italic">Next Chapter</em> Together.
            </h2>
            
            <p className="font-sans text-secondary/70 text-lg leading-relaxed font-light mb-12">
              Whether you know exactly where you want to go, or you are simply looking for a spark of inspiration, our travel designers are here to listen. No pressure, no obligations—just a conversation about the art of travel.
            </p>

            <Link href="/contact" className="inline-flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-full border border-secondary/20 flex items-center justify-center bg-white group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(242,100,64,0.2)] transition-all duration-500">
                <ArrowRight className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-500" />
              </div>
              <span className="font-display font-bold text-xl text-secondary group-hover:text-primary transition-colors duration-500">
                Start the Conversation
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
