'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Suspense } from 'react'

const indianDestinations = ['All Indian', 'Kerala', 'Kashmir', 'Rajasthan', 'Andaman', 'Goa', 'Himachal']
const internationalDestinations = ['All International', 'Bali', 'Maldives', 'Dubai', 'Europe', 'Thailand']

function ToursFilterContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const category = searchParams.get('category') || 'india'
  const destination = searchParams.get('destination') || (category === 'international' ? 'All International' : 'All Indian')
  
  const destinations = category === 'international' ? internationalDestinations : indianDestinations

  const handleSelect = (dest: string) => {
    if (dest.startsWith('All')) {
      router.push(`/tours?category=${category}`)
    } else {
      router.push(`/tours?category=${category}&destination=${dest.toLowerCase()}`)
    }
  }

  return (
    <section className="sticky top-[4rem] lg:top-[5rem] z-40 bg-ivory/90 backdrop-blur-lg border-b border-border/40 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 w-full lg:justify-center">
            {destinations.map((dest, idx) => {
              const isActive = destination.toLowerCase() === dest.toLowerCase() || (destination.startsWith('All') && dest.startsWith('All'))
              return (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={dest}
                  onClick={() => handleSelect(dest)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-sans whitespace-nowrap transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-secondary text-white font-medium shadow-md'
                      : 'bg-white text-secondary/70 hover:text-secondary hover:bg-white/90 border border-border/50 hover:border-primary/40 font-medium'
                  }`}
                >
                  {dest}
                </motion.button>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export function ToursFilterSection() {
  return (
    <Suspense fallback={<div className="h-16 bg-ivory/90 border-b border-border/40" />}>
      <ToursFilterContent />
    </Suspense>
  )
}
