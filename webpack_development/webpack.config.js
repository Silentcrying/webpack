const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * HMR: hot module replacement 热模块替换 / 模块热替换
 *    作用： 一个模块发生变化，只会重新打包这一个模块(而不是打包所有模块)，极大提升构建速度
 *    样式文件：可以使用HMR,内部实现style-loader
 *    js文件：默认没有HMR功能(需要做HMR)
 *      注意：HMR功能对js的处理，只能处理非入口文件；若是入口文件，则会重新打包所有文件
 *    html文件：默认不能使用HMR功能，同时导致问题： html文件不能热更新了；解决：修改entry，将html引入(不用做HMR功能)
 */

/**
 * 开发环境的配置
 * 运行项目指令：
 * webpack 会将打包结果输出
 * npx webpack-dev-server 只会在内存中编译打包，没有输出
 */
const config = {
    entry: ['./src/index.js','./src/index.html'],
    output: {
        filename: 'built.js',
        path: path.resolve(__dirname, 'built')
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
                use: ['style-loader','css-loader']
            },
            // 处理图片资源
            {
                test: /\.(jpg|jpeg|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'assert/'
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
                    name: '[hash:10].[ext]',
                    outputPath: 'other/'
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
        open: true,
        // 开启HMR功能
        hot: true
    }
}

module.exports = config;