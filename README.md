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

# webpack性能优化
* 开发环境性能优化
+ 生产环境性能优化


## 开发环境性能优化
+ 优化打包构建速度
  - HMR
- 优化代码调试
  [^ source-map
     * source-map:  一种提供源代码到构建后代码映射技术 (如果构建后代码出错了，通过映射关系可以追踪到源代码错误)
     *  source-map 生成的.js.map会在打包文件的外部
     * 参数: 
     *    [inline-|hidden-|eval-][nosources-][ cheap-[ module-]]source-map
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
    + devtool: 'source-map'
  ]

 ## 生产环境性能优化
 * 优化打包构建速度
   * oneOf 不会重复的去遍历loader 当然重复loader要分开 不然只执行一个
   * babel 缓存
   + 多进程打包   注意：多进程开始每个进程都会有进程时间
   * externals  限制打包
   * dll 限制打包
 + 优化代码运行的性能
   + 缓存(hash-chunkhash-contenthash)
   - tree shaking(树摇) 去除应用程序中没有使用的代码   注意：必须开启es6  production环境 会自动启动树摇
        [^ tree shaking(树摇)  去除应用程序中无用的代码
          前提： 1、必须使用ES6模块化  2、开启production环境
          作用： 减少打包代码体积
        
          在package.json中配置
          "sideEffecs": false  所有代码都没有副作用(都可以进行tree shaking)  问题: 可能会把css/@basel/prolyfill(副作用) 文件干掉
          故： "sideEffecs": ["**.css", "#.less"] 这样就不会因为版本的不同造成tree shaking 将文件干掉]
    + 代码分割code split
    + js代码懒加载/预加载
    + pwa 渐进式网络应用程序(离线可浏览)  兼容性差
    