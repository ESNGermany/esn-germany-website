module.exports = {
  theme: {
    extend: {
      screens: {
        "2xl": "1880px",
      },
      spacing: {
        26: "6.5rem",
        lg2: "20px",
      },
      inset: {
        "1/8": "12.5%",
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
      gray: "#d3d3d3",
      white: "#fff",
      footer: "#3a3a3a",
      transparent: "#ffffffff",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
