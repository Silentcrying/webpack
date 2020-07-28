/**
 * webpack.config.js  webpack配置文件
 *     作用：指示webpack干哪些活(当运行webpack指令时，会加载里面的配置)
 * 
 *     所有构建工具都是基于nodejs平台运行的模块，默认(commonjs)
 */
const { resolve } = require('path');


 module.exports = {
     // 入口起点
     entry: './src/index.js',
     // 输出
     output: {
         // 输出文件名
         filename: 'built.js',
         // 输出路径名  __dirname nodejs的变量，代表当前文件的目录绝对路径
         path: resolve(__dirname, 'build')
     },
     // loader的配置  不同文件必须配置不同的loader处理
     module: {
        rules: [
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理  use数组中loader的执行：从右到左，从下到上，依次执行
                use: [
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件标称commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css文件
                    'less-loader'
                ]
            }
        ]
     },
     // plugins的配置
     plugins: [],
     // mode模式的值： development 和 production
     mode: 'development'
 }
