const testimonials = [
  {
    quote: "The travel arrangements were outstanding — they took great care of us throughout the entire Ooty trip. Manoj organized everything exactly as we needed.",
    name: "Priya Ramachandran",
    role: "Family Tour · Ooty",
    stars: 5,
  },
  {
    quote: "Eventurism handled our entire corporate team outing for 45 people flawlessly. Professionalism at every step. Our team is still talking about it.",
    name: "Karthik Muthukumar",
    role: "Corporate Event · Team Building",
    stars: 5,
  },
  {
    quote: "Food, accommodation, and activities in Andaman — everything was excellent. They surprised us at every turn. Already planning our next trip with them.",
    name: "Sridevi Annamalai",
    role: "Family Tour · Andaman",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">Client Stories</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mt-3">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-lg">★</span>)}
            </div>
            <span className="font-mono text-sm text-neutral">4.8/5 on Justdial · 212 Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base">★</span>
                ))}
              </div>
              <blockquote className="text-white/80 text-sm leading-relaxed mb-6 font-sans">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold font-display text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs font-mono">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
