'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function AMGPerformance() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const speedometer = section.querySelector('.speedometer')
    if (!speedometer) return

    const tl = gsap.timeline({ repeat: -1 })
    tl.to('.speedometer-needle', {
      rotation: 180,
      duration: 2,
      ease: 'power1.inOut',
    }).to('.speedometer-needle', {
      rotation: 0,
      duration: 2,
      ease: 'power1.inOut',
    })
  }, [])

  const performanceStats = [
    { label: '0-100 km/h', value: '3.5s', icon: '⚡' },
    { label: 'Top Speed', value: '320 km/h', icon: '🚀' },
    { label: 'Torque', value: '900 Nm', icon: '💪' },
    { label: 'G-Force', value: '1.5G', icon: '🔥' },
  ]

  return (
    <section
      ref={sectionRef}
      id="amg"
      className="relative py-24 bg-gradient-to-br from-darker via-red-950/20 to-darker overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent-red/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-red/10 rounded-full blur-3xl"
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
          <h2 className="text-5xl md:text-6xl font-bebas tracking-wider mb-4">
            <span className="text-gradient-red">AMG PERFORMANCE</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent mx-auto mb-4 max-w-xs"
          />
          <p className="text-silver-light font-poppins text-lg">
            Engineered for uncompromising performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Performance stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {performanceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg border-l-4 border-accent-red hover:border-accent-red/100 transition-all duration-300 hover:bg-accent-red/10"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{stat.icon}</div>
                  <div>
                    <p className="text-silver-light text-xs uppercase tracking-widest mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bebas text-accent-red">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Speedometer and visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Speedometer */}
            <div className="speedometer relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-accent-red/30 shadow-lg shadow-accent-red/20" />

              {/* Speed markers */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i / 12) * 180 - 90
                  const rad = (angle * Math.PI) / 180
                  const x1 = 50 + 40 * Math.cos(rad)
                  const y1 = 50 + 40 * Math.sin(rad)
                  const x2 = 50 + 45 * Math.cos(rad)
                  const y2 = 50 + 45 * Math.sin(rad)
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(220, 20, 60, 0.4)"
                      strokeWidth="0.5"
                    />
                  )
                })}
              </svg>

              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent-red rounded-full shadow-lg shadow-accent-red/50" />

              {/* Needle */}
              <motion.div
                className="speedometer-needle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-bottom w-1 h-24 bg-gradient-to-t from-accent-red to-transparent rounded-full"
                style={{ bottom: 0 }}
              />

              {/* Digital display */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-accent-red text-2xl font-bebas">320</p>
                <p className="text-silver-light text-xs tracking-widest">km/h</p>
              </div>
            </div>

            {/* Turbo animation */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(220, 20, 60, 0.2)',
                  '0 0 50px rgba(220, 20, 60, 0.5)',
                  '0 0 20px rgba(220, 20, 60, 0.2)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <p className="text-silver-light text-sm uppercase tracking-widest mb-2">
                V8 BITURBO ENGINE
              </p>
              <p className="text-3xl font-bebas text-accent-red">585 HP</p>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-accent-red text-sm mt-2 tracking-widest"
              >
                TURBO CHARGING...
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section - Racing lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent"
            style={{
              backgroundSize: '200% 100%',
            }}
          />
          <p className="text-silver-light font-poppins text-sm mt-6 uppercase tracking-widest">
            AMG DNA runs through every component
          </p>
        </motion.div>
      </div>
    </section>
  )
}
