// 1. 导入http模块
const http = require('http')

const router = require('./router')
// 2. 创建服务器
// 获取支服务器的实例对象
const server = http.createServer()

// 3. 监听客户端事件
server.on('request', (req,res)=> {
  router(req,res)
})

server.listen(3000, ()=> {
  console.log('3000端口已经启用!');
})
