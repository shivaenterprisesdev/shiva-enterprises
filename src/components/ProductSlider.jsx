// <CHANGE> Rewriting slider to flatten grouped products.json and render a smooth, continuous marquee
import { useMemo } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import data from "../data/products.json"

export default function ProductSlider() {
  // Flatten grouped products: [{ categoryName, products: [...] }, ...] -> [product, ...]
  const items = useMemo(() => {
    const categories = Array.isArray(data) ? data : []
    const flat = categories.flatMap((cat) =>
      (cat.products || []).map((p) => ({
        ...p,
        categoryName: cat.categoryName,
      })),
    )
    // Ensure at least 10 cards for a nice marquee; cap to 12 for performance
    const base = flat.length >= 10 ? flat.slice(0, 12) : [...flat, ...flat].slice(0, 12)
    return base
  }, [])

  if (!items || items.length === 0) return null

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-2xl font-bold" style={{ color: "#36454F" }}>
            Popular Industrial Automation Products | Encoders | Sensors | Couplings | Sliprings
          </h2>
          <p className="mt-1 text-sm text-[#36454F]/75">
            Explore our most sought-after industrial automation components including rotary encoders, proximity sensors, and flexible couplings from authorized brands like Kubler.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Track: duplicate the list so we can slide seamlessly */}
          <motion.div
            className="flex gap-4 will-change-transform"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 22, repeat: Infinity }}
          >
            {[...items, ...items].map((p, i) => (
              <motion.div
                key={`${p.modelName || "model"}-${i}`}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="min-w-[280px] max-w-[280px] rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-xl overflow-hidden group"
              >
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 shadow-sm">
                    {p.categoryName || "Product"}
                  </span>
                </div>
                
                {/* Product Image */}
                <div className="relative h-40 w-full overflow-hidden bg-gray-50">
                  <img
                    src={
                      p.imgUrl ||
                      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop"
                     || "/placeholder.svg"}
                    alt={`${p.brandName || "Brand"} ${p.modelName || "Model"}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Card Content */}
                <div className="p-5">
                  {/* Brand & Model */}
                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-[#36454F] mb-1">
                      {p.brandName || "Brand"}
                    </h3>
                    <p className="text-sm text-[#36454F]/80 font-medium leading-tight">
                      {p.modelName || "Model Name"}
                    </p>
                  </div>
                  
                  {/* Price */}
                  {p.price && (
                    <div className="mb-3">
                      <span className="text-lg font-bold" style={{ color: "#FB8B24" }}>
                        {p.price}
                      </span>
                    </div>
                  )}
                  
                  {/* Key Features */}
                  {p.features && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {(Array.isArray(p.features) ? p.features.slice(0, 2) : [p.features]).map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                            title={feature}
                          >
                            {typeof feature === 'string' && feature.length > 25 
                              ? feature.substring(0, 22) + '...' 
                              : feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      to="/getquote"
                      className="flex-1 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition-all duration-200 transform hover:scale-105"
                      style={{ background: "linear-gradient(135deg,#FB8B24 0%, #ff9e3d 100%)" }}
                    >
                      Get Quote
                    </Link>
                    <button className="p-2.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors group/btn">
                      <svg className="w-4 h-4 text-gray-500 group-hover/btn:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Stock Status */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-xs text-gray-500 font-medium">In Stock</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient edges to hint scroll */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  )
}