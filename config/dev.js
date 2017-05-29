const webpack = require('webpack')
const config = require('./webpack.dev.js')
const shell = require('shelljs')
const port = 8080
const webpackDevServer = require('webpack-dev-server')

shell.rm('-rf', 'build/public/css')


config.entry.app.unshift('webpack-dev-server/client?http://localhost:'+port+'/', 'webpack/hot/dev-server')

const server = new webpackDevServer(webpack(config), {
    hot: true,
    proxy: {
        '*': {
            target: 'http://starter.local:8888',
            changeOrigin: true
        }
    },
    contentBase: './build/',
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

