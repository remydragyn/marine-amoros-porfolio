const webpack = require('webpack'),
      config = require('./webpack.prod.js'),
      shell = require('shelljs'),
      ora = require('ora'),
      spinner = ora('bulding…');

spinner.start()
shell.rm('-rf', 'build')

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

