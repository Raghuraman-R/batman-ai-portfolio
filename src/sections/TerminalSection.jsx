import { motion } from 'framer-motion'

export default function TerminalSection() {
  return (
    <section className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl bg-[#0a0a0a] border border-green-500/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(34,197,94,0.2)]"
      >

        <p className="mb-4">
          {'>'} SYSTEM ONLINE...
        </p>

        <p className="mb-4">
          {'>'} AI STATUS: ACTIVE
        </p>

        <p className="mb-4">
          {'>'} ACCESSING PROJECT DATABASE...
        </p>

        <p className="mb-4 text-yellow-400">
          {'>'} PROJECT DETECTED: SPIDER-MAN LOGO GENERATOR
        </p>

        <p className="mb-4 text-yellow-400">
          {'>'} PROJECT DETECTED: MOVIE RECOMMENDATION SYSTEM
        </p>

        <p className="mt-10 text-gray-500">
          BATMAN AI TERMINAL v1.0
        </p>

      </motion.div>

    </section>
  )
}