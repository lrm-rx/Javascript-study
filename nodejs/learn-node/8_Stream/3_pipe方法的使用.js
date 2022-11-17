const fs = require('fs')

// 传统的写法
// fs.readFile('./lpl.txt', (error, data) => {
//   fs.writeFile('./lck.txt', data, (err) => {
//     console.log(err);
//   })
// })

// Stream的写法
const reader = fs.createReadStream('./lpl.txt')
const writer = fs.createWriteStream('./lec.txt')

reader.pipe(writer)