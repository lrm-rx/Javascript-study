const fs = require('fs')

// 传统的写入方式
// fs.writeFile('./lpl.txt', 'lpl, 加油！', (error) => {
//   console.log(error);
// })

// Stream的写入方式
const writer = fs.createWriteStream('./foo.md', {
  flags: 'r+',
  start: 4
})

writer.write('lpl,come on!', (error) => {
  if(!error) {
    console.log('写入成功！');
  }
})

writer.write('加油呀！', (error) => {
  console.log('第二次写入');
})

// writer.close()
writer.end()

writer.on('close', () => {
  console.log('文件被关闭！');
})
