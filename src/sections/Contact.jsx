import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi'

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-green-950" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Interested in AgroBot or have questions about the project? Feel free
            to reach out — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <a
            href="mailto:issahsayn1@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
          >
            <FiMail className="text-2xl" />
            Send me an email
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-16"
        >
          {/* Berytech link */}
          <a
            href="https://berytech.org/profiles/al-agrobot/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/50 rounded-full transition-all duration-300"
          >
            <FiExternalLink className="text-green-400" />
            <span className="text-sm font-semibold">Berytech</span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mt-16 pt-8 border-t border-white/10 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold text-lg">
              AgroBot 🌱
            </span>
            <span>— The Future of Smart Farming</span>
          </div>
          <p>© {new Date().getFullYear()} Hussein Eissa. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact