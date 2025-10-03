"use client"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from "lucide-react"

const OWNER_NUMBER = "918046034595"
const OWNER_EMAIL = "shivaenterprises52013@gmail.com"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  const waHref = useMemo(() => {
    const lines = [
      "Hello! I'd like to connect with Shiva Enterprises regarding industrial automation products.",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Message: ${form.message || "-"}`,
      "Source: Shiva Enterprises website (Contact Page)",
    ]
    const text = encodeURIComponent(lines.join("\n"))
    return `https://wa.me/${OWNER_NUMBER}?text=${text}`
  }, [form])

  const gmailHref = useMemo(() => {
    const subject = encodeURIComponent("Contact Inquiry - Shiva Enterprises")
    const body = encodeURIComponent(
      [
        "Hello Shiva Enterprises team,",
        "",
        "I'd like to discuss automation products and availability.",
        "",
        `Name: ${form.name || "-"}`,
        `Phone: ${form.phone || "-"}`,
        `Email: ${form.email || "-"}`,
        "",
        `Message: ${form.message || "-"}`,
        "",
        "Source: Shiva Enterprises website (Contact Page)",
      ].join("\n"),
    )
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(OWNER_EMAIL)}&su=${subject}&body=${body}`
  }, [form])

  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    window.open(waHref, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#36454F] via-[#36454F]/95 to-[#36454F]/90">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FB8B24]/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#FF9500]/10 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Contact Shiva Enterprises
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-gray-200 max-w-2xl mx-auto"
          >
            Reach our industrial automation experts for quick quotes and technical guidance on encoders, sensors, and couplings.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info + Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#36454F]">Get in Touch</h2>
            <p className="mt-3 text-[#36454F]/80">
              Share your requirements and our team will assist you with pricing, availability, and technical details.
            </p>

            {/* Contact cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#FB8B24]" />
                  <span className="text-[#36454F] font-medium">Address</span>
                </div>
                <p className="mt-2 text-[#36454F]/80">126, Paper Market, Integrated Freight Complex, Pocket C, IFC, Ghazipur, Delhi, 110096</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#FB8B24]" />
                  <span className="text-[#36454F] font-medium">Phone</span>
                </div>
                <a href="tel:+919560906643" className="mt-2 inline-block text-[#36454F]/80 hover:text-[#36454F]">
                +919560906643
                </a>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#FB8B24]" />
                  <span className="text-[#36454F] font-medium">Email</span>
                </div>
                <a href="mailto:shivaenterprises52013@gmail.com" className="mt-2 inline-block text-[#36454F]/80 hover:text-[#36454F]">
                  shivaenterprises52013@gmail.com
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
                />
              </div>
              <input
                name="phone"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={onChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you need (e.g., encoder models, quantities, lead time)"
                value={form.message}
                onChange={onChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm bg-[linear-gradient(135deg,#FB8B24,40%,#FF9500)] hover:brightness-110 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Now
                </a>
                <a
                  href={gmailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm bg-[linear-gradient(135deg,#FF9500,40%,#FFB84D)] hover:brightness-110 transition"
                >
                  <Send className="h-4 w-4" />
                  Write via Gmail
                </a>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm bg-[#36454F] hover:brightness-110 transition"
                >
                  <Clock className="h-4 w-4" />
                  We'll call you back
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Visual + Map */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FB8B24]/10 to-transparent"></div>
              <div className="relative w-28 h-28 rounded-xl bg-white flex items-center justify-center shadow-lg border border-gray-100">
                <img 
                  src={new URL('../assets/shiva-enterprises-logo.png', import.meta.url).href} 
                  alt="Shiva Enterprises Logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-md">
              <iframe
                title="Shiva Enterprises Location - Ghazipur, Delhi"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8065489847785!2d77.3308183156875!3d28.622279382437624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51f16ffffff%3A0x6e2a9286fc5cdf3d!2sShiva%20Enterprises!5e0!3m2!1sen!2sin!4v1738073591000!5m2!1sen!2sin"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
