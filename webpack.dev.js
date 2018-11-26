const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*','.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new MiniCssExtractPlugin()
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}