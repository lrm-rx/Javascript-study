const mongoose = require('mongoose')
const { mongopath } = require('../config/config.default')

async function main() {
  await mongoose.connect(mongopath)
}
main()
.then(res=>{
  console.log('mongo连接成功!!')
})
.catch(error=>{
  console.log(error)
  console.log('mongo连接失败!!')
})

module.exports = {
  // 第一个参数是集合的名称, 会变为users集合
  User:mongoose.model('User',require('./userModel')),
}