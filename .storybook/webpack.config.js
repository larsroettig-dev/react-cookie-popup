const tailwindcss = require("tailwindcss");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("awesome-typescript-loader")
          },
          // Optional
          {
            loader: require.resolve("react-docgen-typescript-loader")
          }
        ]
      },
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
