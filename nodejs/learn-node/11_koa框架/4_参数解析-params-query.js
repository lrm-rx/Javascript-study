const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const userRouter = new Router({prefix: '/users'})

userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.params);
  console.log(ctx.request.query);
  console.log(ctx.query);
})

app.use(userRouter.routes())


app.listen(8081, () => {
  console.log('koa路由参数处理!');
})