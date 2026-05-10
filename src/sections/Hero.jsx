import { motion } from 'framer-motion'
import RainEffect from '../components/RainEffect'
import gotham from '../assets/gotham.png'
import Lightning from '../components/Lightning'

export default function Hero({ setOpenChat }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black">
    <Lightning />
    <RainEffect />
    <img
  src={gotham}
  alt=""
  className="absolute bottom-0 w-full h-[70%] object-cover opacity-40 z-10"
/>

     {/* Moon Glow */}
<div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400 rounded-full blur-[140px] opacity-20"></div>

{/* Moon */}
<div className="absolute top-16 right-28 w-32 h-32 rounded-full bg-yellow-300 opacity-90 shadow-[0_0_80px_#facc15]"></div>

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black"></div>

      {/* Small Animated Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              y: Math.random() * 1000,
              x: Math.random() * 2000,
            }}
            animate={{
              y: [null, -100],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-[20px] z-20"
      >
        GOTHAM AI
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-400 text-base md:text-xl mt-6 z-10 tracking-widest"
      >
        Gotham Inspired AI Portfolio
      </motion.p>

      {/* Button */}
     <motion.button
  onClick={() => setOpenChat(true)}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="mt-10 px-8 py-4 border border-red-500 text-red-500 rounded-full hover:bg-yellow-500 hover:text-black transition duration-500 z-10"
>
  Enter the BATCOM AI
</motion.button>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  )
}