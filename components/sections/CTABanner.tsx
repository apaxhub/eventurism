import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Phone } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-mono text-xs tracking-widest text-primary uppercase">Start Planning</span>
        <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mt-3 mb-4">
          Ready to Plan Something<br />
          <span className="text-primary italic">Extraordinary?</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Tell us what you have in mind — we&apos;ll handle everything else. Events, tours, or both.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href="tel:+917449229229">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </Button>
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="text-white/50 text-sm font-mono">+91-7449229229</span>
          <span className="text-white/20">·</span>
          <span className="text-white/50 text-sm font-mono">eventurisms@gmail.com</span>
          <span className="text-white/20">·</span>
          <span className="text-white/50 text-sm font-mono">Mon–Sat, 9AM–7PM IST</span>
        </div>
      </div>
    </section>
  )
}
