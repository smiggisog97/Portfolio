import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 10)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        style={{ borderBottom: '0.5px solid rgba(0,0,0,0.07)' }}
        className={`absolute inset-0 bg-white/75 backdrop-blur-2xl backdrop-saturate-[180%] transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      <div className="relative px-6 md:px-[126px] xl:px-[188px] h-14 flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-tight text-neutral-900">
          Muhidul Hasan
        </Link>
        <div className="flex items-center gap-7">
          {['Work', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
