/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {

    extend: {
      width: {
        '250': '16rem',
        '500': '32rem'
      },
      colors:{
        'os-300': '#93c5fd'
      },
    },
  },
  plugins: [],
}
