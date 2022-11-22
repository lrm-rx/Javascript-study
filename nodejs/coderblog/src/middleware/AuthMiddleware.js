const jwt = require('jsonwebtoken')
const {
  USERNAME_IS_REQUIRED,
  PASSWORD_IS_REQUIRED,
  USERNAME_OR_PW_ERROR,
  UNAUTHORIZATIN,
  UNPERMISSION
} = require('../constants/error-types')
const md5PW = require('../utils/password-handle')
const userService = require('../service/UserService')
const authService = require('../service/AuthService')
const { PRIVATE_KEY } = require('../app/config')

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
  const [result] = await userService.getUserByName(username) || [[]]
  if (!result.length || result[0].password !== md5PW(password)) {
    const errorType = new Error(USERNAME_OR_PW_ERROR)
    return ctx.app.emit('error', errorType, ctx)
  }

  delete result[0].password
  ctx.user = result[0]

  await next()
}

// 验证授权
const verifyAuth = async (ctx, next) => {
  // 1. 获取token
  const authorization = ctx.headers.authorization
  if(!authorization) {
    const errorType = new Error(UNAUTHORIZATIN)
    return ctx.app.emit('error', errorType, ctx)
  }
  const token = authorization.replace('Bearer ', '')
  // 2. 验证token(id/username/iat/exp)
  try {
    const result = jwt.verify(token, PRIVATE_KEY, {
      algorithms: ['RS256']
    })
    ctx.user = result
    console.log('验证授权成功!');
    await next()
  } catch (error) {
    const errorType = new Error(UNAUTHORIZATIN)
    return ctx.app.emit('error', errorType, ctx)
  }
}

// 删除和更新权限
const verifyPermission = async (ctx, next) => {
  const {id} = ctx.user
  const {dynamicsId} = ctx.params
  try {
    const isPermission = await authService.checkMoment(dynamicsId,id)
    if(!isPermission) throw new Error()
    await next()
  } catch (error) {
    const errorType = new Error(UNPERMISSION)
    return ctx.app.emit('error', errorType, ctx)
  }
}

module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission
}