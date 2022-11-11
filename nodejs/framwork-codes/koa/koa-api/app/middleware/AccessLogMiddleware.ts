import {Context,Next} from "koa";
import { accessLogger } from "../logger";
const AccessLogMiddleware = (ctx: Context, next: Next) => {
  const logStr = `path: ${ctx.path} | method: ${ctx.method} | user-agent: ${ctx.header['user-agent']}`
  accessLogger.info(logStr)
  return next()
}

export default AccessLogMiddleware