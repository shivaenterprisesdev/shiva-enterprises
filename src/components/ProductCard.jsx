"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
  const { imgUrl, brandName, modelName, features = [] } = product || {}

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imgUrl || "https://source.unsplash.com/600x450/?industrial,tools"}
          alt={`${brandName || "Brand"} ${modelName || "Model"}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-[#36454F] font-semibold">{brandName}</p>
        </div>
        <p className="mt-1 text-sm text-[#36454F]/80">{modelName}</p>

        {features?.length > 0 && (
          <ul className="mt-3 space-y-1">
            {features.slice(0, 3).map((f, idx) => (
              <li key={idx} className="text-sm text-[#36454F]/80">
                • {typeof f === "string" ? f : String(f)}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex justify-end">
          <Link
            to="/getquote"
            className="text-sm font-semibold text-white px-3 py-2 rounded-md bg-[linear-gradient(135deg,#FB8B24,40%,#ff9e3d)] hover:brightness-110 transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
