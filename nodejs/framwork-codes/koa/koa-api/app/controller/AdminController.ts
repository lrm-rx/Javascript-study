import { Context } from "koa";
import { URLSearchParams } from "url";
import response from "../../utils/response";
import logger from "../logger";
import AdminService from "../service/AdminService";
import paginate from './../../utils/paginate';
class AdminController {
  async getAdminList(ctx: Context) {
    const sup = new URLSearchParams(ctx.querystring)
    // http://127.0.0.1:3000/admin/?page=1&limit=10
    // { 'page' => '1', 'limit' => '10' }
    let page = 1, limit = 10
    if (sup.get('page') !== null && !isNaN(Number(sup.get('page')))) {
      page = Number(sup.get('page'))
    }
    if (sup.get('limit') !== null && !isNaN(Number(sup.get('page')))) {
      limit = Number(sup.get('limit'))
    }
    const { rows, count } = await AdminService.getAdminListBypage(page, limit)
    response.success(ctx, paginate(rows, page, count, limit))
  }
}

export default new AdminController