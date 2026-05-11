'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const moments = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&q=80",
    caption: "The Himalayas — An early morning ascent.",
    colSpan: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    delay: 0
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1533555239916-2f0868f000b9?w=1600&q=80",
    caption: "Rajasthan — Shared laughter with local artisans.",
    colSpan: "lg:col-span-7",
    aspect: "aspect-[16/9]",
    delay: 0.2,
    marginTop: "lg:mt-32"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1800&q=80",
    caption: "Andaman Islands — Discovering secluded horizons.",
    colSpan: "lg:col-span-8",
    aspect: "aspect-[21/9]",
    delay: 0,
    marginTop: "mt-8 lg:mt-0"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1000&q=80",
    caption: "Kerala Backwaters — The art of slowing down.",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    delay: 0.2,
    marginTop: "mt-8 lg:-mt-24 relative z-10"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1523661149972-0becaca2016e?w=1200&q=80",
    caption: "Varanasi — Witnessing centuries of unbroken tradition.",
    colSpan: "lg:col-span-5",
    aspect: "aspect-[1/1]",
    delay: 0,
    marginTop: "mt-8 lg:mt-16"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80",
    caption: "The Journey Home — Carrying the world with you.",
    colSpan: "lg:col-span-7",
    aspect: "aspect-[4/5]",
    delay: 0.2,
    marginTop: "mt-8 lg:-mt-16"
  }
]

export function MomentsGallerySection() {
  return (
    <section className="py-24 md:py-32 bg-ivory-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <AnimatedSection className="mb-20 md:mb-32 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
              The Journey In Frames
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary leading-[1.15]">
            Unscripted Moments.
          </h2>
          <p className="font-sans text-secondary/70 mt-6 leading-relaxed font-light text-lg">
            We believe the most profound travel memories happen in the unscripted spaces between the itinerary. A shared cup of chai, a sudden vista, a quiet moment of profound stillness.
          </p>
        </AnimatedSection>

        {/* Asymmetrical Editorial Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-12">
          {moments.map((moment) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: moment.delay }}
              className={`${moment.colSpan} ${moment.marginTop || ''} flex flex-col group`}
            >
              <div className={`relative w-full ${moment.aspect} rounded-[24px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] mb-4`}>
                <Image 
                  src={moment.image}
                  alt={moment.caption}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-secondary/50 font-medium tracking-wide">
                {moment.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
