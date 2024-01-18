/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baby: "#F5F1ED",
        hover: "#DAD2BC"
      }
    },
  },
  plugins: [],
}

