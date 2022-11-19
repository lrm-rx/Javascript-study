const Koa = require('koa')
const koaStatic = require('koa-static')

const app = new Koa()

app.use(koaStatic('./build'))

app.listen(8081, () => {
  console.log('服务启动成功!');
})