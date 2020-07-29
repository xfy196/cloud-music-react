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
              /*               [
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
                            "@babel/preset-react" */
              "react-app"
            ],
            /*             plugins: [
                          ["@babel/plugin-proposal-decorators", { "legacy": true }],
                          ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ] */
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
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    "overrideBrowserslist": [
                      "Android 4.1",
                      "iOS 7.1"
                    ],
                    flexbox: 'no-2009',
                  },
                  "browserslist": [
                    "> 1%",
                    "last 2 versions",
                    "not dead"
                  ],
                  stage: 3,
                }),
                require('postcss-pxtorem')({
                  "rootValue": 100,
                  "propList": [
                    "*"
                  ]
                }),
                require("cssnano")
              ],

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
      "api": path.resolve(__dirname, "../src/api"),
      "assets" : path.resolve(__dirname, "../src/assets/"),
      "layouts" : path.resolve(__dirname, "../src/layouts/")
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