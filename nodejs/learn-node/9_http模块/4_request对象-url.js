const http = require('http')
const url = require('url')
const qs = require('querystring')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // request接收客户端传给服务器的所有信息
  
  // if(req.url === '/login'){
  //   res.end('登录')
  // }else if(req.url === '/user'){
  //   res.end('用户列表')
  // }else{
  //   res.end('page not found!')
  // }

  // /login?username=lrm&pw=123456
  // search: '?username=lrm&pw=123456',
  // query: 'username=lrm&pw=123456',
  // pathname: '/login',
  // path: '/login?username=lrm&pw=123456',
  // href: '/login?username=lrm&pw=123456'
  const {pathname, query} = url.parse(req.url)
  
  if(pathname === '/login'){
    const {username, pw} = qs.parse(query)
    console.log(username);
    console.log(pw);
  }
  res.end('aaa')
})

// 启动服务器,并且制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log('启动成功!');
})

const {Server} = require('http')

const app = new Server((req, res) => {
  
  let aa = new URL(req.url, 'http://localhost:8080')
  // console.log('url:', aa.searchParams);
  // 把键值对列表转换为一个对象
  const params = Object.fromEntries(aa.searchParams)
  console.log('ppp', params);
  res.end('index')
})



app.listen(8080, () => {
  console.log('服务器已经启动');
})