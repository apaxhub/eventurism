'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Compass, Key, HeartHandshake, ShieldCheck } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const advantages = [
  {
    id: 'bespoke',
    title: 'Bespoke Itineraries',
    description: 'Every journey is meticulously crafted to your personal tastes, rhythm, and desires. No templates, only originals.',
    icon: Compass,
  },
  {
    id: 'authentic',
    title: 'Unfiltered Authenticity',
    description: 'Our deeply rooted local connections grant you exclusive access to hidden gems and experiences far beyond the guidebook.',
    icon: Key,
  },
  {
    id: 'concierge',
    title: 'Concierge-Level Care',
    description: 'From your first spark of inspiration until you return home, enjoy seamless, dedicated 24/7 travel support.',
    icon: HeartHandshake,
  },
  {
    id: 'platinum',
    title: 'The Platinum Standard',
    description: 'Uncompromising quality in every detail. We partner exclusively with the finest hospitality and transport providers.',
    icon: ShieldCheck,
  }
]

export function WhyEventurismSection() {
  return (
    <section className="py-24 md:py-32 bg-ivory overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: Cinematic Trust Image */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[800px] rounded-[32px] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
              alt="Premium Travel Concierge Experience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-secondary/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            
            {/* Overlay badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-[20px] border border-white/20"
            >
              <p className="font-display font-bold text-2xl text-secondary mb-1">Since 2011</p>
              <p className="font-sans text-sm text-secondary/70">Over a decade of curating exceptional journeys for discerning travelers.</p>
            </motion.div>
          </div>

          {/* Right: Editorial Content & Cards */}
          <div className="lg:col-span-7 lg:pl-10">
            <AnimatedSection className="mb-16">
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                The Eventurism Difference
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-4 leading-[1.15]">
                Why Travel With Us?
              </h2>
              <p className="font-sans text-secondary/70 mt-6 text-lg font-light leading-relaxed max-w-xl">
                We don&apos;t just book trips; we orchestrate lifelong memories. Discover the advantages of entrusting your travels to true destination artisans.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 relative">
              {advantages.map((adv, index) => {
                const Icon = adv.icon
                return (
                  <motion.div 
                    key={adv.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_40px_rgb(15,23,42,0.04)] border border-border/30 hover:border-primary/20 transition-colors duration-500 ${
                      index % 2 !== 0 ? 'sm:mt-12' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-ivory-dark flex items-center justify-center mb-6 text-primary">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-secondary mb-3">
                      {adv.title}
                    </h3>
                    <p className="font-sans text-sm text-secondary/60 leading-relaxed font-light">
                      {adv.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
