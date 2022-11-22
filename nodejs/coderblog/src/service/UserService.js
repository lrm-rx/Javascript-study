const connection = require('../app/database')
class UserService {
  async create(user) {
    const { username, password } = user
    const sql = `INSERT INTO sys_user (username, password) VALUES (?,?);`
    const result = await connection.execute(sql, [username, password])
    // 数据入库
    return result
  }
  async getUserByName(username) {
    const sql = `SELECT * FROM sys_user WHERE username = ?;`
    const result = await connection.execute(sql, [username])
    return result
  }
}

module.exports = new UserService()