const path = require("path");
module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../build"),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001/",
        pathRewrite: {
          "^/api" : "/"
        }
      }
    }
  }
}