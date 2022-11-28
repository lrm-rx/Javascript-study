const express = require('express');
const router = express.Router();

router.post('/login', function (req, res, next) {
  const { username, password } = req.body
    const result = login(username, password)
    return result.then(userData => {
      if (userData.username) {
        // 操作cookie
        // res.setHeader('Set-Cookie', `username=${userData.username}; path=/; httpOnly; expires=${getCookieExpire()}`)
        // 设置session
        req.session.username = userData.username
        req.session.realname = userData.realname
        let data = {
          ...userData,
          msg: '登录成功!'
        }
        return res.json(new SuccessModel(data))
      }
      res.json(new ErrorModel('用户名或密码错误!'))
    }).catch(error => {
      console.error(error);
    })
});
router.get('/login-test', (req, res, next) => {
  if(req.session.username) {
    res.json({
      errno: 0,
      msg: '登录成功!'
    })
    return
  }
  res.json({
    errno: -1,
      msg: '没有登录!'
  })
})

router.get('/register', function (req, res, next) {
  res.json({
    error: 0,
    data: 'ok'
  })
});

// router.get('/session-test', (req, res, next) => {
//   const session = req.session
//   if(session.viewNum === null) {
//     session.viewNum = 0
//   }
//   session.viewNum++
//   res.json({
//     viewNum: session.viewNum
//   })
// })

module.exports = router;