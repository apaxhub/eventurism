const stats = [
  { value: '4.8★', label: 'Justdial Rating', sub: '212 verified reviews' },
  { value: '500+', label: 'Trips Delivered', sub: 'Events and tours combined' },
  { value: '13+', label: 'Years Experience', sub: 'Trusted since 2011' },
  { value: '50+', label: 'Destinations', sub: 'Across South India' },
]

export function StatsSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-1">{stat.value}</div>
              <div className="font-medium text-white text-sm mb-1">{stat.label}</div>
              <div className="text-white/40 text-xs font-mono">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
