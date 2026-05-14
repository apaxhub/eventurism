'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stories = [
  {
    id: 1,
    name: "Priya Ramachandran",
    trip: "Family Retreat in Ooty",
    quote: "The mist rolling over the Nilgiris was breathtaking, but what truly made our trip special was the seamless care. Every detail was handled so beautifully that we could just focus on being together.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800", 
  },
  {
    id: 2,
    name: "Sridevi & Raj",
    trip: "Honeymoon in Andaman",
    quote: "Eventurism gave us exactly what we needed: quiet moments by the ocean, no rushing, and everything perfectly planned. We felt completely taken care of from start to finish.",
    image: "https://images.unsplash.com/photo-1522764725576-4c06737210db?auto=format&fit=crop&q=80&w=800", 
  }
]

export function TravelerStoriesSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-dark relative overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-primary/60" />
            <span className="font-sans text-xs tracking-[0.2em] text-secondary/80 uppercase font-medium">
              Real Experiences
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
            Traveler Stories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-sans text-secondary/70 font-light"
          >
            Hear directly from the families and couples who have explored the world with us.
          </motion.p>
        </div>

        {/* Stories List */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {stories.map((story, index) => {
            const isEven = index % 2 === 0

            return (
              <div key={story.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="w-full md:w-1/2 relative"
                >
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-border/30">
                    <Image
                      src={story.image}
                      alt={`Traveler portrait of ${story.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full md:w-1/2"
                >
                  <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
                    <blockquote className="font-display text-3xl lg:text-4xl text-secondary leading-[1.3] mb-8 italic">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                    
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <div className="hidden md:block w-12 h-px bg-primary/60 mt-3" />
                      <div>
                        <p className="font-sans font-medium text-lg text-secondary">
                          {story.name}
                        </p>
                        <p className="font-sans text-secondary/60 text-sm mt-1 uppercase tracking-widest font-medium">
                          {story.trip}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
