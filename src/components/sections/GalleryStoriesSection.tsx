'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

const stories = [
  {
    theme: "Desert Escapes",
    title: "Silence of the Dunes.",
    description: "Discover profound peace where endless sands meet the infinite sky. Our desert journeys blend nomadic authenticity with unparalleled luxury, offering starlit dining and silent reflection.",
    images: [
      "https://images.unsplash.com/photo-1547215907-73ba0814bb65?w=1600&q=80", // wide majestic
      "https://images.unsplash.com/photo-1504280703816-376c7dd2c505?w=800&q=80"  // intimate portrait
    ],
    reverse: false
  },
  {
    theme: "Coastal Retreats",
    title: "The Rhythm of the Tide.",
    description: "Awaken to the sound of crashing waves in private cliffside villas. A curation of the world's most secluded and breathtaking coastlines, designed for pure surrender.",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=80",
      "https://images.unsplash.com/photo-1540131435272-562a122e2335?w=800&q=80"
    ],
    reverse: true
  },
  {
    theme: "Mountain Adventures",
    title: "Echoes of the Peaks.",
    description: "Ascend to a world above the clouds. From snow-capped Alps to ancient Himalayan trails, experience raw, rugged landscapes wrapped in the warmth of exclusive chalets.",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80"
    ],
    reverse: false
  },
  {
    theme: "Cultural Journeys",
    title: "The Soul of Ancient Cities.",
    description: "Walk the cobblestones of history. Immerse yourself in the art, architecture, and untold stories of humanity's most fascinating cultures with private, scholarly guides.",
    images: [
      "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=1600&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
    ],
    reverse: true
  },
  {
    theme: "Luxury Wellness",
    title: "Return to Yourself.",
    description: "Sanctuaries of healing hidden in plain sight. Unplug and restore your deepest balance through bespoke wellness retreats guided by master practitioners in serene settings.",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
    ],
    reverse: false
  }
]

export function GalleryStoriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-32 lg:gap-48">
        {stories.map((story) => (
          <div 
            key={story.theme} 
            className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center ${story.reverse ? 'lg:rtl' : ''}`}
          >
            
            {/* Text Content */}
            <div className={`lg:col-span-5 relative z-20 ${story.reverse ? 'lg:ltr' : ''}`}>
              <AnimatedSection direction={story.reverse ? 'right' : 'left'}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-primary" />
                  <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                    {story.theme}
                  </span>
                </div>
                
                <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary leading-tight mb-8">
                  {story.title}
                </h2>
                
                <p className="font-sans text-lg text-secondary/70 leading-relaxed font-light mb-10">
                  {story.description}
                </p>

                <button className="flex items-center gap-4 group bg-transparent border-none p-0 cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center group-hover:border-primary transition-all duration-500 bg-white shadow-sm group-hover:shadow-[0_0_15px_rgba(242,100,64,0.15)]">
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <span className="font-sans text-sm tracking-widest text-secondary uppercase font-semibold group-hover:text-primary transition-colors duration-500">
                    Explore Story
                  </span>
                </button>
              </AnimatedSection>
            </div>

            {/* Cinematic Photography Layering */}
            <div className={`lg:col-span-7 relative h-[500px] lg:h-[650px] w-full ${story.reverse ? 'lg:ltr' : ''}`}>
              
              {/* Main wide background image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`absolute top-0 w-[85%] h-[80%] rounded-[24px] overflow-hidden shadow-xl z-10 ${story.reverse ? 'left-0' : 'right-0'}`}
              >
                <Image 
                  src={story.images[0]} 
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-[10s] hover:scale-105"
                />
              </motion.div>

              {/* Foreground portrait overlap */}
              <motion.div 
                initial={{ opacity: 0, y: 40, x: story.reverse ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`absolute bottom-0 w-[50%] h-[60%] rounded-[16px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] z-20 border-[6px] border-ivory ${story.reverse ? 'right-0' : 'left-0'}`}
              >
                <Image 
                  src={story.images[1]} 
                  alt={`${story.theme} detail`}
                  fill
                  className="object-cover transition-transform duration-[10s] hover:scale-105"
                />
              </motion.div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
