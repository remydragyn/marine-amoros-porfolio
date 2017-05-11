const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      extractCss = new ExtractTextPlugin({
          filename: 'css/[name].css',
          allChunks: true,
          disable: !process.env.NODE_ENV === 'production' ? false : true
      });

module.exports = {
    entry: {
        app: ['./src/js/global.js', './src/scss/global.scss']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/[name].js',
        publicPath: '/build/'
    },

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
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader',
                })
            }, 
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader','css-loader']
            }, 
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        name: 'images/[name]-[hash:4].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
         extractCss
    ]
}