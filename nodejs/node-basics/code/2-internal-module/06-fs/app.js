const fs = require('fs')
const fsPromises = require('fs').promises

// 创建文件夹
// fs.mkdir('logs'/**文件夹名称 */, (error, data)=>{
//   if(error) throw error
//   console.log('文件夹创建成功!');
// })

// // 重命名
// fs.rename('./logs', './log',(error, data)=>{
//   console.log('重命名成功!');
// })

// // 删除文件夹
// fs.rmdir('./log', (error, data)=>{
//   if(error) throw error
//   console.log('删除文件夹成功')
// })

// 读取文件夹
// fs.readdir('./logs',(error, data)=>{
//   if(error) throw error
//   console.log(data);
// })


// 写入文件
// fs.writeFile(
//   './logs/log.md', // 位置及文件名称
//   'ming',
//   (error, data) => {
//     if (error) throw error
//     console.log('写入成功!')
//   }
// )

// 内容追加
// fs.appendFile(
//   './logs/log.md', // 位置及文件名称
//   'rookie',
//   (error, data) => {
//     if (error) throw error
//     console.log('追加写入成功!', data)
//   }
// )

// 删除文件
// fs.unlink('./logs/log.md',(error)=>{
//   if(error) throw error
//   console.log('删除文件成功!');
// })

// 读取文件
// fs.readFile('./logs/log.md', (error,data)=>{
//   if(error) throw error
//   console.log('文件内容:', data.toString());
// })
// fs.readFile('./logs/log.md', 'utf-8', (error,data)=>{
//   if(error) throw error
//   console.log('文件内容:', data);
// })


// fs.readFile('./logs/log.md',(error, data)=>{
//   console.log(data.toString());
// })
// const data = fs.readFileSync('./logs/log.md', 'utf-8')
// console.log('data:',data)
// console.log('continue.....')

// ;(async ()=>{
//   const data = await fsPromises.readFile('./logs/log.md', 'utf-8')
//   console.log(data);
// })()

// 批量操作
// for (let i = 0; i < 10; i++) {
//   fs.writeFile(`./logs/log-${i}.md`, `log-${i}`, (error)=>{
//     if(error) throw error
//     console.log('success!');
//   })
// }

// 遍历
function readDir(dir) {
  fs.readdir(dir, (error,data)=>{
    if(error) throw error
    data.forEach((value, index)=>{
      let newDir = `${dir}/${value}`
      fs.stat(newDir, (err, stats)=>{
        if(err) throw err
        if(stats.isDirectory()) {
          readDir(newDir)
        }else{
          fs.readFile(newDir, 'utf-8', (error, content)=> {
            if(error) throw error
            console.log(content);
          })
        }
      })
    })
  })
}

readDir('./')

fs.watch('./logs/log-0.md',(error)=>{
  if(error) throw error
  console.log('文件发生改变!'); // 包括名称和内容
})

