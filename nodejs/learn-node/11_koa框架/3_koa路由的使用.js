const Koa = require('koa')

const router = require('./router/user')

const app = new Koa()

app.use((ctx, next) => {
  // ctx.response.body = 'Hello koa-router'
  next()
})

// 注册路由
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8081, () => {
  console.log('koa路由服务器启动成功!');
})