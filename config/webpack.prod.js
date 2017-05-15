const config = require('./webpack.base'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      extractCss = new ExtractTextPlugin({
        filename: 'css/[name].css',
        allChunks: true,
      });

config.plugins = config.plugins.concat([
    extractCss,
    new webpack.optimize.UglifyJsPlugin({
        comments: false
    })
])

const cssLoaders = config.module.rules[0].use,
      exportLoaders = cssLoaders.slice(1, cssLoaders.length);

config.module.rules[0].use = null
config.module.rules[0].use = extractCss.extract({
    use: exportLoaders,
    fallback: 'style-loader'
})

console.log('\n\n', exportLoaders, '\n\n');

module.exports = config;