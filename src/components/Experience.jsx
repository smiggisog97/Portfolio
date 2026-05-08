import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const ease = [0.22, 1, 0.36, 1]

const jobs = [
  {
    company: 'Pathao',
    role: 'Senior Product Designer · Banani, Dhaka',
    period: 'Mar 2025 – Present',
    bullets: [
      'Redesigned Platform Homepage with a personalized bento layout, dynamic tile prioritization, and contextual quick actions, driving 20%+ growth in tile penetration across active users.',
      'Overhauled Rental homepage and niche rental flows end-to-end, increasing niche trip volume by 50% through targeted interaction design and streamlined booking journeys.',
      'Optimized Quick Driver Onboarding flow, removing friction across verification and setup steps to deliver a 16x lift in driver signup conversion.',
      'Designed and launched CNG ride vertical from zero to 1,500+ daily trips at a 90% pairing success rate within weeks of launch.',
      'Shipped Autopay v2.0 with clearer reliability indicators and payment transparency, adding 14,000 net-new Pathao Pay users.',
      'Built Pathao Connect, an offline ride coordination system generating 150+ organic daily requests with zero paid acquisition.',
    ],
  },
  {
    company: 'klikit',
    role: 'Product Designer · Singapore',
    period: 'Mar 2023 – Feb 2025',
    bullets: [
      'Shipped consumer web and mobile products for a merchant SaaS platform across 12,000+ stores in 8 APAC countries, supporting QR ordering, reservations, and multi-channel management.',
      'Built design system from zero to 25+ components for web, mobile, and admin surfaces, cutting design-to-dev handoff time and improving cross-platform consistency.',
      'Owned core consumer workflows including QR-based ordering (Webshop) and table reservations, collaborating with 5+ PMs and 30+ engineers to reduce drop-off and improve conversion.',
      'Designed merchant dashboard and B2B admin suite covering menus, orders, inventory, CRM, and analytics, used daily by 12,000+ store operators.',
    ],
  },
  {
    company: 'ACS Future School',
    role: 'Lead UI/UX Designer · Mirpur DOHS, Dhaka',
    period: 'Sept 2024 – Feb 2025',
    bullets: [
      'Led product design for an AI-powered EdTech platform serving 168,000+ users and generating BDT 163M+ in revenue, managing a team of 4 designers across consumer and admin surfaces.',
      'Designed gamified learning system with progression mechanics (ranks, streaks, leaderboards) and personalized dashboards, driving daily active engagement.',
      'Built live class infrastructure supporting 3,700+ sessions with real-time interaction, attendance tracking, and performance reporting.',
      'Shipped role-specific experiences for 3 user types (students, teachers, guardians) and a scalable admin ecosystem for content and user management.',
    ],
  },
  {
    company: 'Panorama',
    role: 'Founding UI/UX Designer · Remote, Texas',
    period: 'Oct 2022 – Feb 2023',
    bullets: [
      'Founded design function as sole designer, delivering a business performance assessment platform and analytics admin panel within a 5-month engagement, including visual language, component library, and interaction patterns built from scratch.',
    ],
  },
  {
    company: 'Better Aid BD',
    role: 'UI/UX Designer · Banani, Dhaka',
    period: 'May 2022 – Sept 2022',
    bullets: [
      'Designed a unified consumer health platform spanning 4 service domains (mental, sexual, menstrual health, nutrition), delivering a cohesive multi-domain experience across web and mobile.',
      'Conducted user research and usability interviews to validate product direction, translating findings into actionable design decisions across core user flows.',
      'Designed high-conversion landing pages driving awareness and service adoption for a platform serving sensitive health needs.',
    ],
  },
]

function ChevronIcon({ open }) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-neutral-400 dark:text-neutral-500 shrink-0"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.35, ease }}
    >
      <path d="M3.5 6L8 10.5L12.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  )
}

export default function Experience() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 md:py-[85px]">
      <ScrollReveal className="mb-8">
        <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Experience</h2>
      </ScrollReveal>

      <div>
        {jobs.map((job, i) => (
          <ScrollReveal key={job.company} delay={i * 0.08}>
            <div className={i > 0 ? 'border-t border-neutral-200 dark:border-neutral-800' : ''}>
              <button
                className="w-full text-left py-5 flex items-center justify-between gap-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 rounded-sm"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <div className="flex items-baseline gap-x-5 gap-y-0.5 flex-wrap min-w-0">
                  <h3
                    className="font-normal text-[22px] text-neutral-900 dark:text-neutral-100 leading-snug transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300 shrink-0"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {job.company}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">{job.role}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 hidden sm:block">{job.period}</span>
                  <ChevronIcon open={open === i} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pb-6 sm:pl-0">
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 block mb-3 sm:hidden">{job.period}</span>
                      <ul className="space-y-2">
                        {job.bullets.map((b) => (
                          <li key={b} className="text-sm text-neutral-500 dark:text-neutral-400 flex items-start gap-2.5">
                            <span className="w-[3px] h-[3px] rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0 mt-[9px]" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
