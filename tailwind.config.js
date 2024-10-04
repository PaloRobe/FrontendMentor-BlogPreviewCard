/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        CustomFigTree: ["Figtree", "sans-serif"],
      },
      colors:{
        Yellow:"hsl(47, 88%, 63%)",
        White: "hsl(0, 0%, 100%)",
        Gray500:"500: hsl(0, 0%, 42%)",
        Gray950:"950: hsl(0, 0%, 7%)"
      }
    },
  },
  plugins: [],
}

