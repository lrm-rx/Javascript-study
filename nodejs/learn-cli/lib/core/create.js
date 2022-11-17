const program = require('commander')
const { createProjectAction, createComponentAction, createPageAction, createStoreAction } = require('./actions')

const createCommands = () => {
  program
    .command('create <project> [other...]')
    .description('克隆模板文件')
    .action(createProjectAction)

  // 添加vue组件
  program
    .command('createcpn <name>')
    .description('创建一个新的vue组件模板')
    .action((name) => {
      createComponentAction(name, program.dest || 'src/components')
    })

  // 在添加page文件
  program
    .command('createpage <page>')
    .description('创建一个新的vue页面到page文件夹')
    .action((page) => {
      createPageAction(page, program.dest || 'src/pages')
    })

  // 创建store
  program
    .command('createstore <store>')
    .description('创建一个store')
    .action((store) => {
      createStoreAction(store, program.dest || 'src/store/modules')
    })
}

module.exports = createCommands