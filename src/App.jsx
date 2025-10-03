import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import QuickContact from "./components/QuickContact.jsx"
import WhyChooseUs from "./components/WhyChooseUs.jsx"
import Footer from "./components/Footer.jsx"
import FloatingContact from "./components/FloatingContact.jsx"
import SEOHead from "./components/SEOHead.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import { generateStructuredData } from './hooks/useSEO'
import AboutPage from "./pages/About.jsx"
import ContactPage from "./pages/Contact.jsx"
import CategoriesPage from "./pages/Categories.jsx"
import GetQuote from "./pages/GetQuote.jsx"
import RatingsSection from "./components/RatingsSection.jsx"
import ProductPage from "./pages/Product.jsx"
import ProductSlider from "./components/ProductSlider.jsx"
import BrandsGrid from "./components/BrandsGrid.jsx"
import BrandsPage from "./pages/BrandsPage.jsx"

function Home() {
  // Generate structured data for homepage
  const structuredData = [
    generateStructuredData('Organization'),
    generateStructuredData('WebSite'),
    generateStructuredData('BreadcrumbList', {
      items: [
        { name: 'Home', url: '/' }
      ]
    })
  ]

  return (
    <>
      <SEOHead 
        title="Industrial Automation Products | Encoders, Sensors & Couplings"
        description="Leading distributor of industrial automation products in India. Authorized dealer for Kubler, sensors, couplings, and electrical components. 10+ years of trusted service."
        keywords="industrial automation, encoders, sensors, couplings, electrical components, Kubler, Autonics, industrial tools, automation products, rotary encoders, proximity sensors, flexible couplings, India"
        structuredData={structuredData}
      />
      <main id="home" className="min-h-screen">
        <Hero />
        <section id="popular-products" aria-label="Popular Products">
          <ProductSlider />
        </section>
        <section id="about" aria-label="About Shiva Enterprises">
          <About />
        </section>
        <section id="brands" aria-label="Brand We Deal With">
          <BrandsGrid />
        </section>
        <section id="quick-contact" aria-label="Quick Contact">
          <QuickContact />
        </section>
        <section id="ratings" aria-label="Customer Ratings & Reviews">
          <RatingsSection />
        </section>
        <section id="why" aria-label="Why Choose Us">
          <WhyChooseUs />
        </section>
      </main>
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/getquote" element={<GetQuote />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/products/:categoryName" element={<ProductPage />} />
        </Routes>
        <Footer />
        <FloatingContact />
      </BrowserRouter>
    </HelmetProvider>
  )
}
