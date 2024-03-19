/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx", "./node_modules/tailwind-datepicker-react/dist/**/*.js",],
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
        grey: "#4E4B66",
        lightGrey: "#A0A3BD33"
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
