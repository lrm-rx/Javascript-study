/**
 * Node中实现commonJS的本质是对象的引用赋值
 */

const lpl = require('./lpl')
// const { name, age, say } = require('./lpl')

console.log(lpl.uname)
console.log(lpl.age)
lpl.say('edg')
setTimeout(() => {
  console.log(lpl.uname)
  console.log('userInfo',lpl.userInfo.username)
}, 1000)
console.log('userInfo',lpl.userInfo.username)

const user = require('./user')

console.log('user:', user)