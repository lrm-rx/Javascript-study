const xss = require('xss')
const { exec, escape } = require('../db/mysql')
const encrypPassword = require('../utils/cryp')

const reg = /^["|'](.*)["|']$/g; // 去掉首尾的引号
// 用户登录
const login = async (username, password) => {
  // 密码加密
  password = encrypPassword(password)
  username = xss(username)
  password = xss(password)
  username = escape(username.replace(reg,"$1"))
  password = escape(password.replace(reg,"$1"))
  const sql = `SELECT * FROM users WHERE username=${username} AND password=${password};`
  const userInfo = await exec(sql)
  return userInfo[0] || {}
}

// 用户注册前校验
const registerCheck = async (username, password) => {
  username = xss(username)
  password = xss(password)
  username = escape(username.replace(reg,"$1"))
  password = escape(password.replace(reg,"$1"))
  if (!username && !password) return
  const querySql = `SELECT * FROM users WHERE username=${username};`
  const userData = await exec(querySql)
  if (userData.length && userData[0].username === username) {
    return '用户已经在存!'
  } else {
    return await register(username, password)
  }
}
const register = async (username, password, realname='') => {
  // 密码加密
  password = encrypPassword(password)
  username = xss(username)
  password = xss(password)
  realname = xss(realname)
  username = escape(username.replace(reg,"$1"))
  password = escape(password.replace(reg,"$1"))
  realname = escape(realname.replace(reg,"$1"))
  if(!username || !password){
    return '用户名或密码不能为空!'
  }
  const sql = `INSERT INTO users (username, password, realname) VALUES (${username}, ${password}, ${realname});`
  const userData = await exec(sql)
  return {
    id: userData.insertId,
    msg: '用户注册成功!'
  }
}

module.exports = {
  login,
  registerCheck
}