const template = require('art-template');
const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken');
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

const token = (req, res, next) => {
  // 对称加密
  // const tokenStr = jwt.sign({username: 'ming'},'d3ee88b9-2d3f-45e6-887d-112201b42264', { expiresIn: 60 * 60 * 24})
  // const decoded = jwt.verify(tokenStr, 'd3ee88b9-2d3f-45e6-887d-112201b42264');
  // console.log(decoded.username) // bar
  // res.send(decoded)

  // 非对称加密
  const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/rsa_private_key.pem'))
  const tokenStr = jwt.sign({username: 'ming'}, privateKey, { algorithm: 'RS256' })
  const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/rsa_public_key.pem'))
  const decoded = jwt.verify(tokenStr, publicKey);
  res.send(decoded)

}

exports.lists = lists
exports.token = token