
import { Context } from 'koa';

class UploadController {
  uploadFile(ctx: Context) {
    console.log('ctx',ctx.req);
    ctx.response.body = '上传头像成功!'
  }
}

export default new UploadController