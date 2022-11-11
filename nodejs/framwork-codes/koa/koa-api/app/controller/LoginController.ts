import AdminService from "../service/AdminService"
import { sign } from "../../utils/auth"
import response from "../../utils/response"
import { Context } from 'koa';
import validate from './../../utils/validate';
import { Rules } from 'async-validator';

interface IAdmin {
  username: string,
  password: string
}

class LoginController {
  async index(ctx: Context) {
    const rules: Rules = {
      username: [
        {
          type: 'string',
          required: true,
          message: '用户名不能为空!'
        }
      ],
      password: [
        {
          type: 'string',
          required: true,
          message: '密码不能为空!'
        }
      ]
    }

    const {data,error} = await validate<IAdmin>(ctx, rules)
    console.log('error:',error)
    console.log('data:',data)
    if(error !== null) {
      return response.error(ctx,error)
    }
    const admin = await AdminService.getAdminByName(data.username)
    if(!admin) {
      return response.error(ctx, '用户不在存', {})
    }
    const token = sign(admin)
    response.success(ctx,{token})
  }
}

export default new LoginController