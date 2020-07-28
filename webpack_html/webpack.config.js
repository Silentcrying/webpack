const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * loader: 下载 ---> 使用(配置loader)
 * plugins: 下载---> 引入---> 使用
 * 
 */
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: []
    },
    plugins: [
        // html-webpack-plugin  默认创建一个空的HTML，引入打包输出的所有资源(js/css) 无结构
        new HtmlWebpackPlugin({
            // 复制 './src/index.html' 文件，并自动引入打包的资源
            template: './src/index.html'
        })
    ],
    // mode: development  production
    mode: 'development'
}