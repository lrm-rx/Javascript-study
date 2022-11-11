import dotenv from 'dotenv'
dotenv.config() // 加载配置信息
import dbMain from './db'
import Koa from 'koa'
import router from './router'
import {Server} from 'http'
import koaBody from 'koa-body'
import AccessLogMiddleware from './middleware/AccessLogMiddleware'
dbMain()
type portType = string | number
const app = new Koa()

app
.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024,  //设置上传文件大小最大限制, 默认为2M
  }
}))
.use(AccessLogMiddleware)
.use(router.routes())

const run = (port: portType):Server => {
  return app.listen(port, ()=>{
    console.log(`${port}端口已经启动!`);
  })
}

export default run