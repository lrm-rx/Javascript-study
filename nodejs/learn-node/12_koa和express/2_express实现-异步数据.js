const express = require('express')
const axios = require('axios')

const app = express()

const middleware1 = (req, res, next) => {
  req.message = 'aaa'
  next()
  res.send(req.message)
}

const middleware2 = (req, res, next) => {
  req.message += 'bbb'
  next()
}
const middleware3 = async (req, res, next) => {
  const result = await axios.get('http://123.207.32.32:9001/lyric?id=167876')
  req.message += result.data.lrc.lyric
  // console.log(req.message);
}

app.use(middleware1, middleware2, middleware3)

app.listen(8081, () => {
  console.log('服务启动成功!');
})