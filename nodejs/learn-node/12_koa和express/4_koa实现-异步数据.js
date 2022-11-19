const Koa = require('koa')
const axios = require('axios')

const app = new Koa()

const middleware1 = async (ctx, next) => {
  ctx.message = 'aaa'
  await next()
  ctx.body = ctx.message
}

const middleware2 = async (ctx, next) => {
  ctx.message += 'bbb'
  await next()
}
const middleware3 = async (ctx, next) => {
  const result = await axios.get('http://123.207.32.32:9001/lyric?id=167876')
  console.log('result.data.lrc.lyric:', result.data.lrc.lyric);
  ctx.message += result.data.lrc.lyric
  // console.log(ctx.message);
}

const middlewareArray = [middleware1,middleware2,middleware3]
for (let index = 0; index < middlewareArray.length; index++) {
  const element = middlewareArray[index];
  app.use(element)
}

app.listen(8081, () => {
  console.log('服务启动成功!');
})