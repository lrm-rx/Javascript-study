const myaction = require('./action')
const mycommander = function(program){
  program
  .command('create <project> [other...]')
  .alias('crt') // 简写
  .description('创建项目') // 说明
  .action(myaction)
}

module.exports = mycommander