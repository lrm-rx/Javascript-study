const KoaRouter = require('koa-router')
const { PATH_PREFIX } = require('../app/config')
const CommentRouter = new KoaRouter({ prefix: PATH_PREFIX })

const { create, commentList, replyComment, updateComment, deleteComment } = require('../controller/CommentController')
const { verifyAuth, verifyPermission } = require('../middleware/AuthMiddleware')

// 发表评论
CommentRouter.post('/comment', verifyAuth, create)

// 获取评论
CommentRouter.get('/comment', commentList)

// 回复评论
CommentRouter.post('/comment/:id/reply', verifyAuth, replyComment)

// 修改评论
CommentRouter.patch('/comment/:id', verifyAuth, verifyPermission('comment'), updateComment)

// 删除评论
CommentRouter.delete('/comment/:id', verifyAuth, verifyPermission('comment'), deleteComment)


module.exports = CommentRouter