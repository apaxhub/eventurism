'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

const categories = [
  { 
    name: "Adventure", 
    desc: "For those who seek the thrill of the unknown, from sweeping deserts to high-altitude treks." 
  },
  { 
    name: "Cultural Experiences", 
    desc: "Immerse yourself in ancient traditions, vibrant festivals, and the timeless art of humanity." 
  },
  { 
    name: "Luxury Retreats", 
    desc: "Sanctuaries of pure indulgence, featuring the world's most exquisite private villas." 
  },
  { 
    name: "Coastal Escapes", 
    desc: "Secluded shores and private charters. The ultimate surrender to the rhythm of the tide." 
  },
  { 
    name: "Wellness Journeys", 
    desc: "Restore your deepest balance through bespoke healing rituals in serene, natural settings." 
  },
  { 
    name: "Group Explorations", 
    desc: "Shared moments of awe. Expertly curated itineraries designed for families and intimate groups." 
  }
]

export function GalleryCategoriesSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary" />
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                The Collections
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary leading-tight">
              Curated by Experience.
            </h2>
          </div>
          <p className="font-sans text-secondary/60 max-w-sm text-[15px] leading-relaxed">
            Navigate our archives by the feeling you wish to capture, rather than just the destination.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-4 border-b border-secondary/10 pb-4 group-hover:border-primary/50 transition-colors duration-500">
                <h3 className="font-display font-bold text-2xl text-secondary group-hover:text-primary transition-colors duration-500">
                  {cat.name}
                </h3>
                <span className="font-sans text-xs tracking-widest text-primary/50 font-semibold group-hover:text-primary transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>
              <p className="font-sans text-secondary/60 leading-relaxed font-light text-[15px] mb-6 flex-grow pr-4">
                {cat.desc}
              </p>
              <div className="flex items-center gap-3 text-secondary/40 group-hover:text-primary transition-colors duration-500">
                <span className="font-sans text-xs tracking-widest uppercase font-semibold">View Archive</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
