'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const philosophies = [
  {
    num: "01.",
    title: "Meaningful Exploration",
    text: "We believe travel should transform you, not just tire you out. We prioritize depth over distance, ensuring you truly experience the heartbeat of a place rather than simply checking it off a list.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    aspect: "aspect-[3/4]"
  },
  {
    num: "02.",
    title: "Unscripted Authenticity",
    text: "True luxury is not just about opulent suites; it is about rare access. We connect you with rich local cultures, untold histories, and genuine human interactions that money alone cannot buy.",
    image: "https://images.unsplash.com/photo-1523661149972-0becaca2016e?w=800&q=80",
    aspect: "aspect-[4/5]"
  },
  {
    num: "03.",
    title: "Meticulous Curation",
    text: "Every journey is a handcrafted masterpiece. We obsess over the invisible details—from the perfect golden-hour room view to the exact timing of a private transfer—so you can simply be present.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    aspect: "aspect-[1/1]"
  }
]

export function TravelPhilosophySection() {
  return (
    <section className="py-24 md:py-32 bg-ivory-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="max-w-3xl mb-20 md:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
              Our Beliefs
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-secondary leading-[1.1]">
            The Eventurism Philosophy
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {philosophies.map((item, index) => {
            // Create asymmetrical vertical pacing
            const marginTop = index === 1 ? 'md:mt-32' : index === 2 ? 'md:mt-16' : 'md:mt-0'
            const textFirst = index === 1 // Middle column has text first, then image
            
            return (
              <motion.div 
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${marginTop}`}
              >
                {/* Conditionally render Text or Image first based on column */}
                {textFirst ? (
                  <>
                    <div className="mb-10">
                      <span className="font-display italic text-primary text-2xl mb-4 block">
                        {item.num}
                      </span>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-4">
                        {item.title}
                      </h3>
                      <p className="font-sans text-secondary/70 leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                    <div className={`relative w-full ${item.aspect} rounded-[24px] overflow-hidden shadow-xl`}>
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-colors duration-500 hover:bg-transparent" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`relative w-full ${item.aspect} rounded-[24px] overflow-hidden shadow-xl mb-10`}>
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-colors duration-500 hover:bg-transparent" />
                    </div>
                    <div>
                      <span className="font-display italic text-primary text-2xl mb-4 block">
                        {item.num}
                      </span>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-4">
                        {item.title}
                      </h3>
                      <p className="font-sans text-secondary/70 leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
