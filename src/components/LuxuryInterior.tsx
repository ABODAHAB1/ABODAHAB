/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'

export default function LuxuryInterior() {
  const interiorImages = [
    {
      title: 'Steering Wheel',
      description: 'AMG sports steering wheel with heating',
      icon: '🎡',
    },
    {
      title: 'Digital Dashboard',
      description: '12.3" fully digital instrument cluster',
      icon: '📊',
    },
    {
      title: 'Luxury Seats',
      description: 'Nappa leather with massaging function',
      icon: '🪑',
    },
    {
      title: 'Ambient Lighting',
      description: '64 color options with smart control',
      icon: '💡',
    },
    {
      title: 'Panoramic Roof',
      description: 'Full glass roof with smart tinting',
      icon: '☀️',
    },
    {
      title: 'Premium Audio',
      description: 'Burmester 3D Surround System',
      icon: '🔊',
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-darker to-gray-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-silver/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bebas tracking-wider text-silver mb-4 glow-silver">
            LUXURY INTERIOR
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-silver to-transparent mx-auto mb-4 max-w-xs"
          />
          <p className="text-silver-light font-poppins text-lg">
            Crafted with precision and elegance
          </p>
        </motion.div>

        {/* Interior gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interiorImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                boxShadow: '0 0 40px rgba(192, 192, 192, 0.3)',
              }}
              className="group glass-effect rounded-xl overflow-hidden cursor-pointer transition-all duration-500"
            >
              {/* Image area */}
              <div className="relative h-64 bg-gradient-to-br from-gray-lighter to-gray-dark overflow-hidden flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="text-7xl"
                >
                  {item.icon}
                </motion.div>

                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bebas text-silver mb-2 tracking-wider">
                  {item.title}
                </h3>
                <p className="text-silver-light text-sm font-poppins">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
