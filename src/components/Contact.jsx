import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section className="pt-20 pb-2 md:py-28">
      <div className="max-w-xl">
        <ScrollReveal>
          <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">Contact</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-serif text-2xl md:text-3xl font-normal leading-snug mb-8 text-neutral-900 dark:text-neutral-100">
            Open to the right senior IC or staff role.<br />Best reached over email.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-3">
            {[
              { href: 'mailto:muhidul.hasan@gmail.com', label: 'muhidul.hasan@gmail.com', primary: true, arrow: true },
              { href: 'tel:+8801788201425', label: '+880 1788 201425', primary: false },
              { href: 'https://www.linkedin.com/in/muhidul-hasan-0966aa194/', label: 'LinkedIn ↗', primary: false, external: true, rel: 'noopener noreferrer' },
            ].map(({ href, label, primary, arrow, external }) => (
              <motion.a
                key={href}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`flex items-center gap-3 group w-fit ${primary ? 'text-neutral-900 dark:text-neutral-100 font-medium' : 'text-neutral-500 dark:text-neutral-400'} hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors`}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
              >
                <span className={primary ? 'group-hover:underline underline-offset-2' : ''}>{label}</span>
                {arrow && (
                  <svg className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
