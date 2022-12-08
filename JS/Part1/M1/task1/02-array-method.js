/**
 * forEach
 * map
 * filter
 * every
 * some
 * find/findIndex
 * reduce
 * sort
 * ...
 */

// 模拟常用的高阶函数: map every some
const map = (array, fn) => {
  let result = []
  for(let value of array) {
    result.push(fn(value))
  }
  return result
}
// 测试
// let arr = [1, 2, 3, 4]
// arr = map(arr, v => v ** 3)
// console.log(arr);

const every = (array, fn) => {
  let result = true
  for(let value of array) {
    result = fn(value)
    if(!result) {
      break
    }
  }
  return result
}
// 测试
// let arr = [11, 13, 24]
// let flag = every(arr, v => v > 20)
// console.log(flag);

const some = (array, fn) => {
  let result = false
  for(let value of array) {
    result = fn(value)
    if(result) {
      break;
    }
  }
  return result
}
// 测试
let arr = [1, 3, 7, 11]
let r = some(arr, v => v % 2 === 0)
console.log(r);

