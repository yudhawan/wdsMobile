/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        biru:'#4576bf',
        merah:'#bf4549',
        oranye:'#bf7645',
        hijau:'#47bf45'
      }
    },
  },
  plugins: [],
}
