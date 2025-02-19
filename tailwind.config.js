/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3AA39F",
        "secondary-yellow": "#FFC41F",
        "secondary-red": "#E14B4B",
        "space-cadet": "#17183B",
        "cool-grey": "#A2A3B1",
        "french-grey": "#D1D1D8",
      }
    },
  },
  plugins: [],
}
