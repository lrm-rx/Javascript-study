const template = require('art-template');
const path = require('path')
const fs = require('fs')
const listModel = require('../model/list')

const lists = (req, res, next) => {
  // let dataObj = {
  //   ret: true,
  //   data: []
  // }
  // for (let i = 0; i < 100; i++) {
  //   dataObj.data.push('line' + i)
  // }
  // res.send(dataObj)
  // 抽离到model中
  // let dataArray = []
  // for (let i = 0; i < 10; i++) {
  //   dataArray.push('line' + i)
  // }
  // res.set('content-type', 'application/json;charset=utf-8') // 或 res.header()
  // res.render('lists', {
  //   data: JSON.stringify(dataArray)
  // })
  // res.render('list-html', {
  //   data: dataArray
  // })

  // 直接转换成html静态资源
  const html = template(path.resolve(__dirname, '../view/list-html.art'), {
    data: listModel.dataArray
  });

  fs.writeFileSync(path.join(__dirname, '../public/list.html'), html)

  res.send('123')

}

exports.lists = lists