const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * 生产环境的配置
 * 
 * mini-css-extract-plugin 
 */
const config = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: path.resolve(__dirname, 'built.js')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader', // 创建style标签，将样式放入
                    // 这个loader取代style-loader 作用：将js中的css资源 单独成一个文件(默认main.css) 通过link标签引入样式，而不是style；并且不会出现闪频现象
                    MiniCssExtractPlugin.loader,
                    'css-loader'  // 将css文件整合到js文件中
                ]
            },
            // 处理图片资源
            {
                test: /\.(jpg|jpeg|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false
                }
            },
            // 处理html中的图片资源
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // 处理其他资源
            {
                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件重命名
            filename: 'css/built.css'
        })
    ],
    mode: 'development',
    // // 开发服务器 devServer：  用来自动化(自动编译，自动打开浏览器，自动刷新浏览器)
    // // 特点：只会在内存中编译打包，不会有任何输出
    // // 启动devServer指令为：npx webpack-dev-server
    // devServer: {
    //     // 项目构建后的路径
    //     contentBase: path.resolve(__dirname, 'build'),
    //     // 启动gzip压缩
    //     compress: true,
    //     // 端口号
    //     port: 8888,
    //     // 自动打开浏览器
    //     open: true
    // }
}

module.exports = config;