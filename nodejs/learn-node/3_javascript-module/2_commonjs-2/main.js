// 加载是同步的,多次引用(跨文件),内部代码只执行一次
require('./user')

console.log('hahaha');