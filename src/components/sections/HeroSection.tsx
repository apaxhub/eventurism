'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-ivory overflow-hidden pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-[calc(100vh-80px)] py-12 lg:py-20">
          
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
                Eventurism Travel
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display font-medium text-5xl sm:text-6xl lg:text-[4.5rem] text-secondary leading-[1.1] mb-8"
            >
              Discover the world with <em className="text-primary not-italic font-serif">authenticity.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg font-sans text-secondary/70 leading-relaxed mb-10 max-w-md font-light"
            >
              We craft meaningful travel experiences that connect you deeply with places, cultures, and landscapes. Let us handle the details while you embrace the journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
            >
              <Link 
                href="/tours"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-4 font-sans font-medium transition-colors duration-300 flex items-center justify-center gap-2"
              >
                View Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white border border-border hover:border-primary/30 hover:shadow-sm text-secondary rounded-full px-8 py-4 font-sans font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                Inquire on WhatsApp
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Layered Photography */}
          <div className="relative h-[450px] sm:h-[600px] lg:h-[700px] w-full mt-12 lg:mt-0">
            {/* Background decorative soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neutral/10 rounded-full blur-3xl pointer-events-none" />

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-[5%] right-[5%] w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10"
            >
              <Image
                src="/hero-hills.webp"
                alt="Scenic travel destination"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Overlapping Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-[5%] left-[0%] w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-2xl z-20 border-[8px] border-ivory"
            >
              <Image
                src="/hero-heritage.webp"
                alt="Cultural heritage travel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>

            {/* Overlapping Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-[10%] -left-[5%] w-[35%] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl z-20 border-[8px] border-ivory hidden sm:block"
            >
               <Image
                src="/hero-beach.webp"
                alt="Relaxing beach escape"
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
