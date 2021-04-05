const path = require("path");
module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    proxy: {
      "/api": {
        // target : "http://localhost:3000",
        target: "https://musicapi.xxytime.top",
        // target: "http://musicapi.leanapp.cn/",
        pathRewrite: {
          "" : ""
        }
      }
    }
  }
}