const { exec } = require('../db/mysql')

// 用户登录
const login = (username, password) => {
  const sql = `SELECT * FROM users WHERE username='${username}' AND password='${password}';`
  return exec(sql).then(userInfo => {
    return userInfo[0] || {}
  }).catch(error => {
    console.error(error);
  })
}

// 用户注册前校验
const registerCheck = (username, password) => {
  if (!username && !password) return
  const querySql = `SELECT * FROM users WHERE username='${username}';`
  return exec(querySql).then(userData => {
    console.log('userData', userData);
    if (userData.length && userData[0].username === username) {
      return '用户已经在存!'
    } else {
      return register(username, password)
    }
  }).catch(error => {
    console.error(error);
  })
}
const register = (username, password, realname='') => {
  if(!username || !password){
    return '用户名或密码不能为空!'
  }
  const sql = `INSERT INTO users (username, password, realname) VALUES ('${username}', '${password}', '${realname}');`
  return exec(sql).then(userData => {
    return {
      id: userData.insertId,
      msg: '用户注册成功!'
    }
  }).catch(error => {
    console.error(error);
  })
}

module.exports = {
  login,
  registerCheck
}