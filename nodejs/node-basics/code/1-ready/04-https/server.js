const http = require('http')

// 创建http服务器
const server = http.createServer((request, response)=>{
  let url = request.url
  response.write(url)
  response.end()
})

server.listen(8080, 'localhost', ()=>{
  console.log('8080端口启动');
})