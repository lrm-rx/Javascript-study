const labelService = require('../service/LabelService')
class LabelController {
  async create(ctx, next) {
    const { labelName } = ctx.request.body
    const result = await labelService.create(labelName)
    ctx.body = result
  }
  async labelList(ctx, next) {
    const { limit, offset } = ctx.query
    const result = await labelService.getLabels(limit, offset)
    ctx.body = result
  }
}

module.exports = new LabelController()