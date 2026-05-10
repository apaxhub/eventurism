import { CTABanner } from '@/components/sections/CTABanner'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Shield, Clock, Users, Star, Heart, Target, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Eventurism | Chennai Tour Operator Since 2011',
  description: "Eventurism is Chennai's most trusted tour operator since 2011, specialising in holiday packages, hill station tours, beach holidays, and custom travel across India. 4.8★ rated with 212 verified reviews.",
}

const values = [
  { icon: Heart, title: 'Traveller-First Always', desc: 'Every itinerary is crafted around your comfort, preferences, and budget — not a one-size-fits-all template.' },
  { icon: Shield, title: 'Transparent Pricing', desc: 'No hidden charges. The price you see is the price you pay — always.' },
  { icon: Target, title: 'Attention to Detail', desc: 'From your hotel room view to the sightseeing schedule — we obsess over making every moment count.' },
  { icon: Zap, title: 'Seamless Execution', desc: 'On the day it matters, we deliver. 500+ holidays planned without a missed beat.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80" alt="Chennai skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Our Story</span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mt-3 mb-4">
              Born in Chennai.<br /><span className="text-primary not-italic">Built for Travellers.</span>
            </h1>
            <p className="font-sans text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
              Founded in 2011, we have grown into Chennai&apos;s most trusted tour operator — crafting holiday experiences for hundreds of families and groups across India.
            </p>
          </AnimatedSection>
        </div>
      </section>


      {/* Stats */}
      <section className="py-16 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, val: '13+', label: 'Years in Business' },
              { icon: Users, val: '500+', label: 'Holidays Delivered' },
              { icon: Star, val: '4.8★', label: 'Justdial Rating' },
              { icon: Shield, val: '212+', label: 'Client Reviews' },
            ].map(({ icon: Icon, val, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.1} direction="up">
                <div className="text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-display font-bold text-4xl text-secondary">{val}</div>
                  <div className="font-sans text-sm text-gray-500 mt-1">{label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border/50 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display font-bold text-2xl text-secondary mb-3">Our Mission</h2>
                <p className="font-sans text-gray-600 leading-relaxed">
                  To deliver extraordinary travel experiences to every client — whether you&apos;re exploring the misty hills of Ooty, the beaches of Andaman, or the royal forts of Rajasthan. Every holiday we plan is a promise we take personally.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-secondary rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display font-bold text-2xl text-white mb-3">Our Vision</h2>
                <p className="font-sans text-white/70 leading-relaxed">
                  To be South India&apos;s most trusted travel partner — the company that travellers call first for every holiday, and recommend to everyone they love.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Why Eventurism</span>
            <h2 className="font-display font-bold text-4xl text-secondary mt-3">What Makes Us Different</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-6 border border-border/50 text-center h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-secondary mb-2">{title}</h3>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* USP Banner */}
      <AnimatedSection>
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-display font-bold text-2xl lg:text-3xl text-white italic">
              &ldquo;The travel company that Chennai families trust to create the holidays they&apos;ll talk about for years.&rdquo;
            </p>
          </div>
        </section>
      </AnimatedSection>

      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
