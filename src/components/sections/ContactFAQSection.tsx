'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "Do you design itineraries for destinations worldwide?",
    answer: "Yes. Our network of on-the-ground artisans and luxury properties spans the globe. From private villas in Tuscany to expedition cruises in Antarctica, we design bespoke experiences wherever your imagination takes you."
  },
  {
    question: "How far in advance should I begin planning my journey?",
    answer: "For complex international journeys or highly sought-after seasonal properties, we recommend beginning the conversation 6 to 9 months in advance. However, our concierge team is always available to curate exceptional last-minute escapes when possible."
  },
  {
    question: "Are flights and private aviation included in the planning?",
    answer: "Absolutely. We manage all aspects of your journey, including commercial first-class reservations, private jet charters, and seamless helicopter transfers to ensure your experience is effortless from door to door."
  },
  {
    question: "Is there a consultation fee to begin the design process?",
    answer: "We begin with a complimentary introductory conversation. Should you choose to proceed with our artisans, a dedicated planning retainer is applied, which allows us to focus our exclusive resources entirely on crafting your masterpiece."
  }
]

export function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 lg:py-32 bg-ivory relative overflow-hidden border-t border-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Editorial Sticky Header */}
          <div className="lg:col-span-4 relative">
            <AnimatedSection className="lg:sticky lg:top-32">
              <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-4">
                Common Inquiries
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary leading-tight mb-6">
                Clarity Before <br /> the Journey.
              </h2>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg">
                We believe in complete transparency. Review the finer details of our process, or reach out directly if your question remains unanswered.
              </p>
            </AnimatedSection>
          </div>

          {/* Right Column: Refined Accordion */}
          <div className="lg:col-span-8">
            <AnimatedSection delay={0.2} className="flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index

                return (
                  <div 
                    key={index} 
                    className="border-b border-secondary/20 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-8 flex items-center justify-between text-left group"
                    >
                      <span className="font-display font-bold text-xl lg:text-2xl text-secondary pr-8 group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full border border-secondary/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300 text-secondary group-hover:text-primary">
                        {isOpen ? (
                          <Minus className="w-4 h-4 transition-transform duration-300" />
                        ) : (
                          <Plus className="w-4 h-4 transition-transform duration-300" />
                        )}
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-secondary/70 leading-relaxed font-light text-[15px] lg:text-lg pb-10 pr-4 lg:pr-12">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  )
}
