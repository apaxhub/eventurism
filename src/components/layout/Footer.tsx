import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
)
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
)

const links = {
  company: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ],
  tours: [
    { href: '/tours', label: 'All Packages' },
    { href: '/tours?category=Hill+Station', label: 'Hill Stations' },
    { href: '/tours?category=Beach', label: 'Beach Holidays' },
    { href: '/tours?category=Heritage', label: 'Heritage Tours' },
    { href: '/tours?category=Adventure', label: 'Adventure Trips' },
    { href: '/contact', label: 'Custom Packages' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Eventurism Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4 font-sans">
              Chennai&apos;s trusted tour operator since 2011. Creating unforgettable holiday experiences across India.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-xs">★</span>)}
              </div>
              <span className="text-sm font-sans text-neutral">4.8 · 212 Reviews</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/eventurisms" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/eventurism" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4 text-neutral">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {links.company.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-sans text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4 text-neutral">Tour Packages</h4>
            <ul className="flex flex-col gap-2.5">
              {links.tours.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm font-sans text-white/60 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4 text-neutral">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+917449229229" className="flex items-start gap-2.5 text-sm font-sans text-white/60 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  +91-7449229229
                </a>
              </li>
              <li>
                <a href="https://wa.me/917449229229" className="flex items-start gap-2.5 text-sm font-sans text-white/60 hover:text-white transition-colors">
                  <Image src="/whatsapp_logo.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 object-contain mt-0.5 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:eventurisms@gmail.com" className="flex items-start gap-2.5 text-sm font-sans text-white/60 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  eventurisms@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm font-sans text-white/60">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Arumbakkam, Chennai – 600106, Tamil Nadu
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-sans text-white/40">© 2025 Eventurism. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs font-sans text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <span className="text-xs font-sans text-white/40">Made with ♥ in Chennai</span>
          </div>
        </div>
      </div>
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-14 lg:hidden" />
    </footer>
  )
}
