const http = require('http')
const url = require('url')
const { createProxyMiddleware } = require('http-proxy-middleware')

// https://mst.vip.com/dp/getDataPC (参数)
const server = http.createServer((req, res) => {
  let urlStr = req.url
  if (/\/getDataPC/.test(urlStr)) {
    const proxy = createProxyMiddleware('/getDataPC', {
      target: 'https://mst.vip.com/dp',
      changeOrigin: true
    })
    // 正向代理
    proxy(req, res)
  }else if(/\/api/.test(urlStr)){
    const proxy2 = createProxyMiddleware('/api', {
      target: 'https://m.lagou.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  } else {
    console.log('error');
  }
})

server.listen(8080, () => {
  console.log('localhost: 8080');
})