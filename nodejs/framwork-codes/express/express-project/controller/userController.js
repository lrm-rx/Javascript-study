const {User} = require('../model/index')
// const jwt = require('jsonwebtoken')
const {createToken} = require('../util/jwt')

// 用户注册
exports.register = async (req, res)=>{
  const userModel = new User(req.body)
  const dbBack = await userModel.save()
  let user = dbBack.toJSON()
  delete user.password
  res.status(200).json(user)
}

// 用户登录
exports.login = async (req, res) => {
  let dbBack = await User.findOne(req.body)
  if(!dbBack) {
    res.status(402).json({error: "账号或密码不正确!"})
  }
  // 对dbBack进行转义
  dbBack = dbBack.toJSON()
  // 使用uuid generator(vs code插件) ctrl + shift + p
  // dbBack.token = jwt.sign(dbBack,'99266fd4-ad17-48fa-bae3-af22e4e3394b')
  dbBack.token = await createToken(dbBack)
  res.status(200).json(dbBack)
}

exports.list = async (req, res)=>{
  console.log(req.method);
  res.send('/user-list')
}

exports.delete = async (req, res)=>{
  console.log(req.method);
  res.send('/user-list')
}