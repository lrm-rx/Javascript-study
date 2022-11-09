const express = require('express')
const router = express.Router()

router.get('/list', (req, res, next)=>{
  console.log(req.method);
  JSON.parse('(')
  res.send('/video-list')
})

module.exports = router