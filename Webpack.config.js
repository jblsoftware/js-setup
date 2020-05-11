const path = require("path");
const webpack = require("webpack");
const HtmlWebpackBuild = require("html-webpack-plugin");

module.exports = ({ mode, presets } = { mode: "development", presets: [] }) => {
  return {
    mode,
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new HtmlWebpackBuild(), new webpack.ProgressPlugin()],
  };
};
