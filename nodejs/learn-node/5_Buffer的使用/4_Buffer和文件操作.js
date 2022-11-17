const sharp = require('sharp')
const fs = require('fs')

// 读取文本文件
// fs.readFile('./foo.txt', {encoding: 'utf-8'}, (error, data) => {
//   if(error) throw error
//   console.log(data);
// })

// 读取图片文件
// fs.readFile('./xhh.jpg',(error, data) => {
//   if(error) throw error
//   console.log(data);
//   fs.writeFile('./xiaohuihui.png', data, error => {
//     console.log(error);
//   })
// })

// sharp库的使用
// sharp('./xhh.jpg')
//   .resize(20, 20)
//   .toFile('./smallxhh.png')


sharp('./xiaohuihui.png')
.resize(300, 300)
.toBuffer()
.then(data=>{
  fs.writeFile('./xiao.png', data, error=>{
    console.log(error);
  })
})