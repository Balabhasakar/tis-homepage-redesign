import { ArrowRight } from 'lucide-react'
import { siteInfo } from '../../data/site'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-20 dark:bg-slate-900 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <SectionHeading eyebrow="About TIS" title={siteInfo.tagline} />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {siteInfo.aboutText}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={siteInfo.virtualTourUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-2 font-bold text-brand hover:gap-3 dark:text-accent"
            >
              Take our virtual tour
              <ArrowRight size={20} />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-3xl bg-brand p-8 text-white shadow-xl sm:p-10">
            <p className="text-6xl font-extrabold text-accent">2012</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest">
              Established
            </p>
            <p className="mt-4 leading-relaxed text-white/90">
              {siteInfo.established}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutSection