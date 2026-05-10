import { motion } from 'framer-motion'
import batlogo from '../assets/batlogo.png'

export default function IntroScreen() {
  return (

    <motion.div

      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 4,
        duration: 1.5,
      }}

      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[180px] opacity-20"></div>

      {/* Logo */}
      <motion.img
        src={batlogo}
        alt=""
        initial={{
          scale: 0.5,
          opacity: 0,
        }}

        animate={{
          scale: 1,
          opacity: 1,
        }}

        transition={{
          duration: 2,
        }}

        className="w-[300px] md:w-[500px] object-contain z-10"
      />

      {/* Text */}
      <motion.h1

        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{
          delay: 1.5,
          duration: 1,
        }}

       className="absolute bottom-64 md:bottom-52 text-red-400 tracking-[10px] text-sm md:text-lg"
      >
        GOTHAM AI INITIALIZING...
      </motion.h1>

    </motion.div>
  )
}