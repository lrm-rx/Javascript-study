const KoaRouter = require('koa-router')
const { PATH_PREFIX } = require('../app/config')
const dynamicsRouter = new KoaRouter({ prefix: PATH_PREFIX })

const { create, querySingleDynamic, getDynamicsList, update, deleteDynamic, addLabels } = require('../controller/DynamicsController')
const { verifyAuth, verifyPermission } = require('../middleware/AuthMiddleware')
const { verifyLabelExists } = require('../middleware/LabelMiddleware')

// 发表动态
dynamicsRouter.post('/dynamics', verifyAuth, create)
// 动态列表
dynamicsRouter.get('/dynamics/list', getDynamicsList)
// 获取单个动态详情
dynamicsRouter.get('/dynamics/:id', querySingleDynamic)
// 更新
dynamicsRouter.patch('/dynamics/:id', verifyAuth, verifyPermission('dynamics'), update)
// 删除
dynamicsRouter.delete('/dynamics/:id', verifyAuth, verifyPermission('dynamics'), deleteDynamic)

// 给动态添加标签
dynamicsRouter.post('/dynamics/:id/labels', verifyAuth, verifyPermission('dynamics'), verifyLabelExists, addLabels)

module.exports = dynamicsRouter