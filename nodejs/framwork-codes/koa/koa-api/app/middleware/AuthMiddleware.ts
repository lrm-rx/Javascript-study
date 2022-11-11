import { verify } from '../../utils/auth';
import { Context, Next } from 'koa';

function AuthMiddleware(ctx: Context, next: Next) {
  const token = ctx.headers['authorization']
  if (token !== undefined && token !== "") {
    const { error } = verify(token)
    if (error !== null) {
      ctx.body = {
        msg: '无效的token!!!',
        code: 400
      }
      return
    } else {
      return next()
    }
  }
  ctx.body = {
    msg: '无效的token',
    code: 400
  }
  return
}

export default AuthMiddleware