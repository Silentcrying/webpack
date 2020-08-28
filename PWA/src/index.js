import './style/iconfont.css'
import './style/index.less'
import $ from 'jquery'
import './print';
import './print';
console.log('hahah')
// prints()
console.log($)
// 注册 serviceworker  PWA
// 处理兼容性问题
/**1
 * 1、eslint不认识window、navigator全局变量
 *    解决： 需要修改package.json中eslintConfig配置
 *          "env": {
 *              "browser": true  // 支持浏览器端全局变量
 *           }
 * 2、serviceworker代码必须运行在服务器上 (注册成功后会将资源放到canch缓存中 离线状态下从(serviceWorker)缓存中读取缓存的资源)
 *      ---> node.js  服务
 *      ---> npm i serve -g  快速创建服务
 *           serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
 */
/**
 * Navigator 对象包含有关浏览器的信息。
 * 注释：没有应用于 navigator 对象的公开标准，不过所有浏览器都支持该对象。
 */
 if ('serviceWorker' in navigator) {
     window.addEventListener('load', () => {
         navigator.serviceWorker.register('/service-worker.js')
         .then(() => {
             console.log('serviceworker注册成功')
         })
         .catch(() => {
             console.log('serviceworker注册失败')
         })
     })
 }