import koaRouter from 'koa-router'
import AdminController from '../controller/AdminController'
import LoginController from '../controller/LoginController'
import UploadController from '../controller/UploadController'
import AuthMiddleware from '../middleware/AuthMiddleware'
const router = new koaRouter({prefix: '/admin'})

// router.use(AuthMiddleware) // token校验有问题

router.get('/', AdminController.getAdminList)
router.post('/uploadFile', UploadController.uploadFile)
router.post('/login', LoginController.index)
export default router