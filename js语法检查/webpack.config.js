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
             * 语法检查：eslint-loader 依赖于eslint
             * 注意： 只检查自己写的代码，不检查第三方库
             *
             * 设置检查规则：
             *   package.json中eslintConfig中设置
             * "eslintConfig": {
                    "extends": "airbnb-base"
                }
             *   基于airbnb校验--> eslint-config-airbnb-base eslint-plugin-import
             */
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除检查
        loader: 'eslint-loader',
        options: {
          // 自动修复eslint错误
          fix: true
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
