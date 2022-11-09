const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
// app.use((req, res, next)=>{}) // 中间件使用方式

// app.get('/user',(req, res, next)=>{})

app.get('/user',(req, res, next)=>{
  console.log(req.method)
  next() // 处理下一个回调函数
}, (req, res, next)=>{
  console.log(666)
  setTimeout(() => {
    console.log(888);
  }, 3000);
  next() // 处理下一个回调函数
}, (req, res, next)=>{
  console.log(777)
  res.send('sss')
})




app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
