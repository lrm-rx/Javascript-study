const fs = require('fs')

module.exports = {
  index(res){
    fs.readFile('./index.html', 'utf8', (error, data)=>{
      res.write(data)
      res.end()
    })
  },
  user(postData, res){
    // 业务逻辑代码
    console.log('postData',postData)
  }
}