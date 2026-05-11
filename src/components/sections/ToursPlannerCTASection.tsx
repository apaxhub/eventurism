'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Sparkles, ArrowRight, ShieldCheck, Star, ChevronDown } from 'lucide-react'

export function ToursPlannerCTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <Image 
          src="https://images.unsplash.com/photo-1548625361-ec85cb2be167?w=1600&q=80" 
          alt="Luxury travel concierge"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Messaging */}
          <div className="lg:col-span-5 text-white">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="font-sans text-[11px] tracking-widest text-primary uppercase font-bold">
                  Bespoke Journeys
                </span>
              </div>
              
              <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 leading-tight">
                Your Journey, <br/>
                <em className="text-primary not-italic font-medium">Masterfully Crafted.</em>
              </h2>
              
              <p className="font-sans text-white/80 text-lg font-light leading-relaxed mb-12 max-w-md">
                No two travelers are alike. Share your dreams with our expert travel designers, and we will curate an itinerary as unique as your fingerprint.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-sans text-sm text-white/90 font-medium">Dedicated Personal Concierge</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-sans text-sm text-white/90 font-medium">100% Financial Protection</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <p className="font-sans text-sm text-white/90 font-medium">Rated 4.9/5 by Discerning Travelers</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Elegant Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <AnimatedSection delay={0.2}>
              <div className="bg-ivory rounded-[2.5rem] p-8 sm:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
                {/* Decorative blob in form */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="mb-10">
                  <h3 className="font-display font-bold text-3xl text-secondary mb-3">Begin Your Story</h3>
                  <p className="font-sans text-[15px] text-secondary/60">Fill in the details below, and we&apos;ll reach out within 24 hours.</p>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-1.5 relative group">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-secondary/50 font-bold ml-1">Destination Style</label>
                      <div className="relative">
                        <select defaultValue="" className="w-full bg-transparent border-b border-border/60 pb-2.5 text-secondary font-sans text-[15px] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                          <option value="" disabled>Where to?</option>
                          <option value="mountains">Mountain Retreat</option>
                          <option value="beach">Coastal Escape</option>
                          <option value="heritage">Heritage & Culture</option>
                          <option value="wildlife">Wildlife Safari</option>
                        </select>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown className="w-4 h-4 text-secondary/40" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 relative group">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-secondary/50 font-bold ml-1">Travel Dates</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Oct 2026" 
                        className="w-full bg-transparent border-b border-border/60 pb-2.5 text-secondary font-sans text-[15px] focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/30"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-1.5 relative group">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-secondary/50 font-bold ml-1">Experience Focus</label>
                      <div className="relative">
                        <select defaultValue="" className="w-full bg-transparent border-b border-border/60 pb-2.5 text-secondary font-sans text-[15px] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                          <option value="" disabled>Select focus</option>
                          <option value="relaxation">Absolute Relaxation</option>
                          <option value="adventure">Active Adventure</option>
                          <option value="wellness">Wellness & Spa</option>
                          <option value="culinary">Culinary Journey</option>
                        </select>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown className="w-4 h-4 text-secondary/40" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 relative group">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-secondary/50 font-bold ml-1">Party Size</label>
                      <div className="relative">
                        <select defaultValue="" className="w-full bg-transparent border-b border-border/60 pb-2.5 text-secondary font-sans text-[15px] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                          <option value="" disabled>Number of travelers</option>
                          <option value="1">Solo</option>
                          <option value="2">Couple (2)</option>
                          <option value="3-5">Small Group (3-5)</option>
                          <option value="6+">Large Group (6+)</option>
                        </select>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown className="w-4 h-4 text-secondary/40" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="space-y-1.5 relative group">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-secondary/50 font-bold ml-1">Budget Range</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-transparent border-b border-border/60 pb-2.5 text-secondary font-sans text-[15px] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                        <option value="" disabled>Select budget</option>
                        <option value="premium">Premium (₹50k - ₹1L)</option>
                        <option value="luxury">Luxury (₹1L - ₹2.5L)</option>
                        <option value="ultra">Ultra Luxury (₹2.5L+)</option>
                      </select>
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown className="w-4 h-4 text-secondary/40" />
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <button type="submit" className="w-full py-4 bg-secondary hover:bg-primary text-white rounded-full font-sans text-[15px] font-medium transition-colors duration-300 flex items-center justify-center gap-2 group shadow-[0_10px_20px_rgba(15,23,42,0.1)]">
                      Request Custom Proposal
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center font-sans text-[10px] text-secondary/40 mt-5 uppercase tracking-widest font-bold">
                      No commitment required
                    </p>
                  </div>

                </form>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
