const fs = require('fs')
// console.log('fs:',fs)
/**
 * 参数1: 读取的文件名
 * 参数2: 编码方式
 * 参数3: 回调函数 -- 形参1: 错误返回信息 形参2: 成功返回信息
 */
fs.readFile('./a.txt', 'utf8', (error, data)=>{
  if(error) throw error
  console.log(error)
  console.log(data)
})