const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
// function logs(req){
//   console.log(`${req.method},${req.url},${Date.now()}`)
// }
// 放所有的路由前面
app.use((req, res, next)=>{
  console.log(`${req.method},${req.url},${Date.now()}`)
  next()
})

app.get('/', (req, res)=>{
  // logs()
  res.send('/index')
})

app.post('/register', (req, res)=>{
  res.send('/register')
})

app.post('/login', (req, res)=>{
  res.send('/login')
})



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
