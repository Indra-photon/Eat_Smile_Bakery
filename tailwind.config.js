/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          800: '#8B181B', // Main brand color
          700: '#9B1D21', // Lighter shade for hover
          900: '#771518', // Darker shade
        },
        orange: {
          500: '#FF6B35', // For icons and accents
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        cursive: ['Dancing Script', 'cursive'], // You can replace with your preferred cursive font
      }
    },
  },
  plugins: [],
}