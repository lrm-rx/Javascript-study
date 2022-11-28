const fs = require('fs')
const path = require('path')

// 写日志
function writeLog(writeStream, log) {
  writeStream.write(log + '\n')
}

// 生成write Stream
function createWS(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a',
    encoding: 'utf-8',
  })
  return writeStream
}

// 写访问日志
const accessWriteStream = createWS('access.log')
function access(log) {
  writeLog(accessWriteStream, log)
}
// 写error日志
const errorWriteStream = createWS('error.log')
function error(log) {
  writeLog(errorWriteStream, log)
}
// 写event日志
const eventWriteStream = createWS('event.log')
function event(log) {
  writeLog(eventWriteStream, log)
}
 module.exports = {
  access,
  error,
  event
 }