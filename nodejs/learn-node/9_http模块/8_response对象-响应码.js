const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 设置状态码
  // 方式一: 直接给属性赋值
  // res.statusCode = 401
  // 方式二: 和head一起设置
  res.writeHead(503)

  res.end('hello ------')
})

server.listen(8081, 'localhost', () => {
  console.log('localhost: 8081');
  
})