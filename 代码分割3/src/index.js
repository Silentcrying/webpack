console.log(8888)

/**f
 * 通过js代码，让某个文件被单独打包成一个chunk
 * import 动态导入语法： 能将某个文件单独打包
 */
// /* webpackChunkNmae: 'test'*/固定打包输出的文件名 而不是id
import(/* webpackChunkName: 'test'*/'./test')
    .then((result) => {
        // 文件加载成功
        console.log(result)
    })
    .catch(() => {
        console.log('文件加载失败')
    });
// import './print'

// print()