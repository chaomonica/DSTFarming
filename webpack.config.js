const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "DST Farming Guide",
      template: '/dist/template-index.html',
      filename: 'index.html',
      inject: 'body'

    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    watchContentBase: true,
    historyApiFallback: true,
  },
}