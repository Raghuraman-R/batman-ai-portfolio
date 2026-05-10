import { motion } from 'framer-motion'

const education = [
  {
    year: '2025 - 2027',
    title: 'Master of Computer Applications (MCA)',
    place: 'AI & ML Specialization',
  },

  {
    year: '2022 - 2025',
    title: 'BSc Computer Science',
    place: 'Computer Science & Technology',
  },
]

export default function EducationSection() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32 relative z-10">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        className="text-5xl md:text-7xl font-bold text-center mb-32"
      >
        EDUCATION TIMELINE
      </motion.h1>

      <div className="max-w-5xl mx-auto relative">

        {/* LINE */}
        <div className="absolute left-6 top-0 w-[2px] h-full bg-yellow-500/30"></div>

        {education.map((item, i) => (

          <motion.div
            key={i}

            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{
              duration: 1,
              delay: i * 0.3,
            }}

            className="relative pl-20 mb-24"
          >

            {/* DOT */}
            <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-yellow-400 shadow-[0_0_40px_#facc15]"></div>

            {/* CARD */}
            <div className="bg-[#111]/70 border border-yellow-500/20 rounded-[30px] p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(250,204,21,0.08)]">

              <p className="text-yellow-400 tracking-[4px] mb-4">
                {item.year}
              </p>

              <h2 className="text-3xl font-bold mb-4">
                {item.title}
              </h2>

              <p className="text-gray-400 text-lg">
                {item.place}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}