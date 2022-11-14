const path = require('path')
const mime = require('mime')
const fs = require('fs')

function myReadFile(file, res) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        reject('空文件夹')
      } else {
        resolve(data)
      }
    })
  })
}

async function readStaticFile(filePathName) {
  let ext = path.parse(filePathName).ext
  let mimeType = mime.getType(ext) || 'text/html'
  let data
  // 文件是否在存
  if (fs.existsSync(filePathName)) {
    if (ext) { // 文件
    //  myReadFile(filePathName)
    //     .then(result => data = result)
    //     .catch((error) => data = error)
      data = await myReadFile(filePathName)
    } else { // 目录
      // myReadFile(path.join(filePathName, './index.html'))
      //   .then(result => data = result)
      //   .catch((error) => data = error)
      data = await myReadFile(path.join(filePathName, './index.html'))
    }
  } else {
    console.error('file not found!')
  }
  return {
    mimeType,
    data
  }
}

module.exports = readStaticFile