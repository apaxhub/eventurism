'use client'

import { MapPin, Phone, Mail, Video } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const details = [
  {
    icon: MapPin,
    title: "Our Studio",
    content: "No 43, Nevethitha Apt,\nJaganathan Nagar, Arumbakkam,\nChennai – 600106",
    action: "Get Directions",
    link: "https://maps.google.com/?q=Eventurism+Chennai"
  },
  {
    icon: Phone,
    title: "Direct Access",
    content: "Concierge: +91 74492 29229\nGeneral: +91 74492 29229",
    action: "Call Now",
    link: "tel:+917449229229"
  },
  {
    icon: Mail,
    title: "Written Inquiries",
    content: "eventurisms@gmail.com\nWe respond to all inquiries within\n12-24 hours.",
    action: "Send Email",
    link: "mailto:eventurisms@gmail.com"
  },
  {
    icon: Video,
    title: "Global Consultations",
    content: "Mon – Sat, 9:00 AM – 7:00 PM IST\nAvailable globally via Zoom or\nGoogle Meet by appointment.",
    action: "Request Virtual Meeting",
    link: "#"
  }
]

export function ContactDetailsSection() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20 lg:mb-24">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold block mb-4">
            Connect With Eventurism
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary leading-tight mb-6">
            Always at Your Service.
          </h2>
          <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg">
            Whether you wish to visit our studio, schedule a virtual consultation from across the globe, or simply drop us a note, we are here to assist you.
          </p>
        </AnimatedSection>

        {/* Minimal Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-white p-8 lg:p-10 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(15,23,42,0.05)] border border-border/40 group hover:border-primary/50 transition-colors duration-500 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <detail.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-secondary mb-4">
                {detail.title}
              </h3>
              
              <p className="font-sans text-secondary/60 leading-relaxed font-light text-[15px] whitespace-pre-line mb-8 flex-grow">
                {detail.content}
              </p>

              <a 
                href={detail.link} 
                target={detail.link.startsWith('http') ? "_blank" : undefined}
                rel={detail.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="font-sans text-xs tracking-widest text-primary uppercase font-semibold border-b border-primary/30 pb-1 self-start hover:border-primary transition-colors"
              >
                {detail.action}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Social Media References */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <span className="font-sans text-sm text-secondary/60 font-medium">
            Join our global community of travelers.
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors duration-300" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors duration-300" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors duration-300" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
