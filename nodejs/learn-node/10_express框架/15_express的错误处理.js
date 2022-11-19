const express = require('express')

const app = express()

const USERNAME_DOES_NOT_EXITSTS = 'USERNAME_DOES_NOT_EXISTS'
const USERNAME_ALREADY_EXISTS = 'USERNAME_ALREADY_EXITS'

// 登录
app.post('/login', (req, res, next) => {
  const isLogin = true;
  if (isLogin) {
    res.json('用户登录成功!')
  } else {
    // res.type(403)
    // res.json('用户不在存')
    next(new Error(USERNAME_DOES_NOT_EXITSTS))
  }
})

// 注册
app.post('/register', (req, res, next) => {
  const isExists = true;
  if (!isExists) {
    res.json('用户注册成功!')
  } else {
    // res.type(403)
    // res.json('用户已经在存')
    next(new Error(USERNAME_ALREADY_EXISTS))
  }
})

app.use((error, req, res, next) => {
  let status = 403
  let message = ''
  console.log('error.message', error.message);
  switch (error.message) {
    case USERNAME_DOES_NOT_EXITSTS:
      message = '用户不在存'
      break;
    case USERNAME_ALREADY_EXISTS:
      message = '用户已经在存'
      break;
    default:
      message = '未发现'
  }

  res.status(status)
  res.json({
    errorCode: status,
    errorMessage: message
  })
})

app.listen(8081, () => {
  console.log('服务启动成功!');
})