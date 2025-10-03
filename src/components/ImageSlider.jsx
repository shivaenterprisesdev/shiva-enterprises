"use client"

import { useState, useEffect } from "react"

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Industrial tools and equipment images (using placeholder service)
  const slides = [
    {
      id: 1,
      image: "/industrial-power-tools-workshop.png",
      title: "Power Tools",
      description: "Professional grade power tools for every industrial need",
    },
    {
      id: 2,
      image: "/construction-equipment-machinery.png",
      title: "Construction Equipment",
      description: "Heavy-duty construction equipment and machinery",
    },
    {
      id: 3,
      image: "/hand-tools-workshop-garage.png",
      title: "Hand Tools",
      description: "Precision hand tools for detailed work",
    },
    {
      id: 4,
      image: "/safety-equipment-industrial-gear.png",
      title: "Safety Equipment",
      description: "Complete safety gear and protective equipment",
    },
    {
      id: 5,
      image: "/electrical-supplies-industrial-components.png",
      title: "Electrical Supplies",
      description: "Quality electrical components and supplies",
    },
  ]

  // Auto-slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#36454F] mb-4">Our Product Range</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive collection of industrial tools and equipment
          </p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 transform translate-x-0"
                    : index < currentSlide
                      ? "opacity-0 transform -translate-x-full"
                      : "opacity-0 transform translate-x-full"
                }`}
              >
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-lg text-gray-200">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#FB8B24] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide ? "ring-4 ring-[#FB8B24] scale-110" : "opacity-70 hover:opacity-100"
              }`}
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageSlider
