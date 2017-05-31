const webpack = require('webpack')
const config = require('./webpack.base.js')
const ManifestPlugin = require('webpack-manifest-plugin')
const shell = require('shelljs')
const ora = require('ora')
const spinner = ora('init…')

config.plugins = config.plugins.concat([
    new ManifestPlugin()
])

spinner.start()

webpack(config, function(err, stats){
    spinner.stop()

    if (err) throw err

    process.stdout.write(stats.toString({
        color: true,
        modules: false,
        children: false,
        chunks: false,
        chunksModules: false
    }) + '\n')

})