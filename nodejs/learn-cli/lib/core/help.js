const program = require('commander')
const helpOptions = () => {
  // 增加自己的options
  program.option('-l --lwx', 'a lwx-cli')

  program.option('-d --dest <dest>', 'a destination folder, for example: -d /src/components')
  program.option('-f --framework <framework>', 'your framework')

  program.on('--help', function () {
    console.log('');
    console.log('Other:');
    console.log(' other options');
  })
}

module.exports = helpOptions