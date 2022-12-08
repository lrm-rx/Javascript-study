// 柯里化案例
// ''.match(/\s+/g)
// ''.match(/\d+/g)
const _ = require('lodash')

const match = _.curry(function (reg, str) {
  return str.match(reg)
})
const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)
// console.log(haveSpace('hello javacript'));
// console.log(haveNumber('hello 1'));

const filter = _.curry(function (fn, array) {
  return array.filter(fn)
})

// console.log(filter(haveSpace, ['letme hi~', 'xiaohu']));

const findSpace = filter(haveSpace)
console.log(findSpace(['letme hi~', 'xiaohu']));