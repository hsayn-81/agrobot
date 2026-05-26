import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX } from 'react-icons/fi'

import presentationVideo from '../assets/videos/presentation.mp4'
import work1 from '../assets/images/work-1.jpeg'
import work2 from '../assets/images/work-2.jpeg'
import work3 from '../assets/images/work-3.jpeg'
import work4 from '../assets/images/work-4.jpeg'

const images = [work1, work2, work3, work4]

function MeetTheMaker() {
  const [lightboxImg, setLightboxImg] = useState(null)

  return (
    <section
      id="gallery"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background — same vibe */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-green-950" />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
            👨‍💻 The Story
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Meet the{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Maker
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to reality — see how AgroBot came to life.
          </p>
        </motion.div>

        {/* Main grid: Video + Images side by side */}
        <div className="grid lg:grid-cols-5 gap-4 mb-8 max-w-6xl mx-auto">
          {/* VIDEO — 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-500/10 bg-black aspect-video">
              <video
                src={presentationVideo}
                controls
                className="w-full h-full object-cover"
                poster={work1}
              />
            </div>
            <p className="mt-3 text-center text-sm text-gray-500 italic">
              🎬 Presenting AgroBot at university
            </p>
          </motion.div>

          {/* IMAGES — 2 columns, 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {images.map((img, idx) => (
              <motion.button
                key={idx}
                onClick={() => setLightboxImg(img)}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Work ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-green-500/80 text-black text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Maker info card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-green-500/10 via-zinc-900/50 to-cyan-500/10 border border-green-500/20 overflow-hidden max-w-6xl mx-auto"
        >
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Name + Info */}
            <div>
              <p className="text-green-400 text-sm uppercase tracking-widest mb-2">
                Built by
              </p>
              <h3 className="text-3xl md:text-5xl font-bold mb-3">
                Hussein Eissa
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                ⚡ Electrical Engineering Student{' '}
                <span className="text-green-400 font-semibold">@ LIU</span>
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-green-500 pl-4 py-2 mb-6">
                <p className="text-xl md:text-2xl italic text-gray-200 leading-relaxed">
                  "Engineering the future,
                  <br />
                  one circuit at a time. ⚡"
                </p>
              </blockquote>

              {/* External link */}
              <a
                href="https://berytech.org/profiles/al-agrobot/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40"
              >
                View AgroBot on Berytech
                <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Right: Decorative */}
            <div className="relative hidden md:flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="relative w-64 h-64"
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500/30" />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-500/30" />
                <div className="absolute inset-8 rounded-full border-2 border-dashed border-green-500/20" />
              </motion.div>
              <div className="absolute text-8xl">⚙️</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <FiX className="text-2xl" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImg}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MeetTheMaker