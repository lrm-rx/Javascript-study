// 函数组合 调试
// NEVER SAY HI ==> never-say-hi
const _ = require('lodash')

const log = v => {
  console.log(v);
  return v
}

const trace = _.curry((tag, v) => {
  console.log(tag, v);
  return v
})

// _.split()
const split = _.curry((seq, str) => _.split(str, seq))

// _.toUpper()
const join = _.curry((seq, array) => _.join(array, seq))

const map = _.curry((fn, array) => _.map(array, fn))

// const f = _.flowRight(join('-'), log, _.toLower, log, split(' '))
const f = _.flowRight(join('-'), trace('map之后'), map(_.toLower), trace('split之后'), split(' '))


console.log(f('NEVER SAY HI'));