import type { Metadata } from 'next'
import { CTABanner } from '@/components/sections/CTABanner'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Gallery | Holiday & Tour Photos | Eventurism Chennai',
  description: 'Browse photos from Eventurism tour packages across India — Ooty, Kodaikanal, Andaman, Kerala, Pondicherry and more beautiful destinations.',
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Ooty hills landscape', category: 'Hill Stations' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', alt: 'Andaman beach', category: 'Beaches' },
  { src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', alt: 'Kerala backwaters', category: 'Kerala' },
  { src: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=800&q=80', alt: 'Kodaikanal mist', category: 'Hill Stations' },
  { src: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', alt: 'Pondicherry streets', category: 'Heritage' },
  { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', alt: 'Beach holiday', category: 'Beaches' },
  { src: 'https://images.unsplash.com/photo-1506461883276-594a12b5f735?w=800&q=80', alt: 'Hill station view', category: 'Hill Stations' },
  { src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80', alt: 'Kerala temple', category: 'Heritage' },
  { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80', alt: 'Ocean view', category: 'Beaches' },
  { src: 'https://images.unsplash.com/photo-1574490093980-fb8f8d5dad45?w=800&q=80', alt: 'Mountain vista', category: 'Hill Stations' },
  { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80', alt: 'Rajasthan fort', category: 'Heritage' },
  { src: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800&q=80', alt: 'Goa beach', category: 'Beaches' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Our Portfolio</span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mt-3 mb-4">
              Journeys Captured<br /><span className="text-primary not-italic">In Photographs</span>
            </h1>
            <p className="font-sans text-white/70 text-lg max-w-xl mx-auto">
              Real moments from our tour packages across India&apos;s most beautiful destinations.
            </p>
          </AnimatedSection>
        </div>
      </section>


      {/* Gallery Grid */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={Math.min(i * 0.05, 0.4)} className="break-inside-avoid">
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="font-sans text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 px-3 py-1.5 rounded-full font-medium">
                      {img.category}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
