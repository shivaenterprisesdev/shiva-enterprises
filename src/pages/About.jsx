"use client"
import { motion } from "framer-motion"
import { ShieldCheck, Handshake, Layers, Award, Users, Target, Zap, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#36454F] via-[#2c3741] to-[#1f2937]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FB8B24]/10 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FB8B24]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FB8B24]/20 border border-[#FB8B24]/30 mb-6"
            >
              <Award className="w-4 h-4 text-[#FB8B24]" />
              <span className="text-sm font-medium text-[#FB8B24]">10+ Years of Excellence</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#FB8B24] to-[#ff9e3d] bg-clip-text text-transparent">
                Shiva Enterprises
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              India's trusted authorized distributor of industrial automation components including encoders, sensors, and precision couplings. We partner with leading global brands like{" "}
              <span className="text-[#FB8B24] font-semibold">Kuebler Germany</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FB8B24]" />
                <span>Manufacturing Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FB8B24]" />
                <span>Trusted by 500+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#FB8B24]" />
                <span>Industry Leader</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background + Expertise */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FB8B24]/10 border border-[#FB8B24]/20 mb-6">
              <Zap className="w-4 h-4 text-[#FB8B24]" />
              <span className="text-sm font-medium text-[#FB8B24]">Industrial Automation Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#36454F] mb-6">
              Powering Industries with{" "}
              <span className="bg-gradient-to-r from-[#FB8B24] to-[#ff9e3d] bg-clip-text text-transparent">
                Premium Components
              </span>
            </h2>
            <p className="text-lg text-[#36454F]/80 mb-6 leading-relaxed">
              We've built long-term relationships with manufacturers and customers across manufacturing, automotive, packaging, CNC machining, process industries, and FMCG sectors. Our specialized catalog includes rotary encoders (incremental & absolute), proximity sensors, photoelectric sensors, flexible couplings, shaft couplings, and industrial automation components—all sourced from authorized distributors to your exact specification.
            </p>
            <p className="text-lg text-[#36454F]/80 mb-8 leading-relaxed">
              As authorized partners of Kuebler Germany, our team emphasizes product authenticity, competitive encoder and sensor pricing, and consistent availability—backed by responsive pre-sales technical consultation and comprehensive after-sales support for all automation components.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FB8B24] mb-1">10+</div>
                <div className="text-sm text-[#36454F]/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FB8B24] mb-1">500+</div>
                <div className="text-sm text-[#36454F]/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FB8B24] mb-1">15+</div>
                <div className="text-sm text-[#36454F]/70">Global Brands</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Company Logo/Brand Display */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-[#FB8B24] rounded-full animate-pulse"></div>
              </div>
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg border border-gray-100">
                  <img 
                    src={new URL('../assets/shiva-enterprises-logo.png', import.meta.url).href} 
                    alt="Shiva Enterprises Logo" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#36454F] mb-2">Shiva Enterprises</h3>
                <p className="text-[#FB8B24] font-semibold">Industrial Automation Specialists</p>
              </div>
              
              {/* Brand Partners */}
              <div className="space-y-4">
                <div className="text-center text-sm font-medium text-[#36454F]/70 mb-4">Authorized Partners</div>
                <div className="flex justify-center items-center gap-4">
                  <div className="px-3 py-2 bg-[#FB8B24]/10 rounded-lg border border-[#FB8B24]/20">
                    <span className="text-sm font-semibold text-[#36454F]">Kuebler</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FB8B24]/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500/10 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#FB8B24]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#36454F] mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#FB8B24] to-[#ff9e3d] bg-clip-text text-transparent">
                Purpose & Vision
              </span>
            </h2>
            <p className="text-lg text-[#36454F]/70 max-w-2xl mx-auto">
              Driving industrial excellence through innovative automation solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FB8B24]/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FB8B24] to-[#ff9e3d] rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#36454F]">Our Mission</h3>
                </div>
                <p className="text-[#36454F]/80 leading-relaxed">
                  To deliver reliable industrial automation solutions including encoders, sensors, and couplings that improve manufacturing productivity and operational safety—through authentic products from trusted brands like Kuebler and Autonics, backed by responsive technical service.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#36454F]">Our Vision</h3>
                </div>
                <p className="text-[#36454F]/80 leading-relaxed">
                  To be India's most dependable industrial automation components distributor for manufacturing industries, powered by authorized partnerships with global brand Kuebler, extensive encoder and sensor range, and technical service excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#36454F] mb-4">
              Our Core Values in{" "}
              <span className="bg-gradient-to-r from-[#FB8B24] to-[#ff9e3d] bg-clip-text text-transparent">
                Industrial Automation
              </span>
            </h2>
            <p className="text-lg text-[#36454F]/70 max-w-2xl mx-auto">
              The principles that guide our commitment to excellence in every automation solution
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Quality",
                desc: "Genuine encoders, sensors, and couplings from authorized global brand like Kuebler with assured industrial performance.",
                Icon: ShieldCheck,
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100",
              },
              {
                title: "Industrial Reliability",
                desc: "Consistent availability of automation components, timely delivery to manufacturing facilities, and dependable technical support for encoders and sensors.",
                Icon: Layers,
                color: "from-[#FB8B24] to-[#ff9e3d]",
                bgColor: "from-orange-50 to-orange-100",
              },
              {
                title: "Customer-first Approach",
                desc: "Understanding your automation requirements and recommending the right encoder, sensor, and coupling solutions for your specific industrial applications.",
                Icon: Handshake,
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100",
              },
            ].map(({ title, desc, Icon, color, bgColor }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-2xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#36454F] mb-4">{title}</h3>
                  <p className="text-[#36454F]/80 leading-relaxed">{desc}</p>
                  
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#FB8B24]/30 rounded-full group-hover:bg-[#FB8B24] transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
