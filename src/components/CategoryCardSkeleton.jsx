import { motion } from "framer-motion"

export default function CategoryCardSkeleton() {
  return (
    <div className="h-full flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-200" />
      
      {/* Content skeleton */}
      <div className="flex-1 flex flex-col p-4 sm:p-5 space-y-3 sm:space-y-4">
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded-md w-4/5" />
          <div className="h-4 bg-gray-200 rounded-md w-1/2" />
        </div>
        
        {/* Features skeleton */}
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
        
        {/* Buttons skeleton */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
          <div className="flex-1 h-11 bg-gray-200 rounded-xl" />
          <div className="flex-1 h-11 bg-gray-300 rounded-xl" />
        </div>
      </div>
    </div>
  )
}

// Loading grid component
export function CategoryGridSkeleton({ count = 12 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          <CategoryCardSkeleton />
        </motion.div>
      ))}
    </div>
  )
}