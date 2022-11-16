const EventEmitter = require('events')

// 1. 创建发射器
const emitter = new EventEmitter()

// 2. 监听某个事件
emitter.once('click', (args)=>{
  console.log('监听click事件1', args);
})
const listenner = (args)=>{
  console.log('监听click事件2', args);
}
emitter.on('click', listenner)

// 前置
emitter.prependListener('click', (args)=>{
  console.log('监听click事件3', args);
})

emitter.on('scroll', (args)=>{
  console.log('监听scroll事件', args);
})

// 3. 发出一个事件
setTimeout(() => {
  emitter.removeAllListeners('click')
  emitter.emit('click', 'lpl')
  // 取消监听
  // emitter.off('click', listenner)
  emitter.emit('click', 'lck')
  emitter.emit('scroll', 'scroll')
}, 2000);