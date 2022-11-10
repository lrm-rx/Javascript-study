import Koa from 'koa'
import router from './router'
import {Server} from 'http'
type portType = string | number
const app = new Koa()

app.use(router.routes())

const run = (port: portType):Server => {
  return app.listen(port, ()=>{
    console.log(`${port}端口已经启动!`);
  })
}

export default run