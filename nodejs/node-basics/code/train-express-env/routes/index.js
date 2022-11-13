var express = require('express');
var router = express.Router();
const logger = require('../utils/log')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data', (req, res)=>{
  logger.debug(req.body)
  res.send('ok')
})

module.exports = router;
