const crypto = require('crypto')

const password = 'abc123'

const hash = crypto
  .createHash('sha1') // 加密算法 md5
  .update(password, 'utf-8') // 加密内容
  .digest('hex') // 以十六进制形式加密

  console.log(hash);