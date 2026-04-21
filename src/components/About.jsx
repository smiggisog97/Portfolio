import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
        <ScrollReveal>
          <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">About</h2>
          <div className="space-y-2 text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
            <p>5+ YRS EXPERIENCE</p>
            <p>5.7M+ USERS REACHED</p>
            <p>DHAKA · REMOTE-OPEN</p>
          </div>
        </ScrollReveal>

        <div className="space-y-5 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <ScrollReveal delay={0.05}>
            <p className="font-serif text-[22px] font-normal leading-snug text-neutral-900 dark:text-neutral-100">
              I studied Materials Engineering at BUET. I ended up in design because I kept caring more about how products worked than what they were made of.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p>
              Five years later, I've shipped consumer and B2B products used by millions — ride-hailing platforms, EdTech ecosystems, multi-country merchant tools. I work best in complex, cross-functional environments where the design problem is embedded inside a business problem.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p>
              I'm actively exploring AI-augmented design workflows — using Claude, Cursor, and vibe-coded prototypes to move faster and test more ideas in less time.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">Craft</p>
                <ul className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-300">
                  {['Product strategy', 'Growth experimentation', 'Interaction design', 'Design systems', 'UX research'].map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">Tools</p>
                <ul className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-300">
                  {['Figma · FigJam', 'Framer · Rive', 'Cursor · Pencil.dev', 'Notion · Jira', 'Affinity Suite'].map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
