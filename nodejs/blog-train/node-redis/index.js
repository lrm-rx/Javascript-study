const redis = require('redis')

// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1')

redisClient.on('error', error => {
  console.log(error);
})


// 测试
redisClient.set('myname', 'lrm', redis.print)

redisClient.get('myname', (error, value) => {
  if(error){
    console.log(error);
    return
  }
  console.log('value', value);

  // 退出
  redisClient.quit() 
})