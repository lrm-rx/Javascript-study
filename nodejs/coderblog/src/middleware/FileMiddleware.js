const multer = require('koa-multer')
const path = require('path')
const { AVATAR_PATH, PICTURE_PATH } = require('../constants/file-path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/avatar')
  },
  filename: (req, file, cb) => {
    // 文件名取 时间戳和原文件的后缀名进行组合
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const avatarUpload = multer({
  dest: AVATAR_PATH
})

const avatarHandler = avatarUpload.single('avatar')

const pictureUpload = multer({
  dest: PICTURE_PATH
})

const pictureHandler = pictureUpload.array('picture', 20)

module.exports = {
  avatarHandler,
  pictureHandler
}