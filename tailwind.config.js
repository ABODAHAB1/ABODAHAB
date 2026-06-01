/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a0a',
        'darker': '#000000',
        'gray-dark': '#1a1a1a',
        'gray-lighter': '#2a2a2a',
        'silver': '#c0c0c0',
        'silver-light': '#e8e8e8',
        'accent-red': '#dc143c',
        'accent-blue': '#00d4ff',
        'accent-gold': '#d4af37',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'gradient-silver': 'linear-gradient(135deg, rgba(192,192,192,0.1) 0%, rgba(232,232,232,0.05) 100%)',
        'gradient-red': 'linear-gradient(135deg, rgba(220,20,60,0.2) 0%, rgba(220,20,60,0.05) 100%)',
        'gradient-blue': 'linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(0,212,255,0.05) 100%)',
      },
      boxShadow: {
        'glow-silver': '0 0 30px rgba(192,192,192,0.3)',
        'glow-red': '0 0 40px rgba(220,20,60,0.4)',
        'glow-blue': '0 0 40px rgba(0,212,255,0.4)',
        'luxury': '0 20px 60px rgba(0,0,0,0.8)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(192,192,192,0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(192,192,192,0.6)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backdropFilter: {
        'glass': 'backdrop-filter: blur(10px)',
      },
    },
  },
  plugins: [],
}
