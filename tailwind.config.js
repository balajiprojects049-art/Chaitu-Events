/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        luxury: {
          purple: '#7c3aed',
          pink: '#ec4899',
          gold: '#f59e0b',
          dark: '#0f0a1e',
          darker: '#080516',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        'pink-gradient': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0f0a1e 0%, #1a0533 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(124, 58, 237, 0.35)',
        'gold': '0 25px 50px -12px rgba(245, 158, 11, 0.35)',
        'pink': '0 25px 50px -12px rgba(236, 72, 153, 0.35)',
        'glow': '0 0 30px rgba(124, 58, 237, 0.5)',
        'glow-gold': '0 0 30px rgba(245, 158, 11, 0.5)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.5)',
      },
    },
  },
  plugins: [],
}
