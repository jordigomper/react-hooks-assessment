const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

const cssRules = {
  test: /\.css$/i,
  exclude: /node_modules/,
  use: ["style-loader", "css-loader"],
};

const imageRules = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  exclude: /node_modules/,
  loader: "url-loader?name=app/images/[name].[ext]",
  options: {
    esModule: false,
  },
};

module.exports = {
  output: {
    filename: "app.[contentHash].js",
  },
  module: {
    rules: [javascriptRules, cssRules, imageRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new ManifestPlugin({
      seed: {
        short_name: "GnomeBook",
        name: "Social gnome application",
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
        ],
        start_url: ".",
        display: "standalone",
        theme_color: "#4267b2",
        background_color: "#ffffff",
      },
    }),
  ],
};
