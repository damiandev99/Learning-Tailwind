/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage:{
        'banner': "url('./public/img/banner.svg')",
        'ciberseguridad': "url(./public/img/ciberseguridad.jpg)",
        'software': "url(./public/img/software.jpg)",
        'ia': "url(./public/img/ia.jpg)",
      }
    },
  },
  plugins: [],
}

