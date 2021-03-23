const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "app"),
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
