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
    const { id: dynamicsId } = ctx.params
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
    const { id: dynamicsId } = ctx.params
    const { content } = ctx.request.body
    const result = await dynamicsService.updateDynamicById({ content, dynamicsId })
    ctx.body = result
  }
  async deleteDynamic(ctx, next) {
    // 1. 取id
    const { id: dynamicsId } = ctx.params
    const result = await dynamicsService.deleteDynamicById(dynamicsId)
    ctx.body = result
  }
  async addLabels(ctx, next) {
    // 1. 获取标签和动态id
    const { labels } = ctx
    const { id: dynamicsId } = ctx.params
    // 2. 添加所有的标签
    for(let label of labels) {
      // 2.1 判断标签是否已经和动态有关系
      const isExists = await dynamicsService.hasLabel(dynamicsId, label.id)
      if(!isExists){
        await dynamicsService.addLabel(dynamicsId, label.id)
      }
    }
    ctx.body = '动态标签添加成功'
  }
}

module.exports = new DynamicsController()