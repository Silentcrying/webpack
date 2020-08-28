const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/build.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
