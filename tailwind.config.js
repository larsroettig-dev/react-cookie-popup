module.exports = {
  theme: {},
  variants: {},
  backgroundColors: {
    white: "#fff"
  },
  plugins: [
    require("tailwindcss-alpha")({
      modules: {
        backgroundColors: []
      },
      alpha: {
        "95": 0.95
      }
    })
  ]
};
