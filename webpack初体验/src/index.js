/**
 * 入口起点文件: index.js
 * 
 * 运行指令：
 *  开发环境: webpack ./src/index.js -o ./build/build.js --mode=development
 *  webpack会以  ./src/index.js为入口文件开始打包，打包后输出到./build/built.js
 *  整体打包环境是开发环境
 * 
 * 打包内容：
 *  Hash: dc54fdceda0db5c0b716                 类似id的存在(哈希值)
    Version: webpack 4.44.0                    打包的版本
    Time: 48ms                                 打包用时
    Built at: 2020-07-28 10:32:43
    Asset      Size        Chunks             Chunk Names 表头对应：打包后的文件  大小
    built.js   4.17 KiB    main  [emitted]    main
    Entrypoint main = built.js                打包输出文件
    [./src/index.js] 380 bytes {main} [built] 参与打包的文件
 * 
 * 生产环境： webpack ./src/index.js -o ./build.built.js --mode=production
 * 
 * 2. 结论：
 *    webpack可以处理js、json资源, 不能处理css、img等其他资源
 *    生产环境和开发环境将ES6模块编译成浏览器能识别的模块化
 *    生产环境比开发环境多一个压缩js代码
 */


import data from  './data.json';
import './index.css';


console.log(data)


 function add(x,y) {
     return x+y;
 }
 console.log(add(1,8))