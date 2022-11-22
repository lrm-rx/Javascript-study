const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const errorHander = require('../utils/error-handle')
const { useRoutes } = require('../router')

const app = new Koa()
app.useRoutes = useRoutes

app.use(bodyParser())
app.useRoutes()
app.on('error', errorHander)

module.exports = app


/**
 * 生成私钥: genrsa -out private.key 1024
 * 生成公钥: rsa -in private.key -pubout -out public.key
 */