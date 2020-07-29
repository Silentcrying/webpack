// import "@babel/polyfill"


function add(x, y) {
  return x + y;
}

// 下一行禁止检查
// eslint-disable-next-line
console.log(add(1, 2));

const p = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器完了')
    resolve();
  }, 1000);
})

console.log(p)