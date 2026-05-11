'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Compass, Leaf, Heart, Users, Landmark, Sparkles } from 'lucide-react'

const comparisons = [
  {
    id: 'c1',
    left: {
      title: 'Untamed Adventure',
      description: 'Push your boundaries with thrilling treks, deep sea diving, and wild safaris. For those who seek the adrenaline of the unknown.',
      image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1000&q=80',
      icon: Compass
    },
    right: {
      title: 'Absolute Relaxation',
      description: 'Surrender to serenity on secluded beaches and premium wellness resorts. For those who need to disconnect to reconnect.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=80',
      icon: Leaf
    }
  },
  {
    id: 'c2',
    left: {
      title: 'Cultural Immersion',
      description: 'Walk through ancient ruins, learn from local artisans, and dine in heritage homes. For curious souls seeking authentic connection.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1000&q=80',
      icon: Landmark
    },
    right: {
      title: 'Luxury Retreat',
      description: 'Indulge in five-star opulence, personalized butler service, and private infinity pools. For the ultimate comfort and indulgence.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=80',
      icon: Sparkles
    }
  },
  {
    id: 'c3',
    left: {
      title: 'Romantic Escapes',
      description: 'Intimate candlelit dinners, private yacht cruises, and secluded stays designed perfectly for two.',
      image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=1000&q=80',
      icon: Heart
    },
    right: {
      title: 'Group Expeditions',
      description: 'Shared memories, family bonding, and expertly guided group tours where every detail is managed for you.',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1000&q=80',
      icon: Users
    }
  }
]

export function ToursComparisonSection() {
  const [hoveredSide, setHoveredSide] = useState<{rowId: string, side: 'left' | 'right' | null}>({ rowId: '', side: null })

  return (
    <section className="py-24 lg:py-32 bg-ivory-dark overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-40 left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection>
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                Discover Your Rhythm
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mb-6 leading-[1.1]">
              Contrasting <em className="text-primary not-italic font-medium">Philosophies</em>
            </h2>
            <p className="font-sans text-lg text-secondary/70 font-light">
              Every traveler seeks a different kind of magic. Compare our travel philosophies to find the experience that speaks to your soul.
            </p>
          </AnimatedSection>
        </div>

        {/* Comparisons */}
        <div className="space-y-8 lg:space-y-12">
          {comparisons.map((pair, idx) => (
            <AnimatedSection key={pair.id} delay={0.1 * idx}>
              <div 
                className="relative flex flex-col md:flex-row h-[700px] md:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] border border-border/50 bg-white"
                onMouseLeave={() => setHoveredSide({ rowId: pair.id, side: null })}
              >
                
                {/* VS Badge (Center overlap) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_10px_20px_rgba(15,23,42,0.15)] flex items-center justify-center z-30 pointer-events-none hidden md:flex transition-transform duration-500">
                   <span className="font-sans text-[11px] font-bold text-secondary uppercase tracking-widest">VS</span>
                </div>

                {/* Left Side */}
                <div 
                  className={`relative flex-1 md:flex-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer group ${
                    hoveredSide.rowId === pair.id 
                      ? (hoveredSide.side === 'left' ? 'md:w-[65%]' : 'md:w-[35%]') 
                      : 'md:w-[50%]'
                  }`}
                  onMouseEnter={() => setHoveredSide({ rowId: pair.id, side: 'left' })}
                >
                  <Image 
                    src={pair.left.image} 
                    alt={pair.left.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent transition-opacity duration-700 ${hoveredSide.rowId === pair.id && hoveredSide.side === 'right' ? 'opacity-80' : 'opacity-60 group-hover:opacity-50'}`} />
                  
                  <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white z-10">
                    <div className={`mb-5 transition-transform duration-500 ${hoveredSide.rowId === pair.id && hoveredSide.side === 'right' ? 'md:scale-90 md:opacity-50' : 'scale-100 opacity-100'}`}>
                      <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center border border-white/30">
                        <pair.left.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className={`font-display font-bold text-3xl lg:text-4xl mb-2 leading-tight transition-all duration-500 origin-bottom-left ${hoveredSide.rowId === pair.id && hoveredSide.side === 'right' ? 'md:scale-90 md:text-white/70' : 'scale-100 text-white'}`}>
                      {pair.left.title}
                    </h3>
                    <p className={`font-sans text-white/90 font-light leading-relaxed max-w-md transition-all duration-500 overflow-hidden ${hoveredSide.rowId === pair.id && hoveredSide.side === 'left' ? 'opacity-100 translate-y-0 max-h-40 mt-3' : 'md:opacity-0 md:translate-y-4 md:max-h-0 md:mt-0'}`}>
                      {pair.left.description}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div 
                  className={`relative flex-1 md:flex-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer group ${
                    hoveredSide.rowId === pair.id 
                      ? (hoveredSide.side === 'right' ? 'md:w-[65%]' : 'md:w-[35%]') 
                      : 'md:w-[50%]'
                  }`}
                  onMouseEnter={() => setHoveredSide({ rowId: pair.id, side: 'right' })}
                >
                  <Image 
                    src={pair.right.image} 
                    alt={pair.right.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent transition-opacity duration-700 ${hoveredSide.rowId === pair.id && hoveredSide.side === 'left' ? 'opacity-80' : 'opacity-60 group-hover:opacity-50'}`} />
                  
                  <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white z-10">
                     <div className={`mb-5 transition-transform duration-500 ${hoveredSide.rowId === pair.id && hoveredSide.side === 'left' ? 'md:scale-90 md:opacity-50' : 'scale-100 opacity-100'}`}>
                      <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center border border-white/30">
                        <pair.right.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className={`font-display font-bold text-3xl lg:text-4xl mb-2 leading-tight transition-all duration-500 origin-bottom-left ${hoveredSide.rowId === pair.id && hoveredSide.side === 'left' ? 'md:scale-90 md:text-white/70' : 'scale-100 text-white'}`}>
                      {pair.right.title}
                    </h3>
                    <p className={`font-sans text-white/90 font-light leading-relaxed max-w-md transition-all duration-500 overflow-hidden ${hoveredSide.rowId === pair.id && hoveredSide.side === 'right' ? 'opacity-100 translate-y-0 max-h-40 mt-3' : 'md:opacity-0 md:translate-y-4 md:max-h-0 md:mt-0'}`}>
                      {pair.right.description}
                    </p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
