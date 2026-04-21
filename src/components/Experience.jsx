import ScrollReveal from './ScrollReveal'

const jobs = [
  {
    company: 'Pathao', role: 'Senior Product Designer · Banani, Dhaka', period: 'Mar 2025 – Present',
    bullets: [
      'Revamped platform homepage with bento layout + dynamic tile prioritisation; drove 20%+ tile penetration growth',
      'Redesigned rental homepage and niche flows; increased niche trips 50%',
      'Optimised Quick Driver Onboarding; boosted signup conversion 16x',
      'Launched CNG ride vertical — 1.5K+ daily trips at 90% pairing success',
      'Designed Autopay v2.0; added 14K new Pathao Pay users',
    ]
  },
  {
    company: 'klikit', role: 'Product Designer · Irving Place, Singapore', period: 'Mar 2023 – Feb 2025',
    bullets: [
      'Built consumer web + mobile products for a merchant platform serving 12,000+ stores across 8 APAC countries',
      'Built and scaled core design system (25+ components) across web, mobile, and admin surfaces',
      'Designed QR ordering (Webshop), reservations, merchant dashboards, and B2B admin tools',
    ]
  },
  {
    company: 'ACS Future School', role: 'Lead UI/UX Designer · Mirpur DOHS, Dhaka', period: 'Sept 2024 – Feb 2025',
    bullets: [
      'Owned consumer + admin surfaces for an AI EdTech ecosystem generating ৳163M+ revenue, serving 168K+ users',
      'Led 4 designers, partnered with 4 PMs and 15 engineers',
      'Designed gamified learning platform (ranks, streaks, leaderboards) and live class experience with 3,700+ sessions',
    ]
  },
  {
    company: 'Panorama', role: 'Founding UI/UX Designer · Remote, Texas', period: 'Oct 2022 – Feb 2023',
    bullets: [
      'Built business assessment platform and data-driven admin panel from 0→1',
      'Designed and implemented scalable design system in close collaboration with engineering',
    ]
  },
]

export default function Experience() {
  return (
    <section className="py-20 md:py-28">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
        <ScrollReveal>
          <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">Experience</h2>
        </ScrollReveal>
        <div className="space-y-12">
          {jobs.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 0.08}>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-x-4 mb-1">
                  <div>
                    <h3 className="font-serif font-normal text-[22px] text-neutral-900 dark:text-neutral-100">{job.company}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{job.role}</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 shrink-0 mt-1">{job.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-sm text-neutral-500 dark:text-neutral-400 flex items-start gap-2.5">
                      <span className="w-[3px] h-[3px] rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0 mt-[9px]"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
