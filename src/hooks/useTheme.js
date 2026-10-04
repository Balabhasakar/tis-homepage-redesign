import { useCallback, useLayoutEffect, useState } from 'react'

const STORAGE_KEY = 'tis-theme'

// Saved choice first, then the visitor's system preference
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Storage can be blocked (private mode); fall through to the system setting
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Runs before the browser paints, so there is no flash of the wrong theme
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Ignore: the theme still works for this visit
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    // Adds smooth colour fading for a moment, only while switching
    root.classList.add('theme-transition')
    window.setTimeout(() => root.classList.remove('theme-transition'), 350)
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}

export default useTheme