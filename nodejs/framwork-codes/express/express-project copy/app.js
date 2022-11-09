const express = require('express')
const app = express()
const router = require('./router/index')
const routerVideo = require('./router/video')

// app.all('/xx', (req, res)=>{
//   res.send('xxx')
// })

// app.get('/us?er', (req, res)=>{
//   res.send(`${req.method}----${req.url}`)
// })

// 获取get请求url参数
// app.get('/user/:id', (req, res)=>{
//   console.log(req.params)
//   res.send(`${req.method}---${req.url}`)
// })

app
.get('/user', (req,res)=>{
  // res.send(`${req.method}---${req.url}`)
  // res.download() // 下载
  // res.end()
  // res.json() // 支持json格式的数据响应
  // res.redirect() // 重定向
  // res.render()
  // res.status()
  // res.sendStatus()
  // res.status(200).json()
})
.post('/video',(req,res)=>{
  res.send(`${req.method}---${req.url}`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
