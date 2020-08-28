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
    // 可以将node_modules中代码单独打包一个chunk最终输出
    // 自送分析多入口chunk中 有没有公共的文件，如果有会打包成单独的一个chunk
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'production'
}

module.exports = config;