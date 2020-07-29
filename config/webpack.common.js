const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    "scripts/index": path.resolve(__dirname, "../src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[chunkHash].js"
  },
  module: {
    rules: [
      {

        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  "targets": {
                    "chrome": "58",
                    "ie": "11"
                  },
                  "useBuiltIns": "usage",
                  "corejs": 3
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [require('postcss-preset-env')()]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 512000,
            name: '[name]-[hash:6].[ext]',
            outputPath: "images/"
          }
        }
      },
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/component"),
      "api" : path.resolve(__dirname, "../src/api")
    },
    extensions: [".js", ".css", ".jsx"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      moduleFilename: ({ name }) => {
        return `${name.replace('scripts', 'styles')}-[hash:6].css`
      },
    }),
    new HtmlWebpackPlugin({
      title: "index",
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}