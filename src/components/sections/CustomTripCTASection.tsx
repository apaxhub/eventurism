'use client'

import { motion } from 'framer-motion'
import { Clock, ShieldCheck, Sparkles } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function CustomTripCTASection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    window.location.href = '/contact?success=true'
  }

  return (
    <section className="py-24 md:py-32 bg-ivory overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ivory-dark/40 rounded-l-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Emotional Messaging & Trust Indicators */}
          <div className="lg:col-span-5 lg:pr-8">
            <AnimatedSection>
              <span className="flex items-center gap-2 font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Bespoke Trip Planning
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-6xl text-secondary mt-5 leading-[1.1]">
                Craft Your Next Masterpiece.
              </h2>
              <p className="font-sans text-secondary/70 mt-6 text-lg font-light leading-relaxed">
                Every great journey begins with a conversation. Share your travel aspirations with our destination artisans, and we will orchestrate a meticulously curated itinerary tailored exclusively to you.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full border border-border/80 flex items-center justify-center bg-white shadow-sm shrink-0">
                    <Clock className="w-5 h-5 text-primary stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-secondary text-base">Priority Concierge Response</p>
                    <p className="font-sans text-sm text-secondary/60 mt-1 font-light">An expert will review your request and reach out within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full border border-border/80 flex items-center justify-center bg-white shadow-sm shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-secondary text-base">Complimentary Consultation</p>
                    <p className="font-sans text-sm text-secondary/60 mt-1 font-light">Discuss your vision with our travel designers with zero obligation.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Side: Elegant Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 sm:p-12 lg:p-14 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.08)] border border-border/40 relative overflow-hidden"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-secondary via-primary to-secondary opacity-90" />

              <h3 className="font-display font-bold text-3xl text-secondary mb-2">
                Begin the Conversation
              </h3>
              <p className="font-sans text-sm text-secondary/60 mb-10 font-light">
                Please provide a few details so we can match you with the perfect travel designer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <label className="font-sans text-[11px] font-semibold tracking-wider uppercase text-secondary/50 mb-1 block">Destination Interest</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-0 border-b border-border/60 focus:border-primary focus:ring-0 px-0 py-2.5 font-sans text-secondary placeholder:text-secondary/30 transition-colors" 
                    placeholder="e.g., A private villa in the Maldives" 
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="font-sans text-[11px] font-semibold tracking-wider uppercase text-secondary/50 mb-1 block">Travel Window</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-0 border-b border-border/60 focus:border-primary focus:ring-0 px-0 py-2.5 font-sans text-secondary placeholder:text-secondary/30 transition-colors" 
                      placeholder="e.g., Mid-October for 10 days" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="font-sans text-[11px] font-semibold tracking-wider uppercase text-secondary/50 mb-1 block">Travel Party</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-0 border-b border-border/60 focus:border-primary focus:ring-0 px-0 py-2.5 font-sans text-secondary placeholder:text-secondary/30 transition-colors" 
                      placeholder="e.g., 2 Adults, 1 Child" 
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <label className="font-sans text-[11px] font-semibold tracking-wider uppercase text-secondary/50 mb-1 block">Anticipated Investment (Per Person)</label>
                  <select 
                    required
                    className="w-full bg-transparent border-0 border-b border-border/60 focus:border-primary focus:ring-0 px-0 py-2.5 font-sans text-secondary appearance-none transition-colors cursor-pointer"
                  >
                    <option value="" disabled selected className="text-secondary/30">Select a budget range</option>
                    <option value="50-100k">₹50,000 - ₹1,00,000</option>
                    <option value="100-250k">₹1,00,000 - ₹2,50,000</option>
                    <option value="250k+">₹2,50,000+</option>
                    <option value="undecided">Undecided / Need Guidance</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                  <div className="relative group">
                    <label className="font-sans text-[11px] font-semibold tracking-wider uppercase text-secondary/50 mb-1 block">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-0 border-b border-border/60 focus:border-primary focus:ring-0 px-0 py-2.5 font-sans text-secondary placeholder:text-secondary/30 transition-colors" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="font-sans text-[11px] font-semibold tracking-wider uppercase text-secondary/50 mb-1 block">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-transparent border-0 border-b border-border/60 focus:border-primary focus:ring-0 px-0 py-2.5 font-sans text-secondary placeholder:text-secondary/30 transition-colors" 
                      placeholder="+91" 
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-4 bg-secondary hover:bg-primary text-white py-4 sm:py-5 rounded-full font-sans text-[15px] font-medium transition-colors duration-500 shadow-lg shadow-secondary/20 hover:shadow-primary/30"
                >
                  Request Custom Itinerary
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
