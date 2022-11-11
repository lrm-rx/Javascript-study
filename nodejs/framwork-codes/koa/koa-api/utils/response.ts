import { Context } from 'koa';

function success(ctx: Context, data:any = [], msg: string = 'succss', code: number = 0) {
  ctx.body = {
    code,
    msg,
    data
  }
}

function error(ctx: Context, msg: string = 'error', data:any = [], code: number = 1) {
  ctx.body = {
    code,
    msg,
    data
  }
}

export default {
  success,
  error
}