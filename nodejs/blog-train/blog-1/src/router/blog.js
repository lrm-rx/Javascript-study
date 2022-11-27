const {
  getList,
  getBlogDetailById,
  createBlog,
  updateBlog,
  deleteBlogById
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

//  统一的登录验证函数
const loginCheck = (req) => {
  if(!req.session.username){
    return Promise.resolve(
      new ErrorModel('尚未登录!')
    )
  }
}

const handleBlogRouter = (req, res) => {
  const method = req.method

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    let { author = '', keyword = '' } = req.query
    if(req.query.inadmin){
      // 管理员界面
      const loginCheckResult = loginChech(req)
      if(loginCheckResult){
        // 没有登录
        return loginCheckResult
      }
      // 强制查询自己的博客
      author = req.session.username
    }
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData) 
    }).catch(error => {
      console.error(error);
    })
  }
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const { id } = req.query
    const result = getBlogDetailById(id)
    return result.then(data => {
      return new SuccessModel(data)
    }).catch(error => {
      console.error(error);
    })
  }
  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/create') {
    const loginCheckResult = loginCheck(req)
    if(loginCheckResult) {
      // 未登录
      return loginCheckResult
    }
    req.body.author = req.session.username
    const result = createBlog(req.body)
    return result.then(data=>{
      return new SuccessModel(data)
    }).catch(error => {
      console.error(error);
    })
  }
  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const loginCheckResult = loginCheck(req)
    if(loginCheckResult) {
      // 未登录
      return loginCheckResult
    }
    const result = updateBlog(req.body)
    return result.then(value=>{
      if(value) {
        return new SuccessModel('更新成功')
      }
      return new ErrorModel('更新失败')
    }).catch(error => {
      console.error(error);
    })
  }
  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const loginCheckResult = loginCheck(req)
    if(loginCheckResult) {
      // 未登录
      return loginCheckResult
    }
    const result = deleteBlogById(req.body)
    return result.then(value=>{
      if(value) {
        return new SuccessModel('删除成功')
      }
      return new ErrorModel('删除失败')
    }).catch(error => {
      console.error(error);
    })
  }
}

module.exports = handleBlogRouter