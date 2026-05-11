'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const steps = [
  {
    num: "01",
    title: "Share Your Vision",
    desc: "A conversation about your desires, travel style, and the feelings you wish to capture. No strict itineraries yet—just an open canvas."
  },
  {
    num: "02",
    title: "Curated Planning",
    desc: "Our destination artisans craft a bespoke journey, meticulously securing the finest accommodations, exclusive access, and seamless logistics."
  },
  {
    num: "03",
    title: "Begin Your Journey",
    desc: "We finalize every invisible detail and remain entirely at your disposal throughout the trip, ensuring your experience is completely effortless."
  }
]

export function ConsultationProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20 lg:mb-28">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-4">
            The Art of Planning
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary leading-tight">
            An Effortless Journey.
          </h2>
        </AnimatedSection>

        {/* Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex flex-col group"
            >
              {/* Subtle top border accent */}
              <div className="w-full h-px bg-secondary/10 mb-10 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                  className="absolute top-0 left-0 h-full bg-primary"
                />
              </div>

              {/* Massive background number for editorial depth */}
              <div className="absolute top-0 right-4 lg:right-0 opacity-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-20">
                <span className="font-display font-bold text-[100px] lg:text-[140px] leading-none text-primary italic">
                  {step.num}
                </span>
              </div>

              <div className="relative z-10 pt-2">
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-4">
                  Phase {step.num}
                </span>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-secondary mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-secondary/70 leading-relaxed font-light text-[15px] lg:text-base pr-4 lg:pr-8">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
