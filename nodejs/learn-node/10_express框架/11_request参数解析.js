const express = require('express')

const app = express()


app.get('/userlist/:id/:uname', (req, res, next) => {
  console.log(req.params);
  res.end('userList')
})

app.get('/login', (req, res, next) => {
  console.log(req.query);
  res.end('get login')
})

app.listen(8081, () => {
  console.log('express is runing at port 8081');
})