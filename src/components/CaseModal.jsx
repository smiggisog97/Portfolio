import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export default function CaseModal({ caseData, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = caseData ? 'hidden' : ''
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [caseData, onClose])

  return (
    <AnimatePresence>
      {caseData && (
        <motion.div
          key="modal-overlay"
          className="fixed inset-0 z-50 bg-white/[0.97] dark:bg-[#0E0E0E]/[0.97] backdrop-blur-md overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="max-w-4xl mx-auto px-6 py-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-12 rounded-full px-3 py-2 -ml-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
              </svg>
              Back
            </button>

            <div className="mb-12">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
                {caseData.company} · {caseData.year} · {caseData.role}
              </p>
              <h1 className="font-serif font-normal text-3xl md:text-5xl leading-tight mb-4 text-neutral-900 dark:text-neutral-100">
                {caseData.title}
              </h1>
              <p className="text-lg text-neutral-500 dark:text-neutral-400">{caseData.tagline}</p>
            </div>

            <hr className="border-neutral-100 dark:border-neutral-800 mb-12" />

            <div className="space-y-14">
              {caseData.sections.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                >
                  <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider pt-1">
                    {s.label}
                  </p>
                  <div
                    className="text-neutral-600 dark:text-neutral-300 leading-relaxed [&_strong]:text-neutral-900 [&_strong]:dark:text-neutral-100 [&_p+p]:mt-3"
                    dangerouslySetInnerHTML={{ __html: s.content }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
