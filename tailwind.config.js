/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-dark': '#1B0B0A',
        'portfolio-dark-alt': '#2a1615',
        'portfolio-amber': '#fbbf24',
        'portfolio-amber-dark': '#f59e0b',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'spin-slow': 'spin-slow 8s linear infinite',
      }
    },
  },
  plugins: [],
}
