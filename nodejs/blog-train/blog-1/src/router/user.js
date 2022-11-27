const { login, registerCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const getCookieExpire = require('../utils/getCookieExpire')

const handleUserRouter = (req, res) => {
  const method = req.method
  // 用户登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(userData => {
      if (userData.username) {
        // 操作cookie
        // res.setHeader('Set-Cookie', `username=${userData.username}; path=/; httpOnly; expires=${getCookieExpire()}`)
        // 设置session
        req.session.username = userData.username
        req.session.realname = userData.username
        let data = {
          ...userData,
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
    return result.then(data => {
      return new SuccessModel(data)
    }).catch(error => {
      console.error(error);
    })
  }
}

module.exports = handleUserRouter

