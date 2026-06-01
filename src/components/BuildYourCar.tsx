'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BuildYourCar() {
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedWheels, setSelectedWheels] = useState('19')
  const [selectedInterior, setSelectedInterior] = useState('leather')
  const [selectedPerformance, setSelectedPerformance] = useState('amg')

  const colors = [
    { name: 'Obsidian Black', value: 'black', hex: '#000000' },
    { name: 'Diamond Silver', value: 'silver', hex: '#c0c0c0' },
    { name: 'Alpine White', value: 'white', hex: '#ffffff' },
    { name: 'Patagonia Red', value: 'red', hex: '#dc143c' },
  ]

  const wheels = [
    { size: '19"', value: '19' },
    { size: '20"', value: '20' },
    { size: '21"', value: '21' },
  ]

  const interiors = [
    { name: 'Premium Leather', value: 'leather' },
    { name: 'Nappa Leather', value: 'nappa' },
    { name: 'Alcantara', value: 'alcantara' },
  ]

  const performance = [
    { name: 'Standard', value: 'standard' },
    { name: 'AMG Sport', value: 'amg' },
    { name: 'AMG Performance', value: 'performance' },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-darker to-gray-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
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
            BUILD YOUR CAR
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-silver to-transparent mx-auto mb-4 max-w-xs"
          />
          <p className="text-silver-light font-poppins text-lg">
            Create your perfect Mercedes-Benz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Configurator controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Color selector */}
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bebas text-silver mb-4 uppercase tracking-wider">
                COLOR
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {colors.map((color) => (
                  <motion.button
                    key={color.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(color.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedColor === color.value
                        ? 'border-accent-blue shadow-glow-blue'
                        : 'border-silver/20 hover:border-silver/50'
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-sm text-silver-light">{color.name}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Wheels selector */}
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bebas text-silver mb-4 uppercase tracking-wider">
                WHEELS
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {wheels.map((wheel) => (
                  <motion.button
                    key={wheel.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedWheels(wheel.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedWheels === wheel.value
                        ? 'border-accent-blue shadow-glow-blue'
                        : 'border-silver/20 hover:border-silver/50'
                    }`}
                  >
                    <p className="text-lg font-bebas text-silver">{wheel.size}</p>
                    <p className="text-xs text-silver-light mt-1">Alloy</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Interior selector */}
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bebas text-silver mb-4 uppercase tracking-wider">
                INTERIOR
              </h3>
              <div className="space-y-3">
                {interiors.map((interior) => (
                  <motion.button
                    key={interior.value}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedInterior(interior.value)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedInterior === interior.value
                        ? 'border-accent-blue bg-accent-blue/10 shadow-glow-blue'
                        : 'border-silver/20 hover:border-silver/50'
                    }`}
                  >
                    <p className="font-poppins text-silver">{interior.name}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Performance selector */}
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bebas text-silver mb-4 uppercase tracking-wider">
                PERFORMANCE PACKAGE
              </h3>
              <div className="space-y-3">
                {performance.map((pkg) => (
                  <motion.button
                    key={pkg.value}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedPerformance(pkg.value)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedPerformance === pkg.value
                        ? 'border-accent-red bg-accent-red/10 shadow-glow-red'
                        : 'border-silver/20 hover:border-silver/50'
                    }`}
                  >
                    <p className="font-poppins text-silver">{pkg.name}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Car preview */}
            <div className="glass-effect rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-center"
              >
                <motion.div
                  key={`${selectedColor}-${selectedWheels}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-9xl"
                >
                  🏎️
                </motion.div>
              </motion.div>

              {/* Glow effects based on color */}
              <motion.div
                key={selectedColor}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className={`absolute inset-0 blur-3xl ${
                  selectedColor === 'red'
                    ? 'bg-accent-red/20'
                    : selectedColor === 'silver'
                      ? 'bg-silver/20'
                      : 'bg-accent-blue/20'
                }`}
              />
            </div>

            {/* Configuration summary */}
            <div className="glass-effect rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-bebas text-silver mb-4 uppercase tracking-wider">
                Your Configuration
              </h3>

              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex justify-between items-center pb-3 border-b border-silver/10"
                >
                  <span className="text-silver-light">Color</span>
                  <span className="text-silver font-bebas">
                    {colors.find((c) => c.value === selectedColor)?.name}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex justify-between items-center pb-3 border-b border-silver/10"
                >
                  <span className="text-silver-light">Wheels</span>
                  <span className="text-silver font-bebas">{selectedWheels}"</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-between items-center pb-3 border-b border-silver/10"
                >
                  <span className="text-silver-light">Interior</span>
                  <span className="text-silver font-bebas">
                    {interiors.find((i) => i.value === selectedInterior)?.name}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-silver-light">Performance</span>
                  <span className="text-silver font-bebas">
                    {performance.find((p) => p.value === selectedPerformance)?.name}
                  </span>
                </motion.div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 50px rgba(0, 212, 255, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-glow mt-6"
              >
                PROCEED TO CHECKOUT
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
