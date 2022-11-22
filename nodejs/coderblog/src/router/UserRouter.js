const KoaRouter = require('koa-router')

const userRouter = new KoaRouter({ prefix: '/api/v1' })
const { create } = require('../controller/UserController')
const { verifyUser, handlePassword } = require('../middleware/UserMiddleware')

userRouter.post('/user', verifyUser, handlePassword, create)



module.exports = userRouter