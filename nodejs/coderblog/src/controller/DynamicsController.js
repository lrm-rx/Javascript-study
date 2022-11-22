const dynamicsService = require('../service/DynamicsService')
class DynamicsController {
  async create(ctx, next) {
    // 1. 获取user_id和content
    const userId = ctx.user.id
    const { content } = ctx.request.body
    // 添加动态数据
    const result = await dynamicsService.create({ userId, content })

    ctx.body = result
  }
  async querySingleDynamic(ctx, next) {
    // 1. 取id
    const { dynamicsId } = ctx.params
    // 2. 通过id查询数据
    const result = await dynamicsService.getSingleDataById(dynamicsId)
    ctx.body = result
  }
  async getDynamicsList(ctx, next) {
    // 1. 获取数据(offset/size)
    const { offset, size } = ctx.query
    const result = await dynamicsService.queryDynamicsList({ offset, size })
    ctx.body = result
  }
  async update(ctx, next) {
    
    // 1. 取id
    const { dynamicsId } = ctx.params
    const { content } = ctx.request.body
    const result = await dynamicsService.updateDynamic({ content, dynamicsId })
    ctx.body = result
  }
}

module.exports = new DynamicsController()