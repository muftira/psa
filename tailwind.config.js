/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "button" : "#0062FD",
        "menu" : "#D9D9D9",
        "bege" : "#EFEFEF"
      },
      fontFamily:{
        "fontSatu" : ['Space Grotesk'],
        "fontDua" : ['Quicksand']
      }
    },
  },
  plugins: [],
}
