import { motion } from 'framer-motion'
import gotham from '../assets/gotham.png'
import metavisualizer from '../assets/metavisualizer.png'
import oracle from '../assets/oracle.png'

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white px-6 py-32 relative z-10">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center mb-32"
      >
        PROJECT DATABASE
      </motion.h1>


      {/* ================= PROJECT 01 ================= */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-40"
      >

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.1)]">
          <img
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1200&auto=format&fit=crop"
            alt="Spider-Man Logo Generator"
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
          />
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-yellow-400 mb-4">
            PROJECT 01
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Spider-Man Logo Generator
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            A cinematic AI-powered Spider-Man logo generation
            experience featuring futuristic UI design,
            smooth animations, and immersive visuals.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://spiderman-project-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Live Demo
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
        </div>

      </motion.div>


      {/* ================= PROJECT 02 ================= */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-40"
      >

        {/* CONTENT */}
        <div>
          <p className="text-yellow-400 mb-4">
            PROJECT 02
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Movie Recommendation System
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Intelligent recommendation platform that suggests
            movies using AI-based filtering and cinematic UI
            interaction.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://movie-recommendation-system-8ebh9ht6eebhspzgzcnbpt.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Live Demo
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
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.1)]">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
            alt="Movie Recommendation System"
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
          />
        </div>

      </motion.div>


      {/* ================= PROJECT 03 ================= */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-40"
      >

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.1)]">
          <img
            src={gotham}
            alt="Batman AI Portfolio"
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
          />
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-yellow-400 mb-4">
            PROJECT 03
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Batman AI Portfolio
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            A cinematic Gotham-inspired AI portfolio featuring
            immersive animations, AI chatbot interaction,
            lightning effects and futuristic UI design.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://batman-ai-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Raghuraman-R/batman-ai-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-300 transition-all duration-300"
            >
              GitHub
            </a>

          </div>
        </div>

      </motion.div>


      {/* ================= PROJECT 04 ================= */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-40"
      >

        {/* CONTENT */}
        <div>
          <p className="text-yellow-400 mb-4">
            PROJECT 04
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            MetaLearn Visualizer
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Interactive machine learning visualization platform
            that enables users to explore ML algorithms and
            dataset insights through visual representations.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://metalearn-visualizer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Raghuraman-R/metalearn-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-300 transition-all duration-300"
            >
              GitHub
            </a>

          </div>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.1)]">
          <img
            src={metavisualizer}
            alt="MetaLearn Visualizer"
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
          />
        </div>

      </motion.div>


      {/* ================= PROJECT 05 ================= */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
      >

        {/* IMAGE */}
        <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.1)]">
          <img
            src={oracle}
            alt="The Oracle"
            className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
          />
        </div>

        {/* CONTENT */}
        <div>

          <p className="text-yellow-400 mb-4">
            PROJECT 05
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            The Oracle
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            The Oracle is a cinematic movie guessing game inspired
            by Greek mythology. Choose legendary heroes, solve movie
            riddles through mystical clues, and consult the Oracle
            in an immersive 3D ancient temple experience.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://the-oracle-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Raghuraman-R/The-Oracle"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-300 transition-all duration-300"
            >
              GitHub
            </a>

          </div>

        </div>

      </motion.div>

    </section>
  )
}