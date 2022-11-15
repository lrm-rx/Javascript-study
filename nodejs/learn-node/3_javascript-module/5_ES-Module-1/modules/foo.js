// 导出方式三种:
// 1. 方式一: 分别导出
// export let name = 'ming'
// export let age = 15
// export const say = function (name) {
//   console.log('你好, ' + name);
// }

// 方式二: 统一导出
let name = 'ming'
let age = 15
const say = function (name) {
  console.log('你好, ' + name);
}
// {} 不是一个对象 {放置要导出变量的引用列表}
export {
  name,
  age,
  say
}

// 3. 方式三: {} 导出时, 可以给变量起别名
// export {
//   name as fName,
//   age as fAge,
//   say as FSay
// }

export default function() {
  console.log('5555')
}