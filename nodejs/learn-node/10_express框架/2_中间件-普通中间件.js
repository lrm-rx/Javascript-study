const express = require('express')

const app = express()

// 普通中间件
// 注册一个普通的中间件
app.use((req, res, next) => {
  console.log('注册第1个普通中间件!');
  next()
})

app.use((req, res, next) => {
  console.log('注册第2个普通中间件!');
  next()
})

app.use((req, res, next) => {
  console.log('注册第3个普通中间件!');
  res.end('注册普通中间件!')
})


app.listen(8080, () => {
  console.log('普通中间件测试端口已经启动!');
})