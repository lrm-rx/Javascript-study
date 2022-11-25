const {
  getList,
  getBlogDetail
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
    const blogDetail = getBlogDetail(id)
    return new SuccessModel(blogDetail)
  }
  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/create') {
    return {
      msg: '新建博客列表'
    }
  }
  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '更新博客列表'
    }
  }
  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: '删除博客列表'
    }
  }
}

module.exports = handleBlogRouter