const config = require('./webpack.base')
const webpack = require('webpack')

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
])

module.exports = config;