var merge = require("webpack-merge");
var webpack = require("webpack");
var baseWebpackConfig = require("./webpack.base.config");

module.exports = merge(baseWebpackConfig, {
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    disableHostCheck: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
});
