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
    alias: {
      react: resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
      'styled-components': resolve(__dirname, 'node_modules/styled-components')
    },
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