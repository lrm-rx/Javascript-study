const fs = require('fs')
const path = require('path')
const userService = require('../service/UserService')
const fileService = require('../service/FileService')
const { AVATAR_PATH } = require('../constants/file-path')
class UserController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    let user = ctx.request.body;
    // 查询数据(抽离出去)
    const result = await userService.create(user)
    // 返回数据
    ctx.body = result
  }
  async avatarInfo(ctx, next) {
    const { id: userId } = ctx.params
    const avatarInfo = await fileService.getAvatarByUserId(userId)
    ctx.response.set('content-type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
}

module.exports = new UserController()