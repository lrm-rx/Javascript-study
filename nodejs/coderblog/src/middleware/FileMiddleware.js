const multer = require('koa-multer')
const Jimp = require('jimp')
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

const pictureResize = async (ctx, next) => {
  try {
    // 1. 获取所有的图片信息
    const files = ctx.req.files
    // 2. 对图片进行处理(sharp/jimp)
    for (let file of files) {
      const destPath = path.join(file.destination, file.filename);
      console.log(destPath);
      Jimp.read(file.path).then(image => {
        image.resize(1280, Jimp.AUTO).write(`${destPath}-large`);
        image.resize(640, Jimp.AUTO).write(`${destPath}-middle`);
        image.resize(320, Jimp.AUTO).write(`${destPath}-small`);
      });
    }

    await next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  avatarHandler,
  pictureHandler,
  pictureResize
}