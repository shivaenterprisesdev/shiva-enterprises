"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone } from "lucide-react"

const OWNER_NUMBER = "919560906643"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your industrial automation products and would like to get more information.\n\nSource: Shiva Enterprises Website"
    )
    const whatsappUrl = `https://wa.me/${OWNER_NUMBER}?text=${message}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 relative z-10" />
            ) : (
              <MessageCircle className="h-6 w-6 relative z-10" />
            )}
          </motion.div>
          
          {/* Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            !
          </div>
        </motion.button>
      </motion.div>

      {/* Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0, x: 50, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/src/assets/shiva-enterprises-logo.png"
                    alt="Shiva Enterprises"
                    className="w-10 h-10 rounded-full bg-white p-1"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Shiva Enterprises</h3>
                  <p className="text-green-100 text-sm">Online now</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  👋 Hi there! Need help with industrial automation products? 
                  We're here to assist you with:
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-[#FB8B24] rounded-full"></span>
                  Product information & quotes
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-[#FB8B24] rounded-full"></span>
                  Technical specifications
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-[#FB8B24] rounded-full"></span>
                  Availability & delivery
                </div>
              </div>

              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </motion.button>

              {/* Alternative Contact */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center mb-2">
                  Or call us directly:
                </p>
                <a
                  href="tel:+919560906643"
                  className="flex items-center justify-center gap-2 text-sm text-[#36454F] hover:text-[#FB8B24] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 95609 06643
                </a>
              </div>
            </div>

            {/* Arrow pointing to button */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
