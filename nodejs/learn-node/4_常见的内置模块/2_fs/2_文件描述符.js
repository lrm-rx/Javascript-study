const fs = require('fs')

fs.open('./a.md',(error, fd)=>{
  if(error) throw error
  // 通过描述符获取文件信息
  fs.fstat(fd, (error, info)=>{
    console.log(info);
  })
})