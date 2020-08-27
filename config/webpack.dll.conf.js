const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const {library} = require("./dll.config")
// 配置存在dll的目录
const dllPath = "public/vendor";

module.exports = {
  entry : {
    ...library
  },
  output : {
    path : path.join(__dirname, dllPath),
    filename : "MyDll.[name].js",
    library : '[name]_[hash]'
  },
  plugins : [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path : path.resolve(__dirname, dllPath, "[name]-manifest.json"),
      name : "[name]_[hash]"
    })
  ]
}