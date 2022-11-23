const commentService = require('../service/CommentService')
class CommentController {
  async create(ctx, next) {
    const { dynamicsId, content } = ctx.request.body
    const { id } = ctx.user
    const result = await commentService.create({ userId: id, dynamicsId, content })
    ctx.body = result
  }
  async commentList(ctx, next) {
    const { dynamicsId } = ctx.query
    const result = await commentService.getCommentListByDynamicsId(dynamicsId)
    ctx.body = result
  }
  async replyComment(ctx, next) {
    const { dynamicsId, content } = ctx.request.body
    const { id: commentId } = ctx.params
    const { id: userId } = ctx.user
    const result = await commentService.replyComment({ userId, dynamicsId, commentId, content })
    ctx.body = result
  }
  async updateComment(ctx, next) {
    const { content } = ctx.request.body
    const { id: commentId } = ctx.params
    const result = await commentService.updateComment({ commentId, content })
    ctx.body = result
  }
  async deleteComment(ctx, next) { 
    const { id: commentId } = ctx.params
    const result = await commentService.deleteComment(commentId)
    ctx.body = result
  }
}

module.exports = new CommentController()