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
                // 放重复处理文件的loader
            },
            {
                // oneOf以下loader只会匹配一个loader(不会每次都去匹配好多loader)
                // 注意： oneOf中 不能同时去处理同一文件的loader，否则只会实效一个loader(多个可以放外面)
                oneOf: [
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
    },
    /**
     * source-map:  一种提供源代码到构建后代码映射技术 (如果构建后代码出错了，通过映射关系可以追踪到源代码错误)
     *  source-map 生成的.js.map会在打包文件的外部
     * 参数: 
     *    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
     * 
     *    source-map
     *       错误代码准确信息 和 源代码错误位置
     *    inline-source-map 内联
     *       1. 只生成一个内联的source-map
     *       2. 错误代码准确信息 和 源代码错误位置
     *    hidden-source-map 外部
     *       错误代码错误原因，但没有错误位置
     *       不能追踪源代码错误，只能提示到构建后代码错误位置
     *       隐藏源代码
     *    eval-source-map  内联
     *       1. 每一个文件都生成对应的source-map文件，在尾部  都在eval文件中
     *       2. 错误代码准确信息 和 源代码错误位置
     *    nosource-source-map  外部
     *       错误代码提示准确信息，但是没有任何源代码信息
     *       隐藏源代码
     *    cheap-source-map  外部
     *       错误代码准确信息 和 源代码错误位置
     *       提示错误只能精确到行，而不能列
     *    cheap-module-source-map  外部
     *       错误代码准确信息 和 源代码错误位置
     * 
     *    内联和外部的区别： 1. 外部生成了文件，内联没有 2.内联构建速度快
     * 
     * 开发环境：
     *     速度快，调试更友好
     *       《《《(速度快：eval>inline>cheap>...) eval-cheap-source-map < eval-source-map
     *     调试更友好
     *       《《《(source-map> cheap-module-source-map > cheap-source-map)
     *     一般用eval-source-map 或者 eval-cheap-module-source-map  脚手架默认为eval-source-map
     * 生产环境：源代码要不要隐藏？ 调试要不要更友好
     *     内联会让代码体积变大，所以生产环境不用内联
     *        《《《nosources-source-mao
     * 
     *     --->调试： source-map / cheap-module-source-map
     */
    devtool: 'source-map'
}

module.exports = config;