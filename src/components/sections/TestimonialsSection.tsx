import { AnimatedSection } from '@/components/ui/AnimatedSection'

const testimonials = [
  {
    quote: "The travel arrangements were outstanding — they took such great care of us throughout the entire Ooty trip. Manoj organized everything exactly as we needed. Highly recommended!",
    name: "Priya Ramachandran",
    role: "Family Tour · Ooty",
    stars: 5,
  },
  {
    quote: "Food, accommodation, and activities in Andaman — everything was excellent. They surprised us at every turn with thoughtful details. Already planning our next trip with Eventurism.",
    name: "Sridevi Annamalai",
    role: "Family Tour · Andaman",
    stars: 5,
  },
  {
    quote: "Booked a Kodaikanal package for our anniversary. The hotel choice was perfect and the itinerary was well-paced. Everything went smoothly without a single hiccup.",
    name: "Rajesh & Meena Kumar",
    role: "Couple Tour · Kodaikanal",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="font-sans text-xs tracking-widest text-primary uppercase font-medium">Happy Travellers</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mt-3">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-lg">★</span>)}
            </div>
            <span className="font-sans text-sm text-neutral">4.8/5 on Justdial · 212 Reviews</span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12} direction="up">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full flex flex-col">
                <div className="flex mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
                <blockquote className="font-sans text-white/80 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold font-display text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-sans text-white font-medium text-sm">{t.name}</div>
                    <div className="font-sans text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
