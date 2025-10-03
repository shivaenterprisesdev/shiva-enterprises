"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  },
}

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const logoFloat = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -45 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotateY: 0,
    transition: { 
      duration: 1,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    } 
  },
}

const modelVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
}

export default function BrandShowcase({ brand }) {
  if (!brand) return null

  return (
    <motion.div
      key={brand.id} // Important for re-animation when brand changes
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FB8B24]/5 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#36454F]/5 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
      
      {/* Content */}
      <div className="relative p-8 sm:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-12">
          {/* Brand Logo Section */}
          <motion.div
            variants={logoFloat}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FB8B24]/20 to-[#FF9500]/20 rounded-2xl blur-xl scale-110"></div>
              
              {/* Logo container */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl border-2 border-gray-200 bg-white shadow-xl flex items-center justify-center p-6 backdrop-blur-sm">
                <img
                  src={brand.logoUrl}
                  alt={`${brand.brandName} logo`}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  loading="lazy"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FB8B24] to-[#FF9500] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              >
                Authorized Dealer
              </motion.div>
            </div>
          </motion.div>

          {/* Brand Info */}
          <div className="flex-1 min-w-0">
            <motion.div variants={itemUp} className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#36454F] mb-4 bg-gradient-to-r from-[#36454F] to-[#36454F]/80 bg-clip-text">
                {brand.heading}
              </h2>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#FB8B24] to-[#FF9500] rounded-full mb-6 max-w-32"
              ></motion.div>
            </motion.div>
            
            <motion.p
              variants={itemUp}
              className="text-base sm:text-lg text-[#36454F]/80 leading-relaxed mb-6 text-justify"
            >
              {brand.description}
            </motion.p>
            
            <motion.h3
              variants={itemUp}
              className="text-xl sm:text-2xl font-semibold text-[#36454F] mb-8 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[#FB8B24] rounded-full"></span>
              {brand.subheading}
            </motion.h3>

            {/* Enhanced Models Grid */}
            <motion.div variants={itemUp} className="mb-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { 
                      staggerChildren: 0.03,
                      delayChildren: 0.8
                    }
                  }
                }}
                className="flex flex-wrap gap-3"
              >
                {brand.models.map((model, modelIndex) => (
                  <motion.div
                    key={modelIndex}
                    variants={modelVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -4,
                      boxShadow: "0 10px 25px rgba(251, 139, 36, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="inline-block"
                  >
                    <Link
                      to="/getquote"
                      className="group inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium 
                               bg-gradient-to-r from-gray-50 to-white text-[#36454F] border border-gray-200
                               hover:from-[#FB8B24]/10 hover:to-[#FF9500]/10 hover:border-[#FB8B24]/30
                               cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md
                               relative overflow-hidden no-underline"
                    >
                      {/* Hover background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FB8B24]/5 to-[#FF9500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <span className="relative z-10">{model}</span>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Get Quote Button */}
            <motion.div variants={itemUp}>
              <Link
                to="/getquote"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold 
                         text-white rounded-2xl shadow-lg transition-all duration-300
                         bg-gradient-to-r from-[#FB8B24] to-[#FF9500] 
                         hover:from-[#E8811F] hover:to-[#FB8B24] hover:shadow-xl hover:scale-[1.02]
                         focus:outline-none focus:ring-4 focus:ring-[#FB8B24]/30 focus:ring-offset-2
                         overflow-hidden"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9500] to-[#FFB84D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  Get Quote for {brand.brandName} Products
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
