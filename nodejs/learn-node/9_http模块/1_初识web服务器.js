const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  res.end('hello')
})

server.listen(8081, 'localhost', () => {
  console.log('localhost: 8081');
  
})