'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function EmotionalCTASection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            
            {/* Text Content */}
            <div className="p-10 sm:p-16 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10 bg-primary/60" />
                  <span className="font-sans text-xs tracking-[0.2em] text-secondary/80 uppercase font-medium">
                    Start Your Journey
                  </span>
                </div>
                
                <h2 className="font-display font-medium text-4xl sm:text-5xl text-secondary leading-[1.15] mb-6">
                  Let&apos;s bring your travel ideas to life.
                </h2>
                
                <p className="font-sans text-secondary/70 text-lg leading-relaxed font-light mb-10 max-w-md">
                  Whether you know exactly where you want to go, or just need a little inspiration, our team is here to help you plan a trip that feels perfectly you.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link 
                    href="/contact"
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-4 font-sans font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-transparent border border-border hover:border-primary/30 text-secondary rounded-full px-8 py-4 font-sans font-medium transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
                    Chat on WhatsApp
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-auto w-full order-1 lg:order-2">
              <Image 
                src="https://images.unsplash.com/photo-1490682143684-14369e18dce8?auto=format&fit=crop&q=80&w=1200" 
                alt="A tranquil path toward the horizon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-secondary/5" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
