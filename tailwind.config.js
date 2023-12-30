/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto Condensed, sans- serif",
      },
      colors: {
        main: "#1D1D22",
        backgroundColor: "#111111",
        blueShade: "#31BFD2",
        redShade: "#FF4848",
        darkertext: "#4A4A4E",
        brightertext: '#99999C'
      },
    },
  },
  plugins: [],
};
