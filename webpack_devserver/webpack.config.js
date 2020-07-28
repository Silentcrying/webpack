const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                exclude: /\.(css|html|js)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assert/'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // 开发服务器 devServer：  用来自动化(自动编译，自动打开浏览器，自动刷新浏览器)
    // 特点：只会在内存中编译打包，不会有任何输出
    // 启动devServer指令为：npx webpack-dev-server
    devServer: {
        // 项目构建后的路径
        contentBase: path.resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 8888,
        // 自动打开浏览器
        open: true
    }
}

module.exports = config;