const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 响应结果
  res.write('hello')
  res.end()
  // 相当于以下代码
  // res.end('hello ------')
})

server.listen(8081, 'localhost', () => {
  console.log('localhost: 8081');
  
})