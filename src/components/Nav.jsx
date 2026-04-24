import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 10)
  const [transitioning, setTransitioning] = useState(false)
  const prevTheme = useRef(theme)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (prevTheme.current === theme) return
    prevTheme.current = theme
    setTransitioning(true)
    const t = setTimeout(() => setTransitioning(false), 100)
    return () => clearTimeout(t)
  }, [theme])

  const isDark = theme === 'dark'
  const showBg = isDark ? scrolled : true

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        style={{ borderBottom: '0.5px solid rgba(0,0,0,0.07)' }}
        className={`absolute inset-0 bg-white/75 dark:bg-white/[0.08] backdrop-blur-2xl dark:backdrop-blur-xl backdrop-saturate-[180%] dark:backdrop-saturate-150 ${!transitioning ? 'transition-opacity duration-500' : ''} ${showBg ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      <div className="relative px-6 md:px-[126px] xl:px-[188px] h-14 flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Muhidul Hasan
        </Link>
        <div className="flex items-center gap-7">
          {['Work', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <div className="relative w-4 h-4">
              <svg className="absolute inset-0 w-4 h-4" style={{ opacity: theme === 'dark' ? 1 : 0, transition: 'opacity 400ms ease' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              <svg className="absolute inset-0 w-4 h-4" style={{ opacity: theme === 'light' ? 1 : 0, transition: 'opacity 400ms ease' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}
