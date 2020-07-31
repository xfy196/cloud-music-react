const path = require("path");
module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target : "http://localhost:3000",
        // target: "http://musicapi.leanapp.cn/",
        pathRewrite: {
          "/api" : ""
        }
      }
    }
  }
}