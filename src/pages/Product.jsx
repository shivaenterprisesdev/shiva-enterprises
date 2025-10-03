"use client"

import { useMemo, useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Star, Building2, ArrowUp, Filter, Search, Grid3X3, List, ArrowRight } from "lucide-react"
import products from "../data/products.json"
import categories from "../data/categories.json"

export default function Product() {
  const { categoryName: raw } = useParams()
  const categoryName = decodeURIComponent(raw || "")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('all')
  
  // Parallax scroll effect for header
  const { scrollY } = useScroll()
  const headerY = useTransform(scrollY, [0, 300], [0, -50])
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.8])

  // detect whether products.json is grouped by category blocks
  const isGrouped = useMemo(
    () => Array.isArray(products) && products.some((p) => p && typeof p === "object" && "products" in p),
    [],
  )

  const categoryBlock = useMemo(() => {
    if (!Array.isArray(products) || !isGrouped) return undefined
    // grouped structure: [{ categoryName, description, brands[], products: [...] }, ...]
    return products.find((b) => b?.categoryName === categoryName)
  }, [categoryName, isGrouped])

  const categoryProducts = useMemo(() => {
    if (!Array.isArray(products)) return []
    if (isGrouped) {
      return categoryBlock?.products || []
    }
    // flat structure: [{ category, brandName, modelName, ... }, ...]
    return products.filter((p) => p?.category === categoryName)
  }, [categoryName, isGrouped, categoryBlock])

  const categoryInfo = useMemo(
    () => (Array.isArray(categories) ? categories.find((c) => c?.categoryName === categoryName) : undefined),
    [categoryName],
  )

  const brands = useMemo(() => {
    const set = new Set()
    // grouped brands array if present
    if (categoryBlock?.brands && Array.isArray(categoryBlock.brands)) {
      categoryBlock.brands.forEach((b) => set.add(b))
    }
    // collect from product items
    categoryProducts.forEach((p) => {
      if (p?.brand) set.add(p.brand)
      if (p?.brandName) set.add(p.brandName)
    })
    if (categoryInfo?.brandName) set.add(categoryInfo.brandName)
    return Array.from(set)
  }, [categoryProducts, categoryInfo, categoryBlock])

  const models = useMemo(() => {
    if (isGrouped && Array.isArray(categoryBlock?.models)) return categoryBlock.models
    const set = new Set()
    categoryProducts.forEach((p) => {
      if (p?.model) set.add(p.model)
      if (p?.modelName) set.add(p.modelName)
    })
    return Array.from(set)
  }, [isGrouped, categoryBlock, categoryProducts])

  // Handle scroll for mobile enhancements
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Filter products based on search and brand
  const filteredProducts = useMemo(() => {
    let filtered = categoryProducts
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => {
        const brand = product.brand || product.brandName || ''
        const model = product.model || product.modelName || ''
        const features = Array.isArray(product.features) 
          ? product.features.join(' ')
          : typeof product.features === 'string' ? product.features : ''
        
        return (
          brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          features.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
    }
    
    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => {
        const brand = product.brand || product.brandName || ''
        return brand === selectedBrand
      })
    }
    
    return filtered
  }, [categoryProducts, searchTerm, selectedBrand])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const description =
    (isGrouped && categoryBlock?.description) ||
    categoryInfo?.description ||
    `Explore premium ${categoryName} from trusted brands, engineered for precision, durability, and reliable performance across industrial applications.`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced mobile-first header with parallax */}
      <motion.header 
        className="relative overflow-hidden"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        {/* Background image with better mobile optimization */}
        <div
          className="absolute inset-0 opacity-5 sm:opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581092580491-8731c7b3f003?q=80&w=1600&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Enhanced gradient overlay */}
        <div className="relative bg-gradient-to-br from-[#FB8B24]/5 via-transparent to-[#36454F]/5">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-10 md:py-14 lg:py-16">
            
            {/* Enhanced breadcrumb for mobile */}
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium 
                         text-[#36454F] hover:text-[#FB8B24] transition-colors duration-200
                         bg-white/50 backdrop-blur-sm px-3 py-2 rounded-lg
                         border border-gray-200/50 hover:border-[#FB8B24]/30
                         shadow-sm hover:shadow-md mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden xs:inline">Back to</span> Categories
            </Link>

            {/* Enhanced title section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                               tracking-tight text-[#36454F] leading-tight">
                  {categoryName}
                </h1>
                <div className="mt-2 flex items-center gap-2 text-sm sm:text-base text-[#FB8B24] font-medium">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  <span>Premium Industrial Grade Products</span>
                </div>
              </div>
              
              <p className="max-w-4xl text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                {description}
              </p>

              {/* Enhanced Brands Section */}
              {brands.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="space-y-3 sm:space-y-4"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#36454F] flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#FB8B24]" />
                    Trusted Brands ({brands.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {brands.map((brand, index) => (
                      <motion.div
                        key={brand}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative rounded-xl bg-white/80 backdrop-blur-sm 
                                   border border-gray-200/50 hover:border-[#FB8B24]/30 
                                   shadow-sm hover:shadow-md p-4 cursor-pointer
                                   transition-all duration-200"
                        onClick={() => setSelectedBrand(selectedBrand === brand ? 'all' : brand)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br 
                                          from-[#FB8B24]/10 to-[#FB8B24]/20 
                                          flex items-center justify-center group-hover:from-[#FB8B24]/20 
                                          group-hover:to-[#FB8B24]/30 transition-colors">
                            <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#FB8B24]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm sm:text-base font-semibold text-[#36454F] 
                                             group-hover:text-[#FB8B24] transition-colors truncate">
                              {brand}
                            </span>
                            <p className="text-xs text-gray-500 mt-0.5">Click to filter</p>
                          </div>
                        </div>
                        {selectedBrand === brand && (
                          <div className="absolute inset-0 rounded-xl border-2 border-[#FB8B24] 
                                          bg-[#FB8B24]/5 pointer-events-none" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Enhanced Models Section */}
              {models.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="space-y-3 sm:space-y-4"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#36454F]">
                    Popular Models ({models.length})
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {models.slice(0, 8).map((model, index) => (
                      <motion.span
                        key={model}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1 rounded-full 
                                   border border-[#FB8B24]/20 bg-gradient-to-r from-[#FB8B24]/5 to-[#FB8B24]/10 
                                   hover:from-[#FB8B24]/10 hover:to-[#FB8B24]/20
                                   text-[#36454F] hover:text-[#FB8B24] 
                                   px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium 
                                   shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                      >
                        {model.length > 20 ? `${model.slice(0, 20)}...` : model}
                      </motion.span>
                    ))}
                    {models.length > 8 && (
                      <span className="inline-flex items-center text-xs sm:text-sm text-gray-500 
                                       px-3 py-1.5 italic">
                        +{models.length - 8} more
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced main content section */}
      <main className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        {categoryProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm 
                       p-8 sm:p-12 text-center shadow-sm"
          >
            <div className="mx-auto max-w-md space-y-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-[#FB8B24]/10 
                              flex items-center justify-center">
                <Search className="h-8 w-8 text-[#FB8B24]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#36454F]">
                No products found
              </h3>
              <p className="text-gray-600">We're working to add products in this category.</p>
              <Link
                to="/getquote"
                className="inline-flex items-center justify-center gap-2 
                           rounded-xl px-6 py-3 text-sm font-semibold text-white 
                           bg-[#FB8B24] hover:bg-[#E8791F] shadow-lg hover:shadow-xl 
                           transform hover:scale-105 transition-all duration-200 
                           min-h-[44px] touch-manipulation"
              >
                Request Custom Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Enhanced search and filter section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 sm:mb-8 space-y-4"
            >
              {/* Mobile-first header with controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#36454F]">
                    {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
                    {selectedBrand !== 'all' && (
                      <span className="text-sm sm:text-base font-normal text-gray-600 ml-2">
                        from {selectedBrand}
                      </span>
                    )}
                  </h2>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Star className="h-4 w-4 text-[#FB8B24] fill-current" />
                    <span>Industrial-grade quality • Fast support</span>
                  </div>
                </div>
                
                {/* View mode toggle for larger screens */}
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-[#FB8B24] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-[#FB8B24] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Enhanced search and filter bar */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Search input */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 
                                     h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products, brands, or features..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base 
                               border border-gray-300 rounded-xl focus:ring-2 
                               focus:ring-[#FB8B24]/20 focus:border-[#FB8B24] 
                               bg-white/80 backdrop-blur-sm transition-all duration-200
                               placeholder:text-gray-500"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 
                                 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Brand filter dropdown */}
                {brands.length > 1 && (
                  <div className="relative">
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="appearance-none bg-white/80 backdrop-blur-sm border 
                                 border-gray-300 rounded-xl px-4 py-2.5 sm:py-3 
                                 text-sm sm:text-base text-[#36454F] 
                                 focus:ring-2 focus:ring-[#FB8B24]/20 focus:border-[#FB8B24] 
                                 transition-all duration-200 min-w-[120px]"
                    >
                      <option value="all">All Brands</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                    <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 
                                       h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                )}
              </div>
              
              {/* Active filters */}
              {(searchTerm || selectedBrand !== 'all') && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 
                                     bg-[#FB8B24]/10 text-[#FB8B24] rounded-full text-sm">
                      Search: "{searchTerm}"
                      <button onClick={() => setSearchTerm('')} className="hover:text-[#E8791F]">
                        ×
                      </button>
                    </span>
                  )}
                  {selectedBrand !== 'all' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 
                                     bg-[#36454F]/10 text-[#36454F] rounded-full text-sm">
                      Brand: {selectedBrand}
                      <button onClick={() => setSelectedBrand('all')} className="hover:text-gray-600">
                        ×
                      </button>
                    </span>
                  )}
                </div>
              )}
            </motion.div>

            {/* Enhanced products grid */}
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 sm:py-16"
              >
                <div className="h-12 w-12 mx-auto rounded-full bg-gray-100 
                                flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  No products match your filters
                </h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedBrand('all')
                  }}
                  className="text-[#FB8B24] hover:text-[#E8791F] font-medium transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={`${viewMode}-${searchTerm}-${selectedBrand}`}
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { 
                      staggerChildren: 0.06,
                      delayChildren: 0.1
                    },
                  },
                }}
                className={`grid gap-4 sm:gap-5 md:gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 max-w-4xl mx-auto'
                }`}
              >
                {filteredProducts.map((product, idx) => (
                  <ProductCard 
                    key={`${product.brandName}-${product.modelName}-${idx}`} 
                    product={product} 
                    viewMode={viewMode}
                  />
                ))}
              </motion.div>
            )}
          </>
        )}

        {/* Back to top button */}
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
      </main>
    </div>
  )
}

function ProductCard({ product, viewMode = 'grid' }) {
  // Provide robust fallbacks
  const {
    image,
    imgUrl,
    brand,
    brandName,
    model,
    modelName,
    features,
    price,
  } = product || {}

  const displayBrand = brand || brandName || "Brand"
  const displayModel = model || modelName || "Model"
  const displayPrice = price || "Price on request"
  const displayImage =
    image || imgUrl || "https://images.unsplash.com/photo-1581093588401-16ec8a9f7f72?q=80&w=800&auto=format&fit=crop"

  // Handle both array and string features
  const feats = Array.isArray(features) 
    ? features.slice(0, viewMode === 'list' ? 5 : 3)
    : typeof features === 'string' 
      ? [features] 
      : []

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
  }

  if (viewMode === 'list') {
    return (
      <motion.article
        variants={cardVariants}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="group rounded-2xl overflow-hidden border border-gray-200/50 
                   bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl 
                   transition-all duration-300 hover:border-[#FB8B24]/30"
      >
        <div className="flex flex-col sm:flex-row">
          {/* Image section */}
          <div className="relative sm:w-64 sm:flex-shrink-0">
            <div className="aspect-video sm:aspect-square w-full overflow-hidden bg-gray-50">
              <img
                src={displayImage}
                alt={`${displayBrand} ${displayModel}`}
                className="h-full w-full object-contain p-4 group-hover:scale-105 
                           transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm 
                            px-2 py-1 rounded-md text-xs font-medium text-[#36454F]">
              {displayBrand}
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#36454F] 
                               group-hover:text-[#FB8B24] transition-colors line-clamp-2">
                  {displayModel}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#FB8B24] mt-1">
                  {displayPrice}
                </p>
              </div>

              {feats.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-[#36454F]/80">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {feats.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FB8B24] mt-2 flex-shrink-0" />
                        <span className="text-sm text-[#36454F]/80 leading-relaxed">
                          {typeof feature === 'string' && feature.length > 50 
                            ? `${feature.slice(0, 50)}...` 
                            : feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link
                to="/getquote"
                className="flex-1 inline-flex items-center justify-center gap-2 
                           rounded-xl px-4 py-3 text-sm font-semibold text-white 
                           bg-[#FB8B24] hover:bg-[#E8791F] shadow-md hover:shadow-lg 
                           transition-all duration-200 transform hover:scale-105 active:scale-95
                           min-h-[44px] touch-manipulation group/button"
              >
                <span>Get Quote</span>
                <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                <Star className="h-3 w-3 text-[#FB8B24] fill-current" />
                <span>Fast response</span>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  // Grid view (default)
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group h-full flex flex-col rounded-2xl overflow-hidden 
                 border border-gray-200/50 bg-white/90 backdrop-blur-sm 
                 shadow-sm hover:shadow-xl transition-all duration-300
                 hover:border-[#FB8B24]/30"
    >
      {/* Enhanced image container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={displayImage}
          alt={`${displayBrand} ${displayModel} - Industrial automation product`}
          className="w-full h-48 sm:h-52 object-contain p-4 
                     group-hover:scale-105 transition-transform duration-300
                     filter group-hover:brightness-105"
          loading="lazy"
          decoding="async"
        />
        
        {/* Brand badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm 
                        px-2 py-1 rounded-lg text-xs font-semibold text-[#36454F] 
                        border border-gray-200/50">
          {displayBrand}
        </div>

        {/* Price badge */}
        {displayPrice !== "Price on request" && (
          <div className="absolute top-3 right-3 bg-[#FB8B24]/90 backdrop-blur-sm 
                          px-2 py-1 rounded-lg text-xs font-semibold text-white">
            {displayPrice}
          </div>
        )}

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Enhanced content section */}
      <div className="flex-1 flex flex-col p-4 sm:p-5 space-y-3">
        {/* Title section */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#36454F] leading-tight 
                         line-clamp-2 group-hover:text-[#FB8B24] transition-colors duration-200">
            {displayModel}
          </h3>
          {displayPrice === "Price on request" && (
            <p className="text-sm font-medium text-[#FB8B24] mt-1">
              Price on request
            </p>
          )}
        </div>

        {/* Features section */}
        {feats.length > 0 && (
          <div className="flex-1">
            <div className="space-y-1.5">
              {feats.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FB8B24] mt-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#36454F]/80 leading-relaxed line-clamp-2">
                    {typeof feature === 'string' && feature.length > 60 
                      ? `${feature.slice(0, 60)}...` 
                      : feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced action section */}
        <div className="space-y-3 pt-2">
          <Link
            to="/getquote"
            className="w-full inline-flex items-center justify-center gap-2 
                       text-sm font-semibold text-white bg-[#FB8B24] 
                       hover:bg-[#E8791F] shadow-md hover:shadow-lg 
                       px-4 py-2.5 rounded-xl transition-all duration-200 
                       border-2 border-transparent hover:border-[#FB8B24]/20
                       transform hover:scale-105 active:scale-95
                       min-h-[44px] touch-manipulation group/button"
          >
            <span>Get Quote</span>
            <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </Link>
          
          <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
            <Star className="h-3 w-3 text-[#FB8B24] fill-current" />
            <span>Fast response guaranteed</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
