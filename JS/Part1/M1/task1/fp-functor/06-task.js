// task函子
const fs = require('fs')
const { task } = require('folktale/concurrency/task')
const { split, find } = require('lodash/fp')
function readFile(filename) {
  return task(resolver => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) resolver.reject(err)
      resolver.resolve(data)
    })
  })
}
readFile('04-io.js')
  .map(split('\n'))
  .map(find(x => x.includes('flowRight')))
  .run()
  .listen({
    onRejected: err => {
      console.log(err);
    },
    onResolved: value => {
      console.log(value);
    }
  })