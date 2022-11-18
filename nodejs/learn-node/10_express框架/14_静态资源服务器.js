const express = require('express')
const userRouter = require('./router/users')

const app = express()

app.use(express.static('./build'))

app.listen(8081, () => {
  console.log('静态资源服务端已经启动!');
})



