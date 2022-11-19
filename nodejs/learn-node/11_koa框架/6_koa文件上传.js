const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')
const app = new Koa()
const uploadRouter = new Router({prefix: '/upload'})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/')
  },
  filename: (req, file, cb) => {
    // 文件名取 时间戳和原文件的后缀名进行组合
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  // dest: './upload'
  storage
})

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = '上传头像成功!'
})

app.use(uploadRouter.routes())

app.listen(8081, () => {
  console.log('文件上传服务启动成功!');
})