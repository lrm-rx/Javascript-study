const express = require('express')
const app = express()
const router = require('./router/index')
const path = require('path')
const bodyParser = require('body-parser')
// post请求必须添加传参方式 可以使用 body-parser / connect-multiparty 中间件
app.use(express.urlencoded({extended: false})) // x-www-form-urlencoded
app.use(express.json()) // raw  - json
// 必须放在路由之前
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// 静态资源服务中间件,为内置中间件
app.use(express.static('public'))

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    escape: false // 转化html代码
});
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'art');

app.use(router)

app.listen(8080, () => {
  console.log('8080启动');
})