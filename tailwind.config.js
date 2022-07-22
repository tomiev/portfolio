/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark_gray': '#111827',
        'lime': '#bee11e',
        'blurple': '#411ee1'
      },
      fontFamily: {
        neueMontrealBold: ['Neue Montreal Bold', 'sans-serif'],
        neueMontrealMedium: ['Neue Montreal Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
