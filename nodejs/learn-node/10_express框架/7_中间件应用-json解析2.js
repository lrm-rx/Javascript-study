const express = require('express')

const app = express()

// json解析
app.use(express.json())
// extended
// true: 对urlencoded进行解析时,使用的是第三方库: qs
// false: 对urlencoded进行解析时, 使用的是Node内置模块: querystring
app.use(express.urlencoded({extended: false}))

app.use('/login', (req, res, next) => {
  // 原始json解析
  // req.setEncoding('utf-8')
  // req.on('data', (data) => {
  //   console.log(data);
  //   res.end(data)
  // })
  // req.on('end', () => {
  //   console.log('login');
  // })
  res.send(req.body)
})

app.listen(8081, () => {
  console.log('服务启动成功!');
})