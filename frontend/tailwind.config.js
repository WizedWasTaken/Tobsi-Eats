/** @type {import('tailwindcss').Config} */
export default {
  prefix: '', // Custom Prefix
  darkMode: 'class', // Dark Mode
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      // Custom Animations
      keyframes: {
        fall: {
          '0%': { transform: 'translate(0%,-150%) skewX(0deg)' },
          '50%': { transform: 'translate(0%,0%) skewX(-10deg)' },
          '100%': { transform: 'translate(0%,150%) skewX(0deg)' }
        }
      },

      animation: {
        fall: 'fall 3s ease infinite'
      }
    }
  },
  important: true,
  plugins: []
}
