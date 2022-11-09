const express = require('express')
const router = express.Router()

router.use('/video', require('./video')) // 视频相关
router.use('/user', require('./user')) // 用户相关

module.exports = router