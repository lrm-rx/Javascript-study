// 函数组合 调试
// NEVER SAY HI ==> never-say-hi
// lodash的fp模块
// NEVER SAY HI ==> never-say-hi
const fp = require('lodash/fp')



const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))

console.log(f('NEVER SAY HI'));