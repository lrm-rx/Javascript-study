const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')
const Router = require('koa-router')
const app = new Koa()
const uplaod = multer()
const loginRouter = new Router({ prefix: '/login' })

app.use(bodyParser())
loginRouter.post('/', uplaod.any(), (ctx, next) => {
  // koa-multer 将参数放到了 ctx.req.body 中
  console.log(ctx.req.body);
  console.log(ctx.request.body);
  ctx.response.body = 'koa-multer'
})

app.use(loginRouter.routes())

// app.use(bodyParser())
// app.use((ctx, next) => {
//   console.log(ctx.request.body);
//   ctx.response.body = ctx.request.body
// })

app.listen(8081, () => {
  console.log('koa路由参数处理!');
})