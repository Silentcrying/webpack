const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出文件位置
    output: {
        filename: 'built.js',
        path: path.resolve(__dirname, 'build')
    },
    // 相关loader的处理
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            /** 
             * js 兼容性处理: babel-loader @babel/core @babel/preset-env
             *  1. 基本的js兼容性处理 ---> @babel.preset-env
             *     问题： 只能转换基本语法，如promise不能转换 
             *  2. 全部js兼容性处理 ---> @babel/polyfill  只需要引入 问题：只解决部分兼容性问题，但将所有的兼容性代码全部引入，体积太大
             *  3. 按需加载 ---> core-js 使用第三种方案 第二种就不用了;core-js需要配置
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 预设： 只是babel做怎么样的兼容性处理
                    presets: [
                        [
                            '@babel/preset-env',
                            {// 按需加载
                                useBuiltIns: 'usage',
                                // 指定core-js版本
                                corejs: {
                                    version: 3
                                },
                                // 指定兼容性做到哪个版本浏览器
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9',
                                    edge: '17'
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    // 生产环境光会自动压缩代码
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                // 移除空格
                collapseInlineTagWhitespace: true,
                // 移除注释
                removeComments: true
            }
        })
    ]
}