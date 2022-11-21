class UserService {
  async create(user) {
    // console.log('用户数据:', user);
    // 数据入库
    return user
  }
}

module.exports = new UserService()