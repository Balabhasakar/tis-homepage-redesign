import { useCallback, useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import useTheme from '../../hooks/useTheme'
import { navItems } from '../../data/navigation'
import { siteInfo } from '../../data/site'
import ThemeToggle from '../animation/ThemeToggle'
import MobileNav from './MobileNav'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 24)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Stable function so MobileNav's effect doesn't re-run on every render
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          isScrolled ? 'bg-brand-dark/95 shadow-lg backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-brand-dark">
              TIS
            </span>
            <span className="hidden text-sm font-semibold sm:block">
              {siteInfo.name}
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <a
              href={siteInfo.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-brand-dark transition-transform hover:scale-105 sm:inline-flex"
            >
              Apply Now
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Outside the header, so the blur on the header can't shrink this overlay */}
      <MobileNav isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Navbar