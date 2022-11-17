const msg = 'hi~hi~hi~'

// 创建Buffer
// 1. 方式一:
// const buffer = new Buffer(msg)

// 2. 方式二:
const buffer = Buffer.from(msg)

console.log(buffer);