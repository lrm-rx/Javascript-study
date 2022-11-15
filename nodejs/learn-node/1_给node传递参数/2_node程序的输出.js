console.log(process.argv[2])
console.log(process.argv[3])
console.clear() // 清空

console.log(process.argv)
// 在执行node index.js 后面添加, 以空格隔开
process.argv.forEach(element => {
  console.log(element)
});

function fn1() {
  fn2()
}

function fn2() {
  console.trace() // 打印调用栈
}

fn1()
