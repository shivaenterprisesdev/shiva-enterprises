"use client"
import { motion } from "framer-motion"
import { Wrench, Cog, ShieldCheck, Box, Gauge, PackageSearch, Factory, Hammer } from "lucide-react"
import { Link } from "react-router-dom"

const categories = [
  { title: "Hand Tools", icon: Wrench, desc: "Durable, ergonomic tools for everyday industrial tasks." },
  { title: "Power Tools", icon: Hammer, desc: "High-performance tools from reputed global brands." },
  { title: "Safety & PPE", icon: ShieldCheck, desc: "Certified safety gear for workforce protection." },
  { title: "Fasteners", icon: Box, desc: "Reliable fasteners for assembly and maintenance." },
  { title: "Bearings", icon: Cog, desc: "Precision bearings for smooth and efficient operation." },
  { title: "Measuring Instruments", icon: Gauge, desc: "Accurate measurement for quality assurance." },
  { title: "Industrial Supplies", icon: Factory, desc: "Consumables and essentials for daily operations." },
  { title: "Specialty Items", icon: PackageSearch, desc: "Sourced on request to match unique needs." },
]

export default function Products() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#36454F]">Products & Categories</h2>
          <Link
            to="/categories"
            className="hidden sm:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm
              bg-[#FB8B24] hover:brightness-110 transition"
          >
            Explore More
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {categories.map(({ title, icon: Icon, desc }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -3 }}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-md transition group"
            >
              <Icon className="h-6 w-6 text-[#FB8B24]" aria-hidden="true" />
              <h3 className="mt-3 text-base font-semibold text-[#36454F]">{title}</h3>
              <p className="mt-1 text-sm text-[#36454F]/75">{desc}</p>
              <div className="mt-4 text-sm font-medium text-[#FB8B24] opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 sm:hidden">
          <Link
            to="/categories"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm
              bg-[#FB8B24] hover:brightness-110 transition w-full"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  )
}
