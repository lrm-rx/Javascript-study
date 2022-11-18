const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('no path');
  next()
})

// 路径匹配
app.use('/home',(req, res, next) => {
  console.log('home');
  next()
})

app.use('/home',(req, res, next) => {
  console.log('home.........');
  res.end('home')
})

app.listen(8081, () => {
  console.log('express is runing at port 8081');
})