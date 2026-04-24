import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import CaseModal from './CaseModal'
import { cases } from '../data/cases'

const projects = [
  {
    id: 'pathao_connect',
    company: 'Pathao', year: '2025',
    tag: 'Safety · Offline',
    title: 'Pathao Connect',
    summary: 'Bangladesh has 100K+ unregulated "khep" bike rides daily — no tracking, no insurance, real danger. Designed a code-based pairing system that makes street-hailing as fast as before, and as safe as the app.',
    role: 'SENIOR PRODUCT DESIGNER',
    stat: '200 ORGANIC TRIPS / DAY AT LAUNCH',
    href: '/case-study/pathao-connect',
    thumb: (
      <div className="w-full max-w-[200px] space-y-3">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <div className="h-1.5 w-20 bg-neutral-100 dark:bg-neutral-700 rounded-full"></div>
          </div>
          <div className="flex gap-1.5 justify-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-6 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-semibold ${i < 4 ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400' : 'bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-neutral-300 dark:text-neutral-600'}`}>
                {i < 4 ? ['4','7','2','1'][i] : '·'}
              </div>
            ))}
          </div>
          <div className="h-7 w-full bg-green-500 rounded-xl flex items-center justify-center">
            <div className="h-1.5 w-16 bg-white/60 rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="h-1.5 flex-1 bg-green-200 dark:bg-green-900/50 rounded-full"></div>
          <div className="h-1.5 flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-full"></div>
          <div className="h-1.5 flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    id: 'pathao_homepage',
    company: 'Pathao', year: '2024',
    tag: 'Consumer App',
    title: 'Platform Homepage Revamp',
    summary: "Pathao's homepage kept users in a single-service loop. Redesigned with a bento-grid layout and dynamic tile prioritisation — driving 20%+ tile penetration growth across secondary services.",
    role: 'SENIOR PRODUCT DESIGNER',
    stat: '20%+ TILE PENETRATION GROWTH',
    thumb: (
      <div className="w-full max-w-[200px] space-y-2">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="col-span-2 bg-rose-50 dark:bg-rose-900/20 rounded-xl p-3 flex flex-col justify-between" style={{ minHeight: 86 }}>
            <div className="h-5 w-5 rounded-md bg-rose-400/60"></div>
            <div>
              <div className="h-1.5 w-14 bg-rose-300/60 rounded mb-1"></div>
              <div className="h-1 w-10 bg-rose-200/60 rounded"></div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center">
              <div className="h-4 w-4 rounded-md bg-neutral-300 dark:bg-neutral-600"></div>
            </div>
            <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-2.5 flex items-center justify-center">
              <div className="h-4 w-4 rounded bg-neutral-200 dark:bg-neutral-700"></div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'pathao_onboarding',
    company: 'Pathao', year: '2023',
    tag: 'Growth',
    title: 'Quick Driver Onboarding',
    summary: "Driver supply was bottlenecked by a signup flow most applicants abandoned. Rebuilt onboarding around clarity over brevity — boosting signup-to-active conversion by 16×.",
    role: 'SENIOR PRODUCT DESIGNER',
    stat: '16× CONVERSION IMPROVEMENT',
    thumb: (
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden w-full max-w-[200px]">
        <div className="p-3 space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            </div>
            <div className="flex-1 h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-emerald-400 rounded-full"></div>
            </div>
          </div>
          {[['w-full', true], ['w-4/5', false], ['w-3/5', false]].map(([w, active], i) => (
            <div key={i} className={`h-8 ${w} rounded-lg flex items-center px-2.5 gap-2 ${active ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200/60 dark:border-emerald-700/40' : 'bg-neutral-50 dark:bg-neutral-900'}`}>
              <div className={`h-3 w-3 rounded flex-shrink-0 ${active ? 'bg-emerald-400/70' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
              <div className={`h-1.5 flex-1 rounded ${active ? 'bg-emerald-200/80 dark:bg-emerald-700/40' : 'bg-neutral-200 dark:bg-neutral-700'}`}></div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'pathao_autopay',
    company: 'Pathao', year: '2024',
    tag: 'Fintech',
    title: 'Autopay v2.0',
    tagline: 'Redesigning the payment setup moment — adding 14,000 new Pathao Pay users.',
    summary: "Pathao Pay had low adoption despite deep integration. Redesigned the setup moment to surface post-trip, not mid-booking — adding 14,000 new wallet users in the first month.",
    role: 'SENIOR PRODUCT DESIGNER',
    stat: '14K NEW PATHAO PAY USERS',
    thumb: (
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-3 w-full max-w-[200px] space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-16 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
          <div className="h-4 w-4 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
          </div>
        </div>
        <div className="h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/40 flex items-center px-3 gap-2">
          <div className="h-4 w-4 rounded bg-blue-200 dark:bg-blue-700/50 flex-shrink-0"></div>
          <div className="flex-1 space-y-1">
            <div className="h-1 w-full bg-blue-200/70 dark:bg-blue-700/40 rounded"></div>
            <div className="h-1 w-2/3 bg-blue-200/70 dark:bg-blue-700/40 rounded"></div>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="h-7 flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-lg"></div>
          <div className="h-7 flex-[2] bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="h-1.5 w-12 bg-white/60 rounded-full"></div>
          </div>
        </div>
        <div className="h-1 w-1/2 bg-neutral-100 dark:bg-neutral-700 rounded mx-auto"></div>
      </div>
    ),
  },
]

export default function Work() {
  const [activeCase, setActiveCase] = useState(null)

  return (
    <>
      <section id="work" className="py-20 md:py-28">
        <ScrollReveal className="flex items-center justify-between mb-14">
          <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Selected Work</h2>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">2020–Present</span>
        </ScrollReveal>

        <div className="grid gap-5">
          {projects.map((p, i) => {
            const cardInner = (
              <div className="grid md:grid-cols-[1fr_2fr]">
                <div className="bg-neutral-50 dark:bg-neutral-900 p-8 md:p-12 flex items-center justify-center min-h-[220px] md:min-h-[280px]">
                  {p.thumb}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">{p.tag}</span>
                  </div>
                  <h3 className="font-serif font-normal mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors" style={{fontSize: '22px'}}>
                    {p.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">{p.summary}</p>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{p.stat}</span>
                </div>
              </div>
            )

            if (p.href) {
              return (
                <ScrollReveal key={p.id} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}
                    whileTap={{ scale: 0.998, y: -1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[18px] overflow-hidden"
                  >
                    <Link
                      to={p.href}
                      className="block border border-neutral-200 dark:border-neutral-800 rounded-[18px] overflow-hidden cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
                      aria-label={`View case study: ${p.title}`}
                    >
                      {cardInner}
                    </Link>
                  </motion.div>
                </ScrollReveal>
              )
            }

            return (
              <ScrollReveal key={p.id} delay={i * 0.12}>
                <motion.article
                  className="border border-neutral-200 dark:border-neutral-800 rounded-[18px] overflow-hidden cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
                  onClick={() => setActiveCase(cases[p.id])}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveCase(cases[p.id])}
                  tabIndex={0}
                  role="button"
                  aria-label={`View case study: ${p.title}`}
                  whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}
                  whileTap={{ scale: 0.998, y: -1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {cardInner}
                </motion.article>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <CaseModal caseData={activeCase} onClose={() => setActiveCase(null)} />
    </>
  )
}
