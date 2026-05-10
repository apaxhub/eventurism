'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
          alt="Beautiful travel destination in India"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Chennai&apos;s Most Trusted Tour Company</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Your Journey to<br />
            <em className="text-primary not-italic">India&apos;s Most Beautiful</em><br />
            Destinations.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg font-sans text-white/75 leading-relaxed mb-8 max-w-lg"
          >
            Hill stations, beach escapes, heritage trails, and custom holidays — all expertly planned
            for families and groups. Trusted by 500+ travellers since 2011.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Link href="/tours">
              <Button size="lg" className="gap-2">
                Explore Packages <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary gap-2">
                <Image src="/whatsapp_logo.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 object-contain" />
                WhatsApp Us
              </Button>
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-sans">4.8/5 · 212 Reviews</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-white/80 text-sm font-sans">Est. 2011</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-white/80 text-sm font-sans">Based in Chennai, Tamil Nadu</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs font-sans tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
