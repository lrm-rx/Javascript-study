const crypto = require('crypto')

// 密匙
const SECRET_KEY = 'ca557906-a3ef-49de-8c82-68420b6bea72'

// MD5加密
function md5(content) {
  let md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

// 加密函数
function encrypPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str)
}

module.exports = encrypPassword