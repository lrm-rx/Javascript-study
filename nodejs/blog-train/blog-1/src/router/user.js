const { login, registerCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
  const method = req.method
  // 用户登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(userData => {
      if(userData.length > 0) {
        let data = {
          ...userData[0],
          msg: '登录成功!'
        }
        return new SuccessModel(data) 
      }
      return new ErrorModel('用户名或密码错误!')
    }).catch(error => {
      console.error(error);
    })
  }
  // 用户注册
  if (method === 'POST' && req.path === '/api/user/register') {
    const { username, password } = req.body
    const result = registerCheck(username, password)
    return result.then(data=>{
      return new SuccessModel(data)
    }).catch(error => {
      console.error(error);
    })
  }
}

module.exports = handleUserRouter

