const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将js中的css资源整合一个单独的css文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css资源

/**
 * 生产环境的配置
 * 
 * mini-css-extract-plugin 
 */
// 设置nodejs环境变量
// process.env.NODE_ENV = 'development';
// optimize-css-assets-webpack-plugin


const config = {
    entry: './src/index.js',
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
                use: [
                    // 'style-loader', // 创建style标签，将样式放入
                    // 这个loader取代style-loader 作用：将js中的css资源 单独成一个文件(默认main.css) 通过link标签引入样式，而不是style；并且不会出现闪频现象
                    MiniCssExtractPlugin.loader,
                    'css-loader',  // 将css文件整合到js文件中
                    /**
                     * css 兼容性处理：postcss --> postcss-loader postcss-preset-env
                     * 帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
                     * "browserslist": {
                     *   开发环境设置环境变量--> 设置node环境变量： process.env.NODE_ENV = development
                            "development": [
                                "last 1 chrome version",
                                "last 2 firefox version",
                                "last 1 safari version"
                            ],
                            "production": [
                                ">0.2%",
                                "not dead",
                                "not op_mini all"
                            ]
                        }
                     */
                    // 使用loader的默认配置(例如：css-loader) 修改loader配置
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                // postcss的插件
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ]
            },
            // 处理图片资源
            {
                test: /\.(jpg|jpeg|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'assert'
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
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin()
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