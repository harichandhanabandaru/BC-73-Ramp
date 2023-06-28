const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.gif$/,
        type: "asset/inline",
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "pocket-pay",
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
