'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'

const indianPackages = [
  { label: 'Kerala Escapes', href: '/tours?destination=kerala' },
  { label: 'Kashmir Valleys', href: '/tours?destination=kashmir' },
  { label: 'Rajasthan Heritage', href: '/tours?destination=rajasthan' },
  { label: 'Andaman Islands', href: '/tours?destination=andaman' },
  { label: 'View All Indian', href: '/tours?category=india' }
]

const internationalPackages = [
  { label: 'Bali Retreats', href: '/tours?destination=bali' },
  { label: 'Maldives Luxury', href: '/tours?destination=maldives' },
  { label: 'Dubai Experiences', href: '/tours?destination=dubai' },
  { label: 'Europe Tours', href: '/tours?destination=europe' },
  { label: 'View All International', href: '/tours?category=international' }
]

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
)

export function Footer() {
  const pathname = usePathname()

  if (pathname.startsWith('/admin') || pathname.startsWith('/login')) {
    return null
  }

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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary/60 hover:text-primary hover:border-primary/40 hover:bg-white transition-all duration-300 group" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary/60 hover:text-primary hover:border-primary/40 hover:bg-white transition-all duration-300 group" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary/60 hover:text-primary hover:border-primary/40 hover:bg-white transition-all duration-300 group" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary/60 hover:text-primary hover:border-primary/40 hover:bg-white transition-all duration-300 group" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 pt-16 border-t border-border/50 mb-12">
          
          <div className="lg:col-span-1">
             <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-bold mb-6">Indian Packages</h4>
             <ul className="flex flex-col gap-4">
               {indianPackages.map(l => (
                 <li key={l.href}>
                   <Link href={l.href} className="font-sans text-[13px] text-secondary/80 hover:text-primary font-medium transition-colors">
                     {l.label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-1">
             <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-bold mb-6">International Packages</h4>
             <ul className="flex flex-col gap-4">
               {internationalPackages.map(l => (
                 <li key={l.href}>
                   <Link href={l.href} className="font-sans text-[13px] text-secondary/80 hover:text-primary font-medium transition-colors">
                     {l.label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-1">
             <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-bold mb-6">Company</h4>
             <ul className="flex flex-col gap-4">
               {companyLinks.map(l => (
                 <li key={l.href}>
                   <Link href={l.href} className="font-sans text-[13px] text-secondary/80 hover:text-primary font-medium transition-colors">
                     {l.label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-1">
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
