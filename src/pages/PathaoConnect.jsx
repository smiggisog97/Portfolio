import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

function Reveal({ children, delay = 0, className = '', distance = 36 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-4%' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.15, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

function RevealImage({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-3%' })
  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 52, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.45, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

function SplitWords({ text, className = '', style = {}, delay = 0, as: Tag = 'h2' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-4%' })
  const words = text.split(' ')
  return (
    <Tag ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden leading-[1.1]">
          <motion.span
            className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 1.0, ease, delay: delay + i * 0.08 }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  )
}

function RevealGrid({ children, className = '', baseDelay = 0, stagger = 0.1 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-4%' })
  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          className="h-full"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease, delay: baseDelay + i * stagger }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

const phoneStyle = {
  borderRadius: 20,
  boxShadow: '0 2px 0 0 rgba(0,0,0,0.06), 0 8px 32px -4px rgba(0,0,0,0.18)',
}

const stats = [
  { value: '200', unit: 'trips/day', label: 'Organic at launch' },
  { value: '100K', unit: 'BDT', label: 'Insurance per user' },
  { value: '0%', unit: 'commission', label: 'Flat ৳20 fee for riders' },
  { value: '−1', unit: 'funnel step', label: 'Map screen removed' },
]

const problems = [
  {
    num: '01',
    who: 'Passengers',
    headline: 'Speed trumped safety',
    body: 'App-based rides meant waiting 15–20 minutes, risk of cancellation mid-route, and surge pricing at peak hours. Street hailing was instant. A bike was always at the corner. Users knew the risks, but urgency won.',
    quote: `"I know there's always a bike standing at the corner — I don't have to wait."`,
    quoteBy: '— Pathao user interview',
  },
  {
    num: '02',
    who: 'Riders',
    headline: "The platform wasn't worth it",
    body: 'Riders paid high commissions, traveled far for pickups (sometimes only to be cancelled on), and had no control over earnings. Street spots offered instant income, no platform cut, and price control through syndicate networks.',
    quote: '"On the street, customers come to me. On the app, I chase them."',
    quoteBy: '— Pathao driver interview',
  },
]

const processPhases = [
  {
    phase: 'Discover',
    duration: 'Wk 1–2',
    icon: '◎',
    items: ['User & rider interviews', 'Market sizing (100K+ daily offline trips)', 'Safety incident analysis', 'Competitive benchmarking'],
  },
  {
    phase: 'Define',
    duration: 'Wk 3',
    icon: '◈',
    items: ['HMW framing', 'Two-sided problem mapping', 'Success metrics set', 'Phased roadmap (MVP → Pathao X → Spots)'],
  },
  {
    phase: 'Design',
    duration: 'Wk 4–8',
    icon: '◇',
    items: ['Lo-fi wireframes', 'Testing with power users + invited riders', 'Multiple flow iterations', 'Hi-fi handoff + component specs'],
  },
  {
    phase: 'Deliver',
    duration: 'Wk 9–12',
    icon: '◆',
    items: ['Staging QA (intensive)', 'GTM collaboration', 'Ad creative direction', 'Launch monitoring'],
  },
  {
    phase: 'Iterate',
    duration: 'Post-launch',
    icon: '↻',
    items: ['Funnel analytics review', '~60% drop-off at map screen identified', 'Map screen removed from required flow', 'v1.2 shipped, code entry as primary'],
  },
]

const decisions = [
  {
    label: 'Decision 01',
    title: 'One code beats three methods',
    problem: 'Initial scope included QR scan, PIN entry, and OTP: three separate pairing methods. More options felt safer, but testing revealed confusion. Users weren\'t sure which to use, riders defaulted to nothing.',
    solution: 'Collapsed to a single primary method: the Connect Code, a 6-digit code on the rider\'s app refreshing every 3–5 minutes. One action, zero ambiguity. Phone number + OTP kept as a fallback only.',
    impact: 'Pairing success rate improved in testing. Riders remembered one step. Users didn\'t need to open any other screen.',
  },
  {
    label: 'Decision 02',
    title: 'Safety above the fold, always',
    problem: 'Safety features (SOS, location sharing, insurance) existed but were buried in menus. During a khep ride gone wrong, no one could find them. Awareness was near zero.',
    solution: 'Redesigned the active ride screen to surface 999 emergency toggle, Pathao Support, and instant location sharing above fold, visible without any scrolling. Added insurance coverage up to ৳100,000 per user.',
    impact: 'Safety became a visible brand promise, not a hidden feature. Used in GTM as primary differentiator against unregulated "khep" rides.',
  },
]

const insights = [
  {
    tag: 'User Research',
    insight: 'Speed > safety, consciously',
    body: 'Users didn\'t ignore safety risks. They acknowledged them. But a 20-minute wait vs. an instant connection made the trade-off feel worth it. The design needed to remove the wait, not just add a warning.',
  },
  {
    tag: 'Rider Research',
    insight: 'Commission psychology matters',
    body: 'Riders earned roughly the same on platform vs. off, but offline felt like more because they saw 100% of the fare. 0% commission + flat ৳20 fee addressed both the math and the perception.',
  },
  {
    tag: 'Safety Gap',
    insight: 'Features mean nothing if no one finds them',
    body: 'Safety tools existed before Pathao Connect, buried in menus. During a crisis, no one opens a menu. The design had to surface them without waiting for users to look.',
  },
]

const flows = {
  before: ['Open app', 'Set destination', 'Estimation page', 'Tap Connect', 'Welcome screen', 'Map screen', '"I found my rider" tap', 'Code entry', 'Ride starts'],
  after: ['Open app', 'Set destination', 'Estimation page', 'Tap Connect', 'Code entry screen', 'Ride starts'],
}

const learnings = [
  {
    num: '01',
    title: 'Safety as a hook, not a warning',
    body: 'Positioning safety coverage as a user benefit ("you get ৳100K insurance") drove adoption far more than framing it as risk mitigation ("khep rides are dangerous"). Lead with what users gain.',
  },
  {
    num: '02',
    title: 'Fewer options, faster decisions',
    body: 'Three pairing methods felt thorough on paper. In testing, users stalled. One primary method with a fallback matched real-world behavior: try the simple thing first, escalate only if it fails.',
  },
  {
    num: '03',
    title: 'Map the funnel before designing the feature',
    body: 'The map screen was designed with good intent. The analytics that revealed its 60% drop-off rate should have been the starting point. Shipping early and reading data is better than designing for hypothetical users.',
  },
]

const userJourneySteps = [
  { img: '/case-study/pathao/user-journey-1.png', label: 'Home screen', sub: 'Connect tile visible' },
  { img: '/case-study/pathao/user-journey-2.png', label: 'Estimation', sub: 'Select Bike + Connect CTA' },
  { img: '/case-study/pathao/user-journey-3.png', label: 'Welcome', sub: 'Onboarding intro' },
  { img: '/case-study/pathao/user-journey-4.png', label: 'Map screen', sub: 'Find nearby rider' },
  { img: '/case-study/pathao/user-journey-5.png', label: 'Code entry', sub: '6-digit rider code' },
  { img: '/case-study/pathao/user-journey-6.png', label: 'Connected', sub: 'Live tracking + safety' },
]

const driverJourneySteps = [
  { img: '/case-study/pathao/driver-journey-1.png', label: 'Driver home' },
  { img: '/case-study/pathao/driver-journey-2.png', label: 'Connect landing' },
  { img: '/case-study/pathao/driver-journey-3.png', label: 'Connect method' },
  { img: '/case-study/pathao/driver-journey-4.png', label: 'Input number' },
  { img: '/case-study/pathao/driver-journey-5.png', label: 'Input OTP' },
  { img: '/case-study/pathao/driver-journey-6.png', label: 'Connected' },
]

const finalFlowSteps = [
  { img: '/case-study/pathao/final-flow-1.png', label: 'Pathao home' },
  { img: '/case-study/pathao/final-flow-2.png', label: 'Ride details' },
  { img: '/case-study/pathao/final-flow-3.png', label: 'Enter code' },
  { img: '/case-study/pathao/final-flow-4.png', label: 'Connected' },
]

export default function PathaoConnect() {
  const [theme] = useState(() => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Pathao Connect — Muhidul Hasan'
    return () => { document.title = 'Muhidul Hasan — Product Designer' }
  }, [])

  return (
    <motion.div
      className="bg-white dark:bg-[#0E0E0E] text-neutral-900 dark:text-neutral-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >

      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-neutral-100 dark:border-neutral-800 bg-white/90 dark:bg-[#0E0E0E]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-mono"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
            </svg>
            Back
          </Link>
          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Case Study</span>
        </div>
      </nav>

      {/* Hero text */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">
          Pathao · 2025
        </p>
        <SplitWords
          text="Bringing street-side rides onto the platform, safely"
          as="h1"
          className="font-serif font-normal leading-tight mb-6 text-neutral-900 dark:text-neutral-100 max-w-3xl"
          style={{ fontSize: '45px', wordSpacing: '0.05em' }}
          delay={0.1}
        />
        <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed" style={{ fontSize: '18px' }}>
          Pathao Connect digitizes Bangladesh's unregulated "khep" bike rides, pairing passengers with nearby Pathao riders instantly, with full tracking and insurance coverage.
        </p>
        {/* Meta pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {['Case study', 'Pathao Connect', 'Ride sharing safety', 'Bangladesh'].map(tag => (
            <span key={tag} className="text-xs font-mono text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Hero image — full-width 3-phone gallery */}
      <RevealImage className="w-full mb-20">
        <div className="w-full bg-neutral-50 dark:bg-neutral-900 py-12 flex items-end justify-center gap-6 md:gap-10 overflow-hidden">
          {[
            '/case-study/pathao/hero-mockup-1.png',
            '/case-study/pathao/hero-mockup-2.png',
            '/case-study/pathao/hero-mockup-3.png',
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              aria-hidden="true"
              style={{
                height: 480,
                width: 'auto',
                borderRadius: 24,
                boxShadow: '0 2px 0 0 rgba(0,0,0,0.06), 0 16px 48px -8px rgba(0,0,0,0.22)',
                flexShrink: 0,
                display: 'block',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.1 + i * 0.12 }}
            />
          ))}
        </div>
      </RevealImage>

      {/* Impact stats */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <RevealGrid className="grid grid-cols-2 md:grid-cols-4 gap-4" baseDelay={0.05} stagger={0.09}>
          {stats.map((s) => (
            <div key={s.label} className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6">
              <p className="font-serif text-3xl md:text-4xl text-neutral-900 dark:text-neutral-100 mb-1">{s.value}</p>
              <p className="text-xs font-mono text-green-600 dark:text-green-400 mb-2">{s.unit}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{s.label}</p>
            </div>
          ))}
        </RevealGrid>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Overview */}
        <Reveal className="mb-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">Overview</p>
              <div className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
                <div>
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-1">Role</p>
                  <p>Sole product designer</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-1">Team</p>
                  <p>PM, Eng lead, QA, GTM</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-1">Timeline</p>
                  <p>~3 months (2025)</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-1">Platform</p>
                  <p>iOS + Android (User & Rider apps)</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-wider mb-1">Status</p>
                  <p className="text-green-600 dark:text-green-400">Live, August 2025</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">About the product</p>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <p>Pathao is Bangladesh's leading super-app for rides, food, parcels, and payments, serving 5.7M+ users. Despite pioneering bike ride-hailing in 2016, Pathao was losing market share to the unregulated offline market: passengers and riders both preferred the immediacy of street-level deals over the friction of app-based booking.</p>
                <p>Pathao Connect is our answer. It lets passengers and nearby Pathao riders pair instantly through a 6-digit code, formalizing a street-side interaction without changing its nature. Riders get 0% commission and full platform protection. Users get insurance coverage and live tracking, shared via link even to non-app users.</p>
                <p>My role spanned the full design arc: research, wireframing, user testing, iteration, hi-fi handoff, staging QA, and GTM creative direction.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Context */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">The Context</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Reveal>
                <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-5 leading-snug">
                  Bangladesh's bike market is largely unregulated. That's the problem.
                </h2>
              </Reveal>
              <Reveal delay={0.1} distance={20}>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  In Dhaka alone, an estimated 100,000–200,000 bike rides happen daily. Of those, over 65,000 are "khep": untracked, unregulated street deals between passengers and random motorcyclists. 92% of Pathao-registered riders actively participated in this offline market.
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  These rides carry real risk: no identity verification, no location tracking, no safety net. Incidents of theft, molestation, and extortion were documented and growing. Yet for both passengers and riders, the appeal of going offline was rational. It solved real problems the app wasn't solving.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.08}>
              <div className="space-y-4">
                {[
                  { label: 'Daily bike trips (Dhaka)', value: '100K–200K', color: 'text-neutral-900 dark:text-neutral-100' },
                  { label: 'Offline "khep" trips', value: '65K+', color: 'text-orange-500 dark:text-orange-400' },
                  { label: 'Riders committed to offline market', value: '92%', color: 'text-orange-500 dark:text-orange-400' },
                  { label: 'In-app trips (Pathao + Uber combined)', value: '35K', color: 'text-green-600 dark:text-green-400' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between py-4 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{item.label}</span>
                    <span className={`font-serif text-2xl font-normal ${item.color}`}>{item.value}</span>
                  </div>
                ))}
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 pt-2">Source: Pathao market sizing exercise 2023, internal estimates</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* News clippings */}
        <Reveal className="mb-24">
          <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">In the press</p>
          <RevealGrid className="grid md:grid-cols-2 gap-4" baseDelay={0.05} stagger={0.12}>
            {[
              {
                source: 'The Daily Star',
                date: '2024',
                headline: 'Ride-sharing biker sent to jail over rape of passenger',
                excerpt: 'A Dhaka court sent a motorcycle ride-sharing driver to jail after a passenger alleged rape during an unregistered trip. The ride was booked outside any platform, with no tracking or identity verification in place.',
                url: 'https://www.thedailystar.net/news/bangladesh/crime-justice/news/ride-sharing-biker-sent-jail-over-rape-passenger-3909106',
                tag: 'Crime & Justice',
                img: '/news-dailystar.png',
              },
              {
                source: 'The Business Standard',
                date: '2019',
                headline: 'Taking issues with ride-sharing services: prioritise safety',
                excerpt: 'Opinion piece documenting the surge in safety incidents tied to informal bike rides in Dhaka. Writers call for mandatory registration, trip tracking, and passenger protections, none of which exist on the street.',
                url: 'https://www.tbsnews.net/opinion/taking-issues-ride-sharing-services-prioritise-safety',
                tag: 'Opinion',
                img: '/news-tbs.png',
              },
            ].map((article) => (
              <a
                key={article.headline}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-neutral-900 dark:text-neutral-100 font-semibold">{article.source}</span>
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">{article.date}</span>
                    </div>
                    <span className="text-xs font-mono text-orange-500 dark:text-orange-400 border border-orange-200 dark:border-orange-900/40 rounded-full px-2 py-0.5">{article.tag}</span>
                  </div>
                  <h3 className="font-serif text-lg text-neutral-900 dark:text-neutral-100 mb-3 leading-snug group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">{article.headline}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs font-mono text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                    Read article
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                </div>
                <div className="border-t border-neutral-100 dark:border-neutral-800 overflow-hidden" style={{ maxHeight: '220px' }}>
                  <img
                    src={article.img}
                    alt={article.headline}
                    className="w-full object-cover object-top grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </a>
            ))}
          </RevealGrid>
        </Reveal>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Problems */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">The Problem</p>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-3 max-w-xl leading-snug">
              Both sides had rational reasons to go offline
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-12 max-w-xl">How do you make an app-based ride as fast and certain as flagging down a bike on the street?</p>
          </Reveal>

          <RevealGrid className="grid md:grid-cols-2 gap-6" baseDelay={0.1} stagger={0.13}>
            {problems.map((p) => (
              <div key={p.num} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{p.num}</span>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 border border-neutral-200 dark:border-neutral-800 rounded-full px-2.5 py-0.5">{p.who}</span>
                </div>
                <h3 className="font-serif text-xl text-neutral-900 dark:text-neutral-100 mb-3">{p.headline}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">{p.body}</p>
                <blockquote className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
                  <p className="text-sm italic text-neutral-500 dark:text-neutral-400 mb-1">{p.quote}</p>
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600">{p.quoteBy}</p>
                </blockquote>
              </div>
            ))}
          </RevealGrid>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Process */}
        <div className="mb-16">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">Design Process</p>
          </Reveal>
          <RevealGrid className="grid md:grid-cols-5 gap-4 mb-12" baseDelay={0.05} stagger={0.1}>
            {processPhases.map((phase, i) => (
              <div key={phase.phase} className="relative h-full">
                {i < processPhases.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px border-t border-dashed border-neutral-200 dark:border-neutral-800 z-0" style={{ width: 'calc(100% - 2rem)' }} />
                )}
                <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 relative z-10 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg text-neutral-400 dark:text-neutral-600">{phase.icon}</span>
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">{phase.duration}</span>
                  </div>
                  <h3 className="font-serif text-lg text-neutral-900 dark:text-neutral-100 mb-4">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.items.map(item => (
                      <li key={item} className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </RevealGrid>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Research insights */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">Research Insights</p>
          </Reveal>
          <RevealGrid className="grid md:grid-cols-3 gap-6" baseDelay={0.08} stagger={0.12}>
            {insights.map((insight) => (
              <div key={insight.insight} className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                <span className="text-xs font-mono text-green-600 dark:text-green-400 mb-4 block">{insight.tag}</span>
                <h3 className="font-serif text-lg text-neutral-900 dark:text-neutral-100 mb-3">{insight.insight}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </RevealGrid>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* User Flow Mapping — apps + mvp flow */}
        <div className="mb-24">
          <Reveal className="mb-10">
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">User Flow Mapping</p>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-3 leading-snug">Mapping the two-sided product</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl">Before hi-fi design, we mapped the full experience for both sides, passenger and rider, then traced how they converge at the code exchange moment.</p>
          </Reveal>

          <RevealGrid className="grid md:grid-cols-2 gap-4 mb-8" baseDelay={0.05} stagger={0.12}>
            <div className="rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-900">
              <img src="/case-study/pathao/passenger-app.png" alt="Passenger app flow" className="w-full h-auto block" />
              <div className="px-5 py-3">
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Passenger App</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-900">
              <img src="/case-study/pathao/driver-app.png" alt="Rider app flow" className="w-full h-auto block" />
              <div className="px-5 py-3">
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Rider App</p>
              </div>
            </div>
          </RevealGrid>

          <RevealImage className="mb-4">
            <div className="rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-900">
              <img
                src="/case-study/pathao/mvp-flow.png"
                alt="MVP flow diagram"
                className="w-full h-auto block"
              />
            </div>
          </RevealImage>
          <Reveal distance={12} delay={0.1}>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 text-center">MVP flow: mapping the two-sided pairing experience before hi-fi design began</p>
          </Reveal>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Early exploration */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">Early Exploration</p>
            <p className="text-neutral-500 dark:text-neutral-400 mb-10 max-w-xl">Before committing to code-first entry, we explored map-first, QR-based, and multi-method pairing. Testing revealed that more options created more confusion, not more confidence.</p>
          </Reveal>
          <RevealImage className="mb-4">
            <div className="rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-900">
              <img
                src="/case-study/pathao/early-exploration.png"
                alt="Early lo-fi wireframe explorations"
                className="w-full h-auto block"
              />
            </div>
          </RevealImage>
          <Reveal distance={12} delay={0.1}>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 text-center">Lo-fi wireframes: exploring map-first vs. code-first entry points across 5 flows</p>
          </Reveal>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Key design decisions */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">Key Design Decisions</p>
          </Reveal>
          <RevealGrid className="space-y-6" baseDelay={0.05} stagger={0.14}>
            {decisions.map((d) => (
              <div key={d.label} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-[1fr_1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-neutral-100 dark:divide-neutral-800">
                  <div className="p-6 md:p-8">
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3 block">{d.label}</span>
                    <h3 className="font-serif text-xl text-neutral-900 dark:text-neutral-100 mb-4">{d.title}</h3>
                    <p className="text-xs font-mono text-orange-500 dark:text-orange-400 uppercase tracking-wide mb-2">The problem</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{d.problem}</p>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-xs font-mono text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">The decision</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{d.solution}</p>
                  </div>
                  <div className="p-6 md:p-8 bg-neutral-50 dark:bg-neutral-900">
                    <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mb-2">Outcome</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{d.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </RevealGrid>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Hi-Fi Design — user + driver journeys */}
        <div className="mb-24">
          <Reveal className="mb-10">
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">Hi-Fi Design</p>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-3 leading-snug">User-initiated journey</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl">Passenger selects Connect from the Pathao home, reaches the Estimation page, and enters a 6-digit code from the rider's screen to pair and start the trip.</p>
          </Reveal>

          <RevealImage className="mb-4">
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <div className="flex gap-4 p-6 md:p-10 min-w-max">
                  {userJourneySteps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      className="flex flex-col items-center gap-3"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-5%' }}
                      transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                    >
                      <img
                        src={step.img}
                        alt={step.label}
                        style={{ height: 400, width: 'auto', ...phoneStyle }}
                      />
                      <div className="text-center">
                        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 mb-0.5">0{i + 1}</p>
                        <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{step.label}</p>
                        <p className="text-xs text-neutral-400 dark:text-neutral-600">{step.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RevealImage>
          <Reveal distance={12} delay={0.15} className="mb-16">
            <p className="text-xs text-neutral-400 dark:text-neutral-600 text-center">The code exchange is the trust moment: instant, physical, zero ambiguity</p>
          </Reveal>

          <Reveal className="mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-3 leading-snug">Driver-initiated journey</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl">Rider activates Connect mode, displays their shareable 6-digit code, and the passenger enters it to pair. The rider sees the trip confirmed and starts the ride.</p>
          </Reveal>

          <RevealImage className="mb-4">
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <div className="flex gap-4 p-6 md:p-10 min-w-max">
                  {driverJourneySteps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      className="flex flex-col items-center gap-3"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-5%' }}
                      transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                    >
                      <img
                        src={step.img}
                        alt={step.label}
                        style={{ height: 400, width: 'auto', ...phoneStyle }}
                      />
                      <div className="text-center">
                        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 mb-0.5">0{i + 1}</p>
                        <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{step.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RevealImage>
          <Reveal distance={12} delay={0.15} className="mb-0">
            <p className="text-xs text-neutral-400 dark:text-neutral-600 text-center">Free safety coverage, 0% commission: the incentive structure that made this viable at scale</p>
          </Reveal>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Impact */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">Impact</p>
          </Reveal>
          <RevealGrid className="grid md:grid-cols-2 gap-6 mb-12" baseDelay={0.05} stagger={0.1}>
            <div className="col-span-2 md:col-span-1 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/40 rounded-2xl p-8">
              <p className="font-serif text-5xl md:text-6xl text-green-700 dark:text-green-400 mb-2">200</p>
              <p className="text-sm font-mono text-green-600 dark:text-green-500 mb-2">organic trips / day</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">At launch, without paid acquisition. Driven entirely by GTM awareness campaigns and word-of-mouth from early adopters.</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { value: '৳100K', label: 'BDT insurance coverage', sub: 'Per user per trip. Direct answer to the safety gap in khep rides.' },
                { value: '৳20', label: 'Flat platform fee', sub: 'vs. percentage commission. Addressed both rider math and rider psychology.' },
              ].map(s => (
                <div key={s.value} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6">
                  <p className="font-serif text-3xl text-neutral-900 dark:text-neutral-100 mb-1">{s.value}</p>
                  <p className="text-xs font-mono text-green-600 dark:text-green-400 mb-1">{s.label}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{s.sub}</p>
                </div>
              ))}
            </div>
          </RevealGrid>

          <Reveal delay={0.1}>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Pathao Connect also onboarded new users who had never used the Pathao app. The driver-initiated SMS flow meant non-registered passengers received a tracking link and ride record without opening any app. Every "khep" ride converted became a potential new registered user.
              </p>
            </div>
          </Reveal>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Post-launch iteration bridge */}
        <Reveal className="mb-24">
          <div className="border border-orange-200 dark:border-orange-900/40 bg-orange-50/40 dark:bg-orange-900/10 rounded-3xl p-8 md:p-12">
            <p className="text-xs font-mono text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-5">Post-Launch · v1.2</p>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-4 max-w-xl leading-snug">
              We shipped. Then we looked at the data.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
              200 trips a day was a strong start, but the funnel told a different story. Users were entering Pathao Connect and dropping off before they ever reached the pairing screen. The culprit was the map screen: a feature we designed to help users locate nearby riders had become an invisible wall between intent and action.
            </p>
          </div>
        </Reveal>

        {/* Drop-off discovery */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">What the data showed</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-5 leading-snug">
                ~60% of users dropped off at the map screen
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                The map was designed with good intent: show users nearby offline spots, guide them with a walking route, confirm arrival with a blue zone. In theory, it helped. In practice, it made users think the product was more complicated than it was.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Users who already had a rider in front of them didn't need a map. They needed to enter a code and start riding. The map was a step designed for discovery, but we were making every user go through it, even the ones who didn't need it.
              </p>
            </Reveal>
            <div className="space-y-3">
              <RevealImage delay={0.15}>
                <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800">
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 mb-5 uppercase tracking-widest">Event funnel — v1.0</p>
                  <div className="space-y-2">
                    {[
                      { step: 'Tap Connect', pct: 100, color: 'bg-neutral-900 dark:bg-neutral-100' },
                      { step: 'Welcome screen', pct: 92, color: 'bg-neutral-700 dark:bg-neutral-300' },
                      { step: 'Map screen', pct: 38, color: 'bg-orange-400', highlight: true },
                      { step: '"I found my rider"', pct: 30, color: 'bg-orange-300', highlight: true },
                      { step: 'Code entry', pct: 28, color: 'bg-neutral-400' },
                      { step: 'Ride started', pct: 26, color: 'bg-green-500' },
                    ].map((row) => (
                      <div key={row.step}>
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs ${row.highlight ? 'text-orange-500 dark:text-orange-400 font-medium' : 'text-neutral-500 dark:text-neutral-400'}`}>{row.step}</span>
                          <span className={`text-xs font-mono ${row.highlight ? 'text-orange-500 dark:text-orange-400' : 'text-neutral-400 dark:text-neutral-600'}`}>{row.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.pct}%`, transition: 'width 1s ease' }} />
                        </div>
                        {row.highlight && row.step === 'Map screen' && (
                          <p className="text-[10px] text-orange-400 mt-0.5 font-mono">← ~60% exit here</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </RevealImage>
              <Reveal delay={0.3} distance={10}>
                <p className="text-xs text-neutral-400 dark:text-neutral-600 text-center">Event funnel showing ~60% exit at the map screen step</p>
              </Reveal>
            </div>
          </div>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Flow comparison */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">Flow Analysis</p>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-3 leading-snug">One mandatory step removed</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-10 max-w-xl">The fix was simple in execution, difficult in conviction. The map had to stop being a required stop.</p>
          </Reveal>

          <RevealGrid className="grid md:grid-cols-2 gap-6 mb-8" baseDelay={0.05} stagger={0.12}>
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6">
              <p className="text-xs font-mono text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-5">v1.0 — Original flow</p>
              <div className="space-y-2">
                {flows.before.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono flex-shrink-0 ${
                      step === 'Map screen' || step === '"I found my rider" tap'
                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 ring-1 ring-orange-200 dark:ring-orange-800'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'
                    }`}>{i + 1}</span>
                    <span className={`text-sm ${
                      step === 'Map screen' || step === '"I found my rider" tap'
                        ? 'text-orange-500 dark:text-orange-400 line-through'
                        : 'text-neutral-600 dark:text-neutral-300'
                    }`}>{step}</span>
                    {(step === 'Map screen' || step === '"I found my rider" tap') && (
                      <span className="text-xs font-mono text-orange-400 dark:text-orange-500">~60% exit</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 mt-5">{flows.before.length} steps · map was mandatory</p>
            </div>

            <div className="border border-green-200 dark:border-green-900/50 rounded-2xl p-6 bg-green-50/30 dark:bg-green-900/10">
              <p className="text-xs font-mono text-green-600 dark:text-green-400 uppercase tracking-widest mb-5">v1.2 — Optimised flow</p>
              <div className="space-y-2">
                {flows.after.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center text-xs font-mono flex-shrink-0">{i + 1}</span>
                    <span className={`text-sm ${step === 'Code entry screen' ? 'text-green-700 dark:text-green-400 font-medium' : 'text-neutral-600 dark:text-neutral-300'}`}>{step}</span>
                    {step === 'Code entry screen' && <span className="text-xs font-mono text-green-500">← now first screen</span>}
                  </div>
                ))}
              </div>
              <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 mt-5">{flows.after.length} steps · map accessible via toggle</p>
            </div>
          </RevealGrid>

          <Reveal delay={0.1}>
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-[1fr_1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-neutral-100 dark:divide-neutral-800">
                <div className="p-6 md:p-8">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3 block">Iteration Decision</span>
                  <h3 className="font-serif text-xl text-neutral-900 dark:text-neutral-100 mb-4">Map → secondary. Code entry → primary.</h3>
                  <p className="text-xs font-mono text-orange-500 dark:text-orange-400 uppercase tracking-wide mb-2">What data showed</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">The map was the #1 drop-off point. Users who already had a rider in front of them were forced through a map experience they had no use for.</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-mono text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">The change</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Flipped the hierarchy. Pathao Connect now lands directly on the code entry screen. The map is still there, accessible via a toggle at the top. It never stands between intent and action.</p>
                </div>
                <div className="p-6 md:p-8 bg-neutral-50 dark:bg-neutral-900">
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mb-2">Result</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Eliminated the top drop-off point in the funnel. One fewer required step. Faster time-to-pairing. Map access preserved for users who need it.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Final design */}
        <div className="mb-12">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">Final Design</p>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-3">The final flow</h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-10 max-w-xl">User selects Bike from the Pathao homepage, taps Connect from Ride Details, connects via rider's code (available riders on the map can be found from the code screen) and starts for destination.</p>
          </Reveal>
        </div>

        <RevealImage className="mb-12">
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <div className="flex gap-4 md:gap-8 p-6 md:p-10 min-w-max justify-center">
                {finalFlowSteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    className="flex flex-col items-center gap-3"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5%' }}
                    transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                    style={{ transform: i === 2 ? 'translateY(-20px)' : 'none' }}
                  >
                    <img
                      src={step.img}
                      alt={step.label}
                      style={{ height: 420, width: 'auto', ...phoneStyle }}
                    />
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{step.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </RevealImage>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-24" />

        {/* Reflections */}
        <div className="mb-24">
          <Reveal>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">Reflections</p>
          </Reveal>
          <RevealGrid className="space-y-8" baseDelay={0.05} stagger={0.15}>
            {learnings.map((l) => (
              <div key={l.num} className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-10">
                <span className="font-serif text-4xl text-neutral-200 dark:text-neutral-800">{l.num}</span>
                <div>
                  <h3 className="font-serif text-xl text-neutral-900 dark:text-neutral-100 mb-3">{l.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm max-w-xl">{l.body}</p>
                </div>
              </div>
            ))}
          </RevealGrid>
        </div>

        <hr className="border-neutral-100 dark:border-neutral-800 mb-16" />

        {/* Footer nav */}
        <Reveal className="py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2">Up next</p>
              <p className="font-serif text-2xl text-neutral-900 dark:text-neutral-100">Platform Homepage Revamp</p>
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border border-neutral-200 dark:border-neutral-800 rounded-full px-5 py-2.5"
            >
              View all work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </motion.div>
  )
}
