const router = require('koa-router')()

const {
  getList,
  getBlogDetailById,
  createBlog,
  updateBlog,
  deleteBlogById
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  let { author = '', keyword = '' } = ctx.query
  if (ctx.query.isadmin) {
    // 管理员界面
    if (ctx.session.username == null) {
      // 没有登录
      ctx.body = new ErrorModel('未登录')
    }
    // 强制查询自己的博客
    author = ctx.session.username
  }
  const listData = await getList(author, keyword)
  ctx.body = new SuccessModel(listData)
})

router.get('/detail', async (ctx, next) => {
  const { id } = ctx.query
  const result = await getBlogDetailById(id)
  ctx.body = new SuccessModel(result)
})

router.post('/create', loginCheck, async (ctx, next) => {
  ctx.request.body.author = ctx.session.username
  const result = await createBlog(ctx.request.body)
  ctx.body = new SuccessModel(result)
})

router.post('/update', loginCheck, async (ctx, next) => {
  const result = await updateBlog(ctx.request.body)
  if (result) {
    return ctx.body = new SuccessModel('更新成功')
  }
  ctx.body = new SuccessModel('更新失败')
})

router.post('/delete', loginCheck, async (ctx, next) => {
  const result = await deleteBlogById(ctx.request.body)
  if (result) {
    return ctx.body = new SuccessModel('删除成功')
  }
  ctx.body = new SuccessModel('删除失败')
})



module.exports = router