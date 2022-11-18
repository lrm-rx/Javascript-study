const fs = require('fs')

const express = require('express')
const morgan = require('morgan')

const app = express()
const writerStream = fs.createWriteStream('./logs/access.log', {
  flags: 'a+'
})
app.use(morgan('combined', {stream: writerStream}))

app.get('/home', (req, res, next) => {
  res.end("home page")
})

app.listen(8081, () => {
  console.log('express is runing at port 8081');
})