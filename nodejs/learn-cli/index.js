#!/usr/bin/env node

const program = require('commander')
const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

// 版本号
program.version(require('./package.json').version)

// 帮助 - 可选项
helpOptions()

// 创建指令
createCommands()


program.parse(process.argv)
