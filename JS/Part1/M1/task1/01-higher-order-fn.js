// 高阶函数 - 函数作为参数
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i])
  }
}
// 测试
// let arr = [1, 3, 5, 7, 11]
// forEach(arr, function(item) {
//   console.log(item);
// })

// filter
function filter(array, fn) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result.push(array[i])
    }
  }
  return result
}
// 测试

let arr = [1, 3, 5, 6, 7, 11, 12]
const resArr = filter(arr, function (item) {
  return item % 2 === 0
})
console.log(resArr);

// 高阶函数 - 函数作为返回值
function makeFn() {
  let msg = 'Hello, javascript'
  return function () {
    console.log(msg);
  }
}
// makeFn()()

// once 内部只执行一次
function  once(fn) {
  let done = false
  return function () {
    if(!done){
      done = true
      return fn.apply(this, arguments)
    }
  }
}

let pay = once(function (money) {
  console.log(`支付: ${money}RMB`);
})
pay(10)
pay(10)
pay(10)
pay(10)
