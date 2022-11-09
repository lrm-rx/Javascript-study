const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)
const { uuid } = require('../config/config.default')

// 生成token 的方法
module.exports.createToken = async userinfo => {
  return await tojwt(
    { userinfo },
    uuid,
    {
      expiresIn: 60 * 60  // 有效期 单位为s
    }
  )
}

// 解析token的方法
module.exports.verifyToken = async (req, res, next) => {
  let token = req.headers.authorization
  token = token ? token.split('Bearer ')[1] : null
  if (!token) {
    res.status(402).json({ error: '没有传入token' })
  }
  try {
    let userinfo = await verify(token, uuid)
    res.user = userinfo
    next()
  } catch (error) {
    res.status(402).json({ error: '无效的token' })
  }
}

// const token =  jwt.sign({foo: "gxrxrm15451"}, '5754585')
// console.log(token)

// const jwts = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJneHJ4cm0xNTQ1MSIsImlhdCI6MTY2ODAxMDM0Nn0.f9TaiET5NaqYZhmCztr-PlzZV9Z8l1kQj_7X6Djx0eQ','5754585')
// console.log(jwts) 
