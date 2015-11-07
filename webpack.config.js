/*global __dirname */

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/index.js'
  ],

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  devtool: 'source-map',

  module: {
    loaders: [

    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(), // search for equal/similar files and deduplicate them out
    new webpack.NoErrorsPlugin() // avoid emitting files when an error occurs
  ]
};