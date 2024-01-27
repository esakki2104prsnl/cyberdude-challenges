/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dance": ' cursive'
      },
      colors: {
        customBlue: "#0023c4"
      }
    },
  },
  plugins: [],
}

