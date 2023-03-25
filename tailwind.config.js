const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-comfortaa)', ...fontFamily.sans],
        body: ['var(--font-oxygen)'],
      },
      colors: {
        primary: '#6773DB',
        secondary: '#3C3C4C',
        hover: '#565FB9',
        dark: '#1D1D38',
      }
    },
  },
  plugins: [],
}
