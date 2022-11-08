const fs = require('fs')
const url = require('url')
const controller = require('./controller')
module.exports = (req,res) => {
  // req.method 获取客户端的请求方法
  if(req.method === "GET") {
    // console.log(url.parse(req.url,true).query.id) // 获取get传参
    if(req.url === '/') {
      controller.index(res)
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
    })
    req.on('end', ()=>{
      // console.log(require('querystring').parse(data))
      const postData = require('querystring').parse(data)
      controller.user(postData, res)
    })
    res.end()
  }
}