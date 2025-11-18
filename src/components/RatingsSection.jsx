"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Mohammad Kamrul Arefin",
    location: "Bangladesh",
    date: "11-August-2024",
    product: "Incremental Encoders",
    quote: "Quick response and genuine products. Highly recommended.",
  },
  {
    name: "Raiyhan Mamun Eng Works",
    location: "Bangladesh",
    date: "21-January-2025",
    product: "Incremental Encoders",
    quote: "Great support and timely delivery.",
  },
  {
    name: "Deepak Mishra",
    location: "New Delhi, Delhi",
    date: "14-December-2024",
    product: "Industrial Supplies",
    quote: "Professional team, reliable source.",
  },
  {
    name: "Mohit",
    location: "Chennai, Tamil Nadu",
    date: "25-May-2022",
    product: "Incremental Encoders",
    quote: "Swift reply, loads of appreciation!",
  },
  {
    name: "Sanjay Binnars",
    location: "Surat, Gujarat",
    date: "12-March-2024",
    product: "Incremental Encoders",
    quote: "Quality and pricing are on point.",
  },
  {
    name: "Mr. Nitesh Raj Srivastava",
    location: "Ghaziabad, Uttar Pradesh",
    date: "28-January-2024",
    product: "Stainless Steel Spiral Flexible Coupling",
    quote: "Genuine and well-packed components.",
  },
  {
    name: "Monika",
    location: "Faridabad, Haryana",
    date: "29-December-2023",
    product: "Slip Rings",
    quote: "Prompt service and good range.",
  },
  {
    name: "Kanji Bhatu",
    location: "Rajkot, Gujarat",
    date: "13-December-2023",
    product: "Kuebler Encoder",
    quote: "Trustworthy distributor.",
  },
  {
    name: "Akshay Joshi",
    location: "Gurgaon, Haryana",
    date: "26-March-2019",
    product: "Industrial Components",
    quote: "Reliable sourcing partner.",
  },
  {
    name: "Manish Kanodia",
    location: "Kanpur, Uttar Pradesh",
    date: "25-August-2018",
    product: "Industrial Components",
    quote: "Consistent delivery and support.",
  },
  {
    name: "Tarun",
    location: "Ahmedabad, Gujarat",
    date: "30-April-2022",
    product: "Incremental Encoders",
    quote: "Excellent follow-up and guidance.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#FB8B24] stroke-[#FB8B24]" />
      ))}
    </div>
  )
}

export default function RatingsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#36454F]">Customer Reviews - Industrial Automation Products</h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {reviews.map((r, idx) => (
            <motion.article
              key={`${r.name}-${idx}`}
              variants={item}
              whileHover={{ y: -3 }}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-md transition"
            >
              <Stars />
              <h3 className="mt-3 text-base font-semibold text-[#36454F]">{r.name}</h3>
              <p className="text-xs text-[#36454F]/70">
                {r.location} • {r.date}
              </p>
              <p className="mt-2 text-sm text-[#36454F]/80">
                <span className="font-medium">Product:</span> {r.product}
              </p>
              <p className="mt-2 text-sm text-[#36454F]/80">{r.quote}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
