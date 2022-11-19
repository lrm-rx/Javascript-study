const Koa = require('koa')

const app = new Koa()
app.use((ctx, next) => {
  const isLogin = false
  if(!isLogin){
    ctx.app.emit('error', new Error('您还没有登录哦'), ctx)
  }
})

app.on('error', (error, ctx) => {
  ctx.status = 401
  ctx.body = '您还没有登录哦'
})

app.listen(8081, () => {
  console.log('服务启动成功!');
})