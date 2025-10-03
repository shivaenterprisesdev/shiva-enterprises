const CategoriesSection = () => {
    const categories = [
      {
        title: "Power Tools",
        description: "Drills, Grinders, Cutters, and more",
        icon: (
          <svg className="w-12 h-12 text-[#FB8B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        ),
        image: "/placeholder.svg?height=200&width=300&text=Power+Tools",
      },
      {
        title: "Hand Tools",
        description: "Wrenches, Spanners, Hammers, and more",
        icon: (
          <svg className="w-12 h-12 text-[#FB8B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        image: "/placeholder.svg?height=200&width=300&text=Hand+Tools",
      },
      {
        title: "Construction Equipment",
        description: "Heavy machinery and construction tools",
        icon: (
          <svg className="w-12 h-12 text-[#FB8B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        ),
        image: "/placeholder.svg?height=200&width=300&text=Construction+Equipment",
      },
      {
        title: "Safety Gear & Accessories",
        description: "Protective equipment and safety supplies",
        icon: (
          <svg className="w-12 h-12 text-[#FB8B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
        image: "/placeholder.svg?height=200&width=300&text=Safety+Equipment",
      },
      {
        title: "Fasteners & Hardware",
        description: "Bolts, screws, nuts, and hardware supplies",
        icon: (
          <svg className="w-12 h-12 text-[#FB8B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        ),
        image: "/placeholder.svg?height=200&width=300&text=Fasteners",
      },
      {
        title: "Electrical Supplies",
        description: "Wiring, components, and electrical tools",
        icon: (
          <svg className="w-12 h-12 text-[#FB8B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        image: "/placeholder.svg?height=200&width=300&text=Electrical+Supplies",
      },
    ]
  
    return (
      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#36454F] mb-4">Product Categories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive range of industrial tools and equipment for every need
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-3">{category.icon}</div>
                </div>
  
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#36454F] mb-2 group-hover:text-[#FB8B24] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
  
                  <div className="mt-4 flex items-center text-[#FB8B24] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore Products</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default CategoriesSection
  