import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/tours', label: 'Signature Trips' },
  { href: '/gallery', label: 'The Gallery' },
  { href: '/about', label: 'Our Philosophy' },
]

const destinationLinks = [
  { href: '/tours?category=Hill+Station', label: 'Kerala Backwaters' },
  { href: '/tours?category=Heritage', label: 'Royal Rajasthan' },
  { href: '/tours?category=Nature', label: 'The Himalayas' },
  { href: '/tours?category=Beach', label: 'Andaman Islands' },
]

export function Footer() {
  return (
    <footer className="bg-ivory-dark text-secondary pt-24 pb-8 lg:pt-32 lg:pb-12 border-t border-border/40 relative overflow-hidden">
      
      {/* Subtle aesthetic blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Emotional Statement & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          <div className="lg:col-span-7">
            <Image
              src="/logo.png"
              alt="Eventurism"
              width={180}
              height={54}
              className="h-10 w-auto object-contain mb-10"
            />
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-secondary mb-8 leading-[1.1] max-w-2xl">
              Let&apos;s write the next <br />
              <em className="text-primary not-italic font-medium">unforgettable chapter.</em>
            </h2>
            <p className="font-sans text-secondary/70 text-lg font-light leading-relaxed max-w-md mb-12">
              Curators of bespoke luxury travel. We design journeys that move you, challenge you, and stay with you forever.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" className="text-secondary/50 hover:text-primary transition-colors group" aria-label="Instagram">
                <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" className="text-secondary/50 hover:text-primary transition-colors group" aria-label="Facebook">
                <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
              <a href="https://youtube.com" className="text-secondary/50 hover:text-primary transition-colors group" aria-label="YouTube">
                <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Elevated Contact Card */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(15,23,42,0.05)] border border-border/40">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-bold mb-8">Begin Your Journey</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-1.5">Email</p>
                  <a href="mailto:concierge@eventurism.com" className="font-display text-xl text-secondary hover:text-primary transition-colors">concierge@eventurism.com</a>
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-1.5">Direct Line</p>
                  <a href="tel:+917449229229" className="font-display text-xl text-secondary hover:text-primary transition-colors">+91 74492 29229</a>
                </div>
                <div className="pt-4">
                   <Link href="/contact" className="group inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-primary hover:text-secondary transition-colors">
                     Request a Consultation
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Refined Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-border/50 mb-12">
          
          <div className="lg:col-span-1">
             <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-bold mb-6">Navigation</h4>
             <ul className="flex flex-col gap-4">
               {navLinks.map(l => (
                 <li key={l.href}>
                   <Link href={l.href} className="font-sans text-[13px] text-secondary/80 hover:text-primary font-medium transition-colors">
                     {l.label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-1">
             <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-bold mb-6">Curated Destinations</h4>
             <ul className="flex flex-col gap-4">
               {destinationLinks.map(l => (
                 <li key={l.href}>
                   <Link href={l.href} className="font-sans text-[13px] text-secondary/80 hover:text-primary font-medium transition-colors">
                     {l.label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-bold mb-6">Headquarters</h4>
            <div className="flex flex-col gap-1">
              <p className="font-sans text-[13px] text-secondary/80 font-medium leading-relaxed max-w-xs">
                Eventurism Travel Studios<br/>
                Arumbakkam, Chennai – 600106<br/>
                Tamil Nadu, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/40 gap-4">
          <p className="font-sans text-[11px] text-secondary/40 font-medium tracking-wide">
            © {new Date().getFullYear()} Eventurism. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-sans text-[11px] text-secondary/40 hover:text-secondary font-medium tracking-wide transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-sans text-[11px] text-secondary/40 hover:text-secondary font-medium tracking-wide transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
