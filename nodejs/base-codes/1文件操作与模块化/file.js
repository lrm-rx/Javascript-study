const fs = require('fs')

fs.readFile('./a.txt', 'utf8', (error, data)=>{
  if(!error){
    let newData = data + '9999'
    fs.writeFile('./a.txt', newData, (error)=>{
      if(!error){
        console.log('追加内容成功!');
      }
    })
  }
})