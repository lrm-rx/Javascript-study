const http = require('http')
const path = require('path')
const fs = require('fs')

// // 标准输入输出
// process.stdin.pipe(process.stdout)

// // 复制文件
// const fileName1 = path.resolve(__dirname, 'f1.txt')
// const fileName2 = path.resolve(__dirname, 'f2.txt')

// const readStream = fs.createReadStream(fileName1)
// const writeStream = fs.createWriteStream(fileName2)

// readStream.pipe(writeStream)
// readStream.on('data', (chunk) => {
//   console.log(chunk.toString());
// })
// readStream.on('end', () => {
//   console.log('copy ok');
// })

const fileName1 = path.resolve(__dirname, 'f1.txt')
const app = http.createServer((req, res) => {
  // if(req.method === 'POST'){
  //   req.pipe(res)
  // }
  if(req.method === 'GET'){
    res.writeHead(200, {
      "Content-Type": "application/json;charset=utf8"
    })
    const readStream = fs.createReadStream(fileName1)
    readStream.pipe(res)
  }
})

app.listen(8000)