const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFlie')
http.createServer(async(req, res) => {
  let urlStr = req.url
  let filePathName = path.join(__dirname,'./public', urlStr)
  let {mimeType, data} = await readStaticFile(filePathName, res)
  res.writeHead(200,{
    'content-type': `${mimeType}; charset=utf-8`
  })
  res.write(data)
  res.end()
}).listen(8080, () => {
  console.log('8080端口已经启动!');
})