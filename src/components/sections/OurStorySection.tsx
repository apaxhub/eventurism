'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function OurStorySection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <AnimatedSection className="max-w-3xl mb-24 md:mb-40">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
            Beyond the Guidebook
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-secondary mt-5 leading-[1.15]">
            We believe travel is the most profound way to connect with the world, and with ourselves.
          </h2>
        </AnimatedSection>

        {/* Story Block 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center mb-24 md:mb-40 relative">
          <div className="lg:col-span-5 lg:col-start-2 relative z-20 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-ivory p-8 sm:p-12 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(15,23,42,0.05)] border border-border/40 lg:-mr-32 relative"
            >
              <h3 className="font-display font-bold text-3xl text-secondary mb-6">
                The Lost Soul of Travel
              </h3>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg mb-6">
                It began with a quiet realization that the modern travel industry had become transactional. Somewhere between rushed group tours and algorithmic bookings, the profound emotional connection of discovering a new place had been diluted.
              </p>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg">
                We wanted to bring back the romance of the journey. We wanted to create an antidote to the cookie-cutter vacation.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-6 relative z-10 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[24px] overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?w=1200&q=80" 
                alt="Documentary photography of a local street"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>

        {/* Story Block 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center mb-24 md:mb-40 relative">
          <div className="lg:col-span-7 relative z-10">
            <motion.div 
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[16/10] lg:aspect-[4/3] rounded-[24px] overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=80" 
                alt="Travelers embracing a majestic landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-secondary/5 mix-blend-multiply" />
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 sm:p-12 lg:-ml-24 relative"
            >
              <div className="absolute top-0 left-0 w-1.5 h-16 bg-primary rounded-full" />
              <h3 className="font-display font-bold text-3xl text-secondary mb-6">
                Cultivating Authentic Connections
              </h3>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg mb-6">
                For over a decade, we have walked the hidden alleys, tasted the authentic cuisines, and built genuine relationships with local artisans and guides. We do not just send you to a destination; we invite you into a world we know intimately.
              </p>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg">
                This deep-rooted network allows us to open doors that remain closed to the casual tourist, ensuring every experience feels completely unfiltered and incredibly personal.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Story Block 3 (Centered Cinematic) */}
        <div className="relative rounded-[32px] overflow-hidden">
          <motion.div 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image 
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1800&q=80" 
              alt="Cinematic luxury travel view"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-secondary/80" />
          </motion.div>

          <div className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
            <AnimatedSection>
              <h3 className="font-display font-bold text-3xl md:text-5xl text-white mb-8 leading-tight">
                An Original Manuscript, <br className="hidden sm:block" />
                <span className="text-primary italic font-light">Written For You.</span>
              </h3>
              <p className="font-sans text-white/80 leading-relaxed font-light text-lg md:text-xl">
                Every itinerary we craft is an original work of art. Whether it is a silent morning watching the mist roll over the Nilgiris, or a deeply personal cultural immersion in a vibrant city, we curate journeys that resonate with your spirit.
              </p>
            </AnimatedSection>
          </div>
        </div>

      </div>
    </section>
  )
}
