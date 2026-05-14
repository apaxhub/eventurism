'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react'

const packages = [
  {
    id: 'bali-bliss',
    title: 'Bali Tropical Bliss',
    location: 'Bali, Indonesia',
    duration: '6 Days / 5 Nights',
    description: 'Experience the spiritual harmony, terraced rice paddies, and pristine beaches of the Island of the Gods.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swiss-alps',
    title: 'Swiss Alps Expedition',
    location: 'Zurich & Lucerne, Switzerland',
    duration: '7 Days / 6 Nights',
    description: 'Journey through breathtaking alpine landscapes, crystal clear lakes, and charming villages in the heart of Europe.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maldives-retreat',
    title: 'Maldivian Island Retreat',
    location: 'Malé Atoll, Maldives',
    duration: '5 Days / 4 Nights',
    description: 'Unwind in an overwater villa surrounded by turquoise waters. A perfect sanctuary for relaxation and renewal.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800'
  }
]

export function PopularInternationalPackagesSection() {
  return (
    <section className="bg-ivory-dark py-24 sm:py-32 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-primary/60" />
            <span className="font-sans text-xs tracking-[0.2em] text-secondary/80 uppercase font-medium">
              Global Discoveries
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
            Popular International Packages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-sans text-secondary/70 font-light"
          >
            Explore our meticulously curated global itineraries. From serene tropical islands to majestic mountain ranges, experience the world with authenticity.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-5 text-sm font-sans text-secondary/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <h3 className="font-display font-medium text-2xl text-secondary mb-4 leading-snug">
                  {pkg.title}
                </h3>

                <p className="font-sans text-secondary/70 text-base leading-relaxed mb-10 flex-grow font-light">
                  {pkg.description}
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    href={`/tours/${pkg.id}`}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full py-4 font-sans text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`https://wa.me/919999999999?text=Hi, I'm interested in the ${pkg.title} package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-transparent border border-border hover:border-primary/40 text-secondary rounded-full py-4 font-sans text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 group/wa"
                  >
                    <MessageCircle className="w-4 h-4 text-primary transition-transform group-hover/wa:scale-110" />
                    Inquire on WhatsApp
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
