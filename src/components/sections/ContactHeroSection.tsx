'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, MessageSquare, ShieldCheck, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function ContactHeroSection() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    destination: '',
    dates: '',
    message: '' 
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!form.name || !form.email || !form.phone) {
      setError('Please provide your name and contact details.')
      return
    }

    setLoading(true)
    
    const fullMessage = `
Destination: ${form.destination || 'Not specified'}
Dates: ${form.dates || 'Not specified'}

${form.message}
    `.trim()

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: 'Bespoke Inquiry',
          message: fullMessage
        }),
      })
      
      if (!res.ok) {
        const d = await res.json()
        throw new Error(d.error || 'Submission failed')
      }
      
      setSuccess(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full bg-transparent border-b border-border py-3 px-0 text-secondary placeholder-secondary/50 focus:outline-none focus:border-primary focus:ring-0 transition-colors text-base font-sans rounded-none"

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Hero Messaging */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary/60" />
                <span className="font-sans text-xs tracking-[0.2em] text-secondary/80 uppercase font-medium">
                  Start Your Journey
                </span>
              </div>
              
              <h1 className="font-display font-medium text-5xl sm:text-6xl text-secondary leading-[1.1] mb-6">
                Let&apos;s plan your <br />
                <em className="text-primary not-italic font-serif">next escape.</em>
              </h1>
              
              <p className="font-sans text-lg text-secondary/70 leading-relaxed font-light mb-12">
                Every unforgettable voyage begins with a simple conversation. Whether you have a specific destination in mind or merely a feeling you wish to capture, our travel designers are here to listen.
              </p>
              
              <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-lg text-secondary mb-1">Absolute Privacy</h4>
                    <p className="font-sans text-sm text-secondary/60">Your travel plans and details remain strictly confidential.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-lg text-secondary mb-1">Prompt Response</h4>
                    <p className="font-sans text-sm text-secondary/60">A travel artisan will reach out to you within 24 hours.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Alternative */}
              <div className="bg-white/50 p-6 rounded-2xl border border-border/40 shadow-sm flex items-center justify-between group hover:bg-white transition-colors">
                <div>
                  <h4 className="font-sans text-xs tracking-widest text-secondary/50 uppercase font-medium mb-1">Instant Connection</h4>
                  <p className="font-sans font-medium text-secondary">Prefer WhatsApp?</p>
                </div>
                <a 
                  href="https://wa.me/919999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>

            </AnimatedSection>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2} className="bg-white p-8 sm:p-12 lg:p-16 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border/40 relative h-full">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display font-medium text-3xl text-secondary mb-4">Inquiry Received.</h3>
                  <p className="font-sans text-secondary/70 leading-relaxed max-w-sm mb-8 font-light">
                    Thank you for sharing your vision with us. Our team is reviewing your details and will contact you shortly to begin the design process.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="font-sans text-sm tracking-widest text-secondary uppercase font-semibold border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input type="text" name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} required className={inputClass} />
                    <input type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input type="tel" name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} required className={inputClass} />
                    <input type="text" name="destination" placeholder="Destination of Interest" value={form.destination} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                    <input type="text" name="dates" placeholder="Anticipated Travel Dates" value={form.dates} onChange={handleChange} className={inputClass} />
                  </div>
                  <textarea 
                    name="message" 
                    placeholder="Tell us about your ideal experience... (Special occasions, dietary requirements, must-do activities)" 
                    rows={4} 
                    value={form.message} 
                    onChange={handleChange} 
                    className={`${inputClass} resize-none`}
                  />

                  {error && (
                    <div className="bg-red-50 text-red-600 font-sans text-sm rounded-xl px-4 py-3 border border-red-100">{error}</div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="mt-4 w-full bg-secondary text-white font-sans text-sm tracking-widest uppercase font-medium py-5 rounded-full hover:bg-secondary/90 transition-colors duration-300 disabled:opacity-70"
                  >
                    {loading ? 'Submitting...' : 'Send Inquiry'}
                  </button>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-secondary/40 text-center -mt-2">
                    Your details are securely transmitted to our team.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
