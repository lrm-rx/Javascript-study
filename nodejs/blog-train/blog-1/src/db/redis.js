const redis = require('redis')

const { REDIS_CONF } = require('../config/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

redisClient.on('error', error => {
  console.log(error);
})

function set(key, value) {
  if(typeof value === 'object'){
    value = JSON.stringify(value)
  }
  redisClient.set(key, value, redis.print)
}

function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (error, value) => {
      if(error){
        reject(error)
        return
      }
      if(value == null){
        resolve(null)
      }
      try {
        resolve(
          JSON.parse(value)
        )
      } catch (err) {
        resolve(err)
      }
    })
  })
  return promise
}

module.exports = {
  set,
  get
}
