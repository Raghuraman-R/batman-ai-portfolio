import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 relative z-10">

      <motion.div

        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        className="max-w-5xl bg-[#111]/70 backdrop-blur-xl border border-yellow-500/20 rounded-[40px] p-12 shadow-[0_0_60px_rgba(250,204,21,0.08)]"
      >

        <p className="text-yellow-400 tracking-[6px] mb-6">
          WHO AM I
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
          AI Engineer <br />
          & Creative Developer
        </h1>

        <p className="text-gray-400 text-lg leading-9">
          I am a passionate MCA student specializing in
          Artificial Intelligence & Machine Learning with
          strong interests in Generative AI, Data Analytics,
          Web Technologies, UI/UX Design, and Software Development.

          <br /><br />

          I enjoy building futuristic digital experiences,
          cinematic interfaces, and intelligent applications
          that combine creativity with technology.

          <br /><br />

          My mission is to create impactful AI-powered systems
          and immersive web experiences that stand out visually
          and technically.
        </p>

      </motion.div>

    </section>
  )
}