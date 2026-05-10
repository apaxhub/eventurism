import { Mountain, Waves, Landmark, Hotel, Bus, Package } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const services = [
  { icon: Mountain, title: 'Hill Station Tours', desc: 'Ooty, Kodaikanal, Munnar, Coorg — misty escapes perfectly curated for every group size and budget.' },
  { icon: Waves, title: 'Beach Holidays', desc: 'Andaman, Goa, Pondicherry — sun, sand, and sea with seamless travel arrangements from Chennai.' },
  { icon: Landmark, title: 'Heritage Tours', desc: 'Discover the rich culture of Rajasthan, Tamil Nadu temples, and Kerala backwaters at a leisurely pace.' },
  { icon: Hotel, title: 'Hotel Bookings', desc: 'Only top-rated, pre-verified properties that match your budget. No surprises at check-in.' },
  { icon: Bus, title: 'Transport & Transfers', desc: 'Comfortable AC vehicles for all routes — airport pickups, sightseeing, and inter-city transfers.' },
  { icon: Package, title: 'Custom Packages', desc: 'Have a specific destination in mind? We design tailor-made holidays to fit your dates, group, and budget.' },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">What We Offer</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-3 mb-4">
            Discover India Your Way
          </h2>
          <p className="font-sans text-gray-500 max-w-lg mx-auto">
            From the cool hills of the Western Ghats to sun-kissed beaches and royal heritage forts — we craft the perfect holiday for you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.08} direction="up">
              <div className="group bg-white rounded-2xl p-6 border border-border/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-secondary mb-2">{title}</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
