const express = require('express')

const app = express()

// 路径和方法匹配的中间件
app.use((req, res, next) => {
  console.log('common');
  next()
})

app.get('/users', (req, res, next) => {
  console.log('user page1');
  next()
}, (req, res, next) => {
  console.log('user page2');
  next()
}, (req, res, next) => {
  console.log('user page3');
  next()
}, (req, res, next) => {
  console.log('user page4');
  next()
}, (req, res, next) => {
  console.log('user page5');
  res.end('users page')
})

app.listen(8081, () => {
  console.log('服务启动成功!');
})