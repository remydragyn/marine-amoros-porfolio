const config = require('./webpack.base')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCss = new ExtractTextPlugin({
        filename: 'css/[name].css',
        allChunks: true,
      })

config.plugins = config.plugins.concat([
    new ManifestPlugin(),
    extractCss,
    new webpack.optimize.UglifyJsPlugin({
        comments: false
    })
])

const cssLoaders = config.module.rules[0].use
const exportLoaders = cssLoaders.slice(1, cssLoaders.length)

config.module.rules[0].use = null
config.module.rules[0].use = extractCss.extract({
    use: exportLoaders,
    fallback: 'style-loader'
})

const twigLoader = {
        test: /\.twig$/,
        exclude: /(node_modules|bower_components|vendor)/,
        use: ['twig-loader']
    }

config.module.rules.push(twigLoader)

module.exports = config;