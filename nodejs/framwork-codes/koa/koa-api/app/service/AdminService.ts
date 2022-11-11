import Admin from "../model/Admin"

class AdminSerice {
  getAdminById(adminId:number) {
    return Admin.findByPk(adminId)
  }
  getAdminListBypage(page: number = 1,limit: number = 10) {
    return Admin.findAndCountAll({
      limit,
      offset: (page - 1) * limit
    })
  }
  getAdminByName(username: string) {
    return Admin.findOne({
      where: {
        username
      }
    })
  }
}

export default new AdminSerice