const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
       lightBlue: colors.lightBlue
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
