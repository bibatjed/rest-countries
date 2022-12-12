/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    gridTemplateColumns: {
      "fill-110": "repeat(auto-fill, minmax(100px, 1fr))",
    },
    extend: {},
    colors: {
      "s-dm-dark-blue": "hsl(209, 23%, 22%)",
      "s-dm-very-dark-blue": "hsl(207, 26%, 17%)",
      "s-lm-very-dark-blue": "hsl(200, 15%, 8%)",
      "s-lm-dark-gray": "hsl(0, 0%, 52%)",
      "s-lm-very-light-gray": "hsl(0, 0%, 98%)",
      "s-white": "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      "nunito-sans": ["Nunito Sans", "sans-seirf"],
    },
  },
  plugins: [],
};
