'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const experiences = [
  {
    id: 'adventure',
    title: 'Adventure Escapes',
    description: 'Thrill-seeking journeys through untamed landscapes. Reconnect with your wild side in pure luxury.',
    image: 'https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=1200&q=80',
    link: '/tours?category=Adventure',
    className: 'md:col-span-7 h-[400px] md:h-[650px] mt-0',
    textPos: 'bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 md:bottom-16 md:-right-16 md:left-auto',
  },
  {
    id: 'romantic',
    title: 'Romantic Retreats',
    description: 'Intimate hideaways designed for two. Celebrate love in breathtaking, secluded isolation.',
    image: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?w=1200&q=80',
    link: '/tours?category=Romantic',
    className: 'md:col-span-5 h-[400px] md:h-[450px] md:mt-24',
    textPos: 'bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 md:-left-12 md:bottom-12',
  },
  {
    id: 'cultural',
    title: 'Cultural Expeditions',
    description: 'Deep dives into ancient heritage and local traditions. A curated tapestry of living history.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80',
    link: '/tours?category=Cultural',
    className: 'md:col-span-4 h-[400px] md:h-[500px]',
    textPos: 'bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 md:-right-12 md:left-auto md:top-16 md:bottom-auto',
  },
  {
    id: 'coastal',
    title: 'Coastal Wellness',
    description: 'Rejuvenating oceanfront sanctuaries. Heal your mind and body by the sea in absolute comfort.',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
    link: '/tours?category=Wellness',
    className: 'md:col-span-8 h-[400px] md:h-[600px] md:-mt-20',
    textPos: 'bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 md:-left-16 md:bottom-24 md:right-auto',
  },
  {
    id: 'private',
    title: 'Private Group Experiences',
    description: 'Bespoke itineraries for your inner circle. Exclusive access, seamless execution, unforgettable moments.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80',
    link: '/tours?category=Private',
    className: 'md:col-span-12 h-[450px] md:h-[550px] mt-0 md:mt-12',
    textPos: 'bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 md:-top-12 md:left-24 md:bottom-auto',
  }
]

export function CuratedExperiencesSection() {
  return (
    <section className="py-24 bg-ivory overflow-x-clip relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatedSection className="max-w-2xl mb-20 md:mb-32">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
            Curated Experiences
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-3 leading-[1.1]">
            Journeys Crafted for the Soul
          </h2>
          <p className="font-sans text-secondary/70 mt-6 text-lg font-light leading-relaxed">
            Move beyond generic destinations. Discover masterfully curated travel experiences designed to immerse, inspire, and transform your perspective.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 md:gap-y-24">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`relative group ${exp.className}`}
            >
              <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-sm transition-all duration-700 group-hover:shadow-2xl bg-ivory-dark">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              {/* Overlapping Editorial Card */}
              <div className={`absolute ${exp.textPos} z-20 sm:w-[340px] bg-white p-6 md:p-9 rounded-[20px] shadow-[0_20px_40px_rgb(15,23,42,0.06)] group-hover:-translate-y-2 transition-transform duration-500 border border-border/40`}>
                <h3 className="font-display font-bold text-2xl text-secondary mb-3 leading-tight">
                  {exp.title}
                </h3>
                <p className="font-sans text-sm text-secondary/70 leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>
                <Link href={exp.link} className="inline-flex items-center gap-2 text-primary text-sm font-sans font-medium hover:gap-3 transition-all group/link">
                  Explore Collection <ArrowRight className="w-4 h-4 text-primary" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
