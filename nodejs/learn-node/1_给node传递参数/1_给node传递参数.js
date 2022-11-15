// 在执行node index.js 后面添加, 以空格隔开
process.argv.forEach(element => {
  console.log(element)
});
console.log(process.argv)
