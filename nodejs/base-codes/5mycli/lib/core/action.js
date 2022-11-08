const config = require('../../config')
const inquirer = require('inquirer')
const downloadFn = require('./download')
const myAction = async(project, args) => {
  // 命令行的执行逻辑代码
  // console.log(project);
  // console.log(args);

  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framwork', // 答案
      choices: config.framwork,
      message: '请选择你所使用的框架' // 问题
    }
  ])
  // 下载代码模块
  downloadFn(config.framworkUrl[answer.framwork], project)
}

module.exports = myAction