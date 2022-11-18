const express = require('express')
const multer = require('multer')

const app = express()
// json解析
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// form-data解析
app.post('/login', multer().any(), (req, res, next) => {
  console.log(req.body);
  res.send(req.body)
  // res.end('用户登录成功啦!')
})

app.listen(8081, () => {
  console.log('form-data解析服务启动成功!');
})