import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import CaseModal from './CaseModal'
import { cases } from '../data/cases'

const ease = [0.22, 1, 0.36, 1]

const projects = [
  {
    id: 'pathao_connect',
    year: '2025',
    tags: ['Consumer & Driver App'],
    title: 'Pathao Connect',
    summary: 'Bangladesh has 100K+ unregulated "khep" bike rides daily, no tracking, no insurance, real danger. Designed a code-based pairing system that makes street-hailing as fast as before, and as safe as the app.',
    metrics: [{ dir: 'up', label: '200 organic trips / day at launch' }],
    href: '/case-study/pathao-connect',
    img: '/selected-work-mockup-new.webp',
  },
  {
    id: 'pathao_homepage',
    year: '2024',
    tags: ['Consumer App'],
    title: 'Platform Homepage Revamp',
    summary: "Pathao's homepage kept users in a single-service loop. Redesigned with a bento-grid layout and dynamic tile prioritisation, driving 20%+ tile penetration growth across secondary services.",
    metrics: [{ dir: 'up', label: '20%+ tile penetration growth' }],
    img: '/selected-work-mockup-homepage.webp',
  },
]

function MetricPill({ dir, label }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
      style={{ background: 'rgba(210,160,90,0.12)', color: '#8B6020' }}
    >
      {dir === 'up' ? '↑' : '↓'}{label}
    </span>
  )
}

function PlaceholderThumb({ tags }) {
  const color = tags[0] === 'Fintech' ? '#3B82F6' : tags[0] === 'Growth' ? '#10B981' : '#8B5CF6'
  return (
    <div
      className="w-full h-full rounded-2xl flex items-center justify-center"
      style={{ background: `${color}10`, minHeight: 320 }}
    >
      <div className="w-16 h-16 rounded-2xl" style={{ background: `${color}25` }} />
    </div>
  )
}

export default function Work() {
  const [activeCase, setActiveCase] = useState(null)

  return (
    <>
      <section id="work" className="pt-20 pb-10 md:py-[85px]">
        <ScrollReveal className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Selected Work</h2>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">2020–Present</span>
        </ScrollReveal>

        <div className="space-y-0">
          {projects.map((p, i) => {
            const card = (
              <div
                className={`grid md:grid-cols-[5fr_6fr] gap-10 md:gap-16 items-start group md:pb-14${i === 0 ? ' pt-5 pb-12' : ' pt-12 pb-14'}`}
              >
                <div>
                  <ScrollReveal delay={0.05}>
                    <h3
                      className="text-neutral-900 dark:text-neutral-100 leading-[1.15] mb-3 transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300 text-[22px] md:text-[26px]"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}
                    >
                      {p.title}
                    </h3>
                  </ScrollReveal>
                  <ScrollReveal delay={0.13}>
                    <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-5 font-mono">
                      {p.year}{p.tags.map(t => ` · ${t}`).join('')}
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.22}>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-7 max-w-sm">
                      {p.summary}
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.32}>
                    <div className="flex flex-col gap-2">
                      {p.metrics.map((m, j) => (
                        <div key={j}>
                          <MetricPill dir={m.dir} label={m.label} />
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={0.15}>
                  <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                    {p.img ? (
                      <motion.img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover block"
                        loading={i === 0 ? 'eager' : 'lazy'}
                        fetchPriority={i === 0 ? 'high' : 'auto'}
                        decoding="async"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.6, ease }}
                      />
                    ) : (
                      <PlaceholderThumb tags={p.tags} />
                    )}
                  </div>
                </ScrollReveal>
              </div>
            )

            if (p.href) {
              return (
                <Link
                  key={p.id}
                  to={p.href}
                  onClick={() => sessionStorage.setItem('homeScrollY', String(window.scrollY))}
                  onMouseEnter={() => {
                    ['/case-study/pathao/hero-mockup-1.webp', '/case-study/pathao/hero-mockup-2.webp', '/case-study/pathao/hero-mockup-3.webp'].forEach(src => {
                      const img = new Image()
                      img.src = src
                    })
                  }}
                  className="block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
                  aria-label={`View case study: ${p.title}`}
                >
                  {card}
                </Link>
              )
            }

            return (
              <div
                key={p.id}
                className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
                onClick={() => setActiveCase(cases[p.id])}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCase(cases[p.id])}
                tabIndex={0}
                role="button"
                aria-label={`View case study: ${p.title}`}
              >
                {card}
              </div>
            )
          })}
        </div>
      </section>

      <CaseModal caseData={activeCase} onClose={() => setActiveCase(null)} />
    </>
  )
}
