import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { siteInfo } from '../../data/site'
import Button from '../ui/Button'

// Each child fades up one after the other
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-brand to-brand-dark pt-24 pb-16 text-white"
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-accent/30 sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10"
      />

      <motion.div
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white"
        >
          <span aria-hidden="true" className="h-0.5 w-8 bg-accent" />
          {siteInfo.tagline}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-3xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
        >
          Let&apos;s do it <span className="italic text-accent">with Tulas</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90"
        >
          {siteInfo.heroText}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button href={siteInfo.applyUrl} external>
            Apply Now
          </Button>
          <Button href={siteInfo.helplineHref} variant="outline">
            Call {siteInfo.helpline}
          </Button>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-accent"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}

export default HeroSection