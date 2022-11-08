const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'username', // 答案
    message: '你的名字' // 问题
  }
]).then(answer=>{
  console.log(answer);
})