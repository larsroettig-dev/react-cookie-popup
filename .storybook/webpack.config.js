const tailwindcss = require("tailwindcss");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("postcss-import")(),
                tailwindcss("./tailwind.config.js"),
                require("autoprefixer")
              ]
            }
          }
        ]
      }
    ]
  }
};
