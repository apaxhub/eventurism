'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CheckCircle, MessageSquare, ShieldCheck, Clock } from 'lucide-react'

export function ContactInquirySection() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    destination: '',
    dates: '',
    groupSize: '',
    budget: '',
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
    
    // Bundle extra fields into the single message field for the backend
    const fullMessage = `
Destination: ${form.destination || 'Not specified'}
Dates: ${form.dates || 'Not specified'}
Group: ${form.groupSize || 'Not specified'}
Budget: ${form.budget || 'Not specified'}

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

  const inputClass = "w-full bg-transparent border-b border-secondary/20 py-3 px-0 text-secondary placeholder-secondary/40 focus:outline-none focus:border-primary focus:ring-0 transition-colors text-base font-sans rounded-none"
  const selectClass = "w-full bg-transparent border-b border-secondary/20 py-3 px-0 text-secondary/70 focus:outline-none focus:border-primary focus:ring-0 transition-colors text-base font-sans rounded-none appearance-none"

  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Messaging & Trust */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-primary" />
                <span className="font-sans text-xs tracking-widest text-primary uppercase font-semibold">
                  Personalized Planning
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary leading-tight mb-6">
                Design Your Masterpiece.
              </h2>
              <p className="font-sans text-secondary/70 leading-relaxed font-light text-lg mb-12">
                Every detail of your journey should reflect your exact tastes and desires. Share your vision with our travel designers, and we will begin crafting a truly bespoke itinerary exclusively for you.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-col gap-6 mb-16">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-secondary mb-1">Absolute Privacy</h4>
                    <p className="font-sans text-sm text-secondary/60">Your travel plans and personal information remain strictly confidential.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-secondary mb-1">Priority Concierge Response</h4>
                    <p className="font-sans text-sm text-secondary/60">A dedicated travel artisan will review your inquiry and respond within 12 hours.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Alternative */}
              <div className="bg-white p-6 rounded-[24px] border border-border/50 shadow-sm flex items-center justify-between group hover:border-primary transition-colors">
                <div>
                  <h4 className="font-sans text-xs tracking-widest text-secondary/50 uppercase font-semibold mb-2">Instant Connection</h4>
                  <p className="font-display font-bold text-xl text-secondary">Prefer WhatsApp?</p>
                </div>
                <a 
                  href="https://wa.me/917449229229" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2} className="bg-white p-8 sm:p-12 lg:p-16 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.05)] border border-border/40 relative h-full">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-secondary mb-4">Inquiry Received.</h3>
                  <p className="font-sans text-secondary/70 leading-relaxed max-w-sm mb-8">
                    Thank you for sharing your vision with us. Our concierge team is reviewing your details and will contact you shortly to begin the design process.
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input type="text" name="dates" placeholder="Anticipated Travel Dates" value={form.dates} onChange={handleChange} className={inputClass} />
                    <select name="groupSize" value={form.groupSize} onChange={handleChange} className={selectClass}>
                      <option value="" disabled>Group Size</option>
                      <option value="Solo">Solo Traveler</option>
                      <option value="Couple">Couple (2)</option>
                      <option value="Small Family">Small Family (3-4)</option>
                      <option value="Group">Group (5+)</option>
                    </select>
                  </div>
                  <select name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
                    <option value="" disabled>Anticipated Investment (Per Person)</option>
                    <option value="Flexible">Flexible</option>
                    <option value="Premium ($2k - $5k)">Premium ($2,000 - $5,000)</option>
                    <option value="Luxury ($5k - $10k)">Luxury ($5,000 - $10,000)</option>
                    <option value="Ultra-Luxury ($10k+)">Ultra-Luxury ($10,000+)</option>
                  </select>
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
                    className="mt-4 w-full bg-secondary text-white font-sans text-sm tracking-widest uppercase font-medium py-5 rounded-full hover:bg-primary transition-colors duration-500 disabled:opacity-70"
                  >
                    {loading ? 'Submitting...' : 'Request Consultation'}
                  </button>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-secondary/40 text-center -mt-2">
                    Your details are securely transmitted to our concierge team.
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
