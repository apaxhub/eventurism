'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { href: '/tours', label: 'Trips' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { 
    setOpen(false) 
    document.body.style.overflow = 'unset'
  }, [pathname])

  const toggleMenu = () => {
    if (open) {
      setOpen(false)
      document.body.style.overflow = 'unset'
    } else {
      setOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-ivory/90 backdrop-blur-xl border-b border-border/40 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] py-3 lg:py-4' 
          : 'bg-transparent py-5 lg:py-8'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="relative z-[60]" onClick={() => setOpen(false)}>
              <Image
                src="/logo.png"
                alt="Eventurism"
                width={160}
                height={48}
                className={cn(
                  "w-auto transition-all duration-500 object-contain",
                  scrolled ? "h-8" : "h-10",
                )}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-[11px] font-sans uppercase tracking-[0.2em] font-bold transition-colors relative group',
                    pathname === link.href ? 'text-primary' : 'text-secondary/70 hover:text-secondary'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300",
                    pathname === link.href ? "bg-primary opacity-100" : "bg-secondary opacity-0 group-hover:opacity-100"
                  )} />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center relative z-[60]">
              <Link 
                href="/contact" 
                className={cn(
                  "group flex items-center gap-2 px-7 py-3.5 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold transition-all duration-500 shadow-[0_10px_20px_rgba(15,23,42,0.08)] hover:shadow-[0_10px_20px_rgba(249,115,22,0.2)]",
                  open ? "bg-secondary text-white" : "bg-secondary hover:bg-primary text-white"
                )}
              >
                Plan Your Journey
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-[60] p-2 text-secondary hover:text-primary transition-colors -mr-2"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-7 h-7" strokeWidth={1.5} /> : <Menu className="w-7 h-7" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Editorial Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-ivory flex flex-col pt-28 px-6 pb-12 overflow-y-auto"
          >
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-[80%] h-[50%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[80%] h-[50%] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'text-4xl sm:text-5xl font-display font-bold transition-colors inline-block relative group',
                        pathname === link.href ? 'text-primary' : 'text-secondary hover:text-primary'
                      )}
                    >
                      {link.label}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-auto pt-16 flex flex-col gap-8"
              >
                <Link 
                  href="/contact" 
                  className="group flex items-center justify-between px-8 py-5 rounded-full bg-secondary hover:bg-primary text-white font-sans text-sm uppercase tracking-widest font-bold transition-all duration-300 shadow-xl"
                >
                  Plan Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <div className="flex items-center justify-between border-t border-border/50 pt-6 px-2">
                   <div className="flex flex-col gap-1">
                     <span className="font-sans text-[10px] uppercase tracking-widest text-secondary/50 font-bold">Inquiries</span>
                     <a href="mailto:hello@eventurism.com" className="font-sans text-sm text-secondary font-medium">hello@eventurism.com</a>
                   </div>
                   <div className="flex flex-col gap-1 text-right">
                     <span className="font-sans text-[10px] uppercase tracking-widest text-secondary/50 font-bold">Call Us</span>
                     <a href="tel:+917449229229" className="font-sans text-sm text-secondary font-medium">+91-7449229229</a>
                   </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
