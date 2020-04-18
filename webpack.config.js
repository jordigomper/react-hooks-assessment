const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");

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

console.log("process.env", process.env);

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
    }),
  ],
};
