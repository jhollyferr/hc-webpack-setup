const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  watch: true,
  watchOptions: {
    //   aggregateTimeout: 200,
    //   poll: 1000,
    ignored: /node_modules/,
  },
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    hot: true,
    open: true,
    port: 3080,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
    }),
    new Dotenv(),
  ],
};
