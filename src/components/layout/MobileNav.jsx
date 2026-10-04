import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { navItems } from '../../data/navigation'
import { siteInfo } from '../../data/site'

function MobileNav({ isOpen, onClose }) {
  // While the menu is open: Escape closes it and the page behind can't scroll
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col bg-brand-dark p-6 text-white shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="mb-6 ml-auto flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10"
            >
              <X size={24} />
            </button>

            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-3 text-lg font-medium hover:bg-white/10 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={siteInfo.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto rounded-full bg-accent px-6 py-3 text-center font-bold text-brand-dark"
            >
              Apply Now
            </a>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileNav