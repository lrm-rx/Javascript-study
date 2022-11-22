const KoaRouter = require('koa-router')
const { PATH_PREFIX } = require('../app/config')
const userRouter = new KoaRouter({ prefix: PATH_PREFIX })
const { create } = require('../controller/UserController')
const { verifyUser, handlePassword } = require('../middleware/UserMiddleware')


userRouter.post('/user', verifyUser, handlePassword, create)

module.exports = userRouter