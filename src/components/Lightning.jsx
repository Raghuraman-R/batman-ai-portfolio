import { motion } from 'framer-motion'

export default function Lightning() {
  return (
    <motion.div
      className="absolute inset-0 bg-white pointer-events-none z-30"

      initial={{ opacity: 0 }}

      animate={{
        opacity: [0, 0.4, 0, 0.2, 0],
      }}

      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeInOut',
      }}
    />
  )
}