const ejs = require('ejs')
const path = require('path')
const fs = require('fs')

const compile = (templateName, data) => {
  const templatePosition = `../template/${templateName}`
  const templatePath = path.resolve(__dirname, templatePosition)

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, {data}, {}, (error, result) => {
      if(error) {
        console.log(error);
        reject(error)
      }
      resolve(result)
    })
  })
}

// 创建文件夹
const createDirSync = (pathName) => {
  if(fs.existsSync(pathName)) {
    return true
  }
  if(createDirSync(path.dirname(pathName))) {
    fs.mkdirSync(pathName)
    return true
  }
}

// 写入
const writeToFile = (path,content) => {
  // 需要判断path是否在存, 如果不在存, 创建对应的文件夹(递归)
  return fs.promises.writeFile(path, content)
}

module.exports = {
  compile,
  writeToFile,
  createDirSync
}