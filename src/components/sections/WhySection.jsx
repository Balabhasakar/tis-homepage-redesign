import { rankings, stats } from '../../data/stats'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'
import StatCard from '../ui/StatCard'

function WhySection() {
  return (
    <section
      id="why-tis"
      className="bg-slate-50 py-20 dark:bg-slate-800 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why TIS"
            title="A campus built for every kind of student"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </Reveal>
          ))}
        </div>

        <div id="achievements" className="mt-20 scroll-mt-24">
          <Reveal>
            <SectionHeading
              eyebrow="Achievements"
              title="Ranked among the best boarding schools"
              align="center"
            />
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {rankings.map((item, index) => (
              <li key={`${item.rank}-${item.area}`}>
                <Reveal delay={index * 0.1} className="h-full">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                    <p className="text-5xl font-extrabold text-brand dark:text-accent">
                      {item.rank}
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                      {item.area}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.title}
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      by {item.source}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhySection