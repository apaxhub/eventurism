'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react'

const packages = [
  {
    id: 'kerala-escape',
    title: 'Kerala Backwaters & Hills',
    location: 'Kerala, India',
    duration: '5 Days / 4 Nights',
    description: 'Immerse yourself in the misty tea gardens of Munnar and the serene, timeless backwaters of Alleppey.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'golden-triangle',
    title: 'Golden Triangle Heritage',
    location: 'Delhi, Agra & Jaipur',
    duration: '6 Days / 5 Nights',
    description: 'A cultural journey through India\'s most iconic royal heritage sites, bustling bazaars, and majestic monuments.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'himalayan-serenity',
    title: 'Himalayan Serenity',
    location: 'Shimla & Manali',
    duration: '7 Days / 6 Nights',
    description: 'Find peace among the pine forests and snow-capped peaks of the Himalayas. A perfect blend of nature and comfort.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800'
  }
]

export function PopularNationalPackagesSection() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
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
              Curated Journeys
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
            Popular National Packages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-sans text-secondary/70 font-light"
          >
            Discover our thoughtfully designed itineraries that showcase the breathtaking diversity and authentic charm of India.
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
