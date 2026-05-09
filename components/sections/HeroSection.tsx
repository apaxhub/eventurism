'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Star, Shield, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
          alt="Scenic travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Chennai&apos;s #1 Event &amp; Tour Partner</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            We Create Events.<br />
            <em className="text-primary not-italic">We Build Journeys.</em>
          </h1>

          {/* Sub */}
          <p
            className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg opacity-0 animate-fade-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            From corporate galas to hill-station getaways — one team handles everything.
            Trusted by 500+ clients across Tamil Nadu since 2011.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <Link href="/tours">
              <Button size="lg" className="gap-2">
                Explore Packages <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                Plan an Event
              </Button>
            </Link>
          </div>

          {/* Trust strip */}
          <div
            className="flex flex-wrap items-center gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-mono">4.8/5 · 212 Reviews</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-white/80 text-sm font-mono">Est. 2011</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-white/80 text-sm font-mono">Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
