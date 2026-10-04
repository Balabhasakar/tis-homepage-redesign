import { useEffect, useState } from 'react'
import { animate, useReducedMotion } from 'framer-motion'

// Counts from 0 up to `target` once `isActive` becomes true
function useCountUp(target, isActive, duration = 1.5) {
  const shouldReduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive || shouldReduceMotion) return

    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (value) => setCount(Math.round(value)),
    })

    // Stop the animation if the component unmounts mid-count
    return () => controls.stop()
  }, [isActive, target, duration, shouldReduceMotion])

  // People who prefer reduced motion see the final number straight away
  return shouldReduceMotion ? target : count
}

export default useCountUp