const path = require('path');//node中的内置模块

module.exports = {
    entry: './src/js/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js/')
    },
    module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
           {
             test: /\.(png|svg|jpg|gif)$/,
             use: [
               'file-loader'
             ]
           }
        ]
    },
    devServer: {
        contentBase: './dist/js'
    },
};