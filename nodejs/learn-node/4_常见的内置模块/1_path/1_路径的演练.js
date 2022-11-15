const basePath = 'user/lrm'
const filename = 'aaa.md'

// const path = basePath + '/' + filename

const path = require('path')

const filepath = path.resolve(basePath, filename)
console.log(filepath);