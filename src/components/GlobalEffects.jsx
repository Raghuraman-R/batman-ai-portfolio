import RainEffect from './RainEffect'
import Lightning from './Lightning'

import gotham from '../assets/gotham.png'

export default function GlobalEffects() {
  return (
    <>

      {/* Rain */}
      <RainEffect />

      {/* Lightning */}
      <Lightning />

      {/* Skyline */}
      <img
        src={gotham}
        alt=""
        className="fixed bottom-0 w-full h-[70%] object-contain opacity-20 z-0"
      />

      {/* Moon Glow */}
      <div className="fixed top-10 right-20 w-72 h-72 bg-yellow-400 rounded-full blur-[140px] opacity-20 z-0"></div>

      {/* Moon */}
      <div className="fixed top-16 right-28 w-32 h-32 rounded-full bg-yellow-300 opacity-90 shadow-[0_0_80px_#facc15] z-0"></div>

    </>
  )
}