"use client"
import { motion } from "framer-motion"
import { ShieldCheck, BadgeCheck, Boxes, Headset } from "lucide-react"

const features = [
  {
    title: "Certified Industrial Automation Products",
    icon: ShieldCheck,
    desc: "We supply certified Kuebler encoders, Autonics sensors, and precision couplings that meet stringent industrial automation standards for packaging and manufacturing applications.",
  },
  {
    title: "Authorized Distributor Network",
    icon: BadgeCheck,
    desc: "Official distributor of Kuebler Germany with consistent lead times and dependable service across India's industrial automation sector.",
  },
  {
    title: "Comprehensive Automation Solutions",
    icon: Boxes,
    desc: "From rotary encoders to photoelectric sensors, proximity sensors to flexible couplings - complete industrial automation components for your operations.",
  },
  {
    title: "Technical Support & Service",
    icon: Headset,
    desc: "Expert technical assistance for encoder selection, sensor configuration, coupling specifications, and comprehensive after-sales support for industrial automation projects.",
  },
]

export default function WhyChooseUs() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#36454F]">Why Choose Shiva Enterprises for Industrial Automation</h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {features.map(({ title, icon: Icon, desc }) => (
          <motion.div
            key={title}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="rounded-lg border border-gray-200 bg-white p-5 hover:shadow-md transition"
          >
            <Icon className="h-6 w-6 text-[#FB8B24]" aria-hidden="true" />
            <h3 className="mt-3 text-base font-semibold text-[#36454F]">{title}</h3>
            <p className="mt-1 text-sm text-[#36454F]/75">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
