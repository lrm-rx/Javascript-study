const Router = require('koa-router')

const router = new Router({prefix: '/users'})

router.get('/', (ctx, next) => {
  ctx.response.body = '用户列表数据'
})

router.put('/', (ctx, next) => {
  ctx.response.body = '修改用户列表数据'
})

module.exports = router