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
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // live reload page without losing state of app
    new webpack.optimize.DedupePlugin(), // search for equal/similar files and deduplicate them out
    new webpack.NoErrorsPlugin() // avoid emitting files when an error occurs
  ]
};