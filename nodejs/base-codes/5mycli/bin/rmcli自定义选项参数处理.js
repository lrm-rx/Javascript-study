#! /usr/bin/env node
const {program} = require('commander')
// console.log('rmcli');
// if(process.argv[2] === '--help') {
//   console.log('获取到了命令参数');
// }
program.option('-f --framwork <framwork>', '设置框架') // 必选
program
.command('create <project> [other...]')
.alias('crt') // 简写
.description('创建项目') // 说明
.action((project,args)=>{
  // 命令行的执行逻辑代码
  console.log(project);
  console.log(args);
})

program.parse(process.argv)