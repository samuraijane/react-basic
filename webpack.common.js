const { resolve } = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      }
    ]
  },
  resolve: {
    // alias: {
    //   hooks: resolve(__dirname, "src/hooks"),
    //   theme: resolve(__dirname, "src/theme"),
    //   types: resolve(__dirname, "src/types"),
    //   utils: resolve(__dirname, "src/utils")
    // },
    extensions: [".js", ".ts", ".tsx"] // NOTE 1
  }
};

/*
  NOTES
  [1] Although we are builing a webpack config that allows us to write
  code in TypeScript, we include `.js` here because many of the files
  found within node_modules, and upon which this config depends, have 
  `.js` file extensions.
*/