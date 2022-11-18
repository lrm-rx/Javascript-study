const express = require('express')
const userRouter = require('./router/users')

const app = express()

app.use("/users", userRouter) 

app.listen(8081, () => {
  console.log('路由服务端已经启动!');
})



