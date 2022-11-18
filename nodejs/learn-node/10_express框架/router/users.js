const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json(['uzi', 'ming', 'xiaohu', 'mlxg', 'letme'])
})

router.get('/:id', (req, res, next) => {
  console.log(req.params);
  res.json(`${req.params.id}的用户信息`)
})

router.post('/', (req, res, next) => {
  res.json('添加用户信息成功!')
})

module.exports = router