const fs = require('fs')
const mime = require('mime')
require('http')
  // .createServer((req, res) => {
  //   const urlString = req.url
  //   switch (urlString) {
  //     case '/':
  //       res.end('hello')
  //       break
  //     case '/home':
  //       fs.readFile('./index.html', 'utf-8', (error, content) => {
  //         if (error) throw error
  //         res.end(content)
  //       })
  //       break
  //     case '/app.js':
  //       fs.readFile('./app.js', 'utf-8', (error, content) => {
  //         if (error) throw error
  //         res.end(content)
  //       })
  //       break
  //     case '/xhh.jpg':
  //       fs.readFile('./xhh.jpg', (error, content) => {
  //         if (error) throw error
  //         res.end(content)
  //       })
  //       break
  //     default:
  //       res.end('page not found!')
  //   }
  // })
  .createServer((req, res) => {
    const urlString = req.url
    const splitArray = urlString.split('.')
    const type = mime.getType(splitArray[splitArray.length - 1])
    res.writeHead(200, {
      'content-type': type
    })
    const file = fs.readFileSync(`.${urlString}`)
    res.end(file)
  })
  .listen(8080, () => {
    console.log('localhost: 8080');
  })