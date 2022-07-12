const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    devServer: {
        devMiddleware: {
            index: false, // specify to enable root proxying
          },
        proxy: {
          '/': {
            target: 'http://localhost:8081',
            // target: 'http://sentiment-analysis-100.herokuapp.com',
            bypass: function (req, res, proxyOptions) {
              if (req.headers.accept.indexOf('html') !== -1) {
                console.log('Skipping proxy for browser request.');
                return '/index.html';
              }
            },
          },
        },
      },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
          
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}
