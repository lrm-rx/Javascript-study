const { info } = require('console')
const fs = require('fs')
const filepath = './a.md'
// 读取文件信息
// 1. 方式一: 同步操作
// const fileinfo = fs.statSync(filepath)
// console.log(fileinfo);
// console.log('这里有1000行代码要执行');


// 2. 方式二: 异步操作
// fs.stat(filepath, (error, info)=>{
//   if(error) throw error
//   console.log(info);
// })
// console.log('这里有1000行代码要执行');

// 3. 方式三: promise
fs.promises.stat(filepath).then(info => {
  console.log(info);
}).catch(error => {
  console.log(error);
})
console.log('这里有1000行代码要执行');




