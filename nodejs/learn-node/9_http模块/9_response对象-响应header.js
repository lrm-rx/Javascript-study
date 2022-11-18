const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 设置响应header
  // 方式一:
  // res.setHeader('Content-Type','text/plain;charset=utf8')

  // 方式二:
  res.writeHeader(200, {
    "Content-Type": "text/plain;charset=utf8"
  })
  

  res.end('hello ------')
})

server.listen(8081, 'localhost', () => {
  console.log('localhost: 8081');
  
})