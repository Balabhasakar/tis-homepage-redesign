import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"]'

function CustomCursor() {
  // Only devices with a real mouse get the custom cursor (not touch screens)
  const [isFinePointer] = useState(
    () => window.matchMedia('(pointer: fine)').matches,
  )
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Motion values update outside React, so moving the mouse never re-renders
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.5 })

  useEffect(() => {
    if (!isFinePointer) return

    const handleMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setIsVisible(true)
    }

    const handleOver = (event) => {
      setIsHovering(Boolean(event.target.closest(INTERACTIVE_SELECTOR)))
    }

    const handleLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [isFinePointer, x, y])

  if (!isFinePointer) return null

  return (
    <div aria-hidden="true">
      {/* Ring: follows with a spring delay */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="-ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-accent"
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isVisible ? (isHovering ? 0.6 : 1) : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Dot: follows the mouse exactly */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x, y }}
      >
        <motion.div
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-accent"
          animate={{ opacity: isVisible && !isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  )
}

export default CustomCursor