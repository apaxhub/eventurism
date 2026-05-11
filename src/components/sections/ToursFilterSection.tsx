'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, SlidersHorizontal, Calendar, Wallet, Compass } from 'lucide-react'

const experienceTypes = ['All Journeys', 'Hill Stations', 'Coastal Escapes', 'Heritage Trails', 'Wilderness']
const durations = ['Any Duration', 'Quick Escape (1-3 Days)', 'Extended (4-7 Days)', 'Immersive (8+ Days)']
const budgets = ['Any Budget', 'Accessible Luxury', 'Premium', 'Ultra Luxury']
const travelStyles = ['Any Style', 'Romantic', 'Family', 'Solo', 'Group']

export function ToursFilterSection() {
  const [activeType, setActiveType] = useState('All Journeys')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const [selectedDuration, setSelectedDuration] = useState('Any Duration')
  const [selectedBudget, setSelectedBudget] = useState('Any Budget')
  const [selectedStyle, setSelectedStyle] = useState('Any Style')

  const filterRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <section className="sticky top-[4rem] lg:top-[5rem] z-40 bg-ivory/90 backdrop-blur-lg border-b border-border/40 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.03)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4" ref={filterRef}>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8">
          
          {/* Primary Filter: Experience Type (Elegant Pills) */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {experienceTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-sans whitespace-nowrap transition-all duration-300 ${
                  activeType === type
                    ? 'bg-secondary text-white font-medium shadow-md'
                    : 'bg-white text-secondary/70 hover:text-secondary hover:bg-white/90 border border-border/50 hover:border-primary/40 font-medium'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="hidden lg:block w-px h-8 bg-border/60"></div>

          {/* Secondary Filters (Minimal Dropdowns) */}
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            
            <div className="flex items-center gap-2 mr-2 shrink-0">
               <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
               <span className="font-sans text-[11px] tracking-widest text-secondary/50 uppercase font-semibold">Refine</span>
            </div>

            {/* Duration Dropdown */}
            <div className="relative shrink-0">
              <button 
                onClick={() => toggleDropdown('duration')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border transition-colors text-[13px] font-sans text-secondary group ${
                  activeDropdown === 'duration' ? 'border-primary/50 shadow-sm' : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <Calendar className={`w-4 h-4 transition-colors ${activeDropdown === 'duration' ? 'text-primary' : 'text-secondary/40 group-hover:text-primary/70'}`} />
                <span className="truncate max-w-[120px] sm:max-w-none font-medium">{selectedDuration}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-secondary/40 transition-transform duration-300 ${activeDropdown === 'duration' ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'duration' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+0.5rem)] left-0 w-56 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] border border-border/50 py-2 z-50"
                  >
                    {durations.map(duration => (
                      <button
                        key={duration}
                        onClick={() => { setSelectedDuration(duration); setActiveDropdown(null); }}
                        className={`w-full text-left px-5 py-2.5 text-[13px] font-sans transition-colors ${
                          selectedDuration === duration ? 'text-primary font-semibold bg-primary/5' : 'text-secondary/70 hover:bg-ivory hover:text-secondary'
                        }`}
                      >
                        {duration}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Budget Dropdown */}
            <div className="relative shrink-0">
              <button 
                onClick={() => toggleDropdown('budget')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border transition-colors text-[13px] font-sans text-secondary group ${
                  activeDropdown === 'budget' ? 'border-primary/50 shadow-sm' : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <Wallet className={`w-4 h-4 transition-colors ${activeDropdown === 'budget' ? 'text-primary' : 'text-secondary/40 group-hover:text-primary/70'}`} />
                <span className="truncate max-w-[120px] sm:max-w-none font-medium">{selectedBudget}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-secondary/40 transition-transform duration-300 ${activeDropdown === 'budget' ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'budget' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+0.5rem)] left-0 w-56 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] border border-border/50 py-2 z-50"
                  >
                    {budgets.map(budget => (
                      <button
                        key={budget}
                        onClick={() => { setSelectedBudget(budget); setActiveDropdown(null); }}
                        className={`w-full text-left px-5 py-2.5 text-[13px] font-sans transition-colors ${
                          selectedBudget === budget ? 'text-primary font-semibold bg-primary/5' : 'text-secondary/70 hover:bg-ivory hover:text-secondary'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Style Dropdown */}
            <div className="relative shrink-0">
              <button 
                onClick={() => toggleDropdown('style')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border transition-colors text-[13px] font-sans text-secondary group ${
                  activeDropdown === 'style' ? 'border-primary/50 shadow-sm' : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <Compass className={`w-4 h-4 transition-colors ${activeDropdown === 'style' ? 'text-primary' : 'text-secondary/40 group-hover:text-primary/70'}`} />
                <span className="truncate max-w-[120px] sm:max-w-none font-medium">{selectedStyle}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-secondary/40 transition-transform duration-300 ${activeDropdown === 'style' ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'style' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+0.5rem)] right-0 lg:left-0 lg:right-auto w-56 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] border border-border/50 py-2 z-50"
                  >
                    {travelStyles.map(style => (
                      <button
                        key={style}
                        onClick={() => { setSelectedStyle(style); setActiveDropdown(null); }}
                        className={`w-full text-left px-5 py-2.5 text-[13px] font-sans transition-colors ${
                          selectedStyle === style ? 'text-primary font-semibold bg-primary/5' : 'text-secondary/70 hover:bg-ivory hover:text-secondary'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
