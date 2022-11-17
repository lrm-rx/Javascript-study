const msg = '哈哈哈'

// // 对中文进行编码
// const buffer = Buffer.from(msg, 'utf8')
// // 对字节进行解码
// console.log(buffer.toString()); // 默认为utf8

const buffer = Buffer.from(msg, 'utf16le')
console.log(buffer);
console.log(buffer.toString('utf16le'));