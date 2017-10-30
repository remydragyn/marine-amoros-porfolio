const config = require('./webpack.base')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')

config.plugins = config.plugins.concat([
    new ManifestPlugin({
        writeToFileEmit: true,
        seed: {
            env: 'ENV_DEV',
            'app.css': ''
        }
    }),
    new webpack.HotModuleReplacementPlugin()
])

module.exports = config;