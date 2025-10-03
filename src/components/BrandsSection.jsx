"use client"

import { useState, useEffect } from "react"

const BrandsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const brands = [
    { name: "Bosch", logo: "/placeholder.svg?height=80&width=120&text=BOSCH" },
    { name: "Makita", logo: "/placeholder.svg?height=80&width=120&text=MAKITA" },
    { name: "Stanley", logo: "/placeholder.svg?height=80&width=120&text=STANLEY" },
    { name: "Hitachi", logo: "/placeholder.svg?height=80&width=120&text=HITACHI" },
    { name: "Dewalt", logo: "/placeholder.svg?height=80&width=120&text=DEWALT" },
    { name: "Black+Decker", logo: "/placeholder.svg?height=80&width=120&text=BLACK%2BDECKER" },
    { name: "Taparia", logo: "/placeholder.svg?height=80&width=120&text=TAPARIA" },
    { name: "Ingersoll Rand", logo: "/placeholder.svg?height=80&width=120&text=INGERSOLL" },
  ]

  // Auto-scroll brands every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(brands.length / 4))
    }, 3000)

    return () => clearInterval(timer)
  }, [brands.length])

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#36454F] mb-4">Brands We Deal With</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Partnering with world-class brands to deliver quality and reliability
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-4 gap-8">
                  {brands.slice(slideIndex * 4, slideIndex * 4 + 4).map((brand, index) => (
                    <div
                      key={brand.name}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col items-center justify-center border border-gray-100"
                    >
                      <img
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        className="h-16 w-auto mb-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <h3 className="text-lg font-semibold text-[#36454F]">{brand.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center border border-gray-100"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="h-12 w-auto mb-2 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-sm font-semibold text-[#36454F] text-center">{brand.name}</h3>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="hidden md:flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#FB8B24] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
