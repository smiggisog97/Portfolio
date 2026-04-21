import { motion } from 'framer-motion'
import { useState } from 'react'

const ease = [0.22, 1, 0.36, 1]

export default function ScrollReveal({ children, delay = 0, className = '' }) {
  const [done, setDone] = useState(false)
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.4, ease, delay }}
      style={{ willChange: done ? 'auto' : 'transform, opacity', backfaceVisibility: 'hidden' }}
      onAnimationComplete={() => setDone(true)}
    >
      {children}
    </motion.div>
  )
}
