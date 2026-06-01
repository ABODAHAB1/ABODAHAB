'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FeaturedVehicles() {
  const vehicles = [
    {
      id: 1,
      name: 'AMG GT',
      price: '$115,000',
      hp: '630 HP',
      engine: 'V8 Biturbo',
      image: '🏎️',
    },
    {
      id: 2,
      name: 'G63 AMG',
      price: '$145,000',
      hp: '585 HP',
      engine: 'V8 Biturbo',
      image: '🚙',
    },
    {
      id: 3,
      name: 'S-Class',
      price: '$110,000',
      hp: '503 HP',
      engine: 'V8 Biturbo',
      image: '🚗',
    },
    {
      id: 4,
      name: 'EQS Electric',
      price: '$105,000',
      hp: '516 HP',
      engine: 'Dual Motor',
      image: '⚡',
    },
    {
      id: 5,
      name: 'CLS Coupe',
      price: '$85,000',
      hp: '429 HP',
      engine: 'V6 Turbo',
      image: '🎯',
    },
    {
      id: 6,
      name: 'Maybach',
      price: '$185,000',
      hp: '621 HP',
      engine: 'V12 Biturbo',
      image: '����',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="vehicles"
      className="relative py-24 bg-gradient-to-br from-darker via-gray-dark to-darker overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-silver/5 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl opacity-20" />

      <div className="container-luxury relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bebas tracking-wider text-silver mb-4 glow-silver">
            FEATURED COLLECTION
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-silver to-transparent mx-auto mb-4 max-w-xs"
          />
          <p className="text-silver-light font-poppins text-lg">
            Experience the pinnacle of automotive excellence
          </p>
        </motion.div>

        {/* Vehicle grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: '0 0 40px rgba(192, 192, 192, 0.3)',
              }}
              className="group glass-effect rounded-xl overflow-hidden cursor-pointer transition-all duration-500"
            >
              {/* Card header with image area */}
              <div className="relative h-64 bg-gradient-to-br from-gray-lighter to-gray-dark overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-silver/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Image placeholder with glow */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="text-8xl"
                  >
                    {vehicle.image}
                  </motion.div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Headlight animations on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 left-4 right-4 flex justify-between"
                >
                  <div className="w-12 h-8 bg-accent-blue/40 rounded-lg blur-lg" />
                  <div className="w-12 h-8 bg-accent-blue/40 rounded-lg blur-lg" />
                </motion.div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-2xl font-bebas text-silver mb-2 tracking-wider">
                  {vehicle.name}
                </h3>
                <p className="text-accent-blue font-poppins font-bold text-lg mb-4">
                  {vehicle.price}
                </p>

                {/* Specs */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-silver-light text-sm uppercase tracking-widest">
                      Horsepower
                    </span>
                    <span className="text-silver font-bebas">{vehicle.hp}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-silver-light text-sm uppercase tracking-widest">
                      Engine
                    </span>
                    <span className="text-silver font-bebas">{vehicle.engine}</span>
                  </div>
                </div>

                {/* Hover buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="flex gap-3 pt-4 border-t border-silver/10"
                >
                  <button className="flex-1 btn-glow text-xs py-2">View Details</button>
                  <button className="flex-1 bg-accent-blue/20 border border-accent-blue text-accent-blue py-2 rounded hover:bg-accent-blue/30 transition-all text-xs font-montserrat">
                    Configure
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
