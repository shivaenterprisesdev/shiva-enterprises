"use client"
import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, User, Phone, AlignLeft } from "lucide-react"

const OWNER_NUMBER = "+919560906643"
const OWNER_EMAIL = "shivaenterprises52013@gmail.com"

export default function QuickContact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const waHref = useMemo(() => {
    const lines = [
      "Hello! I would like to connect regarding industrial automation products.",
      "Source: Shiva Enterprises website (Quick Contact)",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Message: ${form.message || "-"}`,
    ]
    const text = encodeURIComponent(lines.join("\n"))
    return `https://wa.me/${OWNER_NUMBER}?text=${text}`
  }, [form])

  const gmailHref = useMemo(() => {
    const subject = encodeURIComponent("Inquiry via Shiva Enterprises Website")
    const bodyLines = [
      "Hello Shiva Enterprises team,",
      "",
      "I would like to inquire about your products and services.",
      "",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      "",
      `Message: ${form.message || "-"}`,
      "",
      "Source: Shiva Enterprises website (Quick Contact)",
    ]
    const body = encodeURIComponent(bodyLines.join("\n"))
    // Use Gmail compose URL to explicitly open Gmail in a new tab
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(OWNER_EMAIL)}&su=${subject}&body=${body}`
  }, [form])

  return (
    <section id="quick-contact" aria-label="Quick Contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#36454F]">Contact Industrial Automation Experts</h2>
          <p className="hidden sm:block text-sm text-[#36454F]/70">Get instant quotes for encoders, sensors & automation components via WhatsApp or Gmail</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 grid grid-cols-1 gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
              />
              <User className="h-4 w-4 text-[#FB8B24] absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            </div>
            <div className="relative">
              <input
                name="phone"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
              />
              <Phone className="h-4 w-4 text-[#FB8B24] absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            </div>
            <div className="relative md:col-span-2">
              <input
                name="email"
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
              />
              <Mail className="h-4 w-4 text-[#FB8B24] absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            </div>
            <div className="relative md:col-span-2">
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us your industrial automation needs (e.g., Kuebler encoders, Autonics sensors, coupling specifications, quantities, delivery timeline)"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
              />
              <AlignLeft className="h-4 w-4 text-[#FB8B24] absolute right-3 top-3" aria-hidden="true" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
              <Mail className="h-4 w-4" />
              Write via Gmail
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

