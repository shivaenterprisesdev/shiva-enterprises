"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, ExternalLink, Facebook, Linkedin } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/categories", label: "Categories" },
  { href: "/contact", label: "Contact" },
  { href: "/getquote", label: "Get Quote" },
]

export default function Footer() {
  const [logoError, setLogoError] = useState(false)
  return (
    <footer className="bg-[#36454F] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {!logoError ? (
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <img
                    src={new URL("../assets/shiva-enterprises-logo.png", import.meta.url).href || "/placeholder.svg"}
                    alt="Shiva Enterprises logo"
                    className="h-12 w-12 object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="h-14 w-14 rounded-lg bg-white text-[#36454F] grid place-items-center font-bold text-xl">SE</div>
              )}
              <div className="flex flex-col">
                <span className="font-bold text-white text-xl leading-tight">Shiva Enterprises</span>
                <span className="text-sm text-white/80 leading-tight">Industrial Automation Solutions</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/80">
              India's trusted authorized distributor of industrial automation components including encoders, sensors, and precision couplings from global brands.
            </p>
            
            {/* CEO Information */}
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#FB8B24] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">PG</span>
                </div>
                <span className="text-sm font-semibold text-white">Praveen Gupta</span>
              </div>
              <p className="text-xs text-white/70">Leading industrial automation solutions with 10+ years expertise</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Contact Us</h3>
            
            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-4 w-4 text-[#FB8B24] mt-0.5 flex-shrink-0" />
              <div className="text-xs text-white/80">
                <div className="font-medium text-white mb-1">Shiva Enterprises</div>
                <div>Plot no 126, Pocket C, IFC Ghazipur Paper Market</div>
                <div>New Delhi - 110096, Delhi, India</div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=28.63542409083819,77.33419022840333" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-[#FB8B24] hover:text-[#ff9e3d] transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-3 mb-3">
              <Phone className="h-4 w-4 text-[#FB8B24]" />
              <a href="tel:+919560906643" className="text-xs text-white/80 hover:text-white transition-colors">
                +919560906643
              </a>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-4 w-4 text-[#FB8B24]" />
              <a href="mailto:shivaenterprises52013@gmail.com" className="text-xs text-white/80 hover:text-white transition-colors">
                Send Email
              </a>
            </div>
            
            {/* Social Share */}
            <div>
              <h4 className="text-xs font-medium text-white mb-2">Share:</h4>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.facebook.com/sharer.php?u=https://www.shivaenterprises.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#FB8B24] transition-colors flex items-center justify-center"
                >
                  <Facebook className="h-3 w-3" />
                </a>
                <a 
                  href="https://www.linkedin.com/cws/share?url=https://www.shivaenterprises.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#FB8B24] transition-colors flex items-center justify-center"
                >
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-xs text-white/70">
          © {new Date().getFullYear()} Shiva Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
