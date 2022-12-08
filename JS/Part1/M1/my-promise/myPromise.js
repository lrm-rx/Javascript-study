
const PENDING = 'pending' // 等待
const FULFILLED = 'fulfilled' // 成功
const REJECTED = 'rejected' // 失败
class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  // promise 状态
  status = PENDING
  // 成功之后的值
  value = undefined
  // 失败之后的值
  error = undefined
  // 成功回调
  successCallback = []
  // 失败回调
  failCallback = []
  resolve = value => {
    // 如果状态不是等待，阻止程序向下执行
    if (this.status !== PENDING) return
    // 将状态更新为成功
    this.status = FULFILLED
    // 保存成功之后的值
    this.value = value
    // 判断成功回调是否在存,如果在存,调用
    // this.successCallback && this.successCallback(this.value)
    while (this.successCallback.length) {
      this.successCallback.shift()()
    }
  }
  reject = error => {
    // 如果状态不是等待，阻止程序向下执行
    if (this.status !== PENDING) return
    // 将状态更新为失败
    this.status = REJECTED
    // 保存失败之后的原因
    this.error = error
    // 判断失败回调是否在存,如果在存,调用
    // this.failCallback && this.failCallback(this.error)
    while (this.failCallback.length) {
      this.failCallback.shift()()
    }
  }
  then(successCallback, failCallback) {
    // 参数可选
    successCallback = successCallback ? successCallback : value => value;
    // 参数可选
    failCallback = failCallback ? failCallback : error => { throw error };
    const promise = new MyPromise((resolve, reject) => {
      // 判断状态
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = successCallback(this.value)
            /**
             * 判断x的值是普通值还是promise对象
             * 如果是普通值 就直接调用resolve
             * 如果是promise对象, 就查看promise对象返回的结果
             * 再根据promise对象返回结果来决定调用resolve还是reject
             */
            resolvePromise(promise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason);
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值 直接调用resolve 
            // 如果是promise对象 查看promsie对象返回的结果 
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            resolvePromise(promsie, x, resolve, reject)
          } catch (error) {
            reject(error);
          }
        }, 0)
      } else {
        // 等待
        // 将成功回调和失败回调存储起来
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve 
              // 如果是promise对象 查看promsie对象返回的结果 
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promsie, x, resolve, reject)
            } catch (error) {
              reject(error);
            }
          }, 0)
        })
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.value);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve 
              // 如果是promise对象 查看promsie对象返回的结果 
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promsie, x, resolve, reject)
            } catch (error) {
              reject(error);
            }
          }, 0)
        })
      }
    })
    return promise
  }
  finally(callback) {
    return this.then(value => {
      return MyPromise.resolve(callback()).then(() => value);
    }, error => {
      return MyPromise.resolve(callback()).then(() => { throw error })
    })
  }
  catch(failCallback) {
    return this.then(undefined, failCallback)
  }
  static all(array) {
    let result = [];
    let index = 0;
    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index === array.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current instanceof MyPromise) {
          // promise 对象
          current.then(value => addData(i, value), error => reject(error))
        } else {
          // 普通值
          addData(i, array[i]);
        }
      }
    })
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof MyPromise) { // promise对象
    // x.then(value=> resolve(value), error => reject(error))
    x.then(resolve, reject)
  } else { // 普通值
    resolve(x)
  }
}

module.exports = MyPromise