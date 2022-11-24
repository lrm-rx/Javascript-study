const fileService = require('../service/FileService')
const userService = require('../service/UserService')
const { APP_HOST, APP_PORT, PATH_PREFIX } = require('../app/config')
class FileController {
  async saveAvatarInfo(ctx, next) {
    const { id: userId } = ctx.user
    // 1. 获取图像相关的信息
    const { mimetype, filename, size } = ctx.req.file
    // 2. 将图像信息数据保存到数据库中
    await fileService.createAvatar(filename, mimetype, size, userId)
    // 3. 将图片地址保存到user表中 http://localhost:8086/api/v1/user/2/avatar
    const avatarUrl = `${APP_HOST}:${APP_PORT}${PATH_PREFIX}/user/${userId}/avatar`
    await userService.updateAvatarUrlByUserId(userId, avatarUrl)
    ctx.body = '用户头像上传成功!'
  }
  async savePictureInfo(ctx, next) {
    // 1. 获取图像信息
    const files = ctx.req.files
    const { id: userId } = ctx.user
    const { dynamicsId } = ctx.query
    // 2. 入库
    for (let file of files) {
      const { filename, mimetype, size } = file
      await fileService.createFile(filename, mimetype, size, userId, dynamicsId)
    }
    ctx.body = '动态配图上传成功!'
  }
}

module.exports = new FileController()