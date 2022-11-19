const express = require('express')

const app = express()

const middleware1 = (req, res, next) => {
  req.message = 'aaa'
  next()
  res.send(req.message)
}

const middleware2 = (req, res, next) => {
  req.message += 'bbb'
  next()
}
const middleware3 = (req, res, next) => {
  req.message += 'ccc'
  // console.log(req.message);
}

app.use(middleware1, middleware2, middleware3)

app.listen(8081, () => {
  console.log('服务启动成功!');
})