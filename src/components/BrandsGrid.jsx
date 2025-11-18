"use client"

import { motion } from "framer-motion"

// discover assets at build time; supports common image formats
const assetModules = import.meta.glob("../assets/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  as: "url",
})

function toTitle(name) {
  try {
    const base = name.replace(/\.[^/.]+$/, "")
    return base
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase())
  } catch {
    return name
  }
}

export default function BrandsGrid() {
  const items = Object.entries(assetModules)
    .map(([path, url]) => {
      const file = path.split("/").pop() || ""
      return { name: toTitle(file), url }
    })
    // If you want to exclude your main site logo, uncomment the next line:
    .filter((i) => !/shiva|enterprise|logo/i.test(i.name))
    .sort((a, b) => a.name.localeCompare(b.name))

  if (items.length === 0) return null

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-balance text-2xl sm:text-3xl font-bold" style={{ color: "#36454F" }}>
            Authorized Industrial Automation Brands
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#36454F]/75">
            Official distributor of leading global manufacturers like Kuebler Germany for authentic encoders, sensors, and industrial automation components.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {items.map(({ name, url }) => (
            <motion.div
              key={name + url}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              animate={{ rotate: [0, 0.6, 0, -0.6, 0] }}
              transition={{
                opacity: { duration: 0.4 },
                y: { duration: 0.4 },
                rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <div className="flex h-28 sm:h-32 items-center justify-center p-4">
                <img
                  src={url || "/placeholder.svg"}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 sm:max-h-20 w-auto object-contain transition-transform group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-gray-100 px-3 py-2.5">
                <p className="line-clamp-1 text-center text-xs sm:text-sm font-medium" style={{ color: "#36454F" }}>
                  {name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
