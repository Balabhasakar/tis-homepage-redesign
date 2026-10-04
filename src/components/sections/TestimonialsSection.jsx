import { testimonials } from '../../data/testimonials'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-20 dark:bg-slate-900 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="From the Parents"
            title="What our parents say about Tulas"
            align="center"
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={(index % 3) * 0.1} className="h-full">
                <TestimonialCard
                  name={item.name}
                  relation={item.relation}
                  quote={item.quote}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TestimonialsSection