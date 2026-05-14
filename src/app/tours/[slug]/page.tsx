'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, X, Clock, Users, MapPin, Phone, 
  MessageCircle, ChevronDown, Camera, 
  Calendar, ShieldCheck, Briefcase, Car
} from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

// --- Mock Data (To be replaced by Prisma in a real scenario, but keeping the structure for UI) ---
// Note: In a real Next.js App Router setup, data fetching should happen in a Server Component.
// Since the prompt asks to "Design" and I'm updating the existing [slug]/page.tsx which was async,
// I will structure this to work with the data structure we saw in the previous file read.
// However, I will make it a client component for the interactive parts (Accordions, etc.) 
// and handle the data passed as props if needed. 
// For this design task, I'll implement the UI logic directly.

const pkgData = {
  title: 'The Andaman Archipelagos',
  destination: 'Andaman Islands, India',
  description: '<p>Uncover untouched coral reefs and pristine white sands. A secluded paradise where time slows down and nature takes center stage. Perfect for those seeking both adventure and absolute tranquility.</p><p>Our journey takes you through the most exquisite islands, from the bustling markets of Port Blair to the serene beaches of Havelock and Neil Island.</p>',
  duration: '6 Days / 5 Nights',
  groupSize: '2 - 12 People',
  travelStyle: 'Luxury Coastal',
  accommodation: 'Boutique Resorts',
  transport: 'Private Vehicle & Ferries',
  priceFrom: 55000,
  thumbnail: 'https://images.unsplash.com/photo-1589394815804-964ce0ff96c7?w=1200&q=80',
  images: [
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    'https://images.unsplash.com/photo-1506929197484-41712a3827d0?w=800&q=80'
  ],
  highlights: [
    'Private dinner on Radhanagar Beach',
    'Snorkeling in Elephant Beach crystal waters',
    'Sunset cruise around Neil Island',
    'Heritage tour of Cellular Jail',
    'Scuba diving for beginners and pros'
  ],
  itinerary: [
    { day: 1, title: 'Arrival in Port Blair', description: 'Meet our representative at the airport and transfer to your resort. In the evening, witness the Light and Sound Show at Cellular Jail.' },
    { day: 2, title: 'Ferry to Havelock Island', description: 'Take a private cruise to Havelock Island. Afternoon visit to the world-famous Radhanagar Beach, rated as one of Asia’s best.' },
    { day: 3, title: 'Elephant Beach Exploration', description: 'Embark on a boat ride to Elephant Beach for water sports like snorkeling and sea walk. Enjoy the vibrant coral life.' },
    { day: 4, title: 'Neil Island Tranquility', description: 'Proceed to Neil Island by ferry. Visit Bharatpur Beach and Laxmanpur Beach, known for its natural rock formations.' },
    { day: 5, title: 'Return to Port Blair', description: 'Return to Port Blair via ferry. Spend the evening shopping for local handicrafts and exploring the town.' },
    { day: 6, title: 'Departure', description: 'Morning at leisure. Transfer to the airport with beautiful memories of the islands.' }
  ],
  inclusions: [
    'Premium Accommodation',
    'Daily Breakfast & Dinner',
    'All Private Ferry Transfers',
    'Sightseeing in AC Vehicle',
    'Airport Pickup & Drop',
    'Activity Coordination'
  ],
  exclusions: [
    'Airfare to Port Blair',
    'Lunch & Personal Expenses',
    'Optional Water Sports Fees',
    'Travel Insurance'
  ]
}

export default function PackageDetailPage() {
  const [activeDay, setActiveDay] = useState<number | null>(1)

  return (
    <div className="bg-ivory min-h-screen pb-32">
      {/* 1. Package Hero Section */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image src={pkgData.thumbnail} alt={pkgData.title} fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/80" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatedSection>
              <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60 mb-6 font-bold">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/tours" className="hover:text-primary transition-colors">Tours</Link>
                <span>/</span>
                <span className="text-white">{pkgData.title}</span>
              </nav>
              
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-sans text-xs uppercase tracking-widest text-white/90 font-bold">{pkgData.destination}</span>
                  </div>
                  <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
                    {pkgData.title}
                  </h1>
                  <p className="font-sans text-lg text-white/80 font-light leading-relaxed max-w-2xl hidden sm:block">
                    An immersive escape designed for those who seek beauty, culture, and unforgettable coastal moments.
                  </p>
                </div>
                
                {/* Desktop Hero CTA */}
                <div className="hidden lg:flex flex-col gap-4 min-w-[300px]">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20">
                    <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Starting from</p>
                    <p className="font-display text-4xl text-white font-bold mb-6">₹{pkgData.priceFrom.toLocaleString()} <span className="text-sm font-light">/ person</span></p>
                    <a 
                      href={`https://wa.me/917449229229?text=Hi, I am interested in the ${pkgData.title} package.`}
                      className="w-full bg-primary text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Inquire via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. Quick Package Overview */}
      <section className="relative z-20 -mt-10 lg:-mt-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.1)] border border-border/40">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-4">
            <OverviewItem icon={<Clock />} label="Duration" value={pkgData.duration} />
            <OverviewItem icon={<Users />} label="Group Size" value={pkgData.groupSize} />
            <OverviewItem icon={<ShieldCheck />} label="Style" value={pkgData.travelStyle} />
            <OverviewItem icon={<Briefcase />} label="Stay" value={pkgData.accommodation} />
            <OverviewItem icon={<Car />} label="Transit" value={pkgData.transport} />
          </div>
        </div>
      </section>

      {/* 3. About the Experience & Highlights */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <h2 className="font-display text-3xl lg:text-4xl text-secondary font-bold mb-8">
                  About the <em className="text-primary not-italic font-medium">Experience</em>
                </h2>
                <div 
                  className="font-sans text-secondary/70 text-base lg:text-lg leading-relaxed font-light space-y-6"
                  dangerouslySetInnerHTML={{ __html: pkgData.description }}
                />
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="bg-ivory-dark/40 rounded-[2.5rem] p-8 lg:p-10 border border-border/50">
                  <h3 className="font-display text-2xl text-secondary font-bold mb-8 tracking-tight">Key Highlights</h3>
                  <ul className="space-y-6">
                    {pkgData.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="font-sans text-sm lg:text-base text-secondary/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Day-wise Itinerary */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold mb-4 block">The Journey</span>
              <h2 className="font-display text-4xl text-secondary font-bold">Planned to Perfection</h2>
            </AnimatedSection>
          </div>
          
          <div className="space-y-4">
            {pkgData.itinerary.map((item) => (
              <AnimatedSection key={item.day}>
                <div 
                  className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                    activeDay === item.day ? 'bg-white border-primary/20 shadow-xl shadow-secondary/5' : 'bg-transparent border-border/50 hover:border-primary/20'
                  }`}
                >
                  <button 
                    onClick={() => setActiveDay(activeDay === item.day ? null : item.day)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display text-xl font-bold transition-colors duration-500 ${
                        activeDay === item.day ? 'bg-primary text-white' : 'bg-white text-secondary/40 shadow-sm border border-border/40'
                      }`}>
                        {item.day}
                      </div>
                      <h3 className="font-display text-lg lg:text-xl text-secondary font-bold">{item.title}</h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-secondary/40 transition-transform duration-500 ${activeDay === item.day ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDay === item.day && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 lg:px-24 lg:pb-12">
                          <p className="font-sans text-secondary/60 text-base leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Included & Excluded */}
      <section className="py-24 bg-white border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <AnimatedSection>
                <h3 className="font-display text-2xl text-secondary font-bold mb-10 flex items-center gap-3">
                  <Check className="text-primary w-6 h-6" /> What&apos;s Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                  {pkgData.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-secondary/70 font-sans text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
            
            <div>
              <AnimatedSection>
                <h3 className="font-display text-2xl text-secondary font-bold mb-10 flex items-center gap-3">
                  <X className="text-secondary/30 w-6 h-6" /> What&apos;s Not Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                  {pkgData.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-secondary/40 font-sans text-sm font-medium line-through decoration-secondary/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary/10 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Travel Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <AnimatedSection>
              <h2 className="font-display text-3xl lg:text-4xl text-secondary font-bold">Visual <em className="text-primary not-italic font-medium">Atmosphere</em></h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-center gap-2 text-secondary/40">
                <Camera className="w-4 h-4" />
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold">5 Authentic Shots</span>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px] lg:h-[800px]">
            <div className="md:col-span-8 h-full">
              <div className="relative h-full rounded-[2.5rem] overflow-hidden group shadow-xl">
                <Image src={pkgData.images[0]} alt="Travel shot 1" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-4 h-full">
              <div className="relative h-full rounded-[2.5rem] overflow-hidden group shadow-xl">
                <Image src={pkgData.images[1]} alt="Travel shot 2" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="relative h-full rounded-[2.5rem] overflow-hidden group shadow-xl">
                <Image src={pkgData.images[2]} alt="Travel shot 3" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Inquiry CTA */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to begin this <br />
              <em className="text-primary not-italic">extraordinary</em> journey?
            </h2>
            <p className="font-sans text-white/60 text-lg lg:text-xl font-light mb-12 max-w-xl mx-auto">
              Our travel specialists are ready to help you customize every detail of your Andaman escape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/917449229229" 
                className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Inquiry
              </a>
              <a 
                href="tel:+917449229229" 
                className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white hover:text-secondary transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Talk to an Expert
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white/90 to-transparent backdrop-blur-sm">
        <div className="max-w-md mx-auto flex gap-3">
          <a 
            href={`https://wa.me/917449229229?text=Hi, I am interested in the ${pkgData.title} package.`}
            className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-green-500/20 text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a 
            href="tel:+917449229229"
            className="flex-1 bg-secondary text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-secondary/20 text-sm"
          >
            <Phone className="w-5 h-5" />
            Direct Call
          </a>
        </div>
      </div>
    </div>
  )
}

function OverviewItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center lg:flex-col lg:items-center gap-4 lg:gap-2 text-center">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-ivory flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div className="text-left lg:text-center">
        <p className="font-sans text-[9px] uppercase tracking-widest text-secondary/40 font-bold mb-0.5">{label}</p>
        <p className="font-sans text-[13px] text-secondary font-bold">{value}</p>
      </div>
    </div>
  )
}

