const fs = require('fs')
const path = require('path')

// 1. 创建文件夹
// const dirname = './lrm'
// if(!fs.existsSync(dirname)){
//   fs.mkdir(dirname, error=>{
//     console.log(error);
//   })
// } 

// 2. 读取文件夹中的所有文件
// fs.readdir(dirname, (error, files) => {
//   if(error) throw error
//   console.log(files);
// })

// 递归读取文件
// function getFlies(dirname) {
//   fs.readdir(dirname, {withFileTypes: true}, (error, files) => {
//     if(error) throw error
//     for (const file of files) {
//       // fs.stat(filepath, ()={}) // 可以用这种方法
//       // 判断是否为文件夹
//       if(file.isDirectory()){
//         const filepath = path.resolve(dirname, file.name)
//         getFlies(filepath)
//       }else{
//         console.log(file.name);
//       }
//     } 
//   })
// }
// getFlies(dirname)

// 3. 文件夹的重命名
fs.rename('./lrm', './lwx', error => {
  console.log(error); 
})