import type { Metadata } from 'next'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Gallery | Tour & Event Photos',
  description: 'Browse photos from Eventurism tours and events across Tamil Nadu and South India.',
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Ooty hills landscape', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80', alt: 'Corporate event', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', alt: 'Andaman beach', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', alt: 'Kerala backwaters', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80', alt: 'Team building activity', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=800&q=80', alt: 'Kodaikanal mist', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', alt: 'Pondicherry streets', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', alt: 'Beach holiday', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1506461883276-594a12b5f735?w=800&q=80', alt: 'Hill station view', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80', alt: 'Kerala temple', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80', alt: 'Ocean view', category: 'Tours' },
  { src: 'https://images.unsplash.com/photo-1574490093980-fb8f8d5dad45?w=800&q=80', alt: 'Mountain vista', category: 'Tours' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary text-center">
        <span className="font-mono text-xs tracking-widest text-primary uppercase">Our Portfolio</span>
        <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mt-3 mb-4">
          Moments We&apos;ve Made
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto">
          Real experiences from our tours and events across South India.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-mono text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 px-3 py-1.5 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
