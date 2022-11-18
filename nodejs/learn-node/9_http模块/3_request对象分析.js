const http = require('http')

// 创建一个web服务器
const server = http.createServer((request, response) => {
  // request接收客户端传给服务器的所有信息
  console.log('url', request.url);
  console.log('method', request.method);
  console.log('headers', request.headers);

  response.end('hello')
})

// 启动服务器,并且制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log('启动成功!');
})