const express = require('express')

// express是一个函数: createApplication
// 返回app
const app = express()


app.get('/', (req, res, next) => {
  res.end('Hello Express')
})

app.post('/', (req, res, next) => {
  res.end('post Express')
})

app.post('/login', (req, res, next) => {
  res.end('post login')
})

app.listen(8081, () => {
  console.log('express is runing at port 8081');
})