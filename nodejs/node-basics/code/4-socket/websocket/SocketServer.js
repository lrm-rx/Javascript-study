const WebSockent = require('ws')
const wss = new WebSockent.Server({port: 9527})

wss.on('connection', function connection(ws){
  ws.on('open', function open() {
    console.log('connected');
  })

  ws.on('message', function incoming(data){
    // 广播
    wss.clients.forEach(function each(client) {
      if(client.readyState === WebSockent.OPEN) {
        client.send(data)
      }
    })
  })

  wss.on('close', function close(){
    console.log('disconnected')
  })
})

