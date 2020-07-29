const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge")
const devConfig = require("./webpack.dev")
const prodConfig = require("./webpack.prod")

const packFun = env => {

  switch (env) {
    case 'production':
      return merge(commonConfig, prodConfig);
    case "development":
      return merge(commonConfig, devConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
}

let output = process.env.NODE_ENV === "development" ? packFun("development") : packFun("production")
module.exports = output