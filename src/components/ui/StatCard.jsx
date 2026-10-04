import { useRef } from 'react'
import { useInView } from 'framer-motion'
import useCountUp from '../../hooks/useCountUp'

function StatCard({ value, suffix, label }) {
  const ref = useRef(null)
  // Becomes true the first time the card is half visible, then stays true
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value, isInView)

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-brand p-6 text-center text-white shadow-lg"
    >
      <p className="text-5xl font-extrabold text-accent">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-wide">
        {label}
      </p>
    </div>
  )
}

export default StatCard