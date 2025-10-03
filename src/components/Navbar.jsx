"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/categories", label: "Categories" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Shiva Enterprises Home"
          onClick={() => setOpen(false)}
        >
          {!logoError ? (
            <div className="p-1 bg-white rounded-lg shadow-sm border border-gray-100">
              <img
                src={new URL("../assets/shiva-enterprises-logo.png", import.meta.url).href || "/placeholder.svg"}
                alt="Shiva Enterprises logo"
                className="h-12 w-12 object-contain"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <div className="h-12 w-12 rounded-lg bg-[#36454F] text-white grid place-items-center font-bold text-lg">SE</div>
          )}
          <div className="flex flex-col">
            <span className="font-bold text-[#36454F] text-lg leading-tight">Shiva Enterprises</span>
            <span className="hidden sm:inline-block text-xs text-[#36454F]/70 leading-tight">Industrial Automation</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href ? "text-[#36454F]" : "text-[#36454F]/80 hover:text-[#36454F]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/getquote"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm
              bg-[linear-gradient(135deg,#FB8B24,40%,#ff9e3d)]
              hover:brightness-110 transition"
          >
            Get Quote
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#36454F] hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="py-2 text-sm font-medium text-[#36454F] hover:text-[#FB8B24]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/getquote"
              className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm
                bg-[linear-gradient(135deg,#FB8B24,40%,#ff9e3d)]
                hover:brightness-110 transition"
              onClick={() => setOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
