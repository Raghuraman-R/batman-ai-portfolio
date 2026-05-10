import { motion } from 'framer-motion'

export default function RainEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {[...Array(120)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-24 bg-gradient-to-b from-gray-300 to-transparent opacity-40"

          initial={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}

          animate={{
            y: window.innerHeight + 200,
          }}

          transition={{
            duration: Math.random() * 1 + 0.5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'linear',
          }}

          style={{
            rotate: '20deg',
          }}
        />
      ))}

    </div>
  )
}