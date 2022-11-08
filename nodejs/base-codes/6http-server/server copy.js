// 1. 导入http模块
const http = require('http')
const fs = require('fs')
const url = require('url')
// 2. 创建服务器
// 获取支服务器的实例对象
const server = http.createServer()

// 3. 监听客户端事件
server.on('request', (req,res)=> {
  // res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  // res.setHeader('Content-Type', 'text/html;charset=utf-8')
  // res.write('写入') // 写入数据
  // res.write('<h1>http-server</h1>')
  // res.end()
  // req.method 获取客户端的请求方法
  if(req.method === "GET") {
    // console.log(url.parse(req.url,true).query.id) // 获取get传参
    if(req.url === '/') {
      fs.readFile('./index.html', 'utf8', (error, data)=>{
        res.write(data)
        res.end()
        // res.end(data) // 等价于以上两行代码
      })
    }else{
      fs.readFile('./image/xhh.jpg',(error,data)=>{
        res.write(data)
        res.end()
      })
    }
  }else if(req.method === "POST") {
    let data = ''
    req.on('data',(dt)=>{
      data += dt
      // console.log(dt.toString());
    })
    req.on('end', ()=>{
      console.log(require('querystring').parse(data))
    })
    res.end()
  }
})

server.listen(3000, ()=> {
  console.log('3000端口已经启用!');
})
