/*
    ./webpack.config.js
*/

const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
	entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: (isDevServer) ? '/' : 'https://www.robinwkurtz.com/assets/aboutme/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpe?g|png|gif|svg?)$/, loader: 'file-loader' }
    ]
  },
	plugins: [HtmlWebpackPluginConfig]
}
