const express = require('express')

const app = express()


app.get('/userlist/:id/:uname', (req, res, next) => {
  console.log(req.params);
  res.end('userList')
})

app.get('/login', (req, res, next) => {
  console.log(req.query);
  // res.type("application/json")
  // res.end(JSON.stringify({uname:'ming', age: 18}))
  // 设置响应码
  res.status(204)
  res.json({uname:'ming', age: 12})
})

app.listen(8081, () => {
  console.log('express is runing at port 8081');
})