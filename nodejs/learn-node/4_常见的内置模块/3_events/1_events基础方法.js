const EventEmitter = require('events')

// 1. 创建发射器
const emitter = new EventEmitter()

// 2. 监听某个事件
emitter.on('click', (args)=>{
  console.log('监听click事件1', args);
})
const listenner = (args)=>{
  console.log('监听click事件2', args);
}
emitter.on('click', listenner)

// 3. 发出一个事件
setTimeout(() => {
  emitter.emit('click', 'lpl')
  // 取消监听
  emitter.off('click', listenner)
  emitter.emit('click', 'lck')
}, 2000);