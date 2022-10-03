/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      colors: {
        'dark_gray': '#111827',
        'lime': '#bee11e',
        'blurple': '#411ee1'
      },
      fontFamily: {
        'font-inter': ['Quicksand', 'sans-serif']
      },
    },
  },
  plugins: [],
}
