"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function CategoryCard({ imgUrl, categoryName, brandName, features }) {
  return (
    <motion.div
      whileHover={{ 
        y: -6, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group h-full flex flex-col rounded-2xl border border-gray-200 bg-white 
                 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300
                 hover:border-[#FB8B24]/20 backdrop-blur-sm"
    >
      {/* Enhanced image container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={imgUrl || "https://source.unsplash.com/400x300/?industrial,tools"}
          alt={`${categoryName} - Industrial automation product`}
          className="w-full h-40 sm:h-44 md:h-48 object-contain p-4 
                     group-hover:scale-105 transition-transform duration-300
                     filter group-hover:brightness-105"
          loading="lazy"
          decoding="async"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Enhanced content section */}
      <div className="flex-1 flex flex-col p-4 sm:p-5 space-y-3 sm:space-y-4">
        {/* Title section */}
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-[#36454F] leading-tight 
                         line-clamp-2 group-hover:text-[#FB8B24] transition-colors duration-200">
            {categoryName}
          </h3>
          
          {/* Brand info with enhanced styling */}
          {brandName && (
            <div className="flex flex-wrap items-center gap-1">
              <span className="text-xs sm:text-sm text-[#36454F]/60">Brands:</span>
              <span className="text-xs sm:text-sm font-semibold text-[#36454F]/90 
                             bg-gray-100 px-2 py-0.5 rounded-md">
                {brandName}
              </span>
            </div>
          )}
        </div>

        {/* Features section with enhanced design */}
        {features && features.length > 0 && (
          <div className="flex-1">
            <ul className="space-y-1.5">
              {features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FB8B24] mt-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#36454F]/80 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
          <Link
            to={`/products/${encodeURIComponent(categoryName)}`}
            className="flex-1 inline-flex items-center justify-center gap-2 
                       text-sm font-semibold text-[#36454F] bg-white 
                       border-2 border-gray-200 hover:border-[#36454F]/30
                       px-4 py-2.5 rounded-xl transition-all duration-200 
                       hover:bg-gray-50 hover:shadow-md
                       transform hover:scale-105 active:scale-95
                       min-h-[44px] touch-manipulation
                       group/button"
          >
            <span>View Products</span>
            <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" 
                        aria-hidden="true" />
          </Link>
          
          <Link
            to="/getquote"
            className="flex-1 inline-flex items-center justify-center gap-2 
                       text-sm font-semibold text-white bg-[#FB8B24] 
                       hover:bg-[#E8791F] shadow-md hover:shadow-lg 
                       px-4 py-2.5 rounded-xl transition-all duration-200 
                       border-2 border-transparent hover:border-[#FB8B24]/20
                       transform hover:scale-105 active:scale-95
                       min-h-[44px] touch-manipulation
                       group/quote"
          >
            <span>Get Quote</span>
            <ArrowRight className="h-4 w-4 group-hover/quote:translate-x-1 transition-transform" 
                        aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
