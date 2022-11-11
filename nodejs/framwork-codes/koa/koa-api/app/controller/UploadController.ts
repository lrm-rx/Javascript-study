
import { Context } from 'koa';
import response from '../../utils/response';
import fs from 'fs'
import path from 'path'
class UploadController {
  uploadFile(ctx: Context) {
    // 上传单个文件
    // @ts-ignore
    const file = ctx.request.files.file; // 获取上传文件
    // @ts-ignore
    console.log(ctx.request.files.file, file.path, file.name, file.type)
    // if (file) {
    //   // 创建可读流
    //   // @ts-ignore
    //   const reader = fs.createReadStream(file.path);
    //   // @ts-ignore
    //   let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
    //   // 创建可写流
    //   const upStream = fs.createWriteStream(filePath);
    //   // 可读流通过管道写入可写流
    //   reader.pipe(upStream);
    //   return ctx.body = "上传成功！";
    // } else {
    //   response.error(ctx, '文件不能为空!', {})
    // }
  }
}

export default new UploadController