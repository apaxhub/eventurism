import { AnimatedSection } from '@/components/ui/AnimatedSection'

const stats = [
  { value: '4.8★', label: 'Justdial Rating', sub: '212 verified reviews' },
  { value: '500+', label: 'Holidays Delivered', sub: 'Across India & beyond' },
  { value: '13+', label: 'Years Experience', sub: 'Trusted since 2011' },
  { value: '50+', label: 'Destinations', sub: 'Hill stations, beaches & more' },
]

export function StatsSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} direction="up">
              <div className="text-center">
                <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-1">{stat.value}</div>
                <div className="font-sans font-medium text-white text-sm mb-1">{stat.label}</div>
                <div className="font-sans text-white/40 text-xs">{stat.sub}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
