const path = require("path");
const webpack = require("webpack");
const HtmlWebpackBuild = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = ({ mode, presets } = { mode: "development", presets: [] }) => {
  return {
    mode,
    entry: {
      app: "./src/index.ts",
    },
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
      hot: true,
      host: "localhost",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
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
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackBuild({
        title: "Development",
      }),
      new webpack.ProgressPlugin(),
    ],
  };
};
