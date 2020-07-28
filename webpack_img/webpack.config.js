const path = require('path');
const HtmlWebpackPlguin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: path.resolve(__dirname, 'build')
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
                // 处理图片资源 默认无法处理html中的图片资源
                test: /\.(jpg|png|gif)$/,
                // 使用一个loader
                // 下载url-loader依赖file-loader
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb会被base64处理; 优点：减少请求数量(减少服务器压力)，缺点： 图片体积更大(图片请求速度慢)
                    limit: 8* 1024,
                    // 若存在问题(html中引入的img为'[Object Module]'): 因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
                    // 解决： 关闭url-loader的es6模块，使用commonjs解析
                    esModule: false,
                    minimize: true,
                    // 图片重命名
                    // [hash:10] 取哈希前10位
                    // [ext]取文件原来扩展名
                    name: '[hash:10].[ext]',
                    outputPath: 'assert/'
                }
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片(负责引入img，从而被url-loader进行处理)
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlguin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}