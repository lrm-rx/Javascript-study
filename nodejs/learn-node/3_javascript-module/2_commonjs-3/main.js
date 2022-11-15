// 加载是同步的,多次引用(跨文件),内部代码只执行一次
// 深度优先

console.log('main');
require('./a')
require('./b')