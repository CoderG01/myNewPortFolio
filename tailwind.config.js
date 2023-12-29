/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:['Inter, sans-serif'],
        saint:['Mrs Saint Delafield, cursive']
      },
      colors: {
        "mainBg": "var(--mainBg)",
      },
    },
  },
  plugins: [],
}

