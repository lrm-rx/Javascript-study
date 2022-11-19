const Koa = require('koa')

const app = new Koa()

app.use((ctx,next) => {
  // 1. 字符串
  // ctx.response.body = 'Hello, Koa'
  // 2. 对象
  // ctx.response.body = {
  //   name: 'lpl',
  //   age: 12
  // }
  // 设置状态码
  ctx.status = 200
  // 3. 数组,Buffer等
  // ctx.response.body = ['letme', 'mlxg', 'xiaohu', 'uzi', 'ming']
  // 等价于(代理)
  ctx.body = ['letme', 'mlxg', 'xiaohu', 'uzi', 'ming']
  // ctx.request.body <=> ctx.body
})

app.listen(8081, () => {
  console.log('服务启动成功!');
})