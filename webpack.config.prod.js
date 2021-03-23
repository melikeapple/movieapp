const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  output: {
    path: path.join(__dirname, "app"),
    filename: "[name].js",
    publicPath: "/",
  },
};
