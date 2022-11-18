const express = require('express')
const qs = require('querystring')

const app = express()

// json解析
app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/json') {
    req.on('data', (data) => {
      req.body = JSON.parse(data.toString())
      next()
    })
  } else if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    req.setEncoding('utf-8')
    req.on('data', (data) => {
      console.log(data);
      req.body = qs.parse(data)
      next()
    })
  } else {
    next()
  }
})

app.use('/login', (req, res, next) => {
  res.send(req.body)
})

app.listen(8081, () => {
  console.log('服务启动成功!');
})