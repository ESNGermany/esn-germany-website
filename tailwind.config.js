module.exports = {
  theme: {
    extend: {
      screens: {
        "2xl": "1920px",
      },
    },
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
      footer: "#3a3a3a",
      "white-bg": "#ebebeb",
      transparent: "#ffffffff",
    },
    // maxWidth: {
    //   "1/4": "25%",
    //   "1/2": "50%",
    //   "3/4": "75%",
    // },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
