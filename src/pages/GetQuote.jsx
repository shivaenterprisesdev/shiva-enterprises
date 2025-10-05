"use client"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, User, Clock, CheckCircle } from "lucide-react"

const OWNER_NUMBER = "919560906643"
const OWNER_EMAIL = "shivaenterprises52013@gmail.com"

export default function GetQuote() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })

  const waHref = useMemo(() => {
    const lines = [
      "Hello! I would like to request a quote for industrial automation products.",
      "Source: Shiva Enterprises website (Get Quote Page)",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Requirements: ${form.message || "-"}`,
    ]
    const text = encodeURIComponent(lines.join("\n"))
    return `https://wa.me/${OWNER_NUMBER}?text=${text}`
  }, [form])

  const gmailHref = useMemo(() => {
    const subject = encodeURIComponent("Quote Request - Shiva Enterprises")
    const bodyLines = [
      "Hello Shiva Enterprises team,",
      "",
      "I would like to request a quote for your industrial automation products.",
      "",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      "",
      `Requirements: ${form.message || "-"}`,
      "",
      "Please provide pricing, availability, and delivery details.",
      "",
      "Source: Shiva Enterprises website (Get Quote Page)",
    ]
    const body = encodeURIComponent(bodyLines.join("\n"))
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(OWNER_EMAIL)}&su=${subject}&body=${body}`
  }, [form])

  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#36454F] via-[#36454F]/95 to-[#36454F]/90">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FB8B24]/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#FF9500]/10 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FB8B24]/20 to-[#FF9500]/20 rounded-2xl blur-xl scale-110"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-white/20 bg-white shadow-xl flex items-center justify-center p-4 backdrop-blur-sm">
                  <img
                    src="/assets/shiva-enterprises-logo.png"
                    alt="Shiva Enterprises Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8B24] to-[#FF9500]">Quote</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Get instant pricing for industrial automation products. Share your requirements and 
              connect with us via WhatsApp or Gmail for immediate assistance.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-6 mt-12"
            >
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="h-5 w-5 text-[#FB8B24]" />
                <span className="text-sm">Quick Response</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-5 w-5 text-[#FB8B24]" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="h-5 w-5 text-[#FB8B24]" />
                <span className="text-sm">Best Prices</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Form Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Form header */}
            <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#36454F] mb-2">Tell Us What You Need</h2>
              <p className="text-[#36454F]/70">Fill in your details and we'll get back to you with the best quote</p>
            </div>

            {/* Form content */}
            <div className="p-8 sm:p-12">
              <div className="grid grid-cols-1 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#36454F] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={onChange}
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24] focus:border-transparent transition-all duration-300"
                    />
                    <User className="h-5 w-5 text-[#FB8B24] absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#36454F] mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={onChange}
                        className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24] focus:border-transparent transition-all duration-300"
                      />
                      <Phone className="h-5 w-5 text-[#FB8B24] absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#36454F] mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={onChange}
                        className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24] focus:border-transparent transition-all duration-300"
                      />
                      <Mail className="h-5 w-5 text-[#FB8B24] absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#36454F] mb-2">
                    Requirements & Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Please describe your requirements:\n\n• Product models needed\n• Quantities required\n• Expected delivery timeline\n• Any specific technical requirements"
                    value={form.message}
                    onChange={onChange}
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24] focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <motion.a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-xl bg-[linear-gradient(135deg,#FB8B24,40%,#FF9500)] hover:brightness-110 transition-all duration-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Continue on WhatsApp
                  </motion.a>
                  
                  <motion.a
                    href={gmailHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-xl bg-[linear-gradient(135deg,#FF9500,40%,#FFB84D)] hover:brightness-110 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                    Send via Gmail
                  </motion.a>
                </div>

                {/* Help text */}
                <div className="text-center pt-4">
                  <p className="text-sm text-[#36454F]/60">
                    Your information will be used only to provide you with a quote. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
