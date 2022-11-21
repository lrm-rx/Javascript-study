const KoaRouter = require('koa-router')
const {create} = require('../controller/UserController')
const userRouter = new KoaRouter({prefix: '/api/v1/user'})


userRouter.post('/', create)



module.exports = userRouter