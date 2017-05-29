const webpack = require('webpack')
const config = require('./webpack.prod.js')
const shell = require('shelljs')
const ora = require('ora')
const spinner = ora('bulding…')

spinner.start()
shell.rm('-rf', 'build/public')

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

