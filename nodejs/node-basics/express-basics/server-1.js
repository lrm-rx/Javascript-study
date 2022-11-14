const express = require('express')

// 创建服务
const app = express()

const middlewares = [
  (req, res, next) => {
    console.log(1)
    next()
  }, (req, res, next) => {
    console.log(2)
    next()
  }, (req, res, next) => {
    console.log(3)
    res.send('hello')
    next()
  }
]
// 回调函数又被称为中间件
// app.use('/', (req, res, next) => {
//   console.log(1)
//   next()
// },(req, res, next) => {
//   next()
//   console.log(2)
// },(req, res) => {
//   console.log(3)
//   res.send('hello')
// })
app.use('/api',(req, res, next) => {
  console.log('word');
  res.send('555') // 不会返回下一个send 即 / middlewares
  next() // /api会匹配 / 会执行 middlewares
})
app.use('/', middlewares)
app.use('/react',(req, res, next) => {
  console.log('react');
  next()
})
// app.use('/api',(req, res) => {
//   console.log('word');
// })

app.listen(8080, () => {
  console.log('localhost: 8080');
})