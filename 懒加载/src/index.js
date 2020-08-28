
console.log('hahah是的冯绍峰')
// import {print} from './print' // 这样渲染index.js同时会渲染print.js

document.getElementById('btn').onclick = function() {
    // webpack懒加载  文件不会被加载 只有需要时才会加载
    // import('./print')
    // .then(({print}) => {
    //     print()
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
    
    // 正常加载可以认为是并行加载(同一时间加载多个文件)
    // 预加载 prefetch  文件会预先加载 等其他资源加载完毕，再进行加载该资源
    import(/*webpackPrefetch: true*/'./print')
    .then(({print}) => {
        print()
    })
    .catch((err) => {
        console.log(err)
    })
}