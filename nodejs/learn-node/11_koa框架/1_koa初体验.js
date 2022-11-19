const Koa = require('koa')

const app = new Koa()

app.use((ctx,next) => {
  ctx.response.body = 'Hello, Koa'
  // ctx.body = 'Hello, Koa ......'
})

app.listen(8081, () => {
  console.log('服务启动成功!');
})