const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminWebp = require("imagemin-webp");
const glob = require("glob");
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [
              require("postcss-import"),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ImageminPlugin({
      disable: process.env.IMAGEMIN !== "enabled", // Disable during development
      // jpegtran: { progressive: false },
      // optipng: { optimizationLevel: 3 },
      // svgo: {},
      // pngquant: {
      //   quality: "95-100",
      // },
      externalImages: {
        context: "src",
        destination: "dist/esn-germany-website/browser",
        fileName: "[path][name].webp",
        sources: glob.sync("src/assets/**/*.{jpg,png}"),
      },
      plugins: [imageminWebp()],
    }),
    // new ImageminPlugin({
    //   // disable: process.env.NODE_ENV !== "production", // Disable during development
    //   // jpegtran: { progressive: false },
    //   // optipng: { optimizationLevel: 3 },
    //   // svgo: {},
    //   // pngquant: {
    //   //   quality: "95-100",
    //   // },
    //   // externalImages: {
    //   //   context: "src",
    //   //   // fileName: "[path][name]-optim.[ext]",
    //   //   destination: "dist/esn-germany-website/browser",
    //   //   sources: glob.sync("src/assets/**/*.{jpg,png,svg}"),
    //   // },
    // }),
  ],
};
