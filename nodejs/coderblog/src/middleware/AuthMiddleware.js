const {
  USERNAME_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
  USERNAME_OR_PW_ERROR
} = require('../constants/error-types')
const md5PW = require('../utils/password-handle')
const service = require('../service/UserService')

const verifyLogin = async (ctx, next) => {
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
  // 3. 用户是否在存及判断密码是否一致(加密)
  const [result] = await service.getUserByName(username) || [[]]
  if (!result.length || result[0].password !== md5PW(password)) {
    const errorType = new Error(USERNAME_OR_PW_ERROR)
    return ctx.app.emit('error', errorType, ctx)
  }

  delete result[0].password
  ctx.user = result[0]

  await next()
}

module.exports = {
  verifyLogin
}