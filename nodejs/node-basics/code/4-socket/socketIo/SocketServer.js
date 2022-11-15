const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')


app.use(express.static('./public'))
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, ''))
  res.send('hello')
})

io.on('connection', (socket) => {
  // console.log('a user connected');
  socket.on('receive', (msg) => {
    socket.broadcast.emit('message', msg);
  })
})

http.listen(3000,() => {
  console.log('port: 3000');
})