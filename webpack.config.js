const webpack = require("webpack");
const path = require("path");

const config = {
  entry: ["react-hot-loader/patch", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

module.exports = config;
