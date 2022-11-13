const fs = require('fs')
const zlib = require('zlib')

const gzip = zlib.createGzip()

const readStream = fs.createReadStream('./a.txt')
const writeStream = fs.createWriteStream('./a.gzip')

readStream
  .pipe(gzip)
  .pipe(writeStream)


// writeStream.write(readStream)