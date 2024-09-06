/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage:{
        'banner': "url('./public/img/banner.svg')",
      }
    },
  },
  plugins: [],
}

