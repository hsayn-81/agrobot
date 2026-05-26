import { motion } from 'framer-motion'
import { FiAlertTriangle, FiCheckCircle, FiZap } from 'react-icons/fi'

function About() {
  const problems = [
    {
      icon: <FiAlertTriangle className="text-3xl" />,
      title: 'Harmful Pesticides',
      desc: 'Traditional farming relies on chemicals that damage soil, water, and human health.',
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: 'Manual Labor',
      desc: 'Detecting and treating damaged plants is time-consuming and inefficient at scale.',
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: 'Crop Loss',
      desc: 'Diseased plants spread quickly, causing massive losses if not treated in time.',
    },
  ]

  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
            About AgroBot
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Reinventing{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Agriculture
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            AgroBot is an autonomous agricultural robot that combines{' '}
            <span className="text-green-400">artificial intelligence</span>,{' '}
            <span className="text-green-400">computer vision</span>, and{' '}
            <span className="text-green-400">precision laser technology</span> to
            revolutionize how we care for crops — without a single drop of pesticide.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            The Problems We Solve
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{problem.title}</h4>
                <p className="text-gray-400 leading-relaxed">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-green-500/10 via-zinc-900/50 to-cyan-500/10 border border-green-500/20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Solution 🌱
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              A fully autonomous robot that{' '}
              <span className="text-green-400 font-semibold">scans</span>,{' '}
              <span className="text-green-400 font-semibold">detects</span>, and{' '}
              <span className="text-green-400 font-semibold">treats</span> damaged
              plants using a CO₂ laser — all while keeping your crops safe with
              built-in fire protection.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About