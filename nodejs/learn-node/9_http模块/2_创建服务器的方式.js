const http = require('http')

const server1 = http.createServer((req, res) => {
  res.end('server1')
})

server1.listen(8080, '127.0.0.1', () => {
  console.log('server1启动成功!');
})
// 方式一:
// const server2 = http.createServer((req, res) => {
//   res.end('server2')
// })

// 方式二:
const server2 = new http.Server((req, res) => {
  res.end('server2')
})

server2.listen(8081, '127.0.0.1', () => {
  console.log('server2启动成功!');
})

// 监听方法的使用
const server3 = new http.Server((req, res) => {
  console.log('server3');
})

server3.listen(8083, '0.0.0.0', () => {
  console.log('server3启动成功!');
  console.log(server3.address().port);
})

