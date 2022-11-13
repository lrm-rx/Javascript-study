const http = require('http')
const querystring = require('querystring')
const logger = require('../../utils/log')
const server = http.createServer((request, response)=>{
  const url = request.url
  let data = ''
  request.on('data', chunk=>{
    data += chunk
  })
  request.on('end', ()=>{
    response.writeHead(200, {
      // 'content-type': 'text/html'
      'content-type': 'application/json;charset=utf8'
    })
    logger.debug(data)
    // response.write('{name: "ming", age: 10}')
    // response.write('<div>hello</div>')
    // response.end('{name: "ming", age: 10}')
    // response.end(`{url: ${url}}`)
    response.write(JSON.stringify(querystring.parse(data)))
    response.end()
  })
})

server.listen(8080, ()=>{
  console.log('localhost:8080');
})