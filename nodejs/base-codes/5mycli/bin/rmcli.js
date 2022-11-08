#! /usr/bin/env node
const {program} = require('commander')
const myhelp = require('../lib/core/help')
const mycommander = require('../lib/core/mycommander')

// console.log('rmcli');
// if(process.argv[2] === '--help') {
//   console.log('获取到了命令参数');
// }
myhelp(program) // help模块
mycommander(program)

program.parse(process.argv)