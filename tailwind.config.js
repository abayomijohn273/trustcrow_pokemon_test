/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-haken_Grotesk)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-haken_Grotesk)", ...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "sm-15": "0.9375rem", //15px
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textColor: "var(--color-textColor)",
        grayColor: "var(--color-grayColor)",
      },
    },
  },
  plugins: [],
}