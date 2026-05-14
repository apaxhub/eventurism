'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function ToursWhatsAppCTASection() {
  return (
    <section className="py-20 bg-ivory border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_20px_40px_-15px_rgba(15,23,42,0.05)] border border-border/50 relative overflow-hidden">
            
            {/* Subtle Decor */}
            <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto mb-6 border border-border/50">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl text-secondary font-medium mb-4">
                Need Help Planning?
              </h2>
              
              <p className="font-sans text-secondary/70 font-light text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                Connect with our travel experts on WhatsApp. We'll help you craft the perfect itinerary tailored to your preferences.
              </p>
              
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-sans text-sm uppercase tracking-widest font-bold hover:bg-primary transition-colors duration-300 group"
              >
                Chat with an Expert
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
