let uname = 'lpl'
let age = 12

let userInfo = {
  username: 'ming',
  age: 12
}

function say(uname) {
  console.log('my name is ' + uname);
}

setTimeout(() => {
  // exports.uname = 'uzi' // 对module.exports导出没有影响
  // module.exports.uname = 'uzi'
  uname = 'ming' // 不会修改module.exports的值
  userInfo.username = 'xiaohu' // 引用赋值会修改
}, 1000)

// exports.uname = uname
// exports.age = age
// exports.say = say

// module.exports = exports

module.exports = {
  uname,
  age,
  say,
  userInfo
}

// exports和module.exports之间有什么关系?
// 答: module.exports = exports