import { Tent, Mountain, Hotel, Plane, Bus, Users } from 'lucide-react'

const services = [
  { icon: Tent, title: 'Corporate Events', desc: 'Conferences, team outings, product launches, and galas planned to perfection.' },
  { icon: Mountain, title: 'Hill Station Tours', desc: 'Ooty, Kodaikanal, Munnar — misty escapes curated for every group size.' },
  { icon: Hotel, title: 'Hotel Bookings', desc: 'Only top-rated, pre-verified properties. No surprises at check-in.' },
  { icon: Plane, title: 'Flight Tickets', desc: 'Domestic and international tickets at competitive rates, zero hassle.' },
  { icon: Bus, title: 'Transport Booking', desc: 'AC vehicles, all routes, seamlessly coordinated throughout your trip.' },
  { icon: Users, title: 'Team Building', desc: 'Custom activities that turn colleagues into a team that actually connects.' },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">What We Do</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-secondary mt-3 mb-4">
            Everything Under One Roof
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            We&apos;re the only company in Chennai that combines event management and tour operations — your single partner for both.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 border border-border/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display font-bold text-lg text-secondary mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
