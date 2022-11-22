const KoaRouter = require('koa-router')

const authRouter = new KoaRouter({ prefix: '/api/v1' })

const { login } = require('../controller/AuthController')
const {verifyLogin} = require('../middleware/AuthMiddleware')

authRouter.post('/login', verifyLogin, login)

module.exports = authRouter