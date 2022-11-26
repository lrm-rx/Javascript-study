const {
  getList,
  getBlogDetailById,
  createBlog,
  updateBlog,
  deleteBlogById
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
  const method = req.method

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const { author = '', keyword = '' } = req.query
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const { id } = req.query
    const blogDetail = getBlogDetailById(id)
    return new SuccessModel(blogDetail)
  }
  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/create') {
    const data = createBlog(req.body)
    return new SuccessModel(data)
  }
  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const { id, content } = req.body
    const data = updateBlog(id, content)
    return new SuccessModel(data)
  }
  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const { id } = req.body
    const data = deleteBlogById(id)
    return new SuccessModel(data)
  }
}

module.exports = handleBlogRouter