'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'bg-secondary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Eventurism Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium font-sans transition-colors',
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+917449229229" className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors font-sans">
                <Phone className="w-3.5 h-3.5" />
                <span className="text-xs">+91-7449229229</span>
              </a>
              <Link href="/contact"><Button size="sm">Get a Quote</Button></Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 z-40 bg-secondary flex flex-col transition-transform duration-300 lg:hidden',
        open ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <Image src="/logo.png" alt="Eventurism Logo" width={140} height={40} className="h-9 w-auto object-contain" />
          <button onClick={() => setOpen(false)} className="text-white p-2"><X className="w-6 h-6" /></button>
        </div>
        <div className="flex flex-col p-6 gap-6 flex-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-2xl font-display font-semibold transition-colors',
                pathname === link.href ? 'text-primary' : 'text-white/80'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/10">
            <a href="tel:+917449229229" className="flex items-center gap-3 text-white/70 text-lg font-sans">
              <Phone className="w-5 h-5 text-primary" /> +91-7449229229
            </a>
            <a href="https://wa.me/917449229229" className="flex items-center gap-3 text-white/70 text-lg font-sans">
              <Image src="/whatsapp_logo.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5 object-contain" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t-2 border-primary">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <a href="tel:+917449229229" className="flex flex-col items-center py-3 gap-1 text-white hover:bg-white/5 transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-xs font-sans">Call</span>
          </a>
          <a href="https://wa.me/917449229229" className="flex flex-col items-center py-3 gap-1 text-white hover:bg-white/5 transition-colors">
            <Image src="/whatsapp_logo.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5 object-contain" />
            <span className="text-xs font-sans">WhatsApp</span>
          </a>
          <Link href="/contact" className="flex flex-col items-center py-3 gap-1 text-white hover:bg-white/5 transition-colors">
            <div className="w-5 h-5 text-neutral flex items-center justify-center">✉</div>
            <span className="text-xs font-sans">Enquire</span>
          </Link>
        </div>
      </div>
    </>
  )
}
