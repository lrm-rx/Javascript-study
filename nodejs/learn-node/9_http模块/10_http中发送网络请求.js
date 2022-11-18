const http = require('http')

// http发送get请求
// http.get('http://localhost:8081', (res) => {
//   res.setEncoding('utf-8')
//   res.on('data', (data) => {
//     console.log(data);
//   })
//   res.on('end', ()=>{
//     console.log('get获取到了所有的结果');
//   })
// })

// http发送post请求
const postReq = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8081
}, (res) => {
  res.setEncoding('utf-8')
  res.on('data', (data) => {
    console.log(data);
  })
  res.on('end', () => {
    console.log('post获取到了所有的结果');
  })
})

postReq.end()

