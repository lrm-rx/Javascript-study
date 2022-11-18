const path = require('path')

const express = require('express')
const multer = require('multer')

const app = express()
// json解析
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/')
  },
  filename: (req, file, cb) => {
    // 文件名取 时间戳和原文件的后缀名进行组合
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
// form-data解析
const upload = multer({
  // dest: './upload/',
  storage,
})

app.post('/login', multer().any(), (req, res, next) => {
  console.log(req.body);
  res.end('用户登录成功啦!')
})

app.use('/upload', upload.single('file'), (req, res, next) => {
  console.log('上传成功!');
  console.log(req.body);
  res.send(req.body)
  // res.end('上传成功!')
})

app.listen(8081, () => {
  console.log('form-data解析服务启动成功!');
})