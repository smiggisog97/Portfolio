import { motion } from 'framer-motion'
import { useState } from 'react'

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
    <h1 style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em', fontWeight: 600, margin: 0 }} className={className}>
      {lineGroups.map((lineWords, li) => (
        <span key={li} className="block overflow-hidden" style={{ transform: 'translateZ(0)' }}>
          {lineWords.map((word) => {
            const i = allWords.indexOf(word)
            return (
              <motion.span
                key={word}
                className="inline-block mr-[0.2em] last:mr-0"
                style={{
                  ...(accentWords.has(word) ? { fontFamily: "'Inter', sans-serif" } : {}),
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


export default function Hero() {
  const [resumeHovered, setResumeHovered] = useState(false)

  return (
    <section className="relative md:min-h-screen bg-white">

      {/* Desktop only — full-bleed absolute background */}
      <div
        className="hidden md:block absolute inset-0 z-0 overflow-hidden hero-image-enter"
        aria-hidden="true"
      >
        <img
          src="/hero-light.webp"
          alt=""
          className="hero-reveal absolute inset-0 w-full h-full object-cover object-[center_20%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-36 md:pt-52 pb-6 md:pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Eyebrow */}
        <motion.p
          className="text-xs font-mono text-neutral-500 mb-3 tracking-[0.14em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease, delay: 0.1 }}
          style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          Senior Product Designer
        </motion.p>

        {/* Editorial two-col */}
        <div className="md:grid md:grid-cols-[3fr_2fr] md:gap-16 md:items-start">

          {/* Left — Headline */}
          <div style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
            <HeadlineWords
              lineGroups={mobileLines}
              className="md:hidden text-[22px] leading-[1.35] text-neutral-900"
            />
            <HeadlineWords
              lineGroups={desktopLines}
              className="hidden md:block text-[28px] leading-[1.15] text-neutral-900"
            />
          </div>

          {/* Right */}
          <div className="mt-10 md:mt-0 flex flex-col gap-7" style={{ transform: 'translateZ(0)' }}>

            <motion.p
              className="text-[14px] md:text-[16px] text-neutral-600 leading-[1.65]"
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
                className="inline-flex items-center justify-center bg-neutral-900 text-white text-sm font-medium rounded-full"
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
                className="border border-neutral-200 text-sm font-medium rounded-full text-neutral-900"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 42, overflow: 'hidden', flexShrink: 0 }}
                whileTap={{ scale: 0.97 }}
                animate={{ y: resumeHovered ? -1 : 0 }}
                transition={{ duration: 0.15 }}
                onMouseEnter={() => setResumeHovered(true)}
                onMouseLeave={() => setResumeHovered(false)}
              >
                <motion.span
                  style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}
                  animate={resumeHovered ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Resume
                </motion.span>
                <motion.span
                  style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  animate={resumeHovered ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 8, rotate: 7 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src="/iconlight.svg" aria-hidden="true" className="h-6 w-auto block" />
                </motion.span>
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200/60"
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
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-[0.12em]">{label}</span>
                  <span className="text-[13px] text-neutral-700">{value}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
      </div>

      {/* Mobile only — full image below content, natural aspect ratio */}
      <div
        className="md:hidden relative w-full -mt-10 overflow-hidden hero-image-enter"
        aria-hidden="true"
      >
        <img
          src="/hero-light.webp"
          alt=""
          className="hero-reveal-mobile w-full h-auto block object-bottom"
          loading="eager"
          decoding="async"
        />
      </div>

    </section>
  )
}
