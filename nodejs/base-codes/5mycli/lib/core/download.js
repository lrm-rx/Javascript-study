const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const downloadFn = function(url,project) {
  const spinner = ora().start()
  spinner.text = '下载中...'
  download('direct:' + url, project, {clone:true},(error)=>{
    if(!error){
      spinner.succeed(chalk.green('下载成功啦!'))
      console.log(chalk.green.bold('Done, you can run:'))
      console.log('cd ' + project)
      console.log('npm install or yarn ')
      console.log('npm run dev or yarn dev ')
    }else{
      spinner.fail(chalk.red('下载失败:' + error))
    }
  })
}

module.exports = downloadFn
