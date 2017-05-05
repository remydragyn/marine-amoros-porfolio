const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      extractCss = new ExtractTextPlugin({
          filename: '../css/[name].css',
          allChunks: true,
          disable: !process.env.NODE_ENV === 'production' ? false : true
      });

module.exports = {
    entry: {
        app: ['./src/js/global.js', './src/scss/global.scss']
    },
    output: {
        path: path.resolve(__dirname, './build/js'),
        filename: '[name].js',
        publicPath: '/build/js/'
    },

    // devtool: process.env.NODE_ENV === 'production' ? 'eval' : 'nosources-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: extractCss.extract({
                    fallback: 'style-loader',
                    use: ['raw-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: extractCss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
         extractCss
    ]
}