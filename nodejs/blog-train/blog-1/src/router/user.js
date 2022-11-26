const { login, register } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
  const method = req.method
  // 用户登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const data = login(username, password)
    if(data){
      return new SuccessModel(data)
    }
    return new ErrorModel('登录失败!')
  }
  // 用户注册
  if (method === 'POST' && req.path === '/api/user/register') {
    const { username, password } = req.body
    const data = register(username, password)
    return new SuccessModel(data)
  }
}

module.exports = handleUserRouter

