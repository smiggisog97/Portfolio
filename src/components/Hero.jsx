import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

const desktopLines = [
  ['Leading', 'high-impact', 'visual', 'design'],
  ['for', 'large-scale', 'consumer', 'platforms.'],
]
const mobileLines = [
  ['Leading', 'high-impact', 'visual'],
  ['design', 'for', 'large-scale'],
  ['consumer', 'platforms.'],
]
const allWords = desktopLines.flat()
const accentWords = new Set(['high-impact'])

function HeadlineWords({ lineGroups, className }) {
  return (
    <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: '0px', fontWeight: 400, margin: 0 }} className={className}>
      {lineGroups.map((lineWords, li) => (
        <span key={li} className="block overflow-hidden" style={{ transform: 'translateZ(0)' }}>
          {lineWords.map((word) => {
            const i = allWords.indexOf(word)
            return (
              <motion.span
                key={word}
                className="inline-block mr-[0.2em] last:mr-0"
                style={{
                  ...(accentWords.has(word) ? { fontStyle: 'italic', fontFamily: "'Instrument Serif', Georgia, serif" } : {}),
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                initial={{ opacity: 0, y: '110%' }}
                animate={{ opacity: 1, y: '0%' }}
                transition={{ duration: 1.6, ease, delay: 0.2 + i * 0.12 }}
              >
                {word}
              </motion.span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}


export default function Hero({ theme }) {
  const [revealKey, setRevealKey] = useState(0)
  const [loadedKey, setLoadedKey] = useState(-1)
  const [resumeHovered, setResumeHovered] = useState(false)
  const prevTheme = useRef(theme)
  const entered = loadedKey === revealKey

  useEffect(() => {
    if (prevTheme.current === theme) return
    prevTheme.current = theme
    setRevealKey(k => {
      const next = k + 1
      // images already cached on theme switch — skip load gate
      setLoadedKey(next)
      return next
    })
  }, [theme])

  const onPrimaryLoad = () => setLoadedKey(prev => prev === -1 ? revealKey : prev)

  return (
    <section className="relative md:min-h-screen bg-white dark:bg-[#0E0E0E]">

      {/* Desktop only — full-bleed absolute background */}
      <div
        key={`desktop-wrap-${revealKey}`}
        className={`hidden md:block absolute inset-0 z-0 overflow-hidden${entered ? ' hero-image-enter' : ''}`}
        style={entered ? undefined : { opacity: 0 }}
        aria-hidden="true"
      >
        <img
          key={`light-${revealKey}`}
          src="/hero-light.webp"
          alt=""
          className="hero-reveal absolute inset-0 w-full h-full object-cover object-[center_20%]"
          style={{ opacity: 'var(--hero-light-opacity, 1)', transition: 'opacity 400ms ease' }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={theme === 'light' ? onPrimaryLoad : undefined}
        />
        <img
          key={`dark-${revealKey}`}
          src="/hero-dark-desktop.webp"
          alt=""
          className="hero-reveal absolute inset-0 w-full h-full object-cover object-[center_20%]"
          style={{ opacity: 'var(--hero-dark-opacity, 0)', transition: 'opacity 400ms ease' }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={theme === 'dark' ? onPrimaryLoad : undefined}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-36 md:pt-52 pb-6 md:pb-20 px-6 md:px-[126px] xl:px-[188px]">

        {/* Eyebrow */}
        <motion.p
          className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-3 tracking-[0.14em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease, delay: 0.1 }}
          style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          Senior Product Designer
        </motion.p>

        {/* Editorial two-col */}
        <div className="md:grid md:grid-cols-[3fr_2fr] md:gap-20 md:items-start">

          {/* Left — Headline */}
          <div style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
            {/* Mobile headline — 3 balanced lines */}
            <HeadlineWords
              lineGroups={mobileLines}
              className="md:hidden text-[28px] leading-[1.3] text-neutral-900 dark:text-neutral-50"
            />
            {/* Desktop headline — 2 controlled lines */}
            <HeadlineWords
              lineGroups={desktopLines}
              className="hidden md:block text-[50px] leading-[1.1] text-neutral-900 dark:text-neutral-50"
            />
          </div>

          {/* Right */}
          <div className="mt-10 md:mt-0 flex flex-col gap-7" style={{ transform: 'translateZ(0)' }}>

            <motion.p
              className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-[1.65]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease, delay: 1.6 }}
              style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              Multidisciplinary Product Designer with 5+ years of experience designing and scaling multi-sided platforms across consumer and B2B environments used by 5.7M+ users.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease, delay: 1.9 }}
              style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              <motion.a
                href="#work"
                className="inline-flex items-center justify-center bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium rounded-full"
                style={{ width: 120, height: 42, flexShrink: 0 }}
                whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
              >
                View work
              </motion.a>
              <motion.a
                href="/Muhidul_Hasan_Resume.pdf"
                download
                className="border border-neutral-200 dark:border-neutral-700 text-sm font-medium rounded-full text-neutral-900 dark:text-neutral-100"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 42, overflow: 'hidden', flexShrink: 0 }}
                whileTap={{ scale: 0.97 }}
                animate={{ y: resumeHovered ? -1 : 0 }}
                transition={{ duration: 0.15 }}
                onMouseEnter={() => setResumeHovered(true)}
                onMouseLeave={() => setResumeHovered(false)}
              >
                {/* Layer 1 — default text */}
                <motion.span
                  style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}
                  animate={resumeHovered ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Resume
                </motion.span>

                {/* Layer 2 — hover icons */}
                <motion.span
                  style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  animate={resumeHovered ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 8, rotate: 7 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src="/iconlight.svg" aria-hidden="true" className="h-6 w-auto block dark:hidden" />
                  <img src="/icondark.svg"  aria-hidden="true" className="h-6 w-auto hidden dark:block" />
                </motion.span>
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200/60 dark:border-neutral-700/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease, delay: 2.2 }}
              style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              {[
                { label: 'Currently',  value: 'Pathao · Dhaka' },
                { label: 'Reach',      value: '5.7M+ users' },
                { label: 'Experience', value: '5+ years' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.12em]">{label}</span>
                  <span className="text-[13px] text-neutral-700 dark:text-neutral-200">{value}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Mobile only — full image below content, natural aspect ratio */}
      <div
        key={`mobile-wrap-${revealKey}`}
        className={`md:hidden relative w-full -mt-10 overflow-hidden${entered ? ' hero-image-enter' : ''}`}
        style={entered ? undefined : { opacity: 0 }}
        aria-hidden="true"
      >
        <img
          key={`light-${revealKey}`}
          src="/hero-light.webp"
          alt=""
          className="hero-reveal-mobile w-full h-auto block object-bottom"
          style={{ opacity: 'var(--hero-light-opacity, 1)', transition: 'opacity 400ms ease' }}
          loading="eager"
          decoding="async"
          onLoad={theme === 'light' ? onPrimaryLoad : undefined}
        />
        <img
          key={`dark-${revealKey}`}
          src="/hero-dark.webp"
          alt=""
          className="hero-reveal-mobile absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 'var(--hero-dark-opacity, 0)', transition: 'opacity 400ms ease' }}
          loading="eager"
          decoding="async"
          onLoad={theme === 'dark' ? onPrimaryLoad : undefined}
        />
      </div>

    </section>
  )
}
