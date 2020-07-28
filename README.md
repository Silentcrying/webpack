# webpack
webpack: 一种前端资源构建工具，一个静态资源打包器(module bundler)
### 静态资源
前端所有资源文件(js/json/css/img/less/...)都会被视作模块处理，根据模块依赖关系进行静态分析，打包生成对应的静态资源(bundle);
### webpack五个核心概念
#### Entry
入口(Entry)指示 Webpack已哪个文件作为入口起点开始打包，分析构建内部依赖图
#### Output
输出(Output)指示 Webpack打包后的资源bundles输出到哪里去，以及如何命名
#### Loader
Loader让Webpack能够去处理那些非JavaScript文件(Webpack自身只能理解JavaScript)
#### Plugins
插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
### Mode
模式(Mode)指示Webpack使用相应模式的配置
本地代码调试运行的环境(开发环境)：会将process.env.NODE_ENV的值设为development。启用NamedChunksPlugin和NameModulesPlugin
生产模式(线上环境production)：会将process.env.NODE_ENV 的值设为production，启用FlagDependencyUsagePlugin，FlagincludeChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin，OccueeenceOrderPlugin，SideEffectsFlagPlugin和UglifysPlugin





# 相关依赖包 commonjs模块
`
webpack
webpack-cli 通过它来使用指令 来使用webpack中的内容
"css-loader": "^4.0.0",
"file-loader": "^6.0.0",
"html-loader": "^1.1.0",
"html-webpack-plugin": "^4.3.0",
"less-loader": "^6.2.0",
"style-loader": "^1.2.1",
"url-loader": "^4.1.0",
"webpack": "^4.44.0",
"webpack-cli": "^3.3.12",
"webpack-dev-server": "^3.11.0"
`






# src 业务代码 es6模块
