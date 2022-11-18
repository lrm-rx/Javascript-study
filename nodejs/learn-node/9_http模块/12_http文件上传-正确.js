const http = require('http')
const fs = require('fs')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method === 'POST') {
    console.log(111111);
    // 文件必须设置为二进制
    req.setEncoding('binary')
    let body = ''
    const totalBoundary = req.headers['content-type'].split(';')[1]
    const boundary = totalBoundary.split('=')[1]
    req.on('data', (data) => {
      body += data
    })
    req.on('end', () => {
      // 处理body
      // 1. 获取 req.headers['content-type'] 的位置
      const payload = qs.parse(body, '\r\n', ': ')
      const type = payload['Content-Type']
      // 2. 开始在 req.headers['content-type'] 的位置进行截取\
      const typeIndex = body.indexOf(type)
      const typeLength = type.length;
      let imgData = body.substring(typeIndex + typeLength)
      // 3. 将中间的两个空格去掉
      imgData = imgData.replace(/^\s\s*/, '')
      // 4. 将最后的boundary去掉
      imgData = imgData.substring(0, imgData.indexOf(`--${boundary}--`))
      fs.writeFile('./hh.jpg', imgData, 'binary', (error) => {
        console.log('文件上传成功!');
        res.end('文件上传成功!')
      })
    })
  }
})

server.listen(8081, () => {
  console.log('文件上传服务器开启中....');
})