// 常见的导入方式有三种
// 方式一: import {} from '路径'
// import { name, age, say } from './modules/foo.js' // 在没有用脚手架时, 要加.js

// 方式二: 导入变量之后可以起别名
// import { name as fName, age, say } from './modules/foo.js'

// 方式三: * as foo
import * as foo from './modules/foo.js'
foo.say('小朋')

// default export如何导入
import fn from './modules/foo.js'

// import()函数
let flag = true

if(flag) {
  /**
   * require的本质是一个函数
   * require('')
   * 执行函数
   * 如果是webpack的环境下: 模块化打包工具: es CommonJS require
   * 纯ES Module环境下面: import() 
   * 脚手架: import()
   */
   const promise = import('./modules/foo.js') // 返回一个promise
}




