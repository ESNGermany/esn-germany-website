module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      display: ["Oswald", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
    colors: {
      "esn-green": "#7ac143",
      "esn-blue": "#00aeef",
      "esn-pink": "#ec008c",
      "esn-orange": "#f47b20",
      "esn-dark-blue": "#2e3192",
      black: "#000",
      white: "#fff",
      footer: "#363c3b",
      "white-bg": "#ebebeb",
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
