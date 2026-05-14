'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X, ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  {
    label: 'Indian Packages',
    href: '/tours?category=india',
    dropdown: [
      { label: 'Kerala Escapes', href: '/tours?destination=kerala' },
      { label: 'Kashmir Valleys', href: '/tours?destination=kashmir' },
      { label: 'Rajasthan Heritage', href: '/tours?destination=rajasthan' },
      { label: 'Andaman Islands', href: '/tours?destination=andaman' },
      { label: 'View All Indian Packages', href: '/tours?category=india', isViewAll: true }
    ]
  },
  {
    label: 'International Packages',
    href: '/tours?category=international',
    dropdown: [
      { label: 'Bali Retreats', href: '/tours?destination=bali' },
      { label: 'Maldives Luxury', href: '/tours?destination=maldives' },
      { label: 'Dubai Experiences', href: '/tours?destination=dubai' },
      { label: 'Europe Tours', href: '/tours?destination=europe' },
      { label: 'View All International Packages', href: '/tours?category=international', isViewAll: true }
    ]
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { 
    setOpen(false) 
    setMobileExpanded(null)
    setActiveDropdown(null)
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

  const toggleMobileAccordion = (label: string) => {
    setMobileExpanded(prev => prev === label ? null : label)
  }

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-ivory shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)] py-3 lg:py-4 border-b border-border/30' 
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <div 
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'text-[13px] font-sans uppercase tracking-[0.1em] font-medium transition-colors flex items-center gap-1 relative py-2',
                      pathname === link.href ? 'text-primary' : 'text-secondary/80 hover:text-secondary'
                    )}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                        >
                          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-border/40 p-3 overflow-hidden flex flex-col relative before:absolute before:top-[-6px] before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:bg-white before:rotate-45 before:border-l before:border-t before:border-border/40">
                            {link.dropdown.map((item, idx) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                  "font-sans px-4 py-3 rounded-xl transition-colors text-sm",
                                  item.isViewAll 
                                    ? "mt-2 bg-ivory text-primary font-medium text-center border border-border/30 hover:bg-primary hover:text-white"
                                    : "text-secondary/70 hover:bg-ivory hover:text-secondary"
                                )}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop WhatsApp CTA */}
            <div className="hidden lg:flex items-center relative z-[60]">
              <a 
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-full font-sans text-[12px] uppercase tracking-widest font-bold transition-all duration-300 border border-border hover:border-primary/40 bg-white hover:bg-ivory text-secondary hover:text-primary shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
              >
                <MessageCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                Inquire Now
              </a>
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

      {/* Fullscreen Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-ivory flex flex-col pt-28 px-6 pb-8 overflow-y-auto"
          >
            <div className="relative z-10 flex flex-col h-full max-w-lg mx-auto w-full">
              
              <div className="flex flex-col gap-2 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.4 }}
                    className="border-b border-border/40 last:border-0"
                  >
                    {link.dropdown ? (
                      <div className="flex flex-col">
                        <button 
                          onClick={() => toggleMobileAccordion(link.label)}
                          className="flex items-center justify-between w-full py-5 text-left"
                        >
                          <span className={cn(
                            "font-display text-3xl sm:text-4xl transition-colors",
                            mobileExpanded === link.label ? "text-primary" : "text-secondary"
                          )}>
                            {link.label}
                          </span>
                          <ChevronDown className={cn(
                            "w-6 h-6 text-secondary/50 transition-transform duration-300",
                            mobileExpanded === link.label && "rotate-180 text-primary"
                          )} />
                        </button>
                        
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-3 pb-6"
                            >
                              {link.dropdown.map(item => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className={cn(
                                    "font-sans text-lg pl-4 transition-colors",
                                    item.isViewAll ? "text-primary font-medium mt-2" : "text-secondary/70 hover:text-secondary"
                                  )}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          'block py-5 text-3xl sm:text-4xl font-display text-secondary transition-colors',
                          pathname === link.href && 'text-primary'
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-auto pt-12 flex flex-col gap-6"
              >
                <a 
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-[#25D366] text-white font-sans text-sm uppercase tracking-widest font-bold shadow-lg shadow-[#25D366]/20 transition-transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                
                <div className="flex items-center justify-between px-2 pt-4">
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
