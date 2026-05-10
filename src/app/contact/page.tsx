'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select, Textarea } from '@/components/ui/FormFields'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import type { Metadata } from 'next'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'General', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.phone || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const d = await res.json()
        throw new Error(d.error || 'Submission failed')
      }
      setSuccess(true)
      setForm({ name: '', email: '', phone: '', service: 'General', message: '' })
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Plan Your Holiday</span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mt-3 mb-4">
              Let&apos;s Plan Your<br />
              <span className="text-primary not-italic">Dream Trip Together</span>
            </h1>
            <p className="font-sans text-white/70 text-lg">Share your travel ideas — we&apos;ll take care of the rest.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2 flex flex-col gap-6" direction="left">
              <div>
                <h2 className="font-display font-bold text-2xl text-secondary mb-6">Contact Details</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: Phone, label: 'Phone', value: '+91-7449229229', href: 'tel:+917449229229', isWhatsApp: false },
                    { icon: null, label: 'WhatsApp', value: 'Chat with us directly', href: 'https://wa.me/917449229229', isWhatsApp: true },
                    { icon: Mail, label: 'Email', value: 'eventurisms@gmail.com', href: 'mailto:eventurisms@gmail.com', isWhatsApp: false },
                  ].map(({ icon: Icon, label, value, href, isWhatsApp }) => (
                    <a key={label} href={href} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border/50 hover:border-primary hover:shadow-lg transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        {isWhatsApp ? (
                          <Image src="/whatsapp_logo.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert transition-all" />
                        ) : Icon ? (
                          <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        ) : null}
                      </div>
                      <div>
                        <div className="font-sans text-xs text-gray-400">{label}</div>
                        <div className="font-sans text-sm font-medium text-secondary">{value}</div>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border/50">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-sans text-xs text-gray-400">Address</div>
                      <div className="font-sans text-sm font-medium text-secondary">No 43, Nevethitha Apt, Jaganathan Nagar, Arumbakkam, Chennai – 600106</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border/50">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-sans text-xs text-gray-400">Business Hours</div>
                      <div className="font-sans text-sm font-medium text-secondary">Mon – Sat, 9:00 AM – 7:00 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick action cards */}
              <div className="grid grid-cols-2 gap-3">
                <a href="tel:+917449229229" className="p-4 bg-secondary text-white rounded-2xl text-center hover:bg-secondary/90 transition-colors">
                  <Phone className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-sans text-sm font-medium">Call Us</div>
                  <div className="font-sans text-xs text-white/50 mt-1">Instant</div>
                </a>
                <a href="https://wa.me/917449229229" className="p-4 bg-secondary text-white rounded-2xl text-center hover:bg-secondary/90 transition-colors">
                  <Image src="/whatsapp_logo.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5 object-contain mx-auto mb-2" />
                  <div className="font-sans text-sm font-medium">WhatsApp</div>
                  <div className="font-sans text-xs text-white/50 mt-1">Quick reply</div>
                </a>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" direction="right" delay={0.15}>
              <div className="bg-white rounded-2xl border border-border/50 p-8 shadow-xl shadow-secondary/5">
                <h2 className="font-display font-bold text-2xl text-secondary mb-6">Send an Enquiry</h2>

                {success ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-secondary mb-2">Enquiry Sent!</h3>
                    <p className="font-sans text-gray-500 mb-6">We&apos;ll get back to you within 2–4 hours. Check your WhatsApp too!</p>
                    <button onClick={() => setSuccess(false)} className="font-sans text-primary text-sm hover:underline">Send another enquiry</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input id="name" name="name" label="Full Name *" placeholder="Your name" value={form.name} onChange={handleChange} required />
                      <Input id="phone" name="phone" label="Phone Number *" placeholder="+91 XXXXX XXXXX" type="tel" value={form.phone} onChange={handleChange} required />
                    </div>
                    <Input id="email" name="email" label="Email Address *" placeholder="your@email.com" type="email" value={form.email} onChange={handleChange} required />
                    <Select id="service" name="service" label="I'm interested in" value={form.service} onChange={handleChange}>
                      <option value="General">General Enquiry</option>
                      <option value="Tour Package">Tour Package</option>
                      <option value="Hill Station">Hill Station Tour</option>
                      <option value="Beach Holiday">Beach Holiday</option>
                      <option value="Heritage Tour">Heritage Tour</option>
                      <option value="Family Tour">Family Tour</option>
                      <option value="Honeymoon Package">Honeymoon Package</option>
                      <option value="Custom Package">Custom Package</option>
                      <option value="Hotel Booking">Hotel Booking</option>
                      <option value="Flight Booking">Flight Booking</option>
                    </Select>
                    <Textarea id="message" name="message" label="Your Message *" placeholder="Tell us about your dream trip — destination, dates, group size, budget..." rows={4} value={form.message} onChange={handleChange} required />

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 font-sans text-sm rounded-xl px-4 py-3">{error}</div>
                    )}

                    <Button type="submit" size="lg" loading={loading} className="w-full">
                      Send Enquiry
                    </Button>
                    <p className="font-sans text-xs text-gray-400 text-center">We typically respond within 2–4 hours during business hours.</p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-72 bg-ivory-dark">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4726743259!2d80.21002!3d13.07447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264012a78c1bd%3A0xa3dd5d4a8c05c0bb!2sArumbakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600106!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Eventurism location - Arumbakkam Chennai"
        />
      </section>
    </>
  )
}
