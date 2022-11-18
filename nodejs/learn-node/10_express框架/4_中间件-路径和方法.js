const express = require('express')

const app = express()

// 路径和方法匹配的中间件
app.use((req, res, next) => {
  console.log('common');
  next()
})
app.get('/home',(req, res, next) => {
  console.log('home page');
  res.end('home page')
})

app.post('/login', (req, res, next) => {
  console.log('login page');
  next()
}, (req, res, next) => {
  console.log('abc');
  res.end('login page')
})

app.listen(8081, () => {
  console.log('服务启动成功!');
})