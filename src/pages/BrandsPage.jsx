"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronDown, Sparkles } from "lucide-react"
import brandsData from "../data/brands.json"
import BrandShowcase from "../components/BrandShowcase.jsx"

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: { duration: 0.2 }
  }
}

const pageTransition = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      staggerChildren: 0.2
    } 
  }
}

const headerVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
}

export default function BrandsPage() {
  const [selectedBrand, setSelectedBrand] = useState(brandsData[0]) // Default to Kubler
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand)
    setIsDropdownOpen(false)
  }

  return (
    <motion.div 
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Enhanced Page Header */}
        <motion.div
          variants={headerVariant}
          className="text-center mb-16"
        >
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#FB8B24]/20 rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 10}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FB8B24]/10 to-[#FF9500]/10 text-[#FB8B24] text-sm font-medium mb-6 border border-[#FB8B24]/20"
          >
            <Sparkles className="w-4 h-4" />
            Authorized Dealer & Distributor
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#36454F] mb-6 bg-gradient-to-r from-[#36454F] via-[#36454F] to-[#36454F]/80 bg-clip-text">
            Our Trusted Brands
          </h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-[#FB8B24] to-[#FF9500] rounded-full mx-auto mb-6"
          />
          
          <p className="text-xl text-[#36454F]/80 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive range of industrial automation products from world-leading manufacturers
          </p>
        </motion.div>

        {/* Enhanced Brand Selector Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <motion.button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="group flex items-center gap-4 px-8 py-4 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#FB8B24]/30 focus:outline-none focus:ring-4 focus:ring-[#FB8B24]/20 min-w-80"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Selected brand info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center p-2 group-hover:border-[#FB8B24]/30 transition-colors">
                  <img
                    src={selectedBrand.logoUrl}
                    alt={selectedBrand.brandName}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-[#36454F] group-hover:text-[#FB8B24] transition-colors">
                    {selectedBrand.brandName}
                  </div>
                  <div className="text-sm text-[#36454F]/60">
                    Select Brand to Explore
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-[#36454F]/60 group-hover:text-[#FB8B24] transition-colors" />
              </motion.div>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 backdrop-blur-sm"
                >
                  {brandsData.map((brand) => (
                    <motion.button
                      key={brand.id}
                      onClick={() => handleBrandSelect(brand)}
                      className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-all duration-200 ${
                        selectedBrand.id === brand.id
                          ? 'bg-gradient-to-r from-[#FB8B24]/10 to-[#FF9500]/5 border-r-4 border-r-[#FB8B24]'
                          : 'hover:bg-gray-50'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center p-1.5">
                        <img
                          src={brand.logoUrl}
                          alt={brand.brandName}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium transition-colors ${
                          selectedBrand.id === brand.id ? 'text-[#FB8B24]' : 'text-[#36454F]'
                        }`}>
                          {brand.brandName}
                        </div>
                        <div className="text-sm text-[#36454F]/60">
                          {brand.models.length} Products Available
                        </div>
                      </div>
                      {selectedBrand.id === brand.id && (
                        <div className="w-2 h-2 bg-[#FB8B24] rounded-full"></div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Brand Showcase */}
        <AnimatePresence mode="wait">
          <BrandShowcase key={selectedBrand.id} brand={selectedBrand} />
        </AnimatePresence>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#36454F] via-[#2A3440] to-[#36454F] rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          
          {/* Animated background patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border border-white/10 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + i * 15}%`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <div className="relative p-12 sm:p-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Can't Find Your Brand?
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                We work with 100+ global brands. Contact us for any industrial automation product requirement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold 
                           text-[#36454F] bg-white rounded-2xl hover:bg-gray-50 transition-all duration-300
                           hover:scale-105 hover:shadow-xl"
                >
                  Contact Us
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    →
                  </motion.span>
                </Link>
                <Link
                  to="/categories"
                  className="group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold 
                           text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-all duration-300
                           hover:scale-105 backdrop-blur-sm"
                >
                  View All Categories
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
