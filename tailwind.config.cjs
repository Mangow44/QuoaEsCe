/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark': '#0A0A0D',
        'taupe': '#A69B8F',
        'blanc': '#F2F2F0'
      },
    },
  },
  plugins: [],
}
