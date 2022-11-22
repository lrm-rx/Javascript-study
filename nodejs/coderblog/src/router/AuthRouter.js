const KoaRouter = require('koa-router')
const { PATH_PREFIX } = require('../app/config')
const authRouter = new KoaRouter({ prefix: PATH_PREFIX })

const { login } = require('../controller/AuthController')
const { verifyLogin } = require('../middleware/AuthMiddleware')

authRouter.post('/login', verifyLogin, login)

module.exports = authRouter