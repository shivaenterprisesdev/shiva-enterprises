import { useState, useCallback } from 'react'

// Optimized image component with lazy loading and error handling
export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  fallback = "/placeholder.svg",
  ...props 
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true)
  }, [])

  const handleImageError = useCallback(() => {
    if (!imageError && fallback && imageSrc !== fallback) {
      setImageSrc(fallback)
      setImageError(true)
    }
  }, [imageError, fallback, imageSrc])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Optimized image */}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  )
}

// Hook for preloading critical images
export const useImagePreload = (imageUrls) => {
  const preloadImages = useCallback(() => {
    imageUrls.forEach(url => {
      const img = new Image()
      img.src = url
    })
  }, [imageUrls])

  return preloadImages
}
