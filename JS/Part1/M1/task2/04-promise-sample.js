// Promise 基本示例
const promise = new Promise(function (resolve, reject) {
  resolve(100) // 成功
  // reject(new Error('promise rejected')) // 失败
})

promise.then(function (value) {
  // 即便没有异步操作，then 方法中传入的回调仍然会被放入队列，等待下一轮执行
  console.log('resolved', value)
}, function (error) {
  console.log('rejected', error)
})

console.log('end')
/**
 * end
 * resolved  100
 */
