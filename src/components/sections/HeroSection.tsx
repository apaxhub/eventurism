'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Star, Phone } from 'lucide-react'

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<'search' | 'inquiry'>('search')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery) {
      window.location.href = `/tours?search=${encodeURIComponent(searchQuery)}`
    }
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/contact'
  }

  return (
    <section className="relative min-h-[90vh] flex items-center bg-ivory overflow-hidden pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)] py-12 lg:py-20">
          
          {/* Left Column: Content & Typography */}
          <div className="max-w-xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-primary" />
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                Eventurism Chennai
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-secondary leading-[1.1] mb-6"
            >
              Curating <em className="text-primary not-italic">Exceptional</em> Journeys.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg font-sans text-secondary/70 leading-relaxed mb-10 max-w-lg font-light"
            >
              Experience the world&apos;s most captivating destinations through our masterfully crafted, 
              bespoke travel itineraries. Trusted by discerning travelers since 2011.
            </motion.p>

            {/* Interactive Booking/Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-3 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 mb-10 max-w-md"
            >
              <div className="flex items-center gap-2 mb-3 px-2">
                <button
                  onClick={() => setActiveTab('search')}
                  className={`text-sm font-sans font-medium px-4 py-2 rounded-full transition-colors ${
                    activeTab === 'search' ? 'bg-ivory-dark text-secondary' : 'text-secondary/60 hover:text-secondary'
                  }`}
                >
                  Search Tours
                </button>
                <button
                  onClick={() => setActiveTab('inquiry')}
                  className={`text-sm font-sans font-medium px-4 py-2 rounded-full transition-colors ${
                    activeTab === 'inquiry' ? 'bg-ivory-dark text-secondary' : 'text-secondary/60 hover:text-secondary'
                  }`}
                >
                  Custom Inquiry
                </button>
              </div>

              <div className="px-2 pb-2">
                <AnimatePresence mode="wait">
                  {activeTab === 'search' ? (
                    <motion.form
                      key="search"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSearch}
                      className="flex items-center bg-ivory/50 rounded-2xl p-1.5"
                    >
                      <div className="pl-3 pr-2 text-secondary/40">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        placeholder="Where to next?"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-none outline-none font-sans text-secondary placeholder:text-secondary/40 focus:ring-0 text-base"
                      />
                      <button
                        type="submit"
                        className="bg-primary hover:bg-primary-dark text-white rounded-xl px-6 py-3 font-sans font-medium transition-colors duration-300"
                      >
                        Explore
                      </button>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="inquiry"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleInquiry}
                      className="flex flex-col gap-3"
                    >
                      <div className="flex items-center bg-ivory/50 rounded-xl p-2.5">
                        <MapPin className="w-4 h-4 text-secondary/40 mr-3 ml-1" />
                        <input type="text" placeholder="Desired Destination" className="w-full bg-transparent border-none outline-none font-sans text-secondary placeholder:text-secondary/40 text-sm" required />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 flex items-center bg-ivory/50 rounded-xl p-2.5">
                          <Phone className="w-4 h-4 text-secondary/40 mr-3 ml-1" />
                          <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-none outline-none font-sans text-secondary placeholder:text-secondary/40 text-sm" required />
                        </div>
                        <button
                          type="submit"
                          className="bg-primary hover:bg-primary-dark text-white rounded-xl px-6 py-3 sm:py-2.5 font-sans font-medium transition-colors duration-300 whitespace-nowrap text-sm w-full sm:w-auto"
                        >
                          Get Quote
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Testimonials / Trust Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-ivory overflow-hidden bg-ivory-dark relative">
                    <Image 
                      src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&auto=format&fit=crop&crop=faces&sat=-20`}
                      alt="Traveler" 
                      fill
                      sizes="40px"
                      className="object-cover grayscale opacity-80 mix-blend-multiply"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-ivory bg-secondary flex items-center justify-center z-10">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
              <div>
                <p className="font-sans font-medium text-secondary text-sm">4.8/5 Rating</p>
                <p className="font-sans text-secondary/60 text-xs">From 500+ happy travelers</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered Photography */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full mt-8 lg:mt-0">
            {/* Background decorative blob/texture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ivory-dark rounded-full blur-3xl opacity-50 pointer-events-none" />

            {/* Main Image (Hills) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 right-0 w-[80%] h-[75%] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/hero-hills.webp"
                alt="Misty Indian Hill Station"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="font-sans text-xs font-semibold text-secondary">Munnar, Kerala</span>
              </div>
            </motion.div>

            {/* Secondary Image (Heritage) */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-4 left-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgb(15,23,42,0.15)] z-20 border-4 border-ivory"
            >
              <Image
                src="/hero-heritage.webp"
                alt="Indian Heritage Architecture"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-primary" />
                <span className="font-sans text-xs font-semibold text-secondary">Heritage Tours</span>
              </div>
            </motion.div>

            {/* Tertiary Image / Feature Card (Beach) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-1/2 -translate-y-1/2 -left-12 w-[40%] aspect-square rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-ivory hidden xl:block"
            >
               <Image
                src="/hero-beach.webp"
                alt="Serene Beach Sunset"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                 <p className="font-display font-medium text-white text-lg leading-tight mb-1">Coastal Escapes</p>
                 <p className="font-sans text-white/80 text-xs">Explore packages</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
