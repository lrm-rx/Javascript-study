const Koa = require('koa')

const app = new Koa()

// use注册中间件, 
app.use((ctx,next) => {
  if(ctx.request.url === '/login' && ctx.request.method === 'GET') {
    ctx.response.body = '登录成功!'
  }else{
    ctx.response.body = '其他操作!'
  }
  
})

/**
 * koa并没有提供以下注册方式
 * 1. methods方式: app.get()/app.post()
 * path方式: app.use('/home',(ctx, next)=>{})
 * 连续注册: app.use((ctx, next)=>{
 * 
 * }, (ctx, next)=>{
 * 
 * })
 */

app.listen(8081, () => {
  console.log('服务启动成功!');
})