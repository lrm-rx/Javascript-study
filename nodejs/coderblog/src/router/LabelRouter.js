const KoaRouter = require('koa-router')
const { PATH_PREFIX } = require('../app/config')
const LabelRouter = new KoaRouter({ prefix: PATH_PREFIX })

const { create, labelList } = require('../controller/LabelController')
const { verifyAuth, verifyPermission } = require('../middleware/AuthMiddleware')

LabelRouter.post('/label', verifyAuth, create)
LabelRouter.get('/label', labelList)

module.exports = LabelRouter

