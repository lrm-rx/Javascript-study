const { body } = require('express-validator')
const { User } = require('../../model')
// 引入错误统一调用的方法
const validate = require('./errorBack')

// 用户注册
module.exports.register = validate([
  body('username')
    .notEmpty().withMessage('用户名不能为空!').bail()
    .isLength({ min: 3 }).withMessage('用户名长度不能小于3!').bail()
    .custom(async value => {
      const usernameValidate = await User.findOne({username: value})
      if(usernameValidate) {
        return Promise.reject('用户名已在存!')
      }
    }).bail(),
  body('password')
    .notEmpty().withMessage('密码不能为空!').bail()
    .isLength({ min: 9 }).withMessage('密码长度不能小于9!').bail(),
  body('email')
    .notEmpty().withMessage('邮箱不能为空!').bail()
    .isEmail().withMessage('请输入正确的邮箱!').bail()
    .custom(async value => {
      const emailValidate = await User.findOne({email: value})
      if(emailValidate) {
        return Promise.reject('邮箱已被注册!')
      }
    }).bail(),
  body('phone')
    .notEmpty().withMessage('手机号码不能为空!').bail()
    .isMobilePhone().withMessage('请输入正确的手机号码!').bail()
    .custom(async value => {
      const phoneValidate = await User.findOne({phone: value})
      if(phoneValidate) {
        return Promise.reject('手机号码已被注册!')
      }
    }).bail()
])

// 用户登录 -- 账号使用邮箱认证
module.exports.login = validate([
  body('email')
    .notEmpty().withMessage('请输入账号!').bail()
    .custom(async value => {
      const emailValidate = await User.findOne({email: value})
      if(!emailValidate) {
        return Promise.reject('账号不在存!')
      }
    }).bail(),
  body('password')
    .notEmpty().withMessage('请输入密码!').bail()
])