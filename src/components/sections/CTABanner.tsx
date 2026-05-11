import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ArrowRight, Phone } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Start Planning</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mt-3 mb-4">
            Ready to Plan Your<br />
            <span className="text-primary italic">Dream Holiday?</span>
          </h2>
          <p className="font-sans text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Tell us your destination, dates, and group size — we&apos;ll handle everything from hotels to transport and create an unforgettable itinerary.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="https://wa.me/917449229229">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary gap-2">
                <Image src="/whatsapp_logo.png" alt="WhatsApp" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+917449229229">
              <Button size="md" variant="outline" className="border-white/40 text-white/80 hover:bg-white/10 gap-2">
                <Phone className="w-4 h-4" /> +91-7449229229
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="font-sans text-white/50 text-sm">+91-7449229229</span>
            <span className="text-white/20">·</span>
            <span className="font-sans text-white/50 text-sm">eventurisms@gmail.com</span>
            <span className="text-white/20">·</span>
            <span className="font-sans text-white/50 text-sm">Mon–Sat, 9AM–7PM IST</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
