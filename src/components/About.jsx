"use client"
import { motion } from "framer-motion"

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Happy Customers", value: "500+" },
  { label: "Brand Partners", value: "50+" },
  { label: "Support Coverage", value: "24/7" },
]

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#36454F]">Leading Industrial Automation Components Supplier in India</h2>
          <p className="mt-4 text-[#36454F]/80">
            Shiva Enterprises is India's trusted supplier of industrial automation products, specializing in rotary encoders, incremental encoders, absolute encoders, proximity sensors, photoelectric sensors, precision coupling manufacturing and Sliprings. We deliver certified, high-quality automation components that meet demanding industrial standards for packaging machines, conveyor systems, CNC machines, and manufacturing applications.
          </p>
          <p className="mt-3 text-[#36454F]/80">
            Our authorized partnerships with Kuebler enable us to offer genuine industrial automation solutions with reliable technical support and after-sales service across India.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition">
                <div className="text-xl font-bold text-[#FB8B24]">{s.value}</div>
                <div className="text-xs text-[#36454F]/70">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Industrial-grade tools and supplies in a warehouse setting"
            className="w-full h-auto rounded-lg border border-gray-200 shadow-md"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  )
}
