'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'AMG', href: '#amg' },
    { label: 'Electric', href: '#electric' },
    { label: 'SUV', href: '#suv' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect-dark py-3 backdrop-blur-xl border-b border-silver/10'
          : 'py-6'
      }`}
    >
      <div className="container-luxury flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="text-2xl font-bebas tracking-wider text-silver glow-silver">
            MERCEDES
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ color: '#c0c0c0' }}
              className="text-sm font-montserrat text-silver-light hover:text-silver transition-colors duration-300"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow px-6 py-2 text-sm"
          >
            Book Test Drive
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-silver"
          />
          <motion.div
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-silver"
          />
          <motion.div
            animate={isMobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-silver"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-full left-0 w-full glass-effect-dark border-b border-silver/10 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="container-luxury flex flex-col gap-4 py-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-sm font-montserrat text-silver-light hover:text-silver"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button className="btn-glow w-full mt-4">
            Book Test Drive
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
