'use client'

import { motion } from 'framer-motion'
import { Compass, HeartHandshake, ShieldCheck } from 'lucide-react'

const highlights = [
  {
    id: 'curated',
    title: 'Carefully Curated Packages',
    description: 'We handpick every destination, stay, and experience to ensure your journey is nothing short of extraordinary.',
    icon: Compass,
  },
  {
    id: 'personalized',
    title: 'Personalized Travel Planning',
    description: 'Your travel style is unique. We listen closely and design itineraries that perfectly match your pace and preferences.',
    icon: HeartHandshake,
  },
  {
    id: 'support',
    title: 'Trusted Support',
    description: 'From your first inquiry to your journey home, our dedicated team provides seamless, around-the-clock assistance.',
    icon: ShieldCheck,
  }
]

export function WhyEventurismSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-primary/60" />
            <span className="font-sans text-xs tracking-[0.2em] text-secondary/80 uppercase font-medium">
              The Eventurism Promise
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
            Why Choose Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-sans text-secondary/70 font-light"
          >
            We don&apos;t just book trips; we craft meaningful experiences designed entirely around you.
          </motion.p>
        </div>

        {/* 3-Column Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border/30">
                  {/* Subtle accent border on hover */}
                  <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 transition-colors duration-500" />
                  <Icon className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <h3 className="font-display font-medium text-2xl text-secondary mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-secondary/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
