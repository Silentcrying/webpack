const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    // 单入口
    // entry: ['./src/index.js','./src/index.html'],
    // entry: './src/index.js',
    entry: {
        // 多入口： 有一个入口，最终输出就有一个bundle
        main: './src/index.js',
        test: './src/test.js' 
    },
    output: {
        // [name] 取文件名(入口文件名)
        filename: '[name].[contenthash:10].js',
        path: path.resolve(__dirname, 'built')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'production'
}

module.exports = config;