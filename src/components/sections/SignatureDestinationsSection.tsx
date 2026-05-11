'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CloudSun } from 'lucide-react'
import { useRef } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const destinations = [
  {
    id: 'kashmir',
    name: 'Kashmir Valley',
    tagline: 'Paradise Found',
    season: 'Best in Spring & Autumn',
    description: 'Experience the pristine beauty of Dal Lake on a private luxury houseboat, followed by curated mountain excursions. A poetic retreat into nature\'s finest canvas.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1800&q=80',
    link: '/tours?destination=Kashmir',
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    tagline: 'Uncharted Azure',
    season: 'Best in Winter',
    description: 'Secluded luxury villas stepping directly onto untouched white sands. Dive into crystal-clear waters and dine under the stars in complete, uninterrupted privacy.',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1800&q=80',
    link: '/tours?destination=Andaman',
  },
  {
    id: 'rajasthan',
    name: 'Royal Rajasthan',
    tagline: 'Echoes of Empires',
    season: 'Best in Winter',
    description: 'Live like royalty in restored heritage palaces. Traverse sweeping dunes at sunset and indulge in private, decadent banquets fit for modern maharajas.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1800&q=80',
    link: '/tours?destination=Rajasthan',
  }
]

export function SignatureDestinationsSection() {
  return (
    <section className="py-24 md:py-32 bg-ivory-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
            The Eventurism Collection
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-secondary mt-4 leading-tight">
            Signature Destinations
          </h2>
          <p className="font-sans text-secondary/70 mt-6 text-lg font-light leading-relaxed">
            Our most exclusive locales, handpicked for the discerning traveler. Explore places where untamed beauty meets unparalleled luxury.
          </p>
        </AnimatedSection>

        {/* Destinations List */}
        <div className="flex flex-col gap-24 md:gap-40">
          {destinations.map((dest, index) => {
            const isEven = index % 2 === 0
            
            return (
              <DestinationBlock 
                key={dest.id} 
                dest={dest} 
                isEven={isEven} 
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

function DestinationBlock({ dest, isEven }: { dest: typeof destinations[0], isEven: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Subtle parallax effect for the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div ref={containerRef} className="relative w-full flex flex-col lg:block min-h-[600px] lg:min-h-[750px]">
      
      {/* Large Cinematic Image Container */}
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.1 }}
        className={`relative w-full lg:w-[75%] h-[450px] lg:h-[750px] lg:absolute lg:top-0 overflow-hidden shadow-2xl ${
          isEven 
            ? 'lg:left-0 rounded-2xl lg:rounded-r-[40px] lg:rounded-l-2xl' 
            : 'lg:right-0 rounded-2xl lg:rounded-l-[40px] lg:rounded-r-2xl'
        }`}
      >
        <motion.div style={{ y, height: '120%' }} className="absolute inset-0 w-full top-[-10%]">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-secondary/15 mix-blend-multiply" />
        <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ${isEven ? 'from-secondary/40 lg:from-transparent lg:to-secondary/40' : 'from-secondary/40 lg:from-secondary/40 lg:to-transparent'}`} />
      </motion.div>
      
      {/* Layered Editorial Content Box */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`relative z-10 w-[92%] sm:w-[85%] lg:w-[480px] xl:w-[520px] mx-auto lg:mx-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${
          isEven ? 'lg:right-8 xl:right-16' : 'lg:left-8 xl:left-16'
        } -mt-24 lg:mt-0 bg-white p-8 md:p-12 lg:p-16 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.15)] border border-border/50 group hover:shadow-[0_40px_80px_-15px_rgba(15,23,42,0.2)] transition-shadow duration-700`}
      >
        <div className="flex items-center gap-2 mb-6">
          <CloudSun className="w-4 h-4 text-primary" />
          <span className="font-sans text-xs tracking-widest text-secondary/60 uppercase font-semibold">
            {dest.season}
          </span>
        </div>
        
        <h3 className="font-display font-bold text-4xl lg:text-5xl text-secondary mb-3 leading-[1.1]">
          {dest.name}
        </h3>
        
        <p className="font-sans text-lg font-medium text-primary mb-6 italic">
          {dest.tagline}
        </p>
        
        <div className="w-12 h-px bg-border mb-6" />
        
        <p className="font-sans text-secondary/70 leading-relaxed mb-10 font-light text-[15px] md:text-base">
          {dest.description}
        </p>
        
        <Link href={dest.link} className="inline-flex items-center justify-center w-full lg:w-auto bg-secondary text-white px-8 py-4 rounded-full font-sans text-sm font-medium hover:bg-primary transition-colors duration-500 group/btn">
          Discover {dest.name.split(' ')[0]} 
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </motion.div>

    </div>
  )
}
