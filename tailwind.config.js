/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000000',
      'dark_gray': '#111827',
      'lime': '#bee11e',
      'blurple': '#411ee1'
    },
    extend: {},
  },
  plugins: [],
}
