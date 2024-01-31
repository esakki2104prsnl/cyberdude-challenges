/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        sage: "#D0C88E",
        card: "#f6f0f0",
        cardHover: "#60463B",
        head: "#2E3138"
      },
      textColor: {
        sage: "#D0C88E",
      }
    },
  },
  plugins: [],
}

