"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom" // ✅ import Link
import { ArrowRight, ArrowUp } from "lucide-react" // ✅ import icons
import { useState, useEffect } from "react"
import data from "../data/categories.json"
import CategoryCard from "../components/CategoryCard.jsx"
import SEOHead from "../components/SEOHead.jsx"
import { generateStructuredData } from '../hooks/useSEO'

export default function CategoriesPage() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll events for mobile enhancements
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollProgress(scrollPercent)
      setShowBackToTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const structuredData = [
    generateStructuredData('BreadcrumbList', {
      items: [
        { name: 'Home', url: '/' },
        { name: 'Categories', url: '/categories' }
      ]
    }),
    generateStructuredData('CollectionPage', {
      name: 'Industrial Automation Product Categories',
      description: 'Browse our complete range of industrial automation products by category including encoders, sensors, couplings, PLCs and more.',
      numberOfItems: data.length
    })
  ]

  return (
    <>
      <SEOHead
        title="Product Categories - Industrial Automation & Electrical Components"
        description="Browse our complete range of industrial automation products by category. Find encoders, sensors, couplings, PLCs, distribution boxes, terminal blocks and more from authorized dealers."
        keywords="industrial automation categories, product categories, encoders, sensors, couplings, PLCs, distribution boxes, terminal blocks, industrial electrical components"
        structuredData={structuredData}
      />
      <div className="bg-gray-50 min-h-screen">
        {/* Mobile-first container with better spacing */}
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-12 md:py-16 lg:py-20">
          
          {/* Enhanced header section for mobile */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#36454F] leading-tight">
                Product Categories
              </h1>
              <p className="text-base sm:text-lg text-[#36454F]/70 max-w-2xl">
                Explore our comprehensive range of industrial automation and electrical components
              </p>
            </div>

            {/* Enhanced Brand Wise Link for mobile */}
            <Link
              to="/brands"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto
                         text-sm sm:text-base lg:text-lg font-semibold text-white 
                         bg-[#FB8B24] hover:bg-[#E8791F] shadow-lg hover:shadow-xl 
                         px-4 sm:px-5 lg:px-6 py-3 sm:py-2.5 lg:py-3 
                         rounded-xl transition-all duration-200 
                         border-2 border-transparent hover:border-[#FB8B24]
                         transform hover:scale-105 active:scale-95
                         min-h-[44px] touch-manipulation"
            >
              <span>Browse by Brands</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Enhanced grid with better mobile responsiveness */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ 
              hidden: { opacity: 0 }, 
              visible: { 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.08,
                  delayChildren: 0.1
                } 
              } 
            }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                       gap-3 sm:gap-5 md:gap-6"
          >
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                variants={{ 
                  hidden: { 
                    opacity: 0, 
                    y: 30,
                    scale: 0.95
                  }, 
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.05
                    }
                  } 
                }}
                className="h-full"
              >
                <CategoryCard {...item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Category count indicator for mobile */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-[#36454F]/60">
              Showing {data.length} product categories
            </p>
          </div>
        </div>

        {/* Mobile scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50 sm:hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FB8B24] to-[#E8791F]"
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          />
        </div>

        {/* Back to top button for mobile */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showBackToTop ? 1 : 0,
            scale: showBackToTop ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 z-50 sm:bottom-8 sm:right-6
                     w-12 h-12 sm:w-14 sm:h-14 bg-[#FB8B24] hover:bg-[#E8791F]
                     text-white rounded-full shadow-lg hover:shadow-xl
                     flex items-center justify-center transition-all duration-200
                     border-2 border-white/20 backdrop-blur-sm
                     transform hover:scale-110 active:scale-95
                     touch-manipulation"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </motion.button>
      </div>
    </>
  )
}
