'use client'
import { motion } from 'framer-motion'

// Drop this once in layout.tsx (already there) — do NOT import it again in page.tsx.
// It fires on every route change automatically because layout re-mounts children.
const TransitionEffect = () => {
  return (
    <>
      {/* Layer 1 — fastest, dark accent */}
      <motion.div
        className="fixed inset-0 z-50 bg-primaryDark origin-right pointer-events-none"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Layer 2 — mid, primary */}
      <motion.div
        className="fixed inset-0 z-40 bg-primary origin-right pointer-events-none"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
      />
      {/* Layer 3 — slowest, light */}
      <motion.div
        className="fixed inset-0 z-30 bg-light dark:bg-dark origin-right pointer-events-none"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.16 }}
      />
    </>
  )
}

export default TransitionEffect