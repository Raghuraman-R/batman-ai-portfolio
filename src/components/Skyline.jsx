export default function Skyline() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[320px] flex items-end z-10">

      {/* Building 1 */}
      <div className="relative w-24 h-52 bg-[#1a1a1a]">
        <div className="grid grid-cols-3 gap-1 p-2">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-400 opacity-40"
            ></div>
          ))}
        </div>
      </div>

      {/* Building 2 */}
      <div className="relative w-32 h-72 bg-[#202020]">
        <div className="grid grid-cols-4 gap-1 p-2">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-300 opacity-30"
            ></div>
          ))}
        </div>
      </div>

      {/* Building 3 */}
      <div className="relative w-28 h-60 bg-[#181818]">
        <div className="grid grid-cols-3 gap-1 p-2">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-400 opacity-20"
            ></div>
          ))}
        </div>
      </div>

      {/* Building 4 */}
      <div className="relative w-40 h-96 bg-[#222]">
        <div className="grid grid-cols-4 gap-1 p-2">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-300 opacity-40"
            ></div>
          ))}
        </div>
      </div>

      {/* Building 5 */}
      <div className="relative w-36 h-80 bg-[#1d1d1d]">
        <div className="grid grid-cols-4 gap-1 p-2">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-400 opacity-30"
            ></div>
          ))}
        </div>
      </div>

    </div>
  )
}