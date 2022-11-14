const express = require('express')
// 路由中间件
const router = express.Router()
const { list } = require('../controller/index')
const { lists } = require('../controller/lists')

router.get('/lists', (req, res, next) => {
  lists(req, res, next)
})

// 获取数据
router.get('/userlist', (req, res, next) => {
  list(req, res, next)
  // const queryParams = req.query
  // console.log(queryParams);
  // // res.send(queryParams)
  // res.json(queryParams)
})

// 添加数据
router.post('/user', (req, res) => {
  const postParams = req.body
  console.log(postParams);
  // res.send(queryParams)
  res.json(postParams)
})

// 修改数据 - 覆盖式修改
router.put('/user', (req, res) => {
  const postParams = req.body
  console.log(postParams);
  // res.send(queryParams)
  res.json(postParams)
})

// 修改数据 - 选择性修改
router.patch('/user', (req, res) => {
  const postParams = req.body
  console.log(postParams);
  // res.send(queryParams)
  res.json(postParams)
})

// 删除数据
router.delete('/user/:id', (req, res) => {
  const postParams = req.body
  console.log(postParams);
  // res.send(queryParams)
  res.json(postParams)
})

module.exports = router