const fs = require('fs')
/**
 * 参数1: 写入的文件名
 * 参数2: 写入的内容
 * 参数3: 回调函数 -- 形参: 错误返回信息
 * 注意: writeFile方法会将文件原有的内容会被清空
 */
fs.writeFile('./a.txt', '123456', (error)=>{
  if(error) throw error
  console.log(error)
})