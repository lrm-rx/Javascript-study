const express = require('express')
const app = express()
const router = require('./router/index')
const routerVideo = require('./router/video')

app.use('/api',router)
app.use('/video',routerVideo)


app.use((req, res, next)=>{
  res.status(404).send('404 Not Found')
})
// 代码出错提示(传四个参数, 第一个参数为错误返回信息)
app.use((error,req,res,next)=>{
  console.log('error', error)
  res.status(500).send('服务器出错啦!')
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
