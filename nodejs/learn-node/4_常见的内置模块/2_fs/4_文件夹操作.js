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

// 递归重命名文件
function renameFiles(dirname, updateStr, newStr) {
  let files = fs.readdirSync(dirname, { withFileTypes: true })
  for (const file of files) {
    let newName = file.name.replace(updateStr, newStr)
    if (file.isDirectory()) {
      const filepath = path.resolve(dirname, file.name)
      renameFiles(filepath, updateStr, newStr)
    } else if (file.name.includes(updateStr)) {
      fs.renameSync(`${dirname}/${file.name}`, `${dirname}/${newName}`, (error) => {
        if (!error) {
          console.log(newName + ' 已重命名！')
        }
      })
    }
  }
}
/**
 * 参数一: 根目录
 * 参数二: 修改前的内容
 * 参数三: 要替换的内容
 */
renameFiles('./', '【更多资源：www.baidu.com】', '')
