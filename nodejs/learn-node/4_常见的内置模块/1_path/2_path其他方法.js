// 1. 获取路径的信息
const path = require('path')

const filepath = '/user/lrm/a.md'

// console.log(path.dirname(filepath));
// console.log(path.basename(filepath));
// console.log(path.extname(filepath));

// 2. join路径拼接
const basePath = 'user/lrm'
const filename = 'path.md'
const filepath2 = path.join(basePath, filename)
console.log('path.join:', filepath2);

// 3. resolve路径拼接
// resolve会判断拼接的路径字符串中是否有以/或./或../开头的路径
const filepath3 = path.resolve(basePath, filename)
console.log('path.resolve:', filepath3);