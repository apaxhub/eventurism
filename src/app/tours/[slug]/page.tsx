import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { formatPrice } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { CTABanner } from '@/components/sections/CTABanner'
import { Check, X, Clock, Users, MapPin, Phone, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

interface PageProps { params: { slug: string } }

async function getPackage(slug: string) {
  try {
    return await prisma.package.findFirst({ where: { slug, published: true } })
  } catch { return null }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pkg = await getPackage(params.slug)
  if (!pkg) return { title: 'Package Not Found' }
  return {
    title: pkg.title,
    description: `${pkg.destination} — ${pkg.duration}. Starting from ${formatPrice(pkg.priceFrom)}. Book your ${pkg.title} package with Eventurism Chennai.`,
  }
}

export default async function PackagePage({ params }: PageProps) {
  const pkg = await getPackage(params.slug)
  if (!pkg) notFound()

  const itinerary = pkg.itinerary as Array<{ day: number; title: string; description: string }>
  const allImages = [pkg.thumbnail, ...pkg.images].slice(0, 5)

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <Image src={pkg.thumbnail} alt={pkg.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <nav className="text-xs font-mono text-white/50 mb-3">
            <Link href="/" className="hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/tours" className="hover:text-white/80">Tours</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{pkg.title}</span>
          </nav>
          {pkg.tag && <Badge className="bg-primary text-white border-none mb-2">{pkg.tag}</Badge>}
          <h1 className="font-display font-bold text-3xl lg:text-5xl text-white mb-2">{pkg.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm font-mono">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary" />{pkg.destination}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary" />{pkg.duration}</span>
            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-primary" />{pkg.groupSize}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Description */}
            <div>
              <h2 className="font-display font-bold text-2xl text-secondary mb-4">About This Package</h2>
              <div className="package-content text-gray-600" dangerouslySetInnerHTML={{ __html: pkg.description }} />
            </div>

            {/* Highlights */}
            {pkg.highlights.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-secondary mb-4">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-white rounded-xl p-3 border border-border/50">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-secondary">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {itinerary.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-secondary mb-6">Day-by-Day Itinerary</h2>
                <div className="flex flex-col gap-4">
                  {itinerary.map((day, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-mono font-bold text-sm shrink-0">
                          {day.day}
                        </div>
                        {i < itinerary.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                      </div>
                      <div className="pb-6">
                        <h3 className="font-display font-semibold text-lg text-secondary mb-1">{day.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pkg.inclusions.length > 0 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-secondary mb-4">Inclusions</h2>
                  <ul className="flex flex-col gap-2.5">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {pkg.exclusions.length > 0 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-secondary mb-4">Exclusions</h2>
                  <ul className="flex flex-col gap-2.5">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Photo gallery */}
            {allImages.length > 1 && (
              <div>
                <h2 className="font-display font-bold text-2xl text-secondary mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {allImages.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                      <Image src={img} alt={`${pkg.title} photo ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-white rounded-2xl border border-border/50 p-6 shadow-xl shadow-secondary/5">
                <div className="mb-4 pb-4 border-b border-border">
                  <span className="text-xs font-mono text-gray-400">Starting from</span>
                  <div className="font-display font-bold text-4xl text-primary">{formatPrice(pkg.priceFrom)}</div>
                  <span className="text-xs text-gray-400 font-mono">per person</span>
                </div>
                <div className="flex flex-col gap-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600"><Clock className="w-4 h-4 text-primary" />{pkg.duration}</div>
                  <div className="flex items-center gap-2 text-gray-600"><Users className="w-4 h-4 text-primary" />{pkg.groupSize}</div>
                  <div className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-primary" />{pkg.destination}</div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href={`/contact?package=${encodeURIComponent(pkg.title)}`} className="w-full bg-primary text-white text-center py-3.5 rounded-xl font-medium hover:bg-primary-dark transition-colors">
                    Enquire Now
                  </Link>
                  <a href="tel:+917449229229" className="w-full flex items-center justify-center gap-2 border-2 border-secondary text-secondary py-3.5 rounded-xl font-medium hover:bg-secondary hover:text-white transition-colors text-sm">
                    <Phone className="w-4 h-4" /> +91-7449229229
                  </a>
                  <a href="https://wa.me/917449229229" className="w-full flex items-center justify-center gap-2 border border-green-500 text-green-600 py-3.5 rounded-xl font-medium hover:bg-green-500 hover:text-white transition-colors text-sm">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
                <p className="mt-4 text-xs text-gray-400 text-center font-mono">Free consultation · No booking fee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </>
  )
}
