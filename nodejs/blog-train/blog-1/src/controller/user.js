

// 用户登录
const login = (username, password) => {
  console.log('username', username);
  console.log('password', password);
  return [
    {
      id: 1,
      msg: '登录成功'
    }
  ]
}

// 用户注册
const register = (username, password) => {
  console.log('username', username);
  console.log('password', password);
  return [
    {
      id: 1,
      msg: '用户注册成功'
    }
  ]
}

module.exports = {
  login,
  register
}