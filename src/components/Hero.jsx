"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with subtle motion */}
      <motion.img
        initial={{ scale: 1.05, y: -10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/75"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.h1
            variants={itemUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#36454F] text-balance"
          >
            Industrial Automation Products | Encoders | Sensors | Coupling | Sliprings
          </motion.h1>
          <motion.p variants={itemUp} className="mt-4 text-base sm:text-lg text-[#36454F]/80">
            Leading supplier of industrial automation components in India. Authorized distributor of Kubler encoders, proximity sensors, photoelectric sensors, and manufacturer of precision couplings. 10+ years delivering quality automation solutions to packaging, manufacturing, and industrial applications.
          </motion.p>

          <motion.div variants={itemUp} className="mt-8 flex items-center gap-3">
            <Link
              to="/categories"
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm
                bg-[#FB8B24] hover:brightness-110 transition"
            >
              View Products
            </Link>
            <Link
              to="/getquote"
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-[#36454F] border border-[#36454F]/20 bg-white/80 hover:bg-white transition"
            >
              Get Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
