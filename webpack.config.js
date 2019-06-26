'use strict'

const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [path.join(__dirname, 'client', 'index')],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
}
