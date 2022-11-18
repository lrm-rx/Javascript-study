const http = require('http')
const url = require('url')
const qs = require('querystring')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === '/login' && req.method === 'POST') {
    // 拿到body中的数据
    req.setEncoding('utf-8')
    req.on('data', (data) => {
      if (req.headers['content-type'] === 'application/json') {
        const userInfo = JSON.parse(data)
        // console.log(data.toString());
        // console.log(data); // 字符串
        console.log(userInfo);
      }
      if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        // data: username=lck&pw=123
        const userInfo = qs.parse(data)
        console.log(userInfo);
        console.log(userInfo.username);
      }


    })
    res.end('hello')
  }
})

server.listen(8888, '0.0.0.0', () => {
  console.log('启动成功!');
})