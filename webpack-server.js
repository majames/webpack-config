/**
 * Created by mjames on 7/11/2015.
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  //noInfo: true,

  stats: {
    colors: true
  }
});

server.listen(8080, 'localhost', function(err) {
    if (err) {
      console.log(err);
    }
  });
