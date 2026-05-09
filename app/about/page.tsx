import { CTABanner } from '@/components/sections/CTABanner'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { Shield, Clock, Users, Star, Heart, Target, Zap } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Eventurism | Chennai Event & Travel Company Since 2011',
  description: 'Eventurism is Chennai\'s most trusted event management and tour operator since 2011. 4.8★ rated with 212 verified reviews.',
}

const values = [
  { icon: Heart, title: 'Client-First Always', desc: 'Every decision starts with what\'s best for you. Your experience is our measure of success.' },
  { icon: Shield, title: 'Transparent Pricing', desc: 'No hidden charges. What you see is what you pay. Always.' },
  { icon: Target, title: 'Attention to Detail', desc: 'From your hotel room to your itinerary timing — we obsess over the small things.' },
  { icon: Zap, title: 'Seamless Execution', desc: 'On the day it matters, we deliver. 500+ events and trips without a missed beat.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80" alt="Chennai" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Our Story</span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mt-3 mb-6">
              Born in Chennai.<br /><span className="text-primary italic">Built on Trust.</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Founded in 2011, Eventurism began with a single commitment: to deliver experiences that people remember.
              Over 13 years, we have grown into Chennai&apos;s only integrated event management and tour operations company — trusted by hundreds of families and corporate clients across Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, val: '13+', label: 'Years in Business' },
              { icon: Users, val: '500+', label: 'Events & Tours' },
              { icon: Star, val: '4.8★', label: 'Justdial Rating' },
              { icon: Shield, val: '212+', label: 'Client Reviews' },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className="text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display font-bold text-4xl text-secondary">{val}</div>
                <div className="text-sm text-gray-500 mt-1 font-mono">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl text-secondary mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver extraordinary experiences — whether you&apos;re celebrating a milestone or discovering a new destination. Every journey we plan and every event we execute is a promise we take personally.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white mb-3">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">
                To be South India&apos;s most trusted name in integrated event and travel management — the company people call first, and recommend last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Why Eventurism</span>
            <h2 className="font-display font-bold text-4xl text-secondary mt-3">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-secondary mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Banner */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-display font-bold text-2xl lg:text-3xl text-white italic">
            &ldquo;The only partner in Chennai that handles your event on Saturday and your team trip on Sunday.&rdquo;
          </p>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
