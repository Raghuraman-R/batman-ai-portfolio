import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 relative z-10">

      <motion.div

        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        className="w-full max-w-5xl bg-black border border-green-500/30 rounded-[30px] p-10 shadow-[0_0_60px_rgba(34,197,94,0.15)]"
      >

        <div className="space-y-8 text-green-400 text-lg md:text-2xl font-mono">

          <p>{'>'} SYSTEM READY...</p>

          <p>{'>'} ESTABLISHING CONNECTION...</p>

          <p>{'>'} AI ENGINEER PROFILE DETECTED</p>

          <p>{'>'} CONTACT CHANNELS AVAILABLE:</p>

        </div>

        {/* LINKS */}
        <div className="mt-16 flex flex-wrap gap-6">

          <a
            href="mailto:rohitraghu1397@gmail.com"
            className="px-8 py-4 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            Email
          </a>

          <a
            href="https://github.com/Raghuraman-R"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-300 transition-all duration-300"
          >
            GitHub
          </a>

          

        </div>

      </motion.div>

    </section>
  )
}