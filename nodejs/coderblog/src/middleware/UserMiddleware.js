const {
  USERNAME_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
  USERNAME_IS_EXISTS
} = require('../constants/error-types')
const service = require('../service/UserService')
const md5PW = require('../utils/password-handle')

const verifyUser = async (ctx, next) => {
  // 1. 用户名和密码
  const { username, password } = ctx.request.body
  // 2. 用户名和密码不能为空
  if (!username) {
    const errorType = new Error(USERNAME_IS_REQUIRED)
    return ctx.app.emit('error', errorType, ctx)
  }
  if (!password) {
    const errorType = new Error(PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', errorType, ctx)
  }
  // 3.用户名是否被注册过
  const [result] = await service.getUserByName(username) || [[]]
  if (result.length) {
    const errorType = new Error(USERNAME_IS_EXISTS)
    return ctx.app.emit('error', errorType, ctx)
  }
  // todo 密码复杂度
  await next()
}

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5PW(password)
  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}