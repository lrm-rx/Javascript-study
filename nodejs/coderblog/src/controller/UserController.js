const service = require('../service/UserService')
class UserController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    let user = ctx.request.body;
    // 查询数据(抽离出去)
    const result = await service.create(user)
    // 返回数据
    ctx.body = result
  }
}

module.exports = new UserController()