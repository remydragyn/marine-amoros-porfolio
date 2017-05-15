const webpack = require('webpack'),
      config = require('./webpack.dev.js'),
      port = 8080,
      webpackDevServer = require('webpack-dev-server');

config.entry.app.unshift('webpack-dev-server/client?http://localhost:'+port+'/', 'webpack/hot/dev-server')

const server = new webpackDevServer(webpack(config), {
    hot: true,
    contentBase: './',
    quiet: false,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: { color: true }
})

server.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('J\'écoute sur le port : '+port);
    }
});

