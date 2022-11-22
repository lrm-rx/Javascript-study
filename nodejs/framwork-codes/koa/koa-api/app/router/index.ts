import koaRouter from 'koa-router'
import AdminController from '../controller/AdminController'
import LoginController from '../controller/LoginController'
import UploadController from '../controller/UploadController'
import AuthMiddleware from '../middleware/AuthMiddleware'
const router = new koaRouter({prefix: '/admin'})
import path from 'path'
const multer = require('koa-multer')
const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: (arg0: null, arg1: string) => void) => {
    cb(null, '../../upload/')
  },
  filename: (req: any, file: { originalname: string; }, cb: (arg0: null, arg1: string) => void) => {
    // 文件名取 时间戳和原文件的后缀名进行组合
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  storage
})

// router.use(AuthMiddleware) // token校验有问题


router.get('/', AdminController.getAdminList)
router.post('/uploadFile', upload.single('avatar'), UploadController.uploadFile)
router.post('/login', LoginController.index)
export default router