const Koa = require('koa')

const app = new Koa()

const middleware1 = (ctx, next) => {
  ctx.message = 'aaa'
  next()
  ctx.body = ctx.message
}

const middleware2 = (ctx, next) => {
  ctx.message += 'bbb'
  next()
}
const middleware3 = (ctx, next) => {
  ctx.message += 'ccc'
  // console.log(ctx.message);
}

// app.use(middleware1)
// app.use(middleware2)
// app.use(middleware3)

const middlewareArray = [middleware1,middleware2,middleware3]
for (let index = 0; index < middlewareArray.length; index++) {
  const element = middlewareArray[index];
  app.use(element)
}

app.listen(8081, () => {
  console.log('服务启动成功!');
})