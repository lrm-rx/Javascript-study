const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter{}

const event = new MyEventEmitter()

// 绑定事件
event.on('play', (value)=>{
  console.log(value);
})

event.once('play2', (value)=>{
  console.log(value);
})

// 触发事件
event.emit('play', 'movie')
event.emit('play2', 'movie2')