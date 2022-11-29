const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login, registerCheck } = require('../controller/user')
router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  const userData = await login(username, password)
    if (userData.username) {
      // 操作cookie
      // res.setHeader('Set-Cookie', `username=${userData.username}; path=/; httpOnly; expires=${getCookieExpire()}`)
      // 设置session
      ctx.session.username = userData.username
      ctx.session.realname = userData.realname
      let data = {
        ...userData,
        msg: '登录成功!'
      }
      return ctx.body = new SuccessModel(data)
    }
    ctx.body = new ErrorModel('用户名或密码错误!')
})


module.exports = router