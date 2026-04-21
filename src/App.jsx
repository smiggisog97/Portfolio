import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

const footerEase = [0.16, 1, 0.3, 1]

function FooterImage({ className, wrapperStyle }) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })
  const reveal = loaded && inView

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={wrapperStyle}>
      <motion.img
        src="/footer-img.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="w-full h-auto block"
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.25 }}
        animate={reveal ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.25 }}
        transition={{ duration: 5.5, ease: footerEase }}
        style={{
          transformOrigin: 'center bottom',
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      />
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.backgroundColor = theme === 'dark' ? '#0E0E0E' : '#ffffff'
    document.body.style.backgroundColor = theme === 'dark' ? '#0E0E0E' : '#ffffff'
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div className="bg-white dark:bg-[#0E0E0E] text-neutral-900 dark:text-neutral-100 min-h-screen">
<Nav theme={theme} toggleTheme={toggleTheme} />

      <Hero theme={theme} />

      <main className="max-w-5xl mx-auto px-6">
        <Work />
        <hr className="border-neutral-100 dark:border-neutral-800" />
        <About />
        <hr className="border-neutral-100 dark:border-neutral-800" />
        <Experience />
        <hr className="border-neutral-200 dark:border-neutral-800" />
      </main>

      <div id="contact"></div>

      {/* Mobile footer — stacked flow */}
      <div className="md:hidden">
        <div className="max-w-5xl mx-auto px-6">
          <Contact />
        </div>
        <footer className="border-t border-black/10 dark:border-white/10 mt-16">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center">
            <span className="text-xs font-mono text-neutral-900 dark:text-neutral-100">© 2026 MUHIDUL HASAN</span>
          </div>
        </footer>
        <FooterImage className="-mt-1" />
      </div>

      {/* Desktop footer — grid overlap layout */}
      <div className="hidden md:grid">
        <FooterImage className="" wrapperStyle={{ gridArea: '1/1', alignSelf: 'end' }} />
        <div style={{ gridArea: '1/1', position: 'relative', zIndex: 10 }}>
          <div className="max-w-5xl mx-auto px-6">
            <Contact />
          </div>
          <footer className="border-t border-black/10 dark:border-white/10">
            <div className="max-w-5xl mx-auto px-6 py-6 flex items-center">
              <span className="text-xs font-mono text-neutral-900 dark:text-neutral-100">© 2026 MUHIDUL HASAN</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
