define(function (require, exports, module) {
  const name = '小明'
  const age = 20
  const say = function (name) {
    console.log('你好,' + name);
  }

  module.exports = {
    name,
    age,
    say
  }
})