import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { botParts } from '../data/botParts'

// Final Reveal component
function FinalReveal({ images, color }) {
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((i) => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative aspect-video mb-4 rounded-xl overflow-hidden bg-black/50">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-30 blur-3xl`}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIdx}
          src={images[currentIdx]}
          alt="AgroBot Complete"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full object-contain"
        />
      </AnimatePresence>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIdx ? 'bg-green-400 w-6' : 'bg-white/30 hover:bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Image with highlight (for mobile card)
function PartImage({ part }) {
  if (part.isFinal) {
    return <FinalReveal images={part.images} color={part.color} />
  }

  return (
    <div className="relative aspect-video mb-4 rounded-xl overflow-hidden bg-black/50">
      <div className={`absolute inset-0 bg-gradient-to-br ${part.color} opacity-20 blur-2xl`} />
      <img src={part.image} alt={part.title} className="relative w-full h-full object-contain" />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <mask id={`mask-${part.id}`}>
            <rect width="100" height="100" fill="white" />
            <circle cx={part.highlight.x} cy={part.highlight.y} r={part.highlight.size / 3} fill="black" />
          </mask>
        </defs>
        <rect width="100" height="100" fill="rgba(0,0,0,0.75)" mask={`url(#mask-${part.id})`} />
        <circle cx={part.highlight.x} cy={part.highlight.y} r={part.highlight.size / 3} fill="none" stroke="#22c55e" strokeWidth="0.6">
          <animate attributeName="r" values={`${part.highlight.size / 3};${part.highlight.size / 3 + 2};${part.highlight.size / 3}`} dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

function Explore() {
  const [completedPoints, setCompletedPoints] = useState([])
  const [activePoint, setActivePoint] = useState(null)

  const nextPointId =
    completedPoints.length === 0 ? 1 : Math.max(...completedPoints) + 1

  const handlePointClick = (id) => {
    if (id === nextPointId || completedPoints.includes(id)) {
      setActivePoint(id)
      if (!completedPoints.includes(id)) {
        setCompletedPoints([...completedPoints, id])
      }
    }
  }

  return (
    <section
      id="explore"
      className="relative min-h-screen py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-green-950" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-green-400 text-xs md:text-sm font-semibold tracking-widest uppercase">
            Interactive Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 mb-4 md:mb-6">
            Explore the{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Bot
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Follow the path. Click each point to unlock a new piece of AgroBot.
          </p>
        </motion.div>

        {/* ============ DESKTOP: Treasure Map ============ */}
        <div className="hidden lg:block relative w-full h-[700px] max-w-5xl mx-auto">
          {/* SVG for lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {botParts.map((part, idx) => {
              if (idx === botParts.length - 1) return null
              const next = botParts[idx + 1]
              const isLit =
                completedPoints.includes(part.id) &&
                (completedPoints.includes(next.id) || nextPointId === next.id)

              return (
                <line
                  key={`line-${part.id}`}
                  x1={part.position.x}
                  y1={part.position.y}
                  x2={next.position.x}
                  y2={next.position.y}
                  stroke={isLit ? '#22c55e' : '#3f3f46'}
                  strokeWidth="0.4"
                  strokeDasharray={isLit ? '0' : '1.5,1.5'}
                  className="transition-all duration-700"
                  style={{ filter: isLit ? 'drop-shadow(0 0 4px #22c55e)' : 'none' }}
                />
              )
            })}
          </svg>

          {/* Points */}
          {botParts.map((part) => {
            const isCompleted = completedPoints.includes(part.id)
            const isNext = part.id === nextPointId
            const isClickable = isNext || isCompleted
            const isFinal = part.isFinal

            return (
              <div
                key={part.id}
                className="absolute"
                style={{
                  left: `${part.position.x}%`,
                  top: `${part.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {isNext && (
                  <motion.div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 text-green-400"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold whitespace-nowrap">
                        {isFinal ? 'See the Bot!' : 'Click here'}
                      </span>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21l-8-8h5V3h6v10h5l-8 8z" />
                      </svg>
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={() => handlePointClick(part.id)}
                  disabled={!isClickable}
                  className="relative group"
                >
                  {isNext && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-green-400"
                        animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-green-400"
                        animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </>
                  )}

                  <div
                    className={`relative rounded-full flex items-center justify-center transition-all duration-300 ${
                      isFinal ? 'w-20 h-20 text-3xl' : 'w-14 h-14 text-2xl'
                    } ${
                      isCompleted
                        ? isFinal
                          ? 'bg-gradient-to-br from-green-400 to-cyan-500 shadow-2xl shadow-green-500/60'
                          : 'bg-green-500 shadow-lg shadow-green-500/50'
                        : isNext
                        ? isFinal
                          ? 'bg-gradient-to-br from-green-400 to-cyan-500 shadow-2xl shadow-green-500/60 group-hover:scale-110'
                          : 'bg-green-500 shadow-lg shadow-green-500/50 group-hover:scale-110'
                        : 'bg-zinc-800 border-2 border-zinc-700'
                    }`}
                  >
                    {isCompleted || isNext ? <span>{part.icon}</span> : <span className="text-zinc-600">🔒</span>}
                  </div>

                  <span
                    className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap transition-colors ${
                      isCompleted || isNext ? 'text-green-400' : 'text-zinc-600'
                    }`}
                  >
                    {part.title}
                  </span>
                </button>

                {/* Desktop Info Card */}
                <AnimatePresence>
                  {activePoint === part.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute top-1/2 -translate-y-1/2 z-30 ${
                        isFinal ? 'w-96' : 'w-80'
                      } ${
                        part.cardSide === 'left' ? 'right-full mr-8' : 'left-full ml-8'
                      }`}
                    >
                      <div
                        className={`relative bg-zinc-900/95 backdrop-blur-md border rounded-2xl p-5 shadow-2xl ${
                          isFinal ? 'border-green-500/50 shadow-green-500/20' : 'border-green-500/30'
                        }`}
                      >
                        <PartImage part={part} />

                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{part.icon}</span>
                          <div>
                            <p className="text-green-400 text-xs uppercase tracking-wider">
                              {isFinal ? 'Final Reveal' : `Step ${part.id}`}
                            </p>
                            <h3 className="text-lg font-bold">{part.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{part.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* ============ MOBILE: Vertical Stacked ============ */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Vertical line behind points */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-zinc-800" />

            {botParts.map((part, idx) => {
              const isCompleted = completedPoints.includes(part.id)
              const isNext = part.id === nextPointId
              const isClickable = isNext || isCompleted
              const isFinal = part.isFinal
              const isActive = activePoint === part.id
              const isLineLit = isCompleted && idx < botParts.length - 1

              return (
                <div key={part.id} className="relative pb-6">
                  {/* Lit vertical line segment */}
                  {isLineLit && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-7 top-14 w-0.5 origin-top"
                      style={{ height: 'calc(100% - 3.5rem)', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}
                    />
                  )}

                  <div className="flex gap-4 items-start">
                    {/* Point */}
                    <button
                      onClick={() => handlePointClick(part.id)}
                      disabled={!isClickable}
                      className="relative flex-shrink-0 z-10"
                    >
                      {isNext && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-green-400"
                            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </>
                      )}
                      <div
                        className={`relative rounded-full flex items-center justify-center transition-all duration-300 ${
                          isFinal ? 'w-16 h-16 text-2xl' : 'w-14 h-14 text-xl'
                        } ${
                          isCompleted
                            ? isFinal
                              ? 'bg-gradient-to-br from-green-400 to-cyan-500 shadow-lg shadow-green-500/50'
                              : 'bg-green-500 shadow-lg shadow-green-500/50'
                            : isNext
                            ? 'bg-green-500 shadow-lg shadow-green-500/50'
                            : 'bg-zinc-800 border-2 border-zinc-700'
                        }`}
                      >
                        {isCompleted || isNext ? <span>{part.icon}</span> : <span className="text-zinc-600">🔒</span>}
                      </div>
                    </button>

                    {/* Label + Click hint */}
                    <div className="flex-1 pt-3">
                      <button
                        onClick={() => handlePointClick(part.id)}
                        disabled={!isClickable}
                        className="text-left w-full"
                      >
                        <p className="text-green-400 text-xs uppercase tracking-wider mb-1">
                          {isFinal ? 'Final Reveal' : `Step ${part.id}`}
                        </p>
                        <h3
                          className={`text-lg font-bold ${
                            isCompleted || isNext ? 'text-white' : 'text-zinc-600'
                          }`}
                        >
                          {part.title}
                        </h3>
                        {isNext && !isActive && (
                          <motion.p
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-green-400 text-xs mt-1"
                          >
                            👆 Tap to unlock
                          </motion.p>
                        )}
                      </button>

                      {/* Expanded card */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div
                              className={`mt-4 bg-zinc-900/95 backdrop-blur-md border rounded-2xl p-4 ${
                                isFinal ? 'border-green-500/50' : 'border-green-500/30'
                              }`}
                            >
                              <PartImage part={part} />
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {part.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Completion message */}
        {completedPoints.length === botParts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <div className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-2xl">
              <p className="text-green-400 font-bold text-base md:text-xl">
                🎉 You've explored the entire AgroBot!
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Explore