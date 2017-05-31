const path = require('path')
const webpack = require('webpack')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')

module.exports = {
    entry: {
        app: ['./src/js/global.js', './src/scss/global.scss']
    },
    output: {
        path: path.resolve(__dirname, '../build/public'),
        filename: 'js/[name].js',
        publicPath: '/public/'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components|vendor)/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|vendor)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
                exclude: /(node_modules|bower_components|vendor)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        name: 'images/[name]-[hash:4].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf)$/,
                exclude: /(node_modules|bower_components|vendor)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        name: 'fonts/[name].[ext]'
                    }
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules|bower_components|vendor)/,
                use: {
                    loader:'eslint-loader',
                    options: {
                        configFile: path.resolve(__dirname, '.eslintrc'),
                        formatter: eslintFriendlyFormatter
                    }
                }
            }
        ]
    },
    plugins: []
}