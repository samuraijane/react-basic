const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolve } = require("path");

const PATH = resolve(`${__dirname}/build`);

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: { // [1]
    historyApiFallback: true, // [2]
    port: 3000,
    static: {
      directory: PATH
    }
  },
  output: {
    filename: "main.js",
    path: PATH
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(`${__dirname}/public/index.html`)
    })
  ]
});

/*
NOTES
[1] Webpack's dev server bundles files and then performs read/write
    operations in memory so you will never see files related to local
    development written to the disk.
[2] This allows the user to refresh at a nested route (e.g. "/about")
    and still load the page.
*/