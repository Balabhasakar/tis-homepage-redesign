import { motion, useReducedMotion } from 'framer-motion'
import { sports, sportsIntro } from '../../data/sports'
import Reveal from '../animation/Reveal'

// Chips appear one after another
const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const chip = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

function SportsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="sports"
      className="bg-brand-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Beyond Academics
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
              16+ sports, one strong foundation
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              {sportsIntro.text}
            </p>
          </div>
        </Reveal>

        <motion.ul
          className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3"
          variants={list}
          initial={shouldReduceMotion ? 'show' : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {sports.map((sport) => (
            <motion.li
              key={sport}
              variants={chip}
              className="min-h-11 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-base font-semibold transition-colors duration-300 hover:bg-accent hover:text-brand-dark"
            >
              {sport}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default SportsSection