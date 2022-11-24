const KoaRouter = require('koa-router')
const { PATH_PREFIX } = require('../app/config')
const { avatarHandler, pictureHandler } = require('../middleware/FileMiddleware')
const fileRouter = new KoaRouter({ prefix: `${PATH_PREFIX}/upload` })
const { verifyAuth } = require('../middleware/AuthMiddleware')
const { saveAvatarInfo, savePictureInfo } = require('../controller/FileController')


fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo)
fileRouter.post('/picture', verifyAuth, pictureHandler, savePictureInfo)

module.exports = fileRouter