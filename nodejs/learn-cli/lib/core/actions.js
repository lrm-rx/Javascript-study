const { promisify } = require('util') // 可以将回调函数转换成promise的形式
const download = promisify(require('download-git-repo'))
const { vueReop } = require('./config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile, createDirSync } = require('../utils/utils')
const path = require('path')
const open = require('open')

// callback --> promisify(函数) --> Promise --> async/await
const createProjectAction = async (project) => {
  try {
    console.log('await........');
    // 1. clone项目 https://gitee.com/lrm-cn/vue-template project路径
    await download(vueReop, project, { clone: true })
    // 2. 执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], { cwd: `./${project}` })
    // 3. 运行npm run serve
    await commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })
    // 4. 打开浏览器
    open('http://localhost:8080')
    console.log('done........');
  } catch (error) {
    console.error(error);
  }
}

// 创建vue组件模板的action
const createComponentAction = async (name, dest) => {
  try {
    // 1. 编译ejs模板result
    const result = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() })
    // 2. 写入文件的操作
    const targetPath = path.resolve(dest, `${name}.vue`)
    writeToFile(targetPath, result)
  } catch (error) {
    console.error(error);
  }
}

// 添加page组件和路由
const createPageAction = async (name, dest) => {
  try {
    // 1. 编译ejs模板
    const pageResult = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() })
    const routeResult = await compile('vue-router.ejs', { name, lowerName: name.toLowerCase() })
    // 2. 创建并写入文件的操作
    const targetDest = path.resolve(dest, name.toLowerCase())
    if (createDirSync(targetDest)) {
      const pagePath = path.resolve(targetDest, `${name}.vue`)
      const routePath = path.resolve(targetDest, 'router.js')
      writeToFile(pagePath, pageResult)
      writeToFile(routePath, routeResult)
    }
  } catch (error) {
    console.error(error);
  }
}

const createStoreAction = async (name, dest) => {
  try {
    const storeResult = await compile('vuex-store.ejs', {})
    const stypeResult = await compile('vuex-types.ejs', {})
    // 2. 创建并写入文件的操作
    const targetDest = path.resolve(dest, name.toLowerCase())
    if (createDirSync(targetDest)) {
      const storePath = path.resolve(targetDest, `${name}.js`)
      const stypePath = path.resolve(targetDest, 'types.js')
      writeToFile(storePath, storeResult)
      writeToFile(stypePath, stypeResult)
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createProjectAction,
  createComponentAction,
  createPageAction,
  createStoreAction
}