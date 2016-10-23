var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "react-hot-loader/patch",
    path.join(__dirname, "src/main.js")
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: "[name].js",
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Enzyme tester"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    colors: true
  }
};
