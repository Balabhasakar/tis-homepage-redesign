import { siteInfo } from '../../data/site'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

function CTASection() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark py-20 text-white sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Join the <span className="italic text-accent">Tulas</span> family
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Give your child an education built on academic excellence, sports
            and leadership. Admissions are open for boarding and day scholars.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={siteInfo.applyUrl} external>
              Apply Now
            </Button>
            <Button href={`mailto:${siteInfo.email}`} variant="outline">
              Email Admissions
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-sm text-white/80">
            Or call our admission helpline:{' '}
            <a
              href={siteInfo.helplineHref}
              className="font-bold underline hover:text-accent"
            >
              {siteInfo.helpline}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default CTASection