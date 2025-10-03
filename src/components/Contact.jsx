"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    console.log("[v0] Contact form submitted", data)
    alert("Thank you! We will get back to you shortly.")
    e.currentTarget.reset()
  }

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#FB8B24]" aria-hidden="true" />
                <span className="text-[#36454F]/80">Your full company address goes here</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FB8B24]" aria-hidden="true" />
                <a href="tel:+910000000000" className="text-[#36454F]/80 hover:text-[#36454F]">
                  +91 00000 00000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FB8B24]" aria-hidden="true" />
                <a href="mailto:shivaenterprises52013@gmail.com" className="text-[#36454F]/80 hover:text-[#36454F]">
                  shivaenterprises52013@gmail.com
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#36454F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8B24]"
                />
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm
                    bg-[#FB8B24] hover:brightness-110 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <img
              src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop"
              alt="Assorted industrial tools and equipment"
              className="w-full h-auto rounded-lg border border-gray-200 shadow-md"
              loading="lazy"
            />
            <div className="w-full overflow-hidden rounded-lg border border-gray-200">
              {/* Optional Google Maps Embed: replace query/address as needed */}
              <iframe
                title="Shiva Enterprises Location"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_EMBED_API_KEY&q=Shiva+Enterprises"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
