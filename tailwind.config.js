/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish"],
        nunito: ["Nunito"],
      },
      colors: {
        primary: "#164863",
        secondary: "#427D9D",
        success: "#008000",
        dark: "#14142B",
        light: "#FFF",
        danger: "#D00707",
      },
    },
  },
  plugins: [],
};
