const fs = require('fs')

/**
 * flag的值
 * w 打开文件写入，默认值
 * w+ 打开文件进行读写，如果不存在则创建文件：
 * r+ 打开文件进行读写，如果不存在那么抛出异常；
 * r 打开文件读取，读取时的默认值；
 * a 打开要写入的文件，将流放在文件末尾。如果不存在则创建文件；
 * a+ 打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件
 * ......
 */
// 1. 文件写入
// const content = 'edg, 加油!'
// fs.writeFile('./a.md',content, {flag: 'a'}, error=>{
//   if(error) throw error
//   console.log(error);
// })

fs.readFile('./a.md',{encoding: 'utf-8'}, (error, data) => {
  if(error) throw error
  console.log(data);
})

