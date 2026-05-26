import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-green-950" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
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

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 border border-green-500/30 rounded-full bg-green-500/10 backdrop-blur-sm"
        >
          <span className="text-green-400 text-xs md:text-sm font-medium">
            🌱 The Future of Smart Farming
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent">
            AgroBot
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto px-2"
        >
          An autonomous AI-powered robot that detects damaged plants and treats them
          with precision laser technology — chemical-free, eco-friendly farming.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <a
            href="#explore"
            className="group px-6 md:px-8 py-3 md:py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 text-sm md:text-base"
          >
            Explore the Bot →
          </a>
          <a
            href="#about"
            className="px-6 md:px-8 py-3 md:py-4 border border-white/20 hover:border-green-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/5 text-sm md:text-base"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs md:text-sm">Scroll</span>
          <FiArrowDown className="text-xl md:text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero