const KoaRouter = require('koa-router')
const { PATH_PREFIX } = require('../app/config')
const dynamicsRouter = new KoaRouter({ prefix: PATH_PREFIX })

const { create, querySingleDynamic, getDynamicsList, update } = require('../controller/DynamicsController')
const { verifyAuth, verifyPermission } = require('../middleware/AuthMiddleware')

// 发表动态
dynamicsRouter.post('/dynamics', verifyAuth, create)
// 动态列表
dynamicsRouter.get('/dynamics/list', getDynamicsList)
// 获取单个动态详情
dynamicsRouter.get('/dynamics/:dynamicsId', querySingleDynamic)
// 更新
dynamicsRouter.patch('/dynamics/:dynamicsId', verifyAuth, verifyPermission, update)

module.exports = dynamicsRouter