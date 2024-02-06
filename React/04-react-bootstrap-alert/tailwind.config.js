/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundColor: {
        header: "#712cf9",
        body: "#1b1b1d"
      },
      textColor: {
        body: "#1b1b1d"
      }
    },
  },
  plugins: [],
}

