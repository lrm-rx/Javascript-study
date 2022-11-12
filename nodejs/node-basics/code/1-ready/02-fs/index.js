const fs = require('fs')


fs.writeFile('./abc.txt', 'adc', (error, data)=>{
  if(error) throw error
  console.log('写入成功!');
})

