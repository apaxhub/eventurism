'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search, Compass, MapPin } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const categories = [
  { name: 'Hill Stations', image: 'https://images.unsplash.com/photo-1542220199-6799015bc266?w=400&q=80' },
  { name: 'Coastal Escapes', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
  { name: 'Heritage Trails', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80' },
  { name: 'Wilderness', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80' },
]

export function ToursHeroSection() {
  return (
    <section className="relative bg-ivory pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-ivory-dark/30 rounded-b-[60px] lg:rounded-b-[100px]" />
      <div className="absolute top-20 right-[-10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 relative z-20">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                  Curated Collections
                </span>
              </div>
              
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[4.5rem] text-secondary leading-[1.05] mb-6">
                Discover Your <br />
                <em className="text-primary not-italic font-medium">Next Chapter.</em>
              </h1>
              
              <p className="font-sans text-lg text-secondary/70 leading-relaxed font-light mb-10 max-w-md">
                Immerse yourself in handpicked journeys designed for those who seek beauty, culture, and unforgettable moments.
              </p>

              {/* Elegant Exploration UI */}
              <div className="bg-white p-2.5 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)] border border-border/40 max-w-md mb-12 relative z-30">
                <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-1 flex items-center pl-4 pr-2">
                    <Compass className="w-5 h-5 text-secondary/40 mr-3" />
                    <input 
                      type="text" 
                      placeholder="Where are you dreaming of?" 
                      className="w-full bg-transparent border-none outline-none font-sans text-secondary placeholder:text-secondary/40 focus:ring-0 text-base py-3"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-secondary hover:bg-primary text-white rounded-full p-4 transition-colors duration-300 flex items-center justify-center group"
                    aria-label="Search destinations"
                  >
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </form>
              </div>

              {/* Curated Categories */}
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-secondary/50 font-medium mb-4">Explore by Theme</p>
                <div className="flex flex-wrap gap-3">
                  {categories.map((cat, idx) => (
                    <motion.button
                      key={cat.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                      className="flex items-center gap-2 pr-4 pl-1.5 py-1.5 rounded-full bg-white border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-300 group"
                    >
                      <div className="w-7 h-7 rounded-full overflow-hidden relative">
                        <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="font-sans text-sm text-secondary font-medium group-hover:text-primary transition-colors">{cat.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Imagery (Layered Composition) */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[700px] w-full mt-8 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" 
                alt="Breathtaking mountain landscape"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Image Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-4 lg:bottom-12 left-0 w-[45%] h-[40%] rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] border-8 border-ivory z-20"
            >
              <Image 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" 
                alt="Travelers on a boat"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Subtle floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-1/4 left-4 lg:left-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl z-30 flex items-center gap-3 border border-white"
            >
              <div className="bg-primary/10 p-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-sans text-xs text-secondary/60 font-medium">Featured Destination</p>
                <p className="font-display text-sm text-secondary font-bold">The Himalayan Retreat</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
