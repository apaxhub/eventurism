'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const galleryPhotos = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&q=80", 
    colSpan: "lg:col-span-5", 
    aspect: "aspect-[4/5]", 
    caption: "The Himalayas — An early morning ascent.", 
    delay: 0 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1506461883276-594a12b5f735?w=1600&q=80", 
    colSpan: "lg:col-span-7", 
    aspect: "aspect-[16/9]", 
    caption: "Silent mornings in the valley.", 
    delay: 0.2, 
    marginTop: "lg:mt-32" 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1800&q=80", 
    colSpan: "lg:col-span-8", 
    aspect: "aspect-[21/9]", 
    caption: "Andaman Sea — Where the sky meets the ocean.", 
    delay: 0, 
    marginTop: "mt-8 lg:mt-0" 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1533555239916-2f0868f000b9?w=1000&q=80", 
    colSpan: "lg:col-span-4", 
    aspect: "aspect-[3/4]", 
    caption: "Shared laughter with local artisans.", 
    delay: 0.2, 
    marginTop: "mt-8 lg:-mt-24 relative z-10" 
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80", 
    colSpan: "lg:col-span-6", 
    aspect: "aspect-[1/1]", 
    caption: "Pondicherry — Colors of a colonial past.", 
    delay: 0, 
    marginTop: "mt-8 lg:mt-16" 
  },
  { 
    id: 6, 
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80", 
    colSpan: "lg:col-span-6", 
    aspect: "aspect-[4/3]", 
    caption: "Kerala Backwaters — The art of slowing down.", 
    delay: 0.2, 
    marginTop: "mt-8 lg:mt-0" 
  },
  { 
    id: 7, 
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1000&q=80", 
    colSpan: "lg:col-span-4", 
    aspect: "aspect-[4/5]", 
    caption: "Rajasthan — Echoes of ancient fortresses.", 
    delay: 0, 
    marginTop: "mt-8 lg:mt-16" 
  },
  { 
    id: 8, 
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&q=80", 
    colSpan: "lg:col-span-8", 
    aspect: "aspect-[16/9]", 
    caption: "The Journey Home — Carrying the world with you.", 
    delay: 0.2, 
    marginTop: "mt-8 lg:-mt-12" 
  }
]

export function GalleryMasonrySection() {
  return (
    <section className="py-24 md:py-32 bg-ivory-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <AnimatedSection className="mb-20 md:mb-32 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
              The Collection
            </span>
            <div className="h-px w-10 bg-primary" />
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
          {galleryPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: photo.delay }}
              className={`${photo.colSpan} ${photo.marginTop || ''} flex flex-col group`}
            >
              <div className={`relative w-full ${photo.aspect} rounded-[24px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] mb-4`}>
                <Image 
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-secondary/50 font-medium tracking-wide text-center lg:text-left">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
