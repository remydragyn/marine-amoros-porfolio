const config = require('./webpack.base'),
      webpack = require('webpack');

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
])

module.exports = config;