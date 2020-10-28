module.exports = {
  theme: {
    extend: {
      screens: {
        "2xl": "1880px",
      },
      spacing: {
        22: "5rem",
        26: "6.5rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
        104: "26rem",
      },
      inset: {
        "1/8": "12.5%",
      },
      boxShadow: {
        strong: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
      },
    },
    fontFamily: {
      display: ["Oswald", "sans-serif"],
      body: ["Lato", "sans-serif"],
      heading: ["Kelson Sans", "sans-serif"],
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
      whitebg: "#ebebeb",
      footer: "#3a3a3a",
      transparent: "#ffffffff",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
