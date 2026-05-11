'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const stories = [
  {
    id: 1,
    name: "Priya Ramachandran",
    trip: "Family Retreat in Ooty",
    quote: "The mist rolling over the Nilgiris was breathtaking, but what truly elevated our trip was the flawless care. Every single detail, from the secluded heritage estate to the private tea tasting, was orchestrated with a level of personal attention we've never experienced before.",
    highlight: "An unforgettable return to nature.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80", 
  },
  {
    id: 2,
    name: "Sridevi & Raj",
    trip: "Honeymoon in Andaman",
    quote: "We asked for seclusion and luxury, and Eventurism delivered a masterpiece. Waking up to the sound of waves in our private oceanfront villa, with a perfectly paced itinerary that simply let us breathe—it was exactly the escape we needed.",
    highlight: "Pure magic in the middle of the ocean.",
    image: "https://images.unsplash.com/photo-1522764725576-4c06737210db?w=1200&q=80", 
  }
]

export function TravelerStoriesSection() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      {/* Decorative large quote mark in background */}
      <div className="absolute top-40 left-10 text-[300px] text-secondary/[0.03] font-display font-bold leading-none pointer-events-none select-none">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20 md:mb-32">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
            Journeys Realized
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-4 leading-tight">
            Traveler Stories
          </h2>
          <p className="font-sans text-secondary/70 mt-5 text-lg font-light leading-relaxed">
            The true measure of a luxury journey lies in the memories it leaves behind. Read the unfiltered experiences of those who have traveled with us.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-24 md:gap-32">
          {stories.map((story, index) => {
            const isEven = index % 2 === 0

            return (
              <div key={story.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-0 relative`}>
                
                {/* Image Block */}
                <motion.div 
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/2 relative z-10"
                >
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl">
                    <Image
                      src={story.image}
                      alt={`Traveler portrait of ${story.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
                  </div>
                </motion.div>

                {/* Editorial Quote Block */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`w-full lg:w-[60%] relative z-20 bg-white p-8 sm:p-12 md:p-16 rounded-[24px] shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1)] border border-border/50 ${
                    isEven ? 'lg:-ml-24' : 'lg:-mr-24'
                  } lg:mt-24`}
                >
                  {/* Giant Quote Icon inside the box */}
                  <div className="absolute top-6 left-8 sm:left-12 text-[120px] text-ivory-dark font-display font-bold leading-none pointer-events-none select-none opacity-50">
                    &ldquo;
                  </div>

                  <div className="relative z-10">
                    <p className="font-sans text-xs tracking-widest text-primary uppercase font-semibold mb-6">
                      {story.highlight}
                    </p>
                    
                    <blockquote className="font-display text-2xl md:text-3xl lg:text-[32px] text-secondary leading-[1.4] mb-10 italic">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-px bg-border" />
                      <div>
                        <p className="font-display font-bold text-lg text-secondary">
                          {story.name}
                        </p>
                        <p className="font-sans text-sm text-secondary/60 mt-1">
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
