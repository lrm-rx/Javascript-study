const labelService = require('../service/LabelService')
class LabelController {
  async create(ctx, next) {
    const { labelName } = ctx.request.body
    const result = await labelService.create(labelName)
    ctx.body = result
  }
}

module.exports = new LabelController()