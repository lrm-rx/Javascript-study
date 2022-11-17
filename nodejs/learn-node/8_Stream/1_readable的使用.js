const fs = require('fs')

// 传统方式
// fs.readFile('./note.md', {encoding: 'utf-8'}, (error, data)=>{
//   console.log(data);
// })

// 流的方式读取
const reader = fs.createReadStream('./note.md', {
  start: 3,
  end: 6,
  highWaterMark: 2
})

// 数据读取的过程
reader.on('data', (data)=>{
  console.log(data);
  reader.pause() // 暂停
  setTimeout(() => {
    reader.resume();
  }, 1000);
})

reader.on('opne', ()=>{
  console.log('文件被打开');
})

reader.on('close', ()=>{
  console.log('文件被关闭');
})

const reader2 = fs.createReadStream('./note.md', {encoding: 'utf-8'})

reader2.on('data', (data)=>{
  console.log('data111111', data);
})
