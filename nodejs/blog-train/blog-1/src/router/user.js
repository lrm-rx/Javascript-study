const handleUserRouter = (req, res) => {
  const method = req.method
  // 用户登录
  if(method === 'POST' && req.path === '/api/user/login'){
    return '用户登录'
  }
  // 用户注册
  if(method === 'POST' && req.path === '/api/user/register'){
    return '用户注册'
  }
}

module.exports = handleUserRouter

